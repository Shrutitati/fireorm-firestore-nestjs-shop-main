import { Timestamp } from "@google-cloud/firestore";
import { Collection, ISubCollection, SubCollection } from "fireorm";

class Market {
  id: string;
  name: string;
  year: number;
  currency: string;
  date: Timestamp;
}

@Collection('shops_markets_master')
export class MarketMaster {
  id: string;
  name: string;
  currency: string;
  createdDate: Timestamp;
  date: Timestamp;
  
  @SubCollection(Market)
  market?: ISubCollection<Market>;
}















// @Collection('shop_markets_master')
// //export class MarketMaster {
//   {
//   name: string;
//   date: Timestamp;
// }


