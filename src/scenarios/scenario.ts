export class Scenario {
    constructor(
        public id: string,
        public scenario: string, 
        public connector: string, 
        public connection: string,
        public tags: string[],
        public trigger: string,
        public status: string,
        ) {}
}