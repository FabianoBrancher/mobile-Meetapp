import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  subscriptionSuccess,
  subscriptionCancelSuccess,
  subscriptionFailure,
} from './actions';

import api from '~/services/api';

export function* subscribe({ payload }) {
  try {
    const { id } = payload;
    yield call(api.post, `meetups/${id}/subscription`);

    Alert.alert('Sucesso', 'Você agora está inscrito neste meetup');

    yield put(subscriptionSuccess());
  } catch (err) {
    Alert.alert('Erro', `${err.response.data.error}`);

    yield put(subscriptionFailure());
  }
}

export function* unsubscribe({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `meetups/${id}/unsubscribe`);

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
