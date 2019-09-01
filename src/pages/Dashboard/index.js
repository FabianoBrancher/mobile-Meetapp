import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, formatRelative, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { RectButton } from 'react-native-gesture-handler';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import DatePicker from '~/components/DatePicker';

import { subscriptionRequest } from '~/store/modules/subscription/actions';

import {
  Container,
  MeetupList,
  DateContainer,
  EmptyContainer,
  EmptyText,
} from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups', {
        params: {
          date,
          page,
        },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: formatRelative(parseISO(meetup.date), new Date(), {
          locale: pt,
          addPrefix: true,
        }),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, [date, page]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleSubscription(id) {
    dispatch(subscriptionRequest(id));
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateContainer>
          <RectButton onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="white" />
          </RectButton>
          <DatePicker date={date} onChange={setDate} />
          <RectButton onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="white" />
          </RectButton>
        </DateContainer>
        {meetups && meetups.length > 0 ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup meetup={item} handleSubscription={handleSubscription} />
            )}
          />
        ) : (
          <EmptyContainer>
            <EmptyText>Não há meetups cadastradas para este dia.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
  fontSize: 20,
};
