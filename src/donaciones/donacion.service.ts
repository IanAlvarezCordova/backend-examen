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

  
  async findAllSql(): Promise<any[]> {
    
    return this.donacionRepository.query(`
    SELECT d.id, d.descripcion, d.fecha, 
           dt.nombre AS donante_nombre, 
           b.nombre AS beneficiario_nombre
    FROM donaciones d
    JOIN donantes dt ON d.donante_id = dt.id
    JOIN beneficiarios b ON d.beneficiario_id = b.id
  `);
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

  async create(donacionData: Partial<Donacion>): Promise<Donacion> {
    const donacion = this.donacionRepository.create(donacionData);
    return this.donacionRepository.save(donacion);
  }

  async update(id: number, donacionData: Partial<Donacion>): Promise<Donacion> {
    const donacion = await this.findOne(id);
    Object.assign(donacion, donacionData);
    return this.donacionRepository.save(donacion);
  }

  async delete(id: number): Promise<void> {
    const donacion = await this.findOne(id);
    await this.donacionRepository.remove(donacion);
  }
}