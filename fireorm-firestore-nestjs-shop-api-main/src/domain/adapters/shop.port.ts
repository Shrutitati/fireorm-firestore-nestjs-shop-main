import { Optional } from "typescript-optional";
import { MarketMasterModel } from "src/domain/models/market-master.model";

export interface IShopPort {
    
    fetchMarket(): Promise<MarketMasterModel[]>;

    addMarket(shop: MarketMasterModel): Promise<MarketMasterModel>;

}