import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as Plotly from 'plotly.js';
import { PlotService } from '../plot.service';
import { map } from "rxjs/operators";
import { } from 'rxjs';
import { AngularFireDatabase } from "angularfire2/database"; 

import {DateAdapter, NativeDateAdapter,MAT_DATE_FORMATS} from '@angular/material/';
import { authService } from '../auth.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

export class AppDateAdapter extends NativeDateAdapter {
  /* Formatting the date component for the date picker module
  */
  format(date: Date, displayFormat: Object): string {

      if (displayFormat === 'input') {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
      } else {
          return date.toDateString();
      }
  }
}

export const APP_DATE_FORMATS =
{
  parse: {
      dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
      dateInput: 'input',
      monthYearLabel: { year: 'numeric', month: 'numeric' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
]
})
export class HomeComponent implements OnInit {
  //binding to HTML element
  @ViewChild('chartA') elA: ElementRef; 
  @ViewChild('chartB') elB: ElementRef;
  @ViewChild('chartC') elC: ElementRef;
  @ViewChild('chartD') elD: ElementRef;
  @ViewChild('chartE') elE: ElementRef;
  @ViewChild('chartF') elF: ElementRef;


  @ViewChild('chartAll') elAll: ElementRef;


  SensorMazeA: Observable<any[]>; // object used to store sensor maze A values
  SensorMazeB: Observable<any[]>; // object used to store sensor maze B values
  SensorMazeC: Observable<any[]>; // object used to store sensor maze B values
  LastUsedA: Array<any[]>; //object storing at what time the maze A has been last used 
  LastUsedB: Array<any[]>;  //object storing at what time the maze B has been last used 
  LastDateUsedA: Array<any[]>; //object storing the dates of last usage of maze A
  LastDateUsedB: Array<any[]>; //object storing the dates of last usage of maze B
  DurationArrayA: Array<any[]>; //array to store all the data that is above the treshold for Maze A
  DurationArrayB: Array<any[]>; //array to store all the data that is above the treshold for Maze B
  DurationA: number; //store the duration for maze A in one number format
  DurationB: number; //store the duration for maze B in one number format

  public isLoggedIn; //used for the authentication of the website

  MostRecentPhoto:Observable<any[]>; //object used to store the last taken photo
  photo2:any;
  
