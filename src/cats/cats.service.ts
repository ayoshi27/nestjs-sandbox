import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log('cat', cat);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    console.log('findAll in service', this.cats);
    return this.cats;
  }
}
