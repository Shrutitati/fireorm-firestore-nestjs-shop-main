import { NestFactory } from '@nestjs/core';
//import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ConfigService } from './infrastructure/configuration/config.service';
import { ShopModule } from './controllers/shop.module';

async function bootstrap() {
  const app = await NestFactory.create(ShopModule)
  await app.listen(ConfigService.create().getPort() )
 
}
bootstrap();
