import { Controller, Get, Param } from '@nestjs/common';
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
}