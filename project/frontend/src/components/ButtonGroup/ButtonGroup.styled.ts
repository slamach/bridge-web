import styled from 'styled-components';

export const ButtonGroupList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;
