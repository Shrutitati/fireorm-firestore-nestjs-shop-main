import { Module } from '@nestjs/common';
import { ShopRepository } from 'src/domain/adapters/shop.repository';
import { ShopController } from './shop.controller';
import { ConfigService } from 'src/infrastructure/configuration/config.service';
import { WinstonLoggerModule } from 'src/infrastructure/logger/winston.logger.module';
import { ShopFireOrmModule } from 'src/infrastructure/database/shop.firestore.module';
import { ShopSettingConstants } from 'src/infrastructure/constants/shop-setting';

@Module({
    imports: [
        ShopFireOrmModule,
        WinstonLoggerModule.forRoot({ level: ConfigService.create().getLogLevel() }),
    ],
    controllers: [ShopController],
    providers: [
        {
            provide: ShopSettingConstants.SHOP_SERVICE,
            useClass: ShopRepository
        },
    ],
})
export class ShopModule {
    constructor() {
        console.log('ShopModule created')
    }
};