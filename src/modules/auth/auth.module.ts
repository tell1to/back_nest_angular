import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'MI CODIGO SECRETO',
      signOptions: { expiresIn: '60s' },
    }),
],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
