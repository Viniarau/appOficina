import React, { useContext, useEffect } from 'react';
import { Container, Button, TextError, TextInput, ButtonText } from './style';
import { AppContext } from '../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    CpfAssociado: Yup.string().required('Campo obrigatório'),
    EmailAssociado: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    NomeAssociado: Yup.string().required('Campo obrigatório'),
    TelefoneAssociado: Yup.string().required('Campo obrigatório'),
    PlacaVeiculoAssociado: Yup.string().required('Campo obrigatório'),
    NomeAmigo: Yup.string().required('Campo obrigatório'),
    TelefoneAmigo: Yup.string().required('Campo obrigatório'),
    EmailAmigo: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  });

const initialValues = {
    CpfAssociado: '',
    EmailAssociado: '',
    NomeAssociado: '',
    TelefoneAssociado: '',
    PlacaVeiculoAssociado: '',
    NomeAmigo: '',
    TelefoneAmigo: '',
    EmailAmigo: '',
  };

const Indication: React.FC = () => {
    const { getWorkshop, dataWorkshop } = useContext(AppContext);
    const navigation = useNavigation();

    const handleSubmit = (values: any) => {
        console.log(values);
        navigation.navigate('Home');
      };
    
    useEffect(() => {
        
      }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Container>
                <TextInput
                    placeholder="CPF do Associado"
                    onChangeText={handleChange('CpfAssociado')}
                    onBlur={handleBlur('CpfAssociado')}
                    value={values.CpfAssociado}
                />
                {touched.CpfAssociado && errors.CpfAssociado && (
                    <TextError>{errors.CpfAssociado}</TextError>
                )}

                <TextInput
                    placeholder="E-mail do Associado"
                    onChangeText={handleChange('EmailAssociado')}
                    onBlur={handleBlur('EmailAssociado')}
                    value={values.EmailAssociado}
                />
                {touched.EmailAssociado && errors.EmailAssociado && (
                    <TextError>{errors.EmailAssociado}</TextError>
                )}

                <TextInput
                    placeholder="Nome do Associado"
                    onChangeText={handleChange('NomeAssociado')}
                    onBlur={handleBlur('NomeAssociado')}
                    value={values.NomeAssociado}
                />
                {touched.NomeAssociado && errors.NomeAssociado && (
                    <TextError>{errors.NomeAssociado}</TextError>
                )}

                <TextInput
                    placeholder="Telefone do Associado"
                    onChangeText={handleChange('TelefoneAssociado')}
                    onBlur={handleBlur('TelefoneAssociado')}
                    value={values.TelefoneAssociado}
                    />
                    {touched.TelefoneAssociado && errors.TelefoneAssociado && (
                    <TextError>{errors.TelefoneAssociado}</TextError>
                    )}

                    <TextInput
                        placeholder="Placa do Veículo do Associado"
                        onChangeText={handleChange('PlacaVeiculoAssociado')}
                        onBlur={handleBlur('PlacaVeiculoAssociado')}
                        value={values.PlacaVeiculoAssociado}
                    />
                    {touched.PlacaVeiculoAssociado && errors.PlacaVeiculoAssociado && (
                        <TextError>{errors.PlacaVeiculoAssociado}</TextError>
                    )}

                    <TextInput
                        placeholder="Nome do Amigo"
                        onChangeText={handleChange('NomeAmigo')}
                        onBlur={handleBlur('NomeAmigo')}
                        value={values.NomeAmigo}
                    />
                    {touched.NomeAmigo && errors.NomeAmigo && (
                        <TextError>{errors.NomeAmigo}</TextError>
                    )}

                    <TextInput
                        placeholder="Telefone do Amigo"
                        onChangeText={handleChange('TelefoneAmigo')}
                        onBlur={handleBlur('TelefoneAmigo')}
                        value={values.TelefoneAmigo}
                    />
                    {touched.TelefoneAmigo && errors.TelefoneAmigo && (
                        <TextError>{errors.TelefoneAmigo}</TextError>
                    )}

                    <TextInput
                        placeholder="E-mail do Amigo"
                        onChangeText={handleChange('EmailAmigo')}
                        onBlur={handleBlur('EmailAmigo')}
                        value={values.EmailAmigo}
                    />
                    {touched.EmailAmigo && errors.EmailAmigo && (
                        <TextError>{errors.EmailAmigo}</TextError>
                    )}

                <Button onPress={handleSubmit}>
                    <ButtonText>Enviar</ButtonText>
                </Button>
            </Container>
            )}
        </Formik>
    )
}

export default Indication;
