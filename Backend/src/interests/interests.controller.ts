import { Controller, Get, Post, Body } from '@nestjs/common';
import { InterestsService } from './interests.service';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @Get()
  async findAll() {
    return await this.interestsService.getAll();
  }

  @Post()
  async create(@Body() interests: string[]) {
    const result = await this.interestsService.bulkInsert(interests);
    return result;
  }
}
