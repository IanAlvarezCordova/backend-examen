import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { Donacion } from './donacion.entity';

@Controller('donaciones')
export class DonacionController {
  constructor(private readonly donacionService: DonacionService) {}

  @Get()
  async findAll(): Promise<Donacion[]> {
    return this.donacionService.findAll();
  }

  @Get('sql') 
  async findAllSql(): Promise<any[]> {
    return this.donacionService.findAllSql();
  }

 

  @Post()
  async create(@Body() donacionData: Partial<Donacion>): Promise<Donacion> {
    return this.donacionService.create(donacionData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() donacionData: Partial<Donacion>): Promise<Donacion> {
    return this.donacionService.update(+id, donacionData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.donacionService.delete(+id);
  }
}