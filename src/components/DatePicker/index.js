import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, DateButton, DateText } from './styles';

export default function DatePicker({ date, onChange }) {
  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}
