import React, { useContext } from 'react';
import {
    Card,
    ContainerImage,
    ContainerCard,
    TextTitle,
    TextSubTitle,
    TextDescription,
    ImageWorkshop,
    ContainerText,
} from './style';
import { AppContext } from '../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';

export type DataProps = {
    data: any;
  };

const CardWorkshop = ({data}: DataProps) => {
    const {setDataWorkshopSelected} = useContext(AppContext);
    const navigation = useNavigation();

    const navigationDetails = async () => {
        await setDataWorkshopSelected(data)
        navigation.navigate('Details')
    }

    return (
    <Card onPress={() => navigationDetails()} activeOpacity={0.9}>
        <TextTitle>
            {data.Nome}
        </TextTitle>
        <ContainerCard>
            <ContainerText>
                <TextSubTitle>
                    {data.DescricaoCurta}
                </TextSubTitle>
                <TextDescription>
                    {data.Endereco}
                </TextDescription>
                <TextDescription>
                    {data.Telefone1}
                </TextDescription>
            </ContainerText>
            <ContainerImage>
                <ImageWorkshop source={require('../../assets/image/oficinaimagem.jpg')} resizeMode="contain" />
            </ContainerImage>
        </ContainerCard>
    </Card>
    )
};

export default CardWorkshop;