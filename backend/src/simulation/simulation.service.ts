import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class SimulationService {
  private cars = [
    { name: 'BMW', price: '150', percentage: 0.4 },
    { name: 'AUDI', price: '250', percentage: 0.3 },
    { name: 'PORSCHE', price: '500', percentage: 0.7 },
  ];
  private plans = [
    {
      groupName: 'planSelection',
      name: 'global',
      title: 'Global',
      price: { yearly: '', monthly: '' },
      features: {
        maxDuration: '90',
        medicalReimbursement: '1.000.000',
        personalAssistance: '5.000',
        travelInsurance: '1.000',
        coverageDuration: '1',
      },
    },
    {
      groupName: 'planSelection',
      name: 'universe',
      title: 'Universe',
      price: { yearly: '', monthly: '' },
      features: {
        maxDuration: '180',
        medicalReimbursement: '3.000.000',
        personalAssistance: '10.000',
        travelInsurance: '2.500',
        coverageDuration: '1',
      },
    },
  ];

  public getCars() {
    return this.cars;
  }

  public calculate({ userAge, carName, carValue }) {
    // Error check
    if (Number(carValue) < 5000) {
      throw new HttpException(
        'Sorry! The price of the car is too low',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (Number(userAge) < 18) {
      throw new HttpException(
        'Sorry! The driver is too young',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (carName === 'PORSCHE' && Number(userAge) < 25) {
      throw new HttpException(
        'Sorry! We can not accept this particular risk',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const priceIndex = this.cars.findIndex(
      (car) => carName.toUpperCase() === car.name.toUpperCase(),
    );
    const price = this.cars[priceIndex].price;
    const carPercentage = this.cars[priceIndex].percentage;
    const plansWithPrices = this.plans.map((plan) => {
      if (plan.name === 'global') {
        plan.price.yearly = price;
        plan.price.monthly = (Number(price) / 12).toString();
      } else {
        plan.price.yearly = (
          Number(price) +
          (Number(carValue) * carPercentage) / 100
        ).toString();
        plan.price.monthly = (
          Number(Number(price) + (Number(carValue) * carPercentage) / 100) / 12
        ).toString();
      }
      return plan;
    });

    return plansWithPrices;
  }
}
