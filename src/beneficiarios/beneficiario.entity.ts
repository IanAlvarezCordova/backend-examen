import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Donacion } from '../donaciones/donacion.entity';

@Entity('beneficiarios')
export class Beneficiario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string; 

  @Column()
  direccion: string;

  @Column()
  contacto: string;

  @OneToMany(() => Donacion, (donacion) => donacion.beneficiario)
  donaciones: Donacion[]; 
}