  constructor(public plotservice: PlotService, private authService: authService, private router: Router, private elementRef: ElementRef) {
    

    //syntax used to retrieve the login state of the user 
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success
    );

   }

   //function used to change the background color
   ngOnChanges() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#161616';
   }

   //function that executes as soon as the view renders
   //this function executes as well whenever any of the data changes to which we have subscribed to
  ngOnInit() {

        //fetches the last photo that was captured and adds it to the gallery
        this.plotservice.getLastItem('Urls')
      .valueChanges().subscribe(data => {
        this.getLastPhotoDetails(data);
        })
      

    //query that gets the last 15 values and graphs them out for Maze A
    this.plotservice.getDataLive('SensorMazeA')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.value;
        })
      })).subscribe(data => {
        Plotly.purge(this.elA.nativeElement); Plotly.purge(this.elAll.nativeElement); //this cleans graph whenever new value is added to database
        this.monitorChartA(data);
        //REMOVE THISSSSS AND CALL ON ITS OWN WHEN BINDED TO THE RIGHT DATASET!!!!
        //this.monitorChartD(data);
        //this.monitorChartE(data);
        //this.monitorChartF(data);


        this.returnA(data);
        this.monitorChartAll(this.SensorMazeA, this.SensorMazeB,this.SensorMazeC);  //function that stores the values in observable taht is then being drawn on the next function call
      })

    //retrieving data for live monitoring for maze B
    this.plotservice.getDataLive('SensorMazeB')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.value;
        })
      })).subscribe(data => {
        Plotly.purge(this.elB.nativeElement); Plotly.purge(this.elAll.nativeElement);

        this.monitorChartB(data);
        this.returnB(data); //function that stores the values in observable taht is then being drawn on the next function call
        this.monitorChartAll(this.SensorMazeA, this.SensorMazeB,this.SensorMazeC);

      })

      this.plotservice.getDataLive('SensorMazeC')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.value;
        })
      })).subscribe(data => {
        Plotly.purge(this.elC.nativeElement); Plotly.purge(this.elAll.nativeElement);

        this.monitorChartC(data);
        this.returnC(data); //function that stores the values in observable taht is then being drawn on the next function call
        this.monitorChartAll(this.SensorMazeA, this.SensorMazeB,this.SensorMazeC);

      })

    //retrieving data from maze A to plot the total usage of all mazes

    //retrieving the array of data from maze A to determine the last usage
    //will need to be queried for each maze
    //the treshold here can change depending on what values is considered to make a device "active" 
      this.plotservice.getEntireSet('SensorMazeA')
      .valueChanges().pipe(map(items => { //first map
        return items.filter(items=> items.value > 10).map(item => { //second map
          return item.time; //mapping to just extract time value
        })
      })).subscribe(data => { 
        this.sliceDataA(data);
        this.durationOfUseA(data);
      })

      this.plotservice.getEntireSet('SensorMazeA')
      .valueChanges().pipe(map(items => { //first map
        return items.filter(items=> items.value > 10).map(item => { //second map
          return item.date; //mapping to just extract date value
        })
      })).subscribe(data => { 
        this.sliceDataADate(data); //function called to slice just the date value
      })

     //retrieving the array of data from maze A to determine the last usage
    //the treshold here can change depending on how many picks is considered to make a device "active" 
      this.plotservice.getEntireSet('SensorMazeB')
      .valueChanges().pipe(map(items => { //first map
        return items.filter(items=> items.value > 10).map(item => { //second map
          return item.time;
        })
      })).subscribe(data => { 
        this.sliceDataB(data);
        this.durationOfUseB(data);

      })

      this.plotservice.getEntireSet('SensorMazeB')
      .valueChanges().pipe(map(items => { //first map
        return items.filter(items=> items.value > 10).map(item => { //second map
          return item.date;
        })
      })).subscribe(data => { 
        this.sliceDataBDate(data);
      })
      
  }

  //functions for navigation across the website
  navigateHome(){
    this.router.navigate(['/home'])
  }

  navigateTrial(){
    this.router.navigate(['/tournament'])
  }

  navigateStatistics(){
    this.router.navigate(['/statistics'])
  }

  navigateGallery(){
    this.router.navigate(['/gallery'])
  }
  //function used to logout the current user and navigate back to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  /*function storing the data for the last photo captured
  *@param: data
  */
  getLastPhotoDetails(data){
   this.photo2 = data;
  }

  /*function storing the data for the values
  *@param: data
  * this obserable will be used in the MonitorChartAll plot
  */
  returnA(data) {
    this.SensorMazeA = data;
  }


  /*function storing the data for the values
  *@param: data
  * this obserable will be used in the MonitorChartAll plot
  */
   returnB(data) {
    this.SensorMazeB = data;
  }

  /*function storing the data for the values
  *@param: data
  * this obserable will be used in the MonitorChartAll plot
  */
  returnC(data) {
    this.SensorMazeC = data;
  }


 
  /*function that calculates the duration of the usage
  *@param: data - queries based on some treshold that is considered active
  * this obserable will be used in the MonitorChartAll plot
  */
  durationOfUseA(data) {
    this.DurationArrayA = data;
    var samplingRate = 5; //this will need to match the interval in which the data has been taken in arduino Piezo.ino code
    var numberOfActive = this.DurationArrayA.length //getting number of values that were considered active
    var duration = ((numberOfActive * samplingRate)/ 60) //number of values that were labelled as active * sampling rate and converted into minutes
    this.DurationA = duration; //stored as a number
  }

  
  durationOfUseB(data) {
    this.DurationArrayB = data;
    var samplingRate = 5;//this will need to match the interval in which the data has been taken in arduino Piezo.ino code
    var numberOfActive = this.DurationArrayB.length //getting number of values that were considered active
    var duration = ((numberOfActive * samplingRate)/ 60) //number of values that were labelled as active * sampling rate and converted into minutes
    this.DurationB = duration; //stored as a number
  }

  /* Function used to retrieve last used element of maze A
  @param data - object story the time of the last usage
  * last usage determined based on some treshold 
  */
  sliceDataA(data) {
    this.LastUsedA = data;
    this.LastUsedA =this.LastUsedA.slice(-1).pop();
  }

  sliceDataADate(data) {
    this.LastDateUsedA = data;
    this.LastDateUsedA =this.LastDateUsedA.slice(-1).pop();
  }

  /* Function used to retrieve last used element of maze A
  @param data - object story the time of the last usage
  * last usage determined based on some treshold 
  */
 sliceDataB(data) {
  this.LastUsedB = data;
  this.LastUsedB =this.LastUsedB.slice(-1).pop();
}
/* Function used to retrieve last used element of maze A
  @param data - object story the date of the last usage
  * last usage determined based on some treshold 
  */

