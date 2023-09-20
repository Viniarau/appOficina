import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AppContext = createContext<any>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataWorkshop, setDataWorkshop] = useState<object>();
  const [dataWorkshopSelected, setDataWorkshopSelected] = useState<object>();

  const getWorkshop = async () => {
    setIsLoading(true);
    let urlString = 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi' + `/Api/Oficina`;
    
    try {
      const response = await api.get(urlString);
      setDataWorkshop(response.data);
    } catch (error) {
      console.error('Erro ao buscar oficinas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        dataWorkshop,
        setDataWorkshop,
        dataWorkshopSelected,
        setDataWorkshopSelected,
        getWorkshop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
