import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    constructor(){}
    
    @Get()
    getValue() {
        return "hello world";
    }
}
