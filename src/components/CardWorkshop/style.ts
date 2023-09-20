import styled from 'styled-components/native';
import { COLORS } from '../../constants'

export const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100%;
    margin-top: 10px;
    margin-vertical: 5px;
    borderRadius: 8px;
    border: 0.4px solid ${COLORS.primary};
    backgroundColor: ${COLORS.secondary};
    shadow-color: ${COLORS.black};
    shadow-offset: 10px 10px;
    shadow-opacity: 0.3;
    shadow-radius: 10px;
    elevation: 3;
`;

export const ContainerCard = styled.View`
    flex: 1;
    padding: 10px;
    alignItems: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const ContainerText = styled.View`
    flex: 2;
    height: 100%;
    padding: 5px;
    justify-content: space-around;
`;

export const ContainerImage = styled.View`
    flex: 1;
    padding: 5px;
    alignItems: center;
    justify-content: center;
`;

export const ContainerRow = styled.View`
    flex: 1;
    flex-direction: row;
    alignItems: center;
`;

export const TextTitle = styled.Text`  
    fontSize: 26px;
    text-align: center;
    lineHeight: 30px;
    fontWeight: 800; 
    color: ${COLORS.primary};
    padding-top: 10px;
`;

export const TextSubTitle = styled.Text`  
    fontSize: 20px;
    text-align: center;
    lineHeight: 20px; 
    fontWeight: 500; 
    color: ${COLORS.white};
    padding-right: 10px;
`;

export const TextDescription = styled.Text`  
    fontSize: 16px;
    lineHeight: 20px; 
    color: ${COLORS.white};
    text-align: left;
    padding-left: 10px;
`;

export const ImageWorkshop = styled.Image`
  width: 100%;
  height: 80%;
  border-radius: 20px;
`;
