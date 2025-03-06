import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './beneficiario.entity';
import { BeneficiarioService } from './beneficiario.service';
import { BeneficiarioController } from './beneficiario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiario])],
  providers: [BeneficiarioService],
  controllers: [BeneficiarioController],
})
export class BeneficiarioModule {}