import { Component, OnInit,Inject} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  
  constructor(public snackBar: MatSnackBar,public db: AngularFireDatabase,public thisDialogRef: MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: string) { }

   message: string;
   addExtraClass = false;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  
  openSnackBar() {
    this.snackBar.open('Update applied!', 'Close', { duration: 3000, panelClass: ['snackbar']
  });
  }
  ngOnInit() {
  }

  //these sets of functions are called when the input is selected
  //this then takes the key of the photo and updates its name 
  onCloseKera() {
    this.thisDialogRef.close('Kera');
    this.db.list('Urls').update(this.data,{ name:'Kera'})
  }

  onCloseJock() {
    this.thisDialogRef.close('Jock');
    this.db.list('Urls').update(this.data,{ name:'Jock'})
  }

  onCloseKukena() {
    this.thisDialogRef.close('Kukena');
    this.db.list('Urls').update(this.data,{ name:'Kukena'})
  }

  onCloseTouni() {
    this.thisDialogRef.close('Touni');
    this.db.list('Urls').update(this.data,{ name:'Touni'})
  }

  onCloseAfia(){
    this.thisDialogRef.close('Afia');
    this.db.list('Urls').update(this.data,{ name:'Afia'})
  }

  onCloseAyana(){
    this.thisDialogRef.close('Ayana');
    this.db.list('Urls').update(this.data,{ name:'Ayana'})
  }

  onCloseSalome(){
    this.thisDialogRef.close('Salome');
    this.db.list('Urls').update(this.data,{ name:'Salome'})
  }

  onCloseRomina(){
    this.thisDialogRef.close('Romina');
    this.db.list('Urls').update(this.data,{ name:'Romina'})
  }
  onCloseNotGorilla(){
    this.thisDialogRef.close('Not a Gorilla');
    this.db.list('Urls').update(this.data,{ name:'Not a gorilla'})
  }
}
