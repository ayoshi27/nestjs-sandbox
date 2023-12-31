import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from '../common/pipe/validation.pipe';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('create');
    this.catsService.create(createCatDto);
    console.log('after post, ', this.findAll());
  }

  @Get()
  @Roles('admin')
  async findAll(): Promise<Cat[]> {
    console.log('findAll');
    const cats = this.catsService.findAll();
    console.log('GET cats: ', cats);
    return cats;
  }

  @Get(':id')
  @Roles('admin')
  findById(@Param('id', ValidationPipe) id: string): string {
    return `This action returns a #${id} cat`;
  }
}
