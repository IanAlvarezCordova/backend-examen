import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beneficiario } from './beneficiario.entity';

@Injectable()
export class BeneficiarioService {
  constructor(
    @InjectRepository(Beneficiario)
    private beneficiarioRepository: Repository<Beneficiario>,
  ) {}

  async findAll(): Promise<Beneficiario[]> {
    return this.beneficiarioRepository.find();
  }

  async findOne(id: number): Promise<Beneficiario> {
    const beneficiario = await this.beneficiarioRepository.findOneBy({ id });
    if (!beneficiario) {
      throw new NotFoundException(`Beneficiario con ID ${id} no encontrado`);
    }
    return beneficiario;
  }

  async create(beneficiarioData: Partial<Beneficiario>): Promise<Beneficiario> {
    const beneficiario = this.beneficiarioRepository.create(beneficiarioData);
    return this.beneficiarioRepository.save(beneficiario);
  }

  async update(id: number, beneficiarioData: Partial<Beneficiario>): Promise<Beneficiario> {
    const beneficiario = await this.findOne(id);
    Object.assign(beneficiario, beneficiarioData);
    return this.beneficiarioRepository.save(beneficiario);
  }

  async delete(id: number): Promise<void> {
    const beneficiario = await this.findOne(id);
    await this.beneficiarioRepository.remove(beneficiario);
  }
}