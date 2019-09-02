import styled from 'styled-components/native';

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
