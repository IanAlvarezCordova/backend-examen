import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Donacion } from '../donaciones/donacion.entity';

@Entity('donantes')
export class Donante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string; // Ejemplo: "Supermercado", "Restaurante", "Particular"

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @OneToMany(() => Donacion, (donacion) => donacion.donante)
  donaciones: Donacion[]; // Relación inversa: un donante tiene muchas donaciones
}