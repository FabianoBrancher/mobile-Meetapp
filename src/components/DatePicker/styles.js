import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const DateButton = styled.TouchableOpacity`
  height: 35px;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const DateText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
