import { Injectable, HttpException, ForbiddenException, NotFoundException } from "@nestjs/common";
import mongoose, { Model,  } from "mongoose";
import { Scenario } from "./scenario";
import { InjectModel } from '@nestjs/mongoose';
import { ScenarioSchema } from './scenario';
@Injectable()
export class ScenarioService {
    private scenarios: Scenario[] = [];
    constructor(@InjectModel('scenario') private scenario: Model<typeof ScenarioSchema>) {
        let data= [];
        for(var i=1;i<5;i++) {
           data.push({
                    id: i,
                    scenario: 'Scenario ' + i,
                    connector: 'Connector ' + i,
                    connection: 'Connection ' + i,
                    tags: ['tag 1', 'tag 2'],
                    trigger: 'trigger ' + i,
                    status: 'Pending ',
                })
        }
        this.scenarios = data;
    }
    async Addscenario( scenario: string, connector: string, connection: string, tags: string[], trigger: string, status: string):
    Promise<any> {
        const newscenario = {
            scenario,
            connector,
            connection,
            tags,
            trigger,
            status
        };
        console.log(newscenario)
    const data = await this.scenario.create(newscenario);
    return data.save();
    }
    async getScenarios() {
        return await this.scenario.find();
    }
    async getscenariosById(id: string) {

        const userId = mongoose.Types.ObjectId.isValid(id);
        if(!!userId) {
            const scenario = await this.scenario.findById(id);
            if(!scenario) {
                throw new NotFoundException('record not found');
            }
            return scenario;
    
        }else {
            throw new NotFoundException('error');
        }
    }

    updateScenario(id: string, scenario: string, connector: string, connection: string, tags: string[], trigger: string, status: string) {
        this.scenarios= this.scenarios.map((r:any)=>{
            if(r.id == 1) {
                r = {...r, id, scenario, connector, connection, tags, trigger, status}
            }
            return r;
        })

        return this.scenarios;
    }
}