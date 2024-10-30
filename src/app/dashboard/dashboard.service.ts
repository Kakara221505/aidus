
import { HttpClient,HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { io } from "socket.io-client";
// import * as io from "socket.io-client";
import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';

// import * as SockJS from "sockjs-client";
// import * as io from 'socket.io-client';
const w = () => {
  return window;
};

@Injectable({
  providedIn: 'root'
  
})


export class DashboardService {
  //  SockJs = require("sockjs-client");
  //  Stomp = require("stompjs");
  get window(): any {
    return w();
  }
  // baseUrl='https://aidus-api.immodesta.com/user-module/user';
  baseUrl='https://api.aidus.io/user-module/user'
  token:any
  socket: any;
  url="ws://65.2.7.223:8070/price-data-server"
  ws: any;
  disabled: boolean | undefined;
  //  socket = io.connect("http://localhost:4000");

  constructor(private http: HttpClient) {
    this.token= JSON.parse(window.sessionStorage.getItem('user') || '{}');
    // this.socket=io(this.url)
   

   
    // this.socket = io.connect(this.url);
  
  }


 

  isLoggedin(){
    let user_id=window.sessionStorage.getItem('user')
    if (user_id){
      return true
    } else {
      return false
    }
  }

  getData(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-all-transaction/` + page+'/'+sort+'/'+filter, httpOptions);
  }

 

  getDepositeData(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-user-deposit-transactions/` + page+'/'+sort+'/'+filter, httpOptions);
  }

  getWithdrawData(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-withdrawl-history/` + page+'/'+sort+'/'+filter, httpOptions);
  }

  getStackData(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get/stake/history/` + page+'/'+sort+'/'+filter, httpOptions);
  }

  getambessdor(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-ambassador-history/` + page+'/'+sort+'/'+filter, httpOptions);
  }

  getReferralData(page: number,sort:any,filter:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-refer-history/` + page+'/'+sort+'/'+filter, httpOptions);
  }


  getproductData(page: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-all-products/` + page, httpOptions);
  }


  earnStackData(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-product-by-id/`+id,httpOptions)
   
  }
  earnStackData1(page:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get/active/stake/`+page,httpOptions)
   
  }


  stackHistory(id:any,page:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get/stake/interest/history/`+id+'/'+page, httpOptions);
  }


  getwithdrawDetails(event: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-withdrawl-minimum-limit/` + event, httpOptions);
  }

  postData(url: any, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.post(`${this.baseUrl}` + url, body, httpOptions);
  }

  postDataMettamask(url: any, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.post(`${this.baseUrl}` + url, body, httpOptions);
  }

  meetaMask(credentials: {coin: string}) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    const coin=(credentials.coin)
    return this.http.get(`${this.baseUrl}/get-metamask-central-wallet?coin=${coin}`, httpOptions);
  }
  googleqrCode() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.get(`${this.baseUrl}/generate-google-qr-code`,httpOptions);
  }


  addwithdraw(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/withdraw-balance`,body, httpOptions);
  }


  getDataDashboard() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.get(`${this.baseUrl}/get-wallet-balance/`,httpOptions);
  }

  getGraph(day:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.get(`${this.baseUrl}/get-total-value-asset/`+day,httpOptions);
  }

  verifyOtp(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verify-stake-user`,body, httpOptions);
  }

  verifyOtpEmail(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verify-stake-user`,body, httpOptions);
  }

  verifyOtpPhone(id:any,type:any,body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/get/otp/withdrawl-balance/`+id+'/'+type,body, httpOptions);
  }
  verifyOtpPhoneWhitelist(id:any,type:any,body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/get/otp/whitelist/`+id+'/'+type,body, httpOptions);
  }

  verifyOtpEmailWhitelist(id:any,type:any,body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/get/otp/whitelist/`+id+'/'+type,body, httpOptions);
  }

  verifyOtp1(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verify-stake-user-otp`,body, httpOptions);
  }

  withdrawSubmit(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verified/withdrawl-balance/`,body, httpOptions);
  }

  addAddress(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/add-whitelist-address/`,body, httpOptions);
  }

  listCoin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-coin-list`,httpOptions)
   
  }

  getWithdraw(id:any,type:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get/coin/whitelist/`+id+'/'+type,httpOptions)
   
  }

  listAddress() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-whitelist/`,httpOptions)
   
  }

  whiteList(address:any,body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verified/whitelist/`+address,body, httpOptions);
  }


  exchangeRate() {
   
    
    // return this.http.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1');
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
  }

  exchangeRate1() {
    
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
  }

  exchangeRate2() {
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd');
  }


  refrelData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.get(`${this.baseUrl}/get-refer-list`,httpOptions);
  }


  histroyPdf(date:any,date2:any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/pdf',
        Accept: '*/*',
        observe: 'response',
        'X-Custom-Token': `${this.token}`,
      });
  
    
    return this.http.get(`${this.baseUrl}/get-transaction-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
    });
    responseType:'arraybuffer'
  }

  depositeHistroyPdf(date:any,date2:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      Accept: '*/*',
      observe: 'response',
      'X-Custom-Token': `${this.token}`,
    });

  
  return this.http.get(`${this.baseUrl}/get-deposit-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
  });
  responseType:'arraybuffer'
}


