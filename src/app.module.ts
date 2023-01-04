import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ScenarioModule } from './scenarios/scenario.module';

@Module({
  imports: [ScenarioModule, MongooseModule.forRoot("mongodb+srv://admin:<admin>@cluster0.sztgalv.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController]
})
export class AppModule {}
