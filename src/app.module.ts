import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ScenarioModule } from './scenarios/scenario.module';

@Module({
  imports: [ScenarioModule],
  controllers: [AppController]
})
export class AppModule {}
