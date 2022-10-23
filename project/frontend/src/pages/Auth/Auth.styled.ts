import styled from 'styled-components';
import { InputGroupList } from '../../components/InputGroup/InputGroup.styled';

export const AuthContainer = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 440px;

  & > img {
    margin-bottom: auto;
  }
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const FormContainer = styled.div`
  width: 344px;

  ${FormTitle} {
    margin-bottom: 25px;
  }

  ${InputGroupList} {
    margin-bottom: 16px;
  }
`;
