import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  subscriptionSuccess,
  subscriptionCancelSuccess,
  subscriptionFailure,
} from './actions';

export function* subscribe({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.post, `meetups/${id}/subscription`);

    Alert.alert('Sucesso', 'Você agora está inscrito neste meetup');

    yield put(subscriptionSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro', `${err.response.data.error}`);

    yield put(subscriptionFailure());
  }
}

export function* unsubscribe({ payload }) {
  try {
    const { id } = payload;
    yield api.delete(`/subscriptions/${id}`);

    Alert.alert('Sucesso', 'Meetup cancelado com sucesso');

    yield put(subscriptionCancelSuccess());
  } catch (err) {
    Alert.alert('Erro', `${err.response.data.error}`);

    yield put(subscriptionFailure());
  }
}

export default all([
  takeLatest('@subscription/SUBSCRIPTION_REQUEST', subscribe),
  takeLatest('@subscription/SUBSCRIPTION_CANCEL_REQUEST', unsubscribe),
]);
