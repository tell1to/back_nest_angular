import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { categoriaProviders } from './modules/categoria/categoria.providers';


@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
