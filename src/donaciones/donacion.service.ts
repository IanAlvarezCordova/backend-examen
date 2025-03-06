import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private donacionRepository: Repository<Donacion>,
  ) {}

  async findAll(): Promise<Donacion[]> {
    return this.donacionRepository.find({ relations: ['donante', 'beneficiario'] });
  }

  async findOne(id: number): Promise<Donacion> {
    const donacion = await this.donacionRepository.findOne({
      where: { id },
      relations: ['donante', 'beneficiario'],
    });
    if (!donacion) {
      throw new NotFoundException(`Donación con ID ${id} no encontrada`);
    }
    return donacion;
  }
}