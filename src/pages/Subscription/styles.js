import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 0 20px;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 0;
`;

export const EmptyContainer = styled.View`
  justify-content: flex-start;
  flex: 1;
  padding: 0 20px;
  margin-top: 20px;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Meetup = styled.View`
  background: #fff;
  border-radius: 4px;
  height: 345px;
  margin-top: 30px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Details = styled.View`
  padding: 0 30px;
  font-weight: normal;
  font-size: 13px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Owner = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Icon = styled(Icons)`
  margin-right: 5px;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 5px;
  height: 40px;
`;
