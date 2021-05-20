import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, Router } from "react-router-dom";
import styled from "styled-components";
import {useCalculate} from "../../hooks/calculate";
import Dropdown from "./Dropdown";

const Container = styled.div`
  max-width: 935px;
  width: 90%;
  height: min-content;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 60px;

  .submitButton {
    border-radius: 5px;
    border: solid 1px #31cfda;
    background-color: #31cfda;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    grid-column-start: 2;
    width: 163px;
    height: 50px;
  }
`;

const FormGrid = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 150px 324px;
  label {
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 15px;
    color: #484848;
  }
`;

const NumberInput = styled.input<{error?: boolean}>`
  width: 80px;
  height: 40px;
  margin: 0 10px 0 0;
  border-radius: 2px;
  border: solid 1px ${props => props.error ? '#ee3d57' : 'rgba(72, 72, 72, 0.2)'};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #484848;
  padding: 10px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #ee3d57;
  grid-column-start: 2;
  padding:0px;
`;


const CarContainer = () => {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      userAge: "",
      carValue: "",
    }
  });

  const [error, setError] = useState('');

  const { loading, getCalculation} =  useCalculate();
  const onSubmit = (data: any) => {
    if (customValidate() ) {
      setError('Sorry! We can not accept this particular risk');
      return;
    }
    getCalculation({...data, carName: selectedCar.name});
  };
  const [cars, setCars] = useState<any[]>([]);
  const [selectedCar, setSelectedCar] = useState({price: '', name: 'Select brand', percentage: ''})

  useEffect(() => {
    axios.get<any, any>(process.env.REACT_APP_APIURL + '/simulation/car').then((value) => setCars(value.data));
  }, [])

  const customValidate = () => {
    return Number(getValues().userAge) < 25 && selectedCar.name === 'PORSCHE'
  }

  return (
    <Container>
      { loading && (<Redirect to='/quote'/>)}
      <FormGrid onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userAge">Age of the driver</label>
        <NumberInput id="userAge" type="text" error={!!formState.errors.userAge} {...register("userAge", {min: 18})} />
        {!!formState.errors.userAge && <ErrorMessage>Sorry! The driver is too young</ErrorMessage>}
        <label htmlFor="car">Car</label>
        <Dropdown items={cars} item={selectedCar} setItem={setSelectedCar}></Dropdown>

        <label htmlFor="carValue">Purchase Price</label>
        <div>
          <NumberInput id="carValue" type="text"  error={!!formState.errors.carValue}{...register("carValue", {min: 4999})} />
          &euro;
        </div>
        {!!formState.errors.carValue &&  <ErrorMessage>Sorry! The price of the car is too low</ErrorMessage>}
        { error && <ErrorMessage>{error}</ErrorMessage>}

        <button className="submitButton" type="submit">Get a price</button>
      </FormGrid>
    </Container>
  );
};

export default CarContainer;
