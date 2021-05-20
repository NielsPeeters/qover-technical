import { Module } from '@nestjs/common';
import { SimulationModule } from './simulation/simulation.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SimulationModule, AuthModule, UsersModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
