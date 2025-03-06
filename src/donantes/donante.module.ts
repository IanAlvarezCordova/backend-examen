import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donante } from './donante.entity';
import { DonanteService } from './donante.service';
import { DonanteController } from './donante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Donante])],
  providers: [DonanteService],
  controllers: [DonanteController],
})
export class DonanteModule {}