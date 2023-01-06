import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { ScenarioService } from "./scenario.service";

@Controller('scenarios')
export class ScenarioContoller {
    constructor( private readonly scenarioService: ScenarioService){}
    @Get()
    async getScenarios() {
        const scenarios =  await this.scenarioService.getScenarios();
        return scenarios;
    }
    @Post()
    async addScenario(
        @Body('scenario') scenario: string, @Body('connector') connector: string, @Body('connection') connection: string, @Body('tags') tags: string[], @Body('trigger') trigger: string, @Body('status') status: string,
    ) {
        const data = await this.scenarioService.Addscenario( scenario, connector, connection, tags, trigger, status,
        );
        return data;
    }

    
    @Get(":id")
    async getScenarioById(@Param("id") id: string) {
        const scenario =  await this.scenarioService.getscenariosById(id);
        return scenario;
    }


    @Put()
    updateScenario(
        @Body('scenario') id: string, @Body('scenario') scenario: string, @Body('connector') connector: string, @Body('connection') connection: string, @Body('tags') tags: string[], @Body('trigger') trigger: string, @Body('status') status: string,
    ) {
        const updatedObj = this.scenarioService.updateScenario(id, scenario, connector, connection, tags, trigger, status,
        );
        return updatedObj[0];
    }

}