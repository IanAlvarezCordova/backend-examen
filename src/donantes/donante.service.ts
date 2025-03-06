import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from './donante.entity';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private donanteRepository: Repository<Donante>,
  ) {}

  async findAll(): Promise<Donante[]> {
    return this.donanteRepository.find();
  }

  async findOne(id: number): Promise<Donante> {
    const donante = await this.donanteRepository.findOneBy({ id });
    if (!donante) {
      throw new NotFoundException(`Donante con ID ${id} no encontrado`);
    }
    return donante;
  }
}