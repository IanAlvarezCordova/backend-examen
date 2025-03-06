import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Donacion } from '../donaciones/donacion.entity';

@Entity('beneficiarios')
export class Beneficiario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string; // Ejemplo: "Organización Social", "Comedor Comunitario"

  @Column()
  direccion: string;

  @Column()
  contacto: string;

  @OneToMany(() => Donacion, (donacion) => donacion.beneficiario)
  donaciones: Donacion[]; // Relación inversa: un beneficiario tiene muchas donaciones
}