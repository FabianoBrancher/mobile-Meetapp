import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, MeetupList, EmptyContainer, EmptyText } from './styles';

import { subscriptionCancelRequest } from '~/store/modules/subscription/actions';

export default function Subscription() {
  const dispatch = useDispatch();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('/subscriptions');

      const data = response.data.map(subscription => ({
        ...subscription,
        dateFormatted: formatRelative(
          parseISO(subscription.Meetup.date),
          new Date(),
          {
            locale: pt,
            addPrefix: true,
          },
        ),
      }));

      setSubscriptions(data);
    }

    loadSubscriptions();
  }, []);

  function handleCancelSubscription(id) {
    dispatch(subscriptionCancelRequest(id));
  }

  return (
    <Background>
      <Header />
      <Container>
        {subscriptions && subscriptions.length > 0 ? (
          <MeetupList
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                meetup={item.Meetup}
                idMeetup={item.id}
                handleCancelSubscription={handleCancelSubscription}
              />
            )}
          />
        ) : (
          <EmptyContainer>
            <EmptyText>Você não se inscreveu em nenhuma Meetup.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
  fontSize: 20,
};
