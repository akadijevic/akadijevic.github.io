import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject,AngularFireList} from 'angularfire2/database';
import { map } from "rxjs/operators";
import { Observable, pipe } from 'rxjs';
import { database } from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable({
  providedIn: 'root'
})
export class PlotService {
  dataset: Observable<any[]>;

  constructor(public db: AngularFireDatabase,public storage: AngularFireStorage) { }
  //rather than having different functions, need to be seperate because they are called on ngOnInit()
  
  // getDataA() {
  //   return this.db.list<any>('SensorMazeA', ref=> ref.limitToLast(15))
  // }
  // getFileUploads(){
  //   return this.storage.ref('Gorillas/image3.jpeg').getDownloadURL().pipe(then())
  // }
  // getphoto(dataset){
  //   return this.storage.ref(dataset).getDownloadURL();
  // }

  getEntireSet(dataset) {
    return this.db.list<any>(dataset)
  }
 
 getLastItem(dataset) {
  return this.db.list<any>(dataset, ref=> ref.limitToLast(1))
  }
  
  getDataLive(dataset) {
    return this.db.list<any>(dataset, ref=> ref.limitToLast(15))
  }
  // getLastUsed(dataset) {
  //    return this.db.list<any>(dataset)
  // }

  getDataPie(dataset){
    return this.db.list<any>(dataset).valueChanges().pipe(map(items => { //first map
      return items.map(item => { //second map
        return item.value;
      })
    }))
  }
  
  getVotes(dataset,gorilla){
    return this.db.list<any>(dataset,ref=> ref.orderByChild('name').equalTo(gorilla));
  }

  getAllData(dataset,date) {
    return this.db.list<any>(dataset,ref=> ref.orderByChild('date').equalTo(date)).valueChanges().pipe(map(items => { //first map
      return items.map(item => { //second map
        return item.value;
      })
    }))
  }

  filterGallery(gorilla) {
    return this.db.list<any>('Urls',ref=> ref.orderByChild('name').equalTo(gorilla));
  }


}

