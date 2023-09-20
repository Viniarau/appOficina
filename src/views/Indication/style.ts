import styled from 'styled-components/native';
import { COLORS } from '../../constants'

export const Container = styled.View`
    flex: 1;
    height: 100%;
    padding-vertical: 15px;
    padding-horizontal: 20px;
`;

export const TextInput = styled.TextInput`
    height: 50px;
    border: 1px solid ${COLORS.primary};
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;

export const TextError = styled.Text`
    color: red;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: #007bff;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

