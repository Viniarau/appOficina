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
    ContainerRow,
} from './style';
import { AppContext } from '../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <ContainerRow>
                    <Icon name="map-marker" size={20} color="red" />
                    <TextDescription>
                        {data.Endereco}
                    </TextDescription>
                </ContainerRow>
                <ContainerRow>
                    <Icon name="whatsapp" size={20} color="green" />
                    <TextDescription>
                        {data.Telefone1}
                    </TextDescription>
                </ContainerRow>
            </ContainerText>
            <ContainerImage>
                <ImageWorkshop source={require(`../../assets/image/default.png`)} resizeMode="contain" />
            </ContainerImage>
        </ContainerCard>
    </Card>
    )
};

export default CardWorkshop;