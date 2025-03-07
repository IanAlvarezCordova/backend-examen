import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { Beneficiario } from './beneficiario.entity';

@Controller('beneficiarios')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) {}

  @Get()
  async findAll(): Promise<Beneficiario[]> {
    return this.beneficiarioService.findAll();
  }



  @Get('sql') 
  async findAllSql(): Promise<any[]> {
    return this.beneficiarioService.findAllSql();
  }

  @Post()
  async create(@Body() beneficiarioData: Partial<Beneficiario>): Promise<Beneficiario> {
    return this.beneficiarioService.create(beneficiarioData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() beneficiarioData: Partial<Beneficiario>): Promise<Beneficiario> {
    return this.beneficiarioService.update(+id, beneficiarioData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.beneficiarioService.delete(+id);
  }
}