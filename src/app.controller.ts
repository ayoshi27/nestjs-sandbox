import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':id')
  // getHelloId(@Param() params): string {
  //   return `${params.id}: ${this.appService.getHello()}`;
  // }
}
