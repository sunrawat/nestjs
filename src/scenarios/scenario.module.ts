import {  Module } from '@nestjs/common';
import { ScenarioContoller } from './scenario.controller';
import { ScenarioService } from './scenario.service';
@Module({
    controllers: [ ScenarioContoller],
    providers:[ ScenarioService]
})
export class ScenarioModule{ }
