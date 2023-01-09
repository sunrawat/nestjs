import { Injectable, HttpException, ForbiddenException } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { NotFoundError } from "rxjs";
import { Scenario } from "./scenario";
@Injectable()
export class ScenarioService {
    private scenarios: Scenario[] = [];
    constructor() {

        this.scenarios = this.generateRandomScenarios();
    }
    private generateRandomScenarios() {
        let data = [];
        for (var i = 1; i < 10; i++) {
            data.push({
                id: i,
                scenario: 'Scenario ' + i,
                connector: 'Connector ' + i,
                connection: 'Connection ' + i,
                tags: ['tag 1', 'tag 2'],
                trigger: 'trigger ' + i,
                status: i % Math.floor(Math.random() * 5) == 0 ? 'Pending ' : 'Active',
            })
        }
        return data;
    }
    Addscenario(scenario: string, connector: string, connection: string, tags: string[], trigger: string, status: string) {
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
        this.scenarios.push(newscenario);
        return id;
    }
    getScenarios() {
        return [...this.scenarios];
    }
    getscenariosById(id: string) {
        const prod = this.scenarios.find(r => r.id == id);
        if (!prod) {
            throw new NotFoundException('record not found');
        }
        return prod;
    }

    updateScenario(id: string, scenario: string, connector: string, connection: string, tags: string[], trigger: string, status: string) {
        this.scenarios = this.scenarios.map((r: any) => {
            if (r.id == 1) {
                r = { ...r, id, scenario, connector, connection, tags, trigger, status }
            }
            return r;
        })

        return this.scenarios;
    }
}