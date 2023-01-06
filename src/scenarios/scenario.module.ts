import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ScenarioSchema } from './scenario';
import { ScenarioContoller } from './scenario.controller';
import { ScenarioService } from './scenario.service';
@Module({
    imports: [MongooseModule.forFeature([{
        name: "scenario", schema: ScenarioSchema
    }])],
    controllers: [ ScenarioContoller],
    providers:[ ScenarioService]
})
export class ScenarioModule{ }
