import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as Plotly from 'plotly.js';
import { PlotService } from '../plot.service';
import { map } from "rxjs/operators";
import { } from 'rxjs';
import {DateAdapter, NativeDateAdapter,MAT_DATE_FORMATS} from '@angular/material/';
import { authService } from '../auth.service';
import { Router } from '@angular/router';

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
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('Piechart') elPie: ElementRef;
  @ViewChild('Barchart') elBar: ElementRef;
  @ViewChild('Barchart2') elCompletedGames: ElementRef;
  @ViewChild('Votechart') elVote: ElementRef;


  minDate = new Date(2018, 5, 9);
  maxDate = new Date();

  selectedDate: any; //object used to store value picked on the date picker module
  SensorSumA: Observable<any[]>;  // object used to store the sum of maze A values
  SensorSumB: Observable<any[]>;  // object used to store the sume of maze B values
  SensorSumC: Observable<any[]>;  // object used to store the sume of maze C values

  SensorDatedSumA: Observable<any[]>; //object used to store sum of maze A corresponding to the date picked
  SensorDatedSumB: Observable<any[]>; //object used to store sum of maze B corresponding to the date picked
  SensorDatedSumC: Observable<any[]>; //object used to store sum of maze C corresponding to the date picked

  selectedGorilla: any; //object used to store value picked on the name picker module

  AveragePicksA: Array<any[]>; //object storing  when the maze A has been last used 
  AverageA: number;

  AveragePicksB: Array<any[]>; //object storing  when the maze A has been last used 
  AverageB: number;

  //the following variables have been declared for a specific gorilla
  SumKera: Array<any[]>; //stores data as an array
  Kera: number; //variable used to convert array to number
  SumJock: Array<any[]>;
  Jock: number;
  SumKukena: Array<any[]>;
  Kukena: number;
  SumTouni: Array<any[]>;
  Touni: number;
  SumAfia: Array<any[]>;
  Afia: number;
  SumAyana: Array<any[]>;
  Ayana: number;
  SumSalome: Array<any[]>;
  Salome: number;
  SumRomina: Array<any[]>;
  Romina: number;
  sumIRA: Array<any[]>;
  IRA: number;
  sumIRB: Array<any[]>;
  IRB: number;
  sumIRC: Array<any[]>;
  IRC: number;

  
  public isLoggedIn; //used for the authentication of the website

  constructor(public plotservice: PlotService, private authService: authService, private router: Router, private elementRef: ElementRef) {
    //syntax used to retrieve the login state of the user 
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success
    );

   }

   ngOnChanges() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#161616';
   }
   
  ngOnInit() {
     //retrieving data for Gorilla Kera
     this.plotservice.getVotes('Urls','Kera')
     .valueChanges().subscribe(data => {
       this.getSumKera(data); 
       this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);
     })

    //retrieving data for Gorilla Jock
    this.plotservice.getVotes('Urls','Jock')
    .valueChanges().subscribe(data => {
      this.getSumJock(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Kukena
    this.plotservice.getVotes('Urls','Kukena')
    .valueChanges().subscribe(data => {
      this.getSumKukena(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Touni
    this.plotservice.getVotes('Urls','Touni')
    .valueChanges().subscribe(data => {
      this.getSumTouni(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Afia
    this.plotservice.getVotes('Urls','Afia')
    .valueChanges().subscribe(data => {
      this.getSumAfia(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Ayana
    this.plotservice.getVotes('Urls','Ayana')
    .valueChanges().subscribe(data => {
      this.getSumAyana(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Salome
    this.plotservice.getVotes('Urls','Salome')
    .valueChanges().subscribe(data => {
      this.getSumSalome(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

    //retrieving data for Gorilla Romina
    this.plotservice.getVotes('Urls','Romina')
    .valueChanges().subscribe(data => {
      this.getSumRomina(data);
      this.voteChart(this.Jock,this.Kera,this.Kukena,this.Touni,this.Afia,this.Ayana,this.Salome,this.Romina);

    })

     //retrieving data from maze A to plot the total usage of all mazes
     this.plotservice.getDataPie('SensorMazeA')
     .pipe(map(arr => { return arr.reduce((total, data) => total + data); })) //this adds up all the data
     .subscribe(data => {
       Plotly.purge(this.elPie.nativeElement)
       this.getSumA(data);
       this.pieChart(this.SensorSumA, this.SensorSumB,this.SensorSumC);
     })

   //retrieving data from maze B to plot the total usage of all mazes
   this.plotservice.getDataPie('SensorMazeB')
     .pipe(map(arr => { return arr.reduce((total, data) => total + data,0); }))
     .subscribe(data => {
       Plotly.purge(this.elPie.nativeElement)
       this.getSumB(data);
       this.pieChart(this.SensorSumA, this.SensorSumB,this.SensorSumC);
     })

   //retrieving data from maze C to plot the total usage of all mazes
     this.plotservice.getDataPie('SensorMazeC')
     .pipe(map(arr => { return arr.reduce((total, data) => total + data); }))
     .subscribe(data => {
       Plotly.purge(this.elPie.nativeElement)
       this.getSumC(data);
       this.pieChart(this.SensorSumA, this.SensorSumB,this.SensorSumC);
     })

     this.plotservice.getEntireSet('IRsensorA')
    .valueChanges()
      .subscribe(data => {
        this.getSumIRA(data);
        this.completedGames(this.IRA, this.IRB, this.IRC);
      })

      this.plotservice.getEntireSet('IRsensorB')
    .valueChanges()
      .subscribe(data => {
        this.getSumIRB(data);
        this.completedGames(this.IRA, this.IRB, this.IRC);
      })

      this.plotservice.getEntireSet('IRsensorC')
    .valueChanges()
      .subscribe(data => {
        this.getSumIRC(data);
        this.completedGames(this.IRA, this.IRB, this.IRC);
      })

  //   //retirieving data to determine the average for maze A
  //    this.plotservice.getEntireSet('SensorMazeA')
  //    .valueChanges().pipe(map(items => { //first map
  //     return items.filter(items=> items.value > 0).map(item => { //second map
  //       return item.value;
  //     })
  //   })).subscribe(data => {
  //     this.getAverageA(data);
  // })

  //   //retirieving data to determine the average for maze A
  // this.plotservice.getEntireSet('SensorMazeB')
  //    .valueChanges().pipe(map(items => { //first map
  //     return items.filter(items=> items.value > 0).map(item => { //second map
  //       return item.value;
  //     })
  //   })).subscribe(data => {
  //     this.getAverageB(data);
  //     this.barChartAverage(this.AverageA, this.AverageB);

  // })
  
}
  //functions for navigation across the website

  navigateHome(){
    this.router.navigate(['/home'])
  }

  navigateStatistics(){
    this.router.navigate(['/statistics'])
  }
  
  navigateTrial(){
    this.router.navigate(['/tournament'])
  }

  navigateGallery(){
    this.router.navigate(['/gallery'])
  }

  //function used to logout the current user and navigate back to the login page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  //function used to get the current gate and match it to the format in which it has been stored in the database
  getDate() {
    var dateTime = new Date();
    var date = new String();
    var month = new String();


    var dd = dateTime.getDate();
    var mm = dateTime.getMonth() + 1; // Plus one because Jan is 0
    date = dd.toFixed();
    month= mm.toFixed();

    var yyyy = dateTime.getFullYear();
    
    if(dd<10){
      date='0'+date;
  } 
  if(mm<10){
      month='0'+month;
  } 
    var today = date+'-'+month+'-'+yyyy;
    
    return today;
  }

   /* function used to get the current date and call the function whenever datepicker value changes
  * @param val gets the selected date
  *  additional formatting has been done to match the format in the database and in the date picker
  */
  onDateSelected(val:any) {
    var date = new String();
    var month = new String();


    var dd = val.getDate();
    var mm = val.getMonth() + 1; // Plus one because Jan is 0
    date = dd.toFixed();
    month= mm.toFixed();

    var yyyy = val.getFullYear();
    
    if(dd<10){
      date='0'+date;
  } 
  if(mm<10){
      month='0'+month;
  } 
    var dateSelected = month+'-'+date+'-'+yyyy

    this.selectedDate = dateSelected; //storing the selected date in an object
    console.log(this.selectedDate)
    // querying data for maze A, and calling functions to plot the chart
    this.plotservice.getAllData('SensorMazeA', this.selectedDate)
    .pipe(map(arr => { return arr.reduce((total, data) => total + data); }))
    .subscribe(data => {
      Plotly.purge(this.elBar.nativeElement);

      this.getDatedSumA(data);

    })
   
    // querying data for maze B, and calling functions to plot the chart
    this.plotservice.getAllData('SensorMazeB', this.selectedDate)
    .pipe(map(arr => { return arr.reduce((total, data) => total + data); }))
    .subscribe(data => {
      Plotly.purge(this.elBar.nativeElement);

      this.getDatedSumB(data);
      //this.barChart(this.SensorDatedSumA, this.SensorDatedSumB,this.SensorDatedSumC);

    })

     // querying data for maze B, and calling functions to plot the chart
     this.plotservice.getAllData('SensorMazeC', this.selectedDate)
     .pipe(map(arr => { return arr.reduce((total, data) => total + data); }))
     .subscribe(data => {
       Plotly.purge(this.elBar.nativeElement);
 
       this.getDatedSumC(data);
       this.barChart(this.SensorDatedSumA, this.SensorDatedSumB,this.SensorDatedSumC);
 
     })
    }
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Kera'
    */ 
    getSumKera(data) {
      this.SumKera = data;
      this.Kera = this.SumKera.length;
    } 
    
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Jock'
    */ 
    getSumJock(data) {
      this.SumJock = data;
      this.Jock = this.SumJock.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Kukena'
    */ 
    getSumKukena(data) {
      this.SumKukena = data;
      this.Kukena = this.SumKukena.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Touni'
    */ 
    getSumTouni(data) {
      this.SumTouni = data;
      this.Touni = this.SumTouni.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Afia'
    */ 
    getSumAfia(data) {
      this.SumAfia = data;
      this.Afia = this.SumAfia.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Ayana'
    */ 
    getSumAyana(data) {
      this.SumAyana = data;
      this.Ayana = this.SumAyana.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Salome'
    */ 
    getSumSalome(data) {
      this.SumSalome = data;
      this.Salome = this.SumSalome.length;
    } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */ 
    getSumRomina(data) {
      this.SumRomina = data;
      this.Romina = this.SumRomina.length;
    } 

      /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */ 
    getSumIRA(data) {
    this.sumIRA = data;
    this.IRA = this.sumIRA.length;
    console.log(this.IRA)
  } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */ 
   getSumIRB(data) {
    this.sumIRB = data;
    this.IRB = this.sumIRB.length;
    console.log(this.IRB)
  } 

    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */ 
   getSumIRC(data) {
    this.sumIRC = data;
    this.IRC = this.sumIRC.length;
    console.log(this.IRC)
  } 

    /*function used to store the sum of maze A for the purpose of plotting it
      @param data - object storing the queried data
    */
    getSumA(data) {
      this.SensorSumA = data;
    }
   
    /*function used to store the sum of maze B for the purpose of plotting it
      @param data - object storing the queried data
    */
    getSumB(data) {
      this.SensorSumB = data;
      console.log(this.SensorSumB)

    }

    getSumC(data) {
      this.SensorSumC = data;
    }

    /* Function used to store the sum of maze A on a date selected
  @param data - object storing the queried data
  */
  getDatedSumA(data) {
    this.SensorDatedSumA = data;
  }

  /*function used to store the sum of maze B on a date selected
    @param data - object storing the queried data
  */
  getDatedSumB(data) {
    this.SensorDatedSumB = data;
  }

  /*function used to store the sum of maze B on a date selected
    @param data - object storing the queried data
  */
 getDatedSumC(data) {
  this.SensorDatedSumC = data;
}
  //function that stores the average picks of each Maze
  // getAverageA(data) {
  //   this.AveragePicksA = data;
  //   var sum;
  //   var avg = 0;
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
  //   sum = this.AveragePicksA.reduce(reducer);
  //   avg =Math.round(sum /this.AveragePicksA.length);
  //   this.AverageA = avg;
  // }

  
  //function that stores the average picks of each Maze
  // getAverageB(data) {
  //   this.AveragePicksB = data;
  //   var sum;
  //   var avg = 0;
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
  //   sum = this.AveragePicksB.reduce(reducer);
  //   avg =Math.round(sum /this.AveragePicksB.length);
  //   this.AverageB = avg;
  // }

  /* function that stores the average picks of each Maze
  *@param SensorSumA holds the total value for maze A
  *@param SensorSumB holds the total value for maze B
  * using the total values we can determine which maze has been used the most
  */ 
  pieChart(SensorSumA, SensorSumB, SensorSumC) {
    const element = this.elPie.nativeElement

    var formattedData = [{
      values: [SensorSumA, SensorSumB, SensorSumC],
      labels: ['Maze A', 'Maze B', 'Maze C'],
      type: 'pie',
      marker: {
        colors: ['#4682B4','#db4052','#6dc066']
      }
    }];

    const style = {
      margin: {
        l: 97,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: false,
      title: 'All-time Most Used',
      width: 510,
      height: 300,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }
    }

    Plotly.plot(element, formattedData, style)


  }

  /* function that stores interaction for the corresponding date 
  *@param SensorSumA holds the total value for maze A
  *@param SensorSumB holds the total value for maze B
  * using the total values we can determine which maze has been used the most on the given date
  */
  barChart(SensorSumA, SensorSumB, SensorSumC) {
    const element = this.elBar.nativeElement

    var trace1 = {
      x: ['Maze A'],
      y: [SensorSumA],
      width: [0.7],
      type: 'bar',
      marker: {
        color: '#4682B4',
      }
    };

    var trace2 = {
      x: ['Maze B'],
      y: [SensorSumB],
      width: [0.7],
      type: 'bar',
      marker: {
        color: '#db4052',
      }
    };

    var trace3 = {
      x: ['Maze C'],
      y: [SensorSumC],
      width: [0.7],
      type: 'bar',
      marker: {
        color: '#6dc066',
      }
    };


    const style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      showlegend: false,
      autosize: false,
      title: 'Most Used on Given Date ',
      width: 510,
      height: 300,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }
    }

    var formattedData = [trace1, trace2, trace3];

    Plotly.plot(element, formattedData, style)


  }

  completedGames(IRA,IRB,IRC) {
  
    const element = this.elCompletedGames.nativeElement;

    var trace1 = {
      x: ['Maze A', 'Maze B', 'Maze C'],
      y: [IRA, IRB, IRC],
      name: 'Started Games',
      width: [0.7],
      type: 'bar',
      marker: {
        color: ['#4682B4','#db4052','#6dc066','#fef65b','#329999','#ff748c',],
      }
    };
    
    var trace2 = {
      x: ['Maze A', 'Maze B', 'Maze C'],
      y: [IRB, IRC, IRC],
      name: 'Completed Games',
      width: [0.7],
      type: 'bar',
      marker: {
        color: ['#386890','#af3341','#579951','#cbc448','#287a7a','#cc5c70',],
      }
    };
        
    const style = {
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 60,
        pad: 4
      },
      showlegend: true,
      autosize: false,
      title: 'Ration of Started and Completed Games ',
      width: 510,
      height: 300,
      barmode: 'stack',
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }
    }
    
    var formattedData = [trace1, trace2];

    Plotly.newPlot(element, formattedData,style);
  }

  // barChartAverage(AverageA, AverageB) {
  //   const element = this.elBarAverage.nativeElement


  //   const style = {
  //     margin: {
  //       l: 40,
  //       r: 40,
  //       b: 40,
  //       t: 60,
  //       pad: 4
  //     },
  //     title: 'Average Number of Picks when Active',
  //     width: 510,
  //     height: 300,
  //     plot_bgcolor: '#161616',
  //     paper_bgcolor: '#161616',
  //     font: {
  //       color: '#d3d3d3',
  //       family: 'Raleway, Arial'
  //     }
  //   }
  //   var colors = ['#4682B4', '#db4052', '#6dc066', '#fef65b', '#329999', '#ff748c']
  //   var formattedData = [
  //     {
  //       x: ['Maze A', 'Maze B', 'Maze C', 'Maze D', 'Maze E', 'Maze F'],
  //       y: [AverageA, AverageB, AverageB, AverageA, AverageB, AverageA],
  //       type: 'bar',
  //       marker: {
  //         color: colors
  //       }
  //     }
  //   ];

  //   Plotly.plot(element, formattedData, style)


  // }
/* function that draws out which gorilla is "the most playfull"
  *this is based on the keepers input on which gorilla has been recognized and which has not been recognized
  *@param Jock holds the number of records which have been recognized to have this Gorilla on the image
  *@param Kera holds the number of records which have been recognized to have this Gorilla on the image
  *etc.
  * using the total values we can determine which maze has been used the most
  */
  voteChart(Jock,Kera,Kukena,Touni,Afia,Ayana,Salome,Romina) {

    const element = this.elVote.nativeElement;

    var formattedData = [{
      type: 'bar',
      x: [Touni, Salome, Romina, Kukena, Kera, Jock, Ayana, Afia],
      y: ['Touni', 'Salome', 'Romina','Kukena','Kera','Jock','Ayana','Afia'],
      orientation: 'h'
    }];

    const style = {
      margin: {
        l: 150,
        r: 0,
        b: 40,
        t: 60,
        pad: 4
      },
      autosize: false,
      title: 'Most Playful Gorilla',
      width: 510,
      height: 300,
      plot_bgcolor: '#161616',
      paper_bgcolor: '#161616',
      font: {
        color: '#d3d3d3',
        family: 'Raleway, Arial'
      }
      
    }
    
    Plotly.newPlot(element, formattedData,style);
  }



}
