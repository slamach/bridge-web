import styled from 'styled-components';

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
`;

export default Divider;
