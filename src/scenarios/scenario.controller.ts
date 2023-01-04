import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { ScenarioService } from "./scenario.service";

@Controller('scenarios')
export class ScenarioContoller {
    constructor( private readonly scenarioService: ScenarioService){}
    @Get()
    getScenarios() {
        const prods =  this.scenarioService.getScenarios();
        return prods;
    }
    @Post()
    addScenario(
        @Body('scenario') scenario: string, @Body('connector') connector: string, @Body('connection') connection: string, @Body('tags') tags: string[], @Body('trigger') trigger: string, @Body('status') status: string,
    ) {
        console.log(scenario);
        const generatedId = this.scenarioService.Addscenario( scenario, connector, connection, tags, trigger, status,
        );
        return { id: generatedId};
    }

    
    @Get(":id")
    getScenarioById(@Param("id") id: string) {
        const prod =  this.scenarioService.getscenariosById(id);
        return prod;
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