sliceDataBDate(data) {
  this.LastDateUsedB = data;
  this.LastDateUsedB =this.LastDateUsedB.slice(-1).pop();
}

  /* Function used to create monitoring chart for maze A
  @param data - object that stores the read value of sensor A
  */
  monitorChartA(data) {
    var element = this.elA.nativeElement
    var trace1 = {
      type: 'scatter',
      y: data,
      line: {
        color: '#4682B4',
      }
    };

    var style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: true,
      title: 'Maze A',
      width: 350,
      height: 200,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }

    }

    var formattedData = [trace1];
    Plotly.plot(element, formattedData, style)
    // Plotly.extendTraces(element,update,[0])

  }

  /* Function used to create monitoring chart for maze B
  @param data - object that stores the read value of sensor B
  */
  monitorChartB(data) {
    var element = this.elB.nativeElement
    var trace1 = {
      type: 'scatter',
      y: data,
      line: {
        color: '#db4052',
      }

    };

    var style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: false,
      title: 'Maze B',
      width: 350,
      height: 200,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }

    }

    var formattedData = [trace1];

    Plotly.plot(element, formattedData, style)
    // Plotly.extendTraces(element,update,[0])
  }

   /* Function used to create monitoring chart for maze C
  @param data - object that stores the read value of sensor C
  */
  monitorChartC(data) {
    var element = this.elC.nativeElement
    var trace1 = {
      type: 'scatter',
      y: data,
      line: {
        color: '#6dc066',
      }

    };

    var style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: false,
      title: 'Maze C',
      width: 350,
      height: 200,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }

    }

    var formattedData = [trace1];

    Plotly.plot(element, formattedData, style)
    // Plotly.extendTraces(element,update,[0])
  }
  
  //  /* Function used to create monitoring chart for maze D
  // @param data - object that stores the read value of sensor D
  // */
  // monitorChartD(data) {
  //   var element = this.elD.nativeElement
  //   var trace1 = {
  //     type: 'scatter',
  //     y: data,
  //     line: {
  //       color: '#fef65b',
  //     }

  //   };

  //   var style = {
  //     margin: {
  //       l: 40,
  //       r: 40,
  //       b: 40,
  //       t: 60,
  //       pad: 4
  //     },
  //     autosize: false,
  //     title: 'Maze D',
  //     width: 350,
  //     height: 200,
  //     plot_bgcolor: '#161616',
  //     paper_bgcolor: '#161616',
  //     font: {
  //       color: '#d3d3d3',
  //       family: 'Raleway, Arial'
  //     }

  //   }

  //   var formattedData = [trace1];

  //   Plotly.plot(element, formattedData, style)
  //   // Plotly.extendTraces(element,update,[0])
  // }

  //  /* Function used to create monitoring chart for maze E
  // @param data - object that stores the read value of sensor E
  // */
  // monitorChartE(data) {
  //   var element = this.elE.nativeElement
  //   var trace1 = {
  //     type: 'scatter',
  //     y: data,
  //     line: {
  //       color: '#329999',
  //     }

  //   };

  //   var style = {
  //     margin: {
  //       l: 40,
  //       r: 40,
  //       b: 40,
  //       t: 60,
  //       pad: 4
  //     },
  //     autosize: false,
  //     title: 'Maze E',
  //     width: 350,
  //     height: 200,
  //     plot_bgcolor: '#161616',
  //     paper_bgcolor: '#161616',
  //     font: {
  //       color: '#d3d3d3',
  //       family: 'Raleway, Arial'
  //     }

  //   }

  //   var formattedData = [trace1];

  //   Plotly.plot(element, formattedData, style)
  //   // Plotly.extendTraces(element,update,[0])
  // }
 
  //  /* Function used to create monitoring chart for maze F
  // @param data - object that stores the read value of sensor F
  // */
  // monitorChartF(data) {
  //   var element = this.elF.nativeElement
  //   var trace1 = {
  //     type: 'scatter',
  //     y: data,
  //     line: {
  //       color: '#ff748c',
  //     }

  //   };

  //   var style = {
  //     margin: {
  //       l: 40,
  //       r: 40,
  //       b: 40,
  //       t: 60,
  //       pad: 4
  //     },
  //     autosize: false,
  //     title: 'Maze F',
  //     width: 350,
  //     height: 200,
  //     plot_bgcolor: '#161616',
  //     paper_bgcolor: '#161616',
  //     font: {
  //       color: '#d3d3d3',
  //       family: 'Raleway, Arial'
  //     }

  //   }

  //   var formattedData = [trace1];

  //   Plotly.plot(element, formattedData, style)
  //   // Plotly.extendTraces(element,update,[0])
  // }

 /* Function used to create monitoring chart for all mazes at the same time
  @param sensor Maze A - object that stores the values for sensor A
  */
  monitorChartAll(SensorMazeA, SensorMazeB, SensorMazeC) {
    var element = this.elAll.nativeElement
    var trace1 = {
      type: 'scatter',
      y: SensorMazeA,
      line: {
        color: '#4682B4',
      },
      name: 'Maze A',
    };

    var trace2 = {
      type: 'scatter',
      y: SensorMazeB,
      line: {
        color: '#db4052',
      },
      name: 'Maze B',
    };

    var trace3 = {
      type: 'scatter',
      y: SensorMazeC,
      line: {
        color: '#6dc066',
      },
      name: 'Maze C',
    };

    var style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: true,
      title: 'Maze A-C',
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }

    }
    var formattedData = [trace1, trace2, trace3];



    Plotly.plot(element, formattedData, style)
    // Plotly.extendTraces(element,update,[0])
  }

}


