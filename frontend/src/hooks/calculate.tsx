import axios from 'axios';
import React, { createContext, ReactNode, useContext, useState } from 'react'

const calculateContext = createContext<{plans: any[], loading: boolean, getCalculation: (data: CalculateData) => void }>({plans: [], loading: false, getCalculation: () => {} });

export const ProvideCalculate = ({ children }: { children: ReactNode}) => {
  const calculate = useProvideCalculate();
  return (
    <calculateContext.Provider value={calculate}>
      {children}
    </calculateContext.Provider>
  );
}

export const useCalculate = () => {
  return useContext(calculateContext);
}

export interface CalculateData { carName: string, userAge: string, price: string};


export const useProvideCalculate = () => {
  const [isLoading, setIsLoading] = useState('init')
  const [plans, setPlans] = useState<any[]>([])

  const getCalculation:any = (data:CalculateData):void => {
    setIsLoading('loading');
    axios.post(process.env.REACT_APP_APIURL + '/simulation/calculate', data).then((plansRes) => {
      setIsLoading('done');
      setPlans(plansRes.data);
    });
  }

  return {plans, loading: isLoading === 'done', getCalculation};
}


