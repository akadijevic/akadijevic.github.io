import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as Plotly from 'plotly.js';
import { PlotService } from '../plot.service';
import { map } from "rxjs/operators";
import { } from 'rxjs';
import { authService } from '../auth.service';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  
})
export class GalleryComponent implements OnInit {
  dialogResult = "";
  public isLoggedIn; //used for the authentication of the website
  photo2:Observable<any[]>;
  storeKey:any;

  constructor(public dialog: MatDialog,public storage: AngularFireStorage,public plotservice: PlotService, private authService: authService, private router: Router, private elementRef: ElementRef) {
    

    //syntax used to retrieve the login state of the user 
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success
    );
  }
  
  ngOnInit() {

      //queriying the firebase to extract the data of the entire set
      //here we use SnapshotChanges as we want to retrieve the key of the field as well
      this.plotservice.getEntireSet('Urls')
      .snapshotChanges().pipe(map(items=> {
        return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
      })).subscribe(data =>{
        this.storeUrl(data);
      })

  }

  //functions for navigation across the website
  navigateHome(){
    this.router.navigate(['/home'])
  }
  
  navigateGallery(){
    this.router.navigate(['/gallery'])
  }

  navigateTrial(){
    this.router.navigate(['/tournament'])
  }
  
  navigateStatistics(){
    this.router.navigate(['/statistics'])
  }
  
  //function used to logout the current user and navigate back to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  //stores the field values of all photos
  storeUrl(data) {
    this.photo2 = data;
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onDefault() {
    this.plotservice.getEntireSet('Urls')
      .snapshotChanges().pipe(map(items=> {
        return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
      })).subscribe(data =>{
        this.storeUrl(data);
      })
  }
  
   //this function is called when the user filters gallery based on the Gorilla name
  onUnknown() {
    this.plotservice.filterGallery('unknown')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onKera() {
    this.plotservice.filterGallery('Kera')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onJock() {
    this.plotservice.filterGallery('Jock')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onKukena() {
    this.plotservice.filterGallery('Kukena')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onTouni() {
    this.plotservice.filterGallery('Touni')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onAfia() {
    this.plotservice.filterGallery('Afia')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onAyana() {
    this.plotservice.filterGallery('Ayana')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onSalome() {
    this.plotservice.filterGallery('Salome')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  //this function is called when the user filters gallery based on the Gorilla name
  onRomina() {
    this.plotservice.filterGallery('Romina')
    .snapshotChanges().pipe(map(items=> {
      return items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
    })).subscribe(data =>{
      this.storeUrl(data);
    })
  }

  /*this opens a dialog once the element is clicked
  * it sends the key of the record/photo
  * this key will then be used to update records based on the inout from the MyDialogComponent 
  */
  openDialog(el): void {
    this.storeKey = el;
    console.log(this.storeKey)
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: this.storeKey
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult= result;
    });
  }

}
