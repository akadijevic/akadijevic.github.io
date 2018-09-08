import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PlotService } from '../plot.service';
import { map } from "rxjs/operators";
import { } from 'rxjs';
import { Router } from '@angular/router';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
import { Subscription } from 'rxjs';
import { cpus } from 'os';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  timesStart: Array<any>; //array that stores times for Maze A in the initial format
  timesEnd: Array<any>; //array that stores times for Maze C in the initial format
  timesMiddle: Array<any>; //array that stores times for Maze B in the initial format
  StartToArray = new Array(); //used to convert an observable to an array 
  MiddleToArray = new Array(); //used to convert an observable to an array 
  EndToArray = new Array(); //used to convert an observable to an array
  dateStart: String;
  dateMiddle: String;
  dateEnd: String;
  durationLast: any; //stores only the last time difference from start to end
  durationLastAB: any;
  durationLastBC: any;
  durationSession = new Array(); //stores all the time differences for a current session(refresh page ends the session)
  durationSessionA = new Array(); //stores all the time differences for a current session(refresh page ends the session)
  durationSessionB = new Array(); //stores all the time differences for a current session(refresh page ends the session)
  findAvg = new Array();
  findAvgAB = new Array();
  findAvgBC = new Array();

  avg: String;
  avgAB: String;
  avgBC: String;
  subscriptionA: Subscription;
  subscriptionB: Subscription;
  subscriptionC: Subscription;


  constructor(public plotservice: PlotService, private router: Router, private elementRef: ElementRef) {

  }


  ngOnInit() {
    //retrieves the last time when the Maze A sensor was triggered
    this.plotservice.getLastItem('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedA;
        })
      })).subscribe(data => {
        this.storeLastStart(data);
        this.DurationLast(this.dateStart, this.dateEnd);
        this.DurationLastAB(this.dateStart, this.dateMiddle);

      })

    //retrieves the last time when the Maze B sensor was triggered
    this.plotservice.getLastItem('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedB;
        })
      })).subscribe(data => {
        this.storeLastMiddle(data);
        this.DurationLastBC(this.dateMiddle, this.dateEnd);


      })

    //retrieves the last time when the Maze C sensor was triggered 
    this.plotservice.getLastItem('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedC;
        })
      })).subscribe(data => {
        this.storeLastEnd(data);


      })

    //retrieves all the times when Maze A was triggered to find the average
    this.subscriptionA = this.plotservice.getEntireSet('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedA;
        })
      })).subscribe(data => {
        this.storeTimesStart(data);
        this.DurationAll(this.StartToArray, this.EndToArray);
        this.DurationAllAB(this.StartToArray, this.MiddleToArray)
        this.subscriptionA.unsubscribe();

      })

    //retrieves all the times when Maze B was triggered to find the average

    this.subscriptionB = this.plotservice.getEntireSet('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedB;
        })
      })).subscribe(data => {
        this.storeTimesMiddle(data);
        this.subscriptionB.unsubscribe();
        this.DurationAllBC(this.MiddleToArray, this.EndToArray)

      })

    //retrieves all the times when Maze C was triggered to find the average

    this.subscriptionC = this.plotservice.getEntireSet('Tournament')
      .valueChanges().pipe(map(items => { //first map
        return items.map(item => { //second map
          return item.DetectedC;
        })
      })).subscribe(data => {
        this.storeTimesEnd(data);
        this.subscriptionC.unsubscribe();
      })


  }

  
  navigateHome(){
    this.router.navigate(['/home'])
  }


  /* function that stores the last time the Maze A was triggered
  *@param data: value of the last time difference 
  */
  storeLastStart(data) {
    this.dateStart = data; //stored in an array form
    this.dateStart = this.dateStart[0] //this converts it to string
  }

  /* function that stores all the times the Maze A was triggered at
   *@param data: value of all the time differences
   */
  storeTimesStart(data) {
    this.timesStart = data; //stored in an array 
    for (var i = 0; i < this.timesStart.length; i++) { //looping through and array
      var value = new Date(this.timesStart[i]); //convert dates to correct date Format
      this.StartToArray.push(value)
    }
  }

  /* function that stores the last time the Maze B was triggered
  *@param data: value of the last time difference 
  */
  storeLastMiddle(data) {
    this.dateMiddle = data; //stored in an array form
    this.dateMiddle = this.dateMiddle[0] //this converts it to string
  }


  /* function that stores all the times the Maze B was triggered at
   *@param data: value of all the time differences
   */
  storeTimesMiddle(data) {
    this.timesMiddle = data;  //stored in an array 
    for (var i = 0; i < this.timesMiddle.length; i++) {  //looping through and array
      var value = new Date(this.timesMiddle[i]); //convert dates to correct date Format
      this.MiddleToArray.push(value)
    }

  }

  /* function that stores all the times the Maze C was triggered at
   *@param data: value of all the time differences
   */
  storeTimesEnd(data) {
    this.timesEnd = data;  //stored in an array 
    for (var i = 0; i < this.timesEnd.length; i++) {  //looping through and array
      var value = new Date(this.timesEnd[i]); //convert dates to correct date Format
      this.EndToArray.push(value)
    }
  }

  /* function that stores the last time the Maze C was triggered
   *@param data: value of the last time difference 
   */
  storeLastEnd(data) {
    this.dateEnd = data; //store as array
    this.dateEnd = this.dateEnd[0] // convert to string
  }


  /* function that finds the difference between the times of the last trial
  *@param dateStart: array that stores all Maze A times in correct date form
  *@param dateStart: array that stores all Maze C times in correct date form
  */
  DurationLast(dateStart, dateEnd) {
    var date1 = new Date(dateStart); //store in the right format
    var date2 = new Date(dateEnd);

    var diff = date2.getTime() - date1.getTime(); //find difference
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60); //convert months
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000); //convert seconds
    msec -= ss * 1000;

    if (ss < 10) { //this check puts the time in the correct format
      this.durationLast = ("0" + hh + ":0" + mm + ":0" + ss); //output
    }
    else {
      this.durationLast = ("0" + hh + ":0" + mm + ":" + ss); //output
    }
    if (hh !== hh || mm !== mm || ss != ss) { //check that the date has values
      // console.log("Nan input")
    }
    else {
      this.durationSession.push(this.durationLast) //store in the array for the current session
    }
    //console.log(this.durationLast)
  }

  /* function that finds the difference between the times of the last trial
  *@param dateStart: array that stores all Maze A times in correct date form
  *@param dateStart: array that stores all Maze C times in correct date form
  */
  DurationLastAB(dateStart, dateEnd) {
    var date1 = new Date(dateStart); //store in the right format
    var date2 = new Date(dateEnd);
    var diff = date2.getTime() - date1.getTime(); //find difference
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60); //convert months
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000); //convert seconds
    msec -= ss * 1000;

    if (ss < 10) { //this check puts the time in the correct format
      this.durationLastAB = ("0" + hh + ":0" + mm + ":0" + ss); //output
    }
    else {
      this.durationLastAB = ("0" + hh + ":0" + mm + ":" + ss); //output
    }
    if (hh !== hh || mm !== mm || ss != ss) { //check that the date has values
      // console.log("Nan input")
    }
    else {
      this.durationSessionA.push(this.durationLastAB)
    }
    //console.log(this.durationLast)
  }


  /* function that finds the difference between the times of the last trial
  *@param dateStart: array that stores all Maze A times in correct date form
  *@param dateStart: array that stores all Maze C times in correct date form
  */
  DurationLastBC(dateStart, dateEnd) {
    var date1 = new Date(dateStart); //store in the right format
    var date2 = new Date(dateEnd);
    var diff = date2.getTime() - date1.getTime(); //find difference
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60); //convert months
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000); //convert seconds
    msec -= ss * 1000;

    if (ss < 10) { //this check puts the time in the correct format
      this.durationLastBC = ("0" + hh + ":0" + mm + ":0" + ss); //output
    }
    else {
      this.durationLastBC = ("0" + hh + ":0" + mm + ":" + ss); //output
    }
    if (hh !== hh || mm !== mm || ss != ss) { //check that the date has values
      // console.log("Nan input")
    }
    else {
      this.durationSessionB.push(this.durationLastBC)
    }
    //console.log(this.durationLast)
  }


  // /* function that finds the average of all times retrieved
  // *@param avg: holds all the time differences
  // */
  // findAvgFunct(avg) {
  // var sum = 0
  // //console.log(avg)
  // var times = avg
  // var input = document.createElement('input')
  // input.type = 'time'

  // sum = times.reduce(function(prev, time) { //.reduce() sums up all the times 
  //   input.value = time
  //   return prev + input.valueAsNumber
  // },0)

  // input.valueAsNumber = sum / times.length // sum divided by the number of elements

  // this.avg = input.value;
  // }

  /* function that finds the average of all times retrieved
  *@param avg: holds all the time differences
  */
  findAvgFunctionAB() {
    var sum = 0
    var times = this.durationSessionA
    var input2 = document.createElement('input')
    input2.type = 'time'

    sum = times.reduce(function (prev, time) { //.reduce() sums up all the times 
      input2.value = time
      return prev + input2.valueAsNumber
    }, 0)

    input2.valueAsNumber = sum / times.length // sum divided by the number of elements

    this.avgAB = input2.value;
  }

  findAvgFunctionBC() {
    var sum = 0
    var times = []
    var times = this.durationSessionB
    console.log(times)
    var input = document.createElement('input')
    input.type = 'time'

    sum = times.reduce(function (prev, time) { //.reduce() sums up all the times 
      input.value = time
      return prev + input.valueAsNumber
    }, 0)

    input.valueAsNumber = sum / times.length // sum divided by the number of elements

    this.avgBC = input.value;
  }

  findAvgFunction() {
    var sum = 0
    //console.log(avg)
    var times = this.durationSession
    var input = document.createElement('input')
    input.type = 'time'

    sum = times.reduce(function (prev, time) { //.reduce() sums up all the times 
      input.value = time
      return prev + input.valueAsNumber
    }, 0)

    input.valueAsNumber = sum / times.length // sum divided by the number of elements

    this.avg = input.value;
    console.log(times)

  }

  /* function that finds the difference between the times of all the trials
  *@param timesStart: array that stores all Maze A times in correct date form
  *@param timesEnd: array that stores all Maze C times in correct date form
  */
  DurationAll(timesStart, timesEnd) {
    var A = timesEnd
    var B = timesStart
    for (let i = 0; i < A.length; i++) {
      var diff = A[i].getTime() - B[i].getTime();
      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;

      if (ss < 10) { //this check puts the time in the correct format
        this.durationSession.push("0" + hh + ":0" + mm + ":0" + ss);
      }
      else {
        this.durationSession.push("0" + hh + ":0" + mm + ":" + ss);
      }
      //console.log(this.durationSession);
    }
  }

  // QueryDuration() {

  //   this.plotservice.getEntireSet('Tournament')
  //     .valueChanges().pipe(map(items => { //first map
  //       return items.map(item => { //second map
  //         return item.DetectedA;
  //       })
  //     })).subscribe(data => {
  //         this.storeTimesStart(data);
  //         this.DurationAll(this.StartToArray,this.EndToArray);
  //       })

  //     //retrieves all the times when Maze C was triggered to find the avarage
  //     this.plotservice.getEntireSet('Tournament')
  //     .valueChanges().pipe(map(items => { //first map
  //       return items.map(item => { //second map
  //         return item.DetectedC;
  //       })
  //     })).subscribe(data => {
  //         this.storeTimesEnd(data);

  //     })

  // }

  /* function that finds the difference between the times of all the trials
  *@param timesStart: array that stores all Maze A times in correct date form
  *@param timesEnd: array that stores all Maze C times in correct date form
  */
  DurationAllAB(timesStart, timesEnd) {
    var A = timesEnd
    var B = timesStart

    for (let i = 0; i < A.length; i++) {
      var diff = A[i].getTime() - B[i].getTime();
      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;

      if (ss < 10) { //this check puts the time in the correct format
        this.durationSessionA.push("0" + hh + ":0" + mm + ":0" + ss);
      }
      else {
        this.durationSessionA.push("0" + hh + ":0" + mm + ":" + ss);
      }
    }
  }

  /* function that finds the difference between the times of all the trials
  *@param timesStart: array that stores all Maze A times in correct date form
  *@param timesEnd: array that stores all Maze C times in correct date form
  */
  DurationAllBC(timesStart, timesEnd) {
    var A = timesEnd
    var B = timesStart

    for (let i = 0; i < A.length; i++) {
      var diff = A[i].getTime() - B[i].getTime();
      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;

      if (ss < 10) { //this check puts the time in the correct format
        this.durationSessionB.push("0" + hh + ":0" + mm + ":0" + ss);
      }
      else {
        this.durationSessionB.push("0" + hh + ":0" + mm + ":" + ss);
      }
    }

  }




}