withdrawHistroyPdf(date:any,date2:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/pdf',
    Accept: '*/*',
    observe: 'response',
    'X-Custom-Token': `${this.token}`,
  });


return this.http.get(`${this.baseUrl}/get-withdrawal-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
});
responseType:'arraybuffer'
}

stakingHistroyPdf(date:any,date2:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/pdf',
    Accept: '*/*',
    observe: 'response',
    'X-Custom-Token': `${this.token}`,
  });


return this.http.get(`${this.baseUrl}/get-staking-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
});
responseType:'arraybuffer'
}

ambessdorHistroyPdf(date:any,date2:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/pdf',
    Accept: '*/*',
    observe: 'response',
    'X-Custom-Token': `${this.token}`,
  });


return this.http.get(`${this.baseUrl}/get-ambassador-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
});
responseType:'arraybuffer'
}

referralHistroyPdf(date:any,date2:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/pdf',
    Accept: '*/*',
    observe: 'response',
    'X-Custom-Token': `${this.token}`,
  });


return this.http.get(`${this.baseUrl}/get-refer-history-pdf/`+date+'/'+date2,{headers: headers,responseType: 'blob',
});
responseType:'arraybuffer'
}

stackIntrestPdf(id:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/pdf',
    Accept: '*/*',
    observe: 'response',
    'X-Custom-Token': `${this.token}`,
  });


return this.http.get(`${this.baseUrl}/get-stake-interest-history-pdf/`+id,{headers: headers,responseType: 'blob',
});
responseType:'arraybuffer'
}

 
  listen(eventName:string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data:any)=>{
        subscriber.next(data);
      })
    })
  }
  emit(eventName:string,data:any){
    this.socket(eventName,data);
  }

   connect() {
        // let socket = new SockJs(``);

        // let stompClient = Stomp.over(socket);

        // return stompClient;
        // let socket = new SockJS("https://aidus-api.immodesta.com/user-module/price-data-serve");
        // let that = this;
        
    }

    ethHash(url: any, body: any) {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-Custom-Token': `${this.token}`,
        }),
      };
      return this.http.post(`${this.baseUrl}` + url, body, httpOptions);
    }


    newsData(body: any) {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-Custom-Token': `${this.token}`,
        }),
      };
      return this.http.post(`${this.baseUrl}/add-newsletter/`,body, httpOptions);
    }


    rejectionReason(id:any) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Custom-Token': `${this.token}`,
        }),
      };
      return this.http.get(`${this.baseUrl}/get-user-rejection-document-desc/`+id,httpOptions)
     
    }
 


}
