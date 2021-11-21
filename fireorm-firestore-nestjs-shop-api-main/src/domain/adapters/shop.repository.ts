import { Injectable, Param } from "@nestjs/common";
import { IShopPort } from "src/domain/adapters/shop.port";
import { ShopMapper } from "../../infrastructure/mapper/shop.mapper";
import { MarketMaster } from "../entities/market-master.entity";
import { MarketMasterModel } from "../models/market-master.model";
import { BaseFirestoreRepository, getRepository } from 'fireorm';
//import { Timestamp } from "@google-cloud/firestore";
import { initializeApp } from "firebase-admin";
import { cert } from "firebase-admin/app";
import 'firebase/firestore';

const { getFirestore, Timestamp } = require('firebase-admin/firestore');
//const firebase = require("firebase");

@Injectable()
export class ShopRepository implements IShopPort {
    //mmrepo: BaseFirestoreRepository<MarketMaster>;
    constructor() {
        console.log('ShopRepository created')
         //this.mmrepo = getRepository(MarketMaster);
        
    }
    async fetchMarket() : Promise<MarketMasterModel[]> {
        console.log('fetchShops')
       
         const repo = getRepository(MarketMaster);
         const res = await repo.whereEqualTo('name','shrudtati').find();
         console.log('res')
        const result = ShopMapper.toDomains(res)
        return result;
    }
    
    async addMarket(market: MarketMasterModel): Promise<MarketMasterModel> {
        const repo = getRepository(MarketMaster);
        const mm = new MarketMaster();
        mm.name = market.name
        mm.createdDate = Timestamp.now();
        mm.currency = market.currency
        mm.date = Timestamp.now();
        const res = await repo.create(mm);

        return ShopMapper.toDomain(res).get();
    }
}

