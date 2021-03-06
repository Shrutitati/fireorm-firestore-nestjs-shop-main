import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';

export class ShopFireOrmModule {

  constructor() {
    console.log('fire')
    const serviceAccount = require('..//..//..//pret-plat-eval-firebase.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });

    const firestore = admin.firestore();
    fireorm.initialize(firestore);

  }
}
