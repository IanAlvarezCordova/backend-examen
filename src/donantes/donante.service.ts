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

  async findAllSql(): Promise<any[]> {
    
    return this.donanteRepository.query('SELECT * FROM donantes');
  }

  async findOne(id: number): Promise<Donante> {
    const donante = await this.donanteRepository.findOneBy({ id });
    if (!donante) {
      throw new NotFoundException(`Donante con ID ${id} no encontrado`);
    }
    return donante;
  }

  async create(donanteData: Partial<Donante>): Promise<Donante> {
    const donante = this.donanteRepository.create(donanteData);
    return this.donanteRepository.save(donante);
  }

  async update(id: number, donanteData: Partial<Donante>): Promise<Donante> {
    const donante = await this.findOne(id); 
    Object.assign(donante, donanteData);
    return this.donanteRepository.save(donante);
  }

  async delete(id: number): Promise<void> {
    const donante = await this.findOne(id);
    await this.donanteRepository.remove(donante);
  }
}