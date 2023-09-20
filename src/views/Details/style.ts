import styled from 'styled-components/native';
import { COLORS } from '../../constants'

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${COLORS.white};
`;

export const ContainerCard = styled.View`
    flex: 4;
    height: 100%;
    padding-horizontal: 15px;
    alignItems: center;
    justify-content: space-around;
`;

export const ContainerImage = styled.View`
    flex: 1;
    padding: 10px;
    alignItems: center;
    justify-content: center;
`;

export const ContainerRow = styled.View`
    flex: 1;
    flex-direction: row;
    alignItems: center;
    justify-content: center;
`;

export const ContainerInfo = styled.View`
    flex: 1;
    padding: 10px;
    height: 300px;
    flex-direction: row;
`;

export const ContainerColumnInfo = styled.View`
    flex: 2;
    padding: 5px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border: 4px solid ${COLORS.primary};
    background-color: ${COLORS.primary};
    border-radius: 10px;
`;

export const ContainerRowInfo = styled.View`
    flex: 1;
    padding: 10px;
    flex-direction: row;
    align-content: center;
    align-items: center;
`;

export const ButtonIndication = styled.TouchableOpacity`
    flex: 1;
    height: 60px;
    width: 80%;
    padding: 5px;
    align-content: center;
    align-items: center;
    border-radius: 20px;
    border: 4px solid ${COLORS.secondary};
    background-color: ${COLORS.secondary};
    margin-vertical: 15px;
`;

export const TextTitle = styled.Text`  
    fontSize: 22px;
    text-align: center;
    lineHeight: 20px;
    fontWeight: 800; 
    color: ${COLORS.primary};
    padding-vertical: 10px;
`;

export const TextTitleBackground = styled.Text`
    width: 150%;  
    fontSize: 22px;
    text-align: center;
    lineHeight: 20px;
    fontWeight: 800; 
    color: ${COLORS.white};
    padding-vertical: 10px;
    background-color: ${COLORS.secondary};
    padding-vertical: 10px;
`;

export const TextSubTitle = styled.Text`  
    fontSize: 18px;
    text-align: center;
    lineHeight: 20px; 
    fontWeight: 500; 
    color: ${COLORS.black};
    padding-vertical: 10px;
`;

export const TextSubTitleBackground = styled.Text` 
    width: 150%;
    fontSize: 18px;
    text-align: center;
    lineHeight: 20px; 
    fontWeight: 500; 
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
    padding-vertical: 10px;
    margin-top: 10px;
`;

export const TextSubTitleInfo = styled.Text`  
    fontSize: 16px;
    text-align: center;
    lineHeight: 20px; 
    fontWeight: 800; 
    color: ${COLORS.white};
    padding-right: 2px;
`;

export const TextDescription = styled.Text`  
    fontSize: 18px;
    lineHeight: 25px; 
    color: ${COLORS.black};
    padding-vertical: 10px;
    text-align: justify;
`;

export const TextDescriptionContact = styled.Text`  
    fontSize: 18px;
    lineHeight: 25px; 
    color: ${COLORS.black};
    padding-vertical: 10px;
    padding-left: 10px;
`;

export const TextDescriptionClick = styled.Text`  
    fontSize: 20px;
    lineHeight: 25px; 
    color: ${COLORS.white};
    padding-vertical: 10px;
    text-align: justify;
    fontWeight: 800;
`;

export const TextDescriptionInfo = styled.Text`  
    fontSize: 16px;
    lineHeight: 20px; 
    color: ${COLORS.white};
    text-align: justify;
`;

export const ImageBeer = styled.Image`
  width: 100%;
  height: 100%;
`;

