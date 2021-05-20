import { Body, Controller, Get, Post } from '@nestjs/common';
import { SimulationService } from './simulation.service';

@Controller('simulation')
export class SimulationController {
  constructor(private simuService: SimulationService) {}

  @Get('/car')
  public async cars(): Promise<any> {
    return this.simuService.getCars();
  }

  @Post('/calculate')
  public async calculate(@Body() body: any): Promise<any> {
    return this.simuService.calculate(body);
  }
}
