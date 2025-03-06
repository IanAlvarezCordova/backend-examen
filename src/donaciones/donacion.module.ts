import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacion } from './donacion.entity';
import { DonacionService } from './donacion.service';
import { DonacionController } from './donacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion])],
  providers: [DonacionService],
  controllers: [DonacionController],
})
export class DonacionModule {}