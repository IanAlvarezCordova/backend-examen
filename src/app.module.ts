import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonanteModule } from './donantes/donante.module';
import { BeneficiarioModule } from './beneficiarios/beneficiario.module';
import { DonacionModule } from './donaciones/donacion.module';

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,

 
    }),
  DonanteModule,
    BeneficiarioModule,
    DonacionModule,
 
  ],
})
export class AppModule {}
