import { Controller, Get, Param } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { Beneficiario } from './beneficiario.entity';

@Controller('beneficiarios')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) {}

  @Get()
  async findAll(): Promise<Beneficiario[]> {
    return this.beneficiarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Beneficiario> {
    return this.beneficiarioService.findOne(+id);
  }
}