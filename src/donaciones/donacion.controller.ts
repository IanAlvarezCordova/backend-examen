import { Controller, Get, Param } from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { Donacion } from './donacion.entity';

@Controller('donaciones')
export class DonacionController {
  constructor(private readonly donacionService: DonacionService) {}

  @Get()
  async findAll(): Promise<Donacion[]> {
    return this.donacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Donacion> {
    return this.donacionService.findOne(+id);
  }
}