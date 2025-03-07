import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Donante } from '../donantes/donante.entity';
import { Beneficiario } from '../beneficiarios/beneficiario.entity';

@Entity('donaciones')
export class Donacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string; 

  @Column()
  fecha: Date;

  @ManyToOne(() => Donante, (donante) => donante.donaciones)
  @JoinColumn({ name: 'donante_id' })
  donante: Donante;

  @ManyToOne(() => Beneficiario, (beneficiario) => beneficiario.donaciones)
  @JoinColumn({ name: 'beneficiario_id' })
  beneficiario: Beneficiario;
}