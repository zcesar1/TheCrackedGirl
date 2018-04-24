import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Portfolio} from './portfolio';

@Injectable()
export class PortfolioserviceService {

  portfolioCollection: AngularFirestoreCollection<Portfolio>
  portfolioDoc: AngularFirestoreDocument<Portfolio>
  constructor(private afs: AngularFirestore) { 
    this.portfolioCollection = this.afs.collection('portfolio', ref =>
  ref.orderBy('published', 'desc'))
  }

  getPortfolios()
  {
    return this.portfolioCollection.snapshotChanges().map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data() as Portfolio
        const id = a.payload.doc.id
        return {id, ...data}
      })
    })
  }

  getPortfolioData(id: string)
  {
    this.portfolioDoc = this.afs.doc<Portfolio>(`portfolio/${id}`);
    return this.portfolioDoc.valueChanges();
  }

  create(data: Portfolio){
    this.portfolioCollection.add(data);
  }

  getPortfolio(id: string)
  {
    return this.afs.doc<Portfolio>(`portfolio/${id}`);
  }

  delete(id: string){
    return this.getPortfolio(id).delete();
  }

  update(id: string, formData){
    return this.getPortfolio(id).update(formData); 
  }
}

