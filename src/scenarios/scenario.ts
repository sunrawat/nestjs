import * as mongoose from 'mongoose';

export const ScenarioSchema = new mongoose.Schema({
    scenario: {
        type: String,
        require: true
    },
    connector: {
        type: String,
        require: true
    },
    connection: {
        type: String,
        require: true
    },
    tags: {
        type: [String],
        require: true
    },
    trigger: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
});


export interface Scenario {
         id: string;
         scenario: string;
         connector: string;
         connection: string;
         tags: string[];
         trigger: string;
         status: string;
}
