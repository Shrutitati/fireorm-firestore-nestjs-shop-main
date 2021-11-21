
import { MarketMasterModel } from "../../domain/models/market-master.model"
import { Optional } from "typescript-optional"
import { MarketMaster } from "src/domain/entities/market-master.entity"

export class ShopMapper {
    static toDomain(repoEntity: MarketMaster): Optional<MarketMasterModel> {
        if (!repoEntity) {
            return Optional.empty<MarketMasterModel>()
        }

        const shopModel: MarketMasterModel = new MarketMasterModel(
            repoEntity.name,
            repoEntity.currency,
            repoEntity.createdDate
        )

        return Optional.of(shopModel)
    }
    static toDomains(repoEntities: MarketMaster[]): MarketMasterModel[] {
        const shopModels = new Array<MarketMasterModel>()
        repoEntities.forEach(
            re => {
                const shopModel = this.toDomain(re)
                shopModels.push(shopModel.get())
            }
        )
        return shopModels;
    }
}