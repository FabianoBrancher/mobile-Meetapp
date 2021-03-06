import React from 'react';
import { Text } from 'react-native';

import defaultBanner from '~/assets/banner.png';

import {
  Container,
  Banner,
  Title,
  Details,
  Date,
  Location,
  Icon,
  Owner,
  SubscribeButton,
} from './styles';

export default function Meetup({
  meetup,
  idMeetup,
  handleSubscription,
  handleCancelSubscription,
}) {
  function handleSubscribe(id) {
    handleSubscription(id);
  }

  function handleUnsubscribe(id) {
    console.tron.log(id);
    handleCancelSubscription(id);
  }

  return (
    <Container>
      <Banner
        source={{ uri: meetup.banner ? meetup.banner.url : defaultBanner }}
      />
      <Details>
        <Title>{meetup.title}</Title>
        <Date>
          <Icon name="event" size={15} color="#999" />
          <Text>{meetup.dateFormatted}</Text>
        </Date>
        <Location>
          <Icon name="place" size={15} color="#999" />
          <Text>{meetup.location}</Text>
        </Location>
        <Owner>
          <Icon name="person" size={15} color="#999" />
          <Text>Organizador: {meetup.owner.name}</Text>
        </Owner>
        {handleSubscription ? (
          <SubscribeButton onPress={() => handleSubscribe(meetup.id)}>
            Realizar inscrição
          </SubscribeButton>
        ) : (
          <SubscribeButton onPress={() => handleUnsubscribe(idMeetup)}>
            Cancelar inscrição
          </SubscribeButton>
        )}
      </Details>
    </Container>
  );
}
