import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { IShopPort } from "src/domain/adapters/shop.port";
import { ShopRepository } from "src/domain/adapters/shop.repository";
import { MarketMasterModel } from "src/domain/models/market-master.model";
import { ShopSettingConstants } from "src/infrastructure/constants/shop-setting";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";

@Controller()
export class ShopController {
    constructor(@Inject(ShopSettingConstants.SHOP_SERVICE) private shopRepository: IShopPort,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(ShopController.name);
        console.log('shop service controller created')
    }
    @Get('/all')
    fetchMarket() {
        this.logger.info('in fetchMasterData info', { key: 'value' });
        this.logger.error('in fetchMasterData error', { key: 'value' });
        this.logger.debug('in fetchMasterData debug', { key: 'value' });
        this.logger.warn('in fetchMasterData warn');
        console.log('shop service controller fetchMarket method')
        //throw new HttpException("err string", HttpStatus.FORBIDDEN);
        return this.shopRepository.fetchMarket()

    }
    @Post('/save')
    addMarket(@Body() shop: MarketMasterModel) :Promise<MarketMasterModel>{
        console.log('shop service controller addMarket method')
        return this.shopRepository.addMarket(shop)

    }
}
