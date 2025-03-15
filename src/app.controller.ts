import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNumber(): object {
    return this.appService.getNumber();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus(): object {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }
}