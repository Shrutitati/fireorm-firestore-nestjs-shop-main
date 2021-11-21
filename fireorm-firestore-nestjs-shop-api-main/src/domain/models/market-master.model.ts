import { Timestamp } from "@google-cloud/firestore";

export class MarketMasterModel {
    constructor(public name?: string, public currency?: string, public createdDate?: Timestamp, public date?: Timestamp) {

    }
}
