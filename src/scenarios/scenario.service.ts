import { Injectable, HttpException, ForbiddenException } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { Scenario } from "./scenario";
@Injectable()
export class ScenarioService {
    private scenarios: Scenario[] = [];
    constructor() {
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
    Addscenario( scenario: string, connector: string, connection: string, tags: string[], trigger: string, status: string) {
        const id = Math.random().toString();
        const newscenario = new Scenario(
            id,
            scenario,
            connector,
            connection,
            tags,
            trigger,
            status
        );
        console.log(newscenario);
        this.scenarios.push(newscenario);
        return id;
    }
    getScenarios() {
        return [...this.scenarios];
    }
    getscenariosById(id: string) {
        const prod = this.scenarios.find(r=>r.id == id);
        if(!prod) {
            throw new NotFoundError('record not found');
        }
        return prod;
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