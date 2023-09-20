import React, { useContext, useEffect, useState } from 'react';
import { 
    Container,
    ContainerCard,
    ContainerInfo,
    TextTitle,
    TextTitleBackground,
    TextSubTitle,
    TextSubTitleBackground,
    TextSubTitleInfo,
    TextDescription,
    TextDescriptionInfo,
    ContainerColumnInfo, 
    ContainerRowInfo,
    TextDescriptionClick,
    ButtonIndication,
    ContainerRow,
    TextDescriptionContact,
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';

const Details: React.FC = () => {
    const { dataWorkshopSelected } = useContext(AppContext);
    const navigation = useNavigation();
    
    let newDescricao = ''
    let servicosPrestados = ''
    let arrayServicosPrestados: string[] | void[] = []

    const posicaoServicosPrestados = dataWorkshopSelected.Descricao.indexOf("Serviços prestados");

    if (posicaoServicosPrestados !== -1) {
        newDescricao = dataWorkshopSelected.Descricao.substring(0, posicaoServicosPrestados);
        servicosPrestados = dataWorkshopSelected.Descricao.substring(posicaoServicosPrestados + "Serviços prestados. ".length);
        arrayServicosPrestados = servicosPrestados.split("\\n-");
        arrayServicosPrestados.shift();
    }

    const navigationIndication = async () => {
        navigation.navigate('Indication')
    }

    return (
    <Container>
        <ContainerCard>
            <TextTitleBackground>
                {dataWorkshopSelected.Nome}
            </TextTitleBackground>
            <TextSubTitle>
                {dataWorkshopSelected.DescricaoCurta}
            </TextSubTitle>
            <TextDescription>
                {newDescricao}
            </TextDescription>
        </ContainerCard>
        <ContainerCard>
            <TextSubTitleBackground>
                {'SERVIÇOS PRESTADOS'}
            </TextSubTitleBackground>
            {arrayServicosPrestados && arrayServicosPrestados.map((item: any, index: any) => (
                <TextDescription key={index}>
                    {item}
                </TextDescription>
            ))}
            <TextSubTitleBackground>
                {'CONTATOS'}
            </TextSubTitleBackground>
            <ContainerRow>
                <Icon name="whatsapp" size={20} color="green" />
                <TextDescriptionContact>
                    {dataWorkshopSelected.Telefone1}
                </TextDescriptionContact>
            </ContainerRow>
            <ContainerRow>
                <Icon name="envelope" size={20} color="black" />
                <TextDescriptionContact>
                    {dataWorkshopSelected.Email}
                </TextDescriptionContact>
            </ContainerRow>
            <TextSubTitleBackground>
                {'INDICAÇÃO'}
            </TextSubTitleBackground>
            <ButtonIndication onPress={() => navigationIndication()} activeOpacity={0.9}>
                <TextDescriptionClick>
                    {'Enviar solicitação de indicação'}
                </TextDescriptionClick>
            </ButtonIndication>
        </ContainerCard>
    </Container>
    )
}

export default Details;