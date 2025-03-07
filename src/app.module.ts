import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonanteModule } from './donantes/donante.module';
import { BeneficiarioModule } from './beneficiarios/beneficiario.module';
import { DonacionModule } from './donaciones/donacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "donaciones_db",
      autoLoadEntities: true,
      synchronize: true,
    }),
  DonanteModule,
    BeneficiarioModule,
    DonacionModule,
 
  ],
})
export class AppModule {}
