import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Subscription, switchMap, timer } from 'rxjs';
import { io } from "socket.io-client";
// import * as io from "socket.io-client";
import * as Stomp from 'stompjs';

import { DashboardService } from '../dashboard.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import * as SockJS from 'sockjs-client';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // @ViewChild("chart") chart: ChartComponent
  public chartOptions: Partial<ChartOptions> | any;
  depositData: any;
  fetching= false;
  day:any='10'
  xValues:any;
  yValues:any;
  AssetValue:any = [];
  AssetValue1:any  = [];
  public chart: any;
  depositData1: any;
  depositData2: any;
  depositData3: any;
  subscription !: Subscription;
  graph: any;
  dateValue: any;
  timeValue: any;
  s1:any
  dateValueFormat: any;
  eth: any;
  bitcoin: any;
  usdt: any;
  aidus: any;
  bitcoinPrice: any;
  ethPrice: any;
  usdtPrice: any;
  aidusPrice: any;
  constructor(public api:DashboardService,) { 
    Chart.register(...registerables);
   
  
  }

  ngOnInit(): void {
    // this.api.listen('test event').subscribe((data:any)=>{
    //   console.log("aidus",data)
    // })
   
    this.getDepositTransactionlist();
    this. getExchangeRate();
    this. getExchangeRate1();
    this. getExchangeRate2();
    this.socketJs()
    this. getAssetGraph(this.day);
    
    // this.createChart();
    // this.getChart()
   
  }

  socketJs(){
   
    let socket = new SockJS("https://aidus-api.immodesta.com/user-module/price-data-server")
    let stompclient = Stomp.over(socket);
     stompclient.connect({}, (frame) =>{
        //  console.log("nd",frame);
         this.fetching = true; 
         stompclient.subscribe("/get/live-price", (message:any) => {
          
          // console.log("vivek",JSON.parse(message.body))
          let priceData=JSON.parse(message.body)
          let dateValue=priceData.map((date:any)=>date.change24H)
          let datePrice=priceData.map((date:any)=>date.priceUsd)
          this.bitcoin=dateValue[0]
          this.eth=dateValue[1]
          this.usdt=dateValue[2]
          this.aidus=dateValue[3]
          this.bitcoinPrice=datePrice[0]
          this.ethPrice=datePrice[1]
          this.usdtPrice=datePrice[2]
          this.aidusPrice=datePrice[3]
        //  console.log("vivek",this.bitcoin,this.eth,this.usdt,this.aidus,this.bitcoinPrice,this.ethPrice,this.usdtPrice,this.aidusPrice)
         
        this.fetching = false; 
         
        });
       
       
     });
     this.fetching=false
   
 
    

   
    
  }

  createChart(){
  
   
  }
  getAssetGraph(text:any){
    console.log(this.day)
    this.api.getGraph(this.day).subscribe((res:any)=>{
      this.AssetValue=[];
      this.AssetValue1=[];
        this.graph=res.data
        console.log("viv",this.graph)
        this.dateValue=this.graph.map((date:any)=>date.date)
        this.timeValue=this.graph.map((date:any)=>date.value)
        this.graph=res.data.dateValue
        // console.log("viv",this.timeValue)
        
   this.getChart()
    })
    this.chart.destroy();
    if(this.day=='1'){
    this.api.getGraph(this.day).subscribe((res:any)=>{
      this.AssetValue=[];
      this.AssetValue1=[];
        this.graph=res.data.assetValue
       
        this.dateValue=this.graph.map((date:any)=>date.date)
        this.timeValue=this.graph.map((date:any)=>date.value)
   this.getChart()
       
      
    })
    this.chart.destroy();
  }
  if(this.day=='7'){
    this.api.getGraph(this.day).subscribe((res:any)=>{
      this.AssetValue=[];
      this.AssetValue1=[];
        this.graph=res.data.assetValue
       
        this.dateValue=this.graph.map((date:any)=>date.date)
        this.timeValue=this.graph.map((date:any)=>date.value)
   this.getChart()
        
      
    })
    this.chart.destroy();
  }
  if(this.day=='30'){
    this.api.getGraph(this.day).subscribe((res:any)=>{
      this.AssetValue=[];
      this.AssetValue1=[];
        this.graph=res.data.assetValue
      
        this.dateValue=this.graph.map((date:any)=>date.date)
        this.timeValue=this.graph.map((date:any)=>date.value)
   this.getChart()
        
    })
    this.chart.destroy();
  }
  if(this.day=='90'){
    this.api.getGraph(this.day).subscribe((res:any)=>{
      this.AssetValue=[];
      this.AssetValue1=[];
        this.graph=res.data.assetValue
      
        this.dateValue=this.graph.map((date:any)=>date.date)
        this.timeValue=this.graph.map((date:any)=>date.value)
   this.getChart()
        
    })
    this.chart.destroy();
  }
  // if(this.day=='360'){
  //   this.api.getGraph(this.day).subscribe((res:any)=>{
  //     this.AssetValue=[];
  //     this.AssetValue1=[];
  //       this.graph=res.data.assetValue
  //       console.log("viv",this.graph)
  //       this.dateValue=this.graph.map((date:any)=>date.date)
  //       this.timeValue=this.graph.map((date:any)=>date.value)
  //  this.getChart()
     

  //     console.log("viveghhk",this.dateValue)
  //     console.log("vivek",this.timeValue)
        
      
  //   })
  //   this.chart.destroy();
  // }
   
  }
  getChart(){
    
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.dateValue,
      
         datasets: [
          {
            label: "Asset Value",
            data: this.timeValue,
            backgroundColor: 'red',
            borderColor: "red",
            borderWidth:1,
          },
         
        ],
        
      },
      
      // options: {
      //   aspectRatio:2.5
      // }
      options: {
        aspectRatio:2.5,
        scales: {
          yAxes: {
            display:false
          }
        },
      },
     
    });
  }


  getDepositTransactionlist(){
    this.api.getDataDashboard().subscribe((res:any)=>{
      if(res){
        this.depositData=res.data

       
      }
    })

  }



  getExchangeRate(){
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.api.exchangeRate())
    ).subscribe((res:any) => {
    this.depositData1=res.ethereum
    // console.log("jds",this.depositData1)

  } );
   
  }

  getExchangeRate1(){
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.api.exchangeRate1())
    ).subscribe((res:any) => {
    this.depositData2=res.bitcoin
 
  });

  }

  getExchangeRate2(){
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.api.exchangeRate2())
    ).subscribe((res:any) => 
    {
      this.depositData3=res.tether
   
    }

    );


  }
  
}
