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
  height: 455px;

  & > img {
    margin-bottom: auto;
    user-select: none;
  }
`;

export const FormError = styled.p`
  margin: 15px 0;
  font-size: 15px;
  text-align: center;
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  user-select: none;
`;

export const FormContainer = styled.form`
  width: 344px;

  ${FormTitle} {
    margin-bottom: 25px;
  }

  ${InputGroupList} {
    margin-bottom: 15px;
  }
`;
