import styled from 'styled-components';

export const InputGroupList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 4px;
  }

  li:first-child input {
    border-radius: 14px 14px 0 0;
  }

  li:last-child input {
    margin-bottom: 0;
    border-radius: 0 0 14px 14px;
  }
`;
