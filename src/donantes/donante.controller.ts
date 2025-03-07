import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DonanteService } from './donante.service';
import { Donante } from './donante.entity';

@Controller('donantes')
export class DonanteController {
  constructor(private readonly donanteService: DonanteService) {}

  @Get()
  async findAll(): Promise<Donante[]> {
    return this.donanteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Donante> {
    return this.donanteService.findOne(+id);
  }

  @Post()
  async create(@Body() donanteData: Partial<Donante>): Promise<Donante> {
    return this.donanteService.create(donanteData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() donanteData: Partial<Donante>): Promise<Donante> {
    return this.donanteService.update(+id, donanteData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.donanteService.delete(+id);
  }
}