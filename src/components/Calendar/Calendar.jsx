import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const CalendarContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: ${theme.colors.textSecondary};
  
  p {
    font-size: ${theme.fonts.sizes.sm};
  }
`;

function Calendar() {
  return (
    <CalendarContainer>
      <p>Календарь задач (компонент в разработке)</p>
    </CalendarContainer>
  );
}

export default Calendar;