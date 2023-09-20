import React, { useContext, useEffect } from 'react';
import { Container } from './style';
import { AppContext } from '../../contexts/AppContext';
import CardWorkshop from '../../components/CardWorkshop';
import { WORKSHOP_MOCK } from '../../constants'

const Home: React.FC = () => {
    const { getWorkshop, dataWorkshop } = useContext(AppContext);

    
    useEffect(() => {
        getWorkshop()
      }, []);

    return (
        <Container>
            {dataWorkshop ? 
                dataWorkshop.map((item: any, index: React.Key | null | undefined) => (
                    <CardWorkshop data={item} key={index} />
                )) : 
                WORKSHOP_MOCK.map((item: any, index: React.Key | null | undefined) => (
                    <CardWorkshop data={item} key={index} />
                ))}
        </Container>
    )
}

export default Home;