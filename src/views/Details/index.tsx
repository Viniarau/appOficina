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
} from './style';

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
            {arrayServicosPrestados && arrayServicosPrestados.map((item, index) => (
                <TextDescription key={index}>
                    {item}
                </TextDescription>
            ))}
            <TextSubTitleBackground>
                {'CONTATOS'}
            </TextSubTitleBackground>
            <TextDescription>
                {dataWorkshopSelected.Telefone1}
            </TextDescription>
            <TextDescription>
                {dataWorkshopSelected.Email}
            </TextDescription>
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