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

export default function Meetup({ meetup, handleSubscription }) {
  function handleSubscribe(id) {
    handleSubscription(id);
  }

  return (
    <Container>
      <Banner
        source={{ uri: meetup.banner ? meetup.banner.url : defaultBanner }}
      />
      <Details>
        <Title> {meetup.title} </Title>
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
        <SubscribeButton onPress={() => handleSubscribe(meetup.id)}>
          Realizar inscrição
        </SubscribeButton>
      </Details>
    </Container>
  );
}
