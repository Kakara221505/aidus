import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Select2Option, Select2UpdateEvent } from 'ng-select2-component';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  documentForm!:FormGroup
  fetching: boolean = false;
  message:any
 
  data: any;
  type:any='sms';
  url: any;
  addressList: any;
  selectedCoin: any;
  text: any;
  phonelist: any;
  countryList:any
  constructor(public api:AuthService, private formbuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.documentForm=this.formbuilder.group({
      firstName:['',Validators.required],
      middlName:[''],
      lastName:['',Validators.required],
      address:[''],
      city:[''],
      country:[''],
      mobileNo:['',Validators.required],
      countryCode:['',Validators.required],

    })
    // this.phoneNumberList()
    this.getPhoneList()
    console.log("kkkkkk",this.addressList)
    this.userData()
  }
  get f(){
    return this.documentForm.controls
  }
  getPhoneList(){
    
    this.api.listPhones().subscribe((res:any)=>{
     
        
      this.addressList = res.data;
      this.phonelist=this.addressList.map((addressList:any)=>addressList.ISD)

   
   console.log("kkkkkk",this.phonelist)

     })
  }

  postPersonalDocument() {
    this.fetching = true;
    this.api.postPersonalDocument(this.documentForm.value).subscribe((res: any) => {
      this.fetching = true;
      this.data=res.status
      if(this.data=="success"){
        this.api.verifyOtpPhone(this.type,this.url).subscribe((res: any) => {
          this.fetching = true; 
          // this.successmessage=res.message
          // console.log(this.successmessage)
       
          
      },
      error => {
        this.fetching = true; 
        this.handleError(error);
       
      }
      );
      }
      console.log("hjf",this.data)
     
      this.router.navigate(['auth/otp'])

   }, 
  error => {
    this.handleError(error);
    this.router.navigate(['auth/personal-information'])
    
  } );

  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
 

 
  }

  handleError(error:any) {
    this.fetching = true;
    this.message=error.error.status
    console.log("abc",this.message);
  }

  addAddress(event:any){
    this.selectedCoin=event.target.value  
    console.log("vivek",this.selectedCoin)

  
 

};

userData(){
   
   
  this.api.getUserInfo().subscribe((res:any)=>{
   
      this.data=res.data
     console.log("vivek",this.data)
     
   
  })
}



// phoneNumberList(){
//   let phone:any=[]
//   for(let phoneNo of this.option){
//    let listCountryCode={
//       label:phoneNo.value + ' - '+ phoneNo.label,
//       value:phoneNo.value,
//       code:phoneNo.code
//     }
//     let phoneList=phoneNo.value + ' - '+ phoneNo.label;
    
//    phone.push(listCountryCode)
   
//   }
//   console.log(JSON.stringify(phone))

// }




data1:any= [
  {
    options:[{"label":"+93 - Afghanistan 93","value":"+93","code":"AF"},{"label":"+358 - Aland Islands","value":"+358","code":"AX"},{"label":"+355 - Albania","value":"+355","code":"AL"},{"label":"+213 - Algeria","value":"+213","code":"DZ"},{"label":"+1684 - AmericanSamoa","value":"+1684","code":"AS"},{"label":"+376 - Andorra","value":"+376","code":"AD"},{"label":"+244 - Angola","value":"+244","code":"AO"},{"label":"+1264 - Anguilla","value":"+1264","code":"AI"},{"label":"+672 - Antarctica","value":"+672","code":"AQ"},{"label":"+1268 - Antigua and Barbuda","value":"+1268","code":"AG"},{"label":"+54 - Argentina","value":"+54","code":"AR"},{"label":"+374 - Armenia","value":"+374","code":"AM"},{"label":"+297 - Aruba","value":"+297","code":"AW"},{"label":"+61 - Australia","value":"+61","code":"AU"},{"label":"+43 - Austria","value":"+43","code":"AT"},{"label":"+994 - Azerbaijan","value":"+994","code":"AZ"},{"label":"+1242 - Bahamas","value":"+1242","code":"BS"},{"label":"+973 - Bahrain","value":"+973","code":"BH"},{"label":"+880 - Bangladesh","value":"+880","code":"BD"},{"label":"+1246 - Barbados","value":"+1246","code":"BB"},{"label":"+375 - Belarus","value":"+375","code":"BY"},{"label":"+32 - Belgium","value":"+32","code":"BE"},{"label":"+501 - Belize","value":"+501","code":"BZ"},{"label":"+229 - Benin","value":"+229","code":"BJ"},{"label":"+1441 - Bermuda","value":"+1441","code":"BM"},{"label":"+975 - Bhutan","value":"+975","code":"BT"},{"label":"+591 - Bolivia, Plurinational State of","value":"+591","code":"BO"},{"label":"+387 - Bosnia and Herzegovina","value":"+387","code":"BA"},{"label":"+267 - Botswana","value":"+267","code":"BW"},{"label":"+55 - Brazil","value":"+55","code":"BR"},{"label":"+246 - British Indian Ocean Territory","value":"+246","code":"IO"},{"label":"+673 - Brunei Darussalam","value":"+673","code":"BN"},{"label":"+359 - Bulgaria","value":"+359","code":"BG"},{"label":"+226 - Burkina Faso","value":"+226","code":"BF"},{"label":"+257 - Burundi","value":"+257","code":"BI"},{"label":"+855 - Cambodia","value":"+855","code":"KH"},{"label":"+237 - Cameroon","value":"+237","code":"CM"},{"label":"+1 - Canada","value":"+1","code":"CA"},{"label":"+238 - Cape Verde","value":"+238","code":"CV"},{"label":"+ 345 - Cayman Islands","value":"+ 345","code":"KY"},{"label":"+236 - Central African Republic","value":"+236","code":"CF"},{"label":"+235 - Chad","value":"+235","code":"TD"},{"label":"+56 - Chile","value":"+56","code":"CL"},{"label":"+86 - China","value":"+86","code":"CN"},{"label":"+61 - Christmas Island","value":"+61","code":"CX"},{"label":"+61 - Cocos (Keeling) Islands","value":"+61","code":"CC"},{"label":"+57 - Colombia","value":"+57","code":"CO"},{"label":"+269 - Comoros","value":"+269","code":"KM"},{"label":"+242 - Congo","value":"+242","code":"CG"},{"label":"+243 - Congo, The Democratic Republic of the Congo","value":"+243","code":"CD"},{"label":"+682 - Cook Islands","value":"+682","code":"CK"},{"label":"+506 - Costa Rica","value":"+506","code":"CR"},{"label":"+225 - Cote d'Ivoire","value":"+225","code":"CI"},{"label":"+385 - Croatia","value":"+385","code":"HR"},{"label":"+53 - Cuba","value":"+53","code":"CU"},{"label":"+357 - Cyprus","value":"+357","code":"CY"},{"label":"+420 - Czech Republic","value":"+420","code":"CZ"},{"label":"+45 - Denmark","value":"+45","code":"DK"},{"label":"+253 - Djibouti","value":"+253","code":"DJ"},{"label":"+1767 - Dominica","value":"+1767","code":"DM"},{"label":"+1849 - Dominican Republic","value":"+1849","code":"DO"},{"label":"+593 - Ecuador","value":"+593","code":"EC"},{"label":"+20 - Egypt","value":"+20","code":"EG"},{"label":"+503 - El Salvador","value":"+503","code":"SV"},{"label":"+240 - Equatorial Guinea","value":"+240","code":"GQ"},{"label":"+291 - Eritrea","value":"+291","code":"ER"},{"label":"+372 - Estonia","value":"+372","code":"EE"},{"label":"+251 - Ethiopia","value":"+251","code":"ET"},{"label":"+500 - Falkland Islands (Malvinas)","value":"+500","code":"FK"},{"label":"+298 - Faroe Islands","value":"+298","code":"FO"},{"label":"+679 - Fiji","value":"+679","code":"FJ"},{"label":"+358 - Finland","value":"+358","code":"FI"},{"label":"+33 - France","value":"+33","code":"FR"},{"label":"+594 - French Guiana","value":"+594","code":"GF"},{"label":"+689 - French Polynesia","value":"+689","code":"PF"},{"label":"+241 - Gabon","value":"+241","code":"GA"},{"label":"+220 - Gambia","value":"+220","code":"GM"},{"label":"+995 - Georgia","value":"+995","code":"GE"},{"label":"+49 - Germany","value":"+49","code":"DE"},{"label":"+233 - Ghana","value":"+233","code":"GH"},{"label":"+350 - Gibraltar","value":"+350","code":"GI"},{"label":"+30 - Greece","value":"+30","code":"GR"},{"label":"+299 - Greenland","value":"+299","code":"GL"},{"label":"+1473 - Grenada","value":"+1473","code":"GD"},{"label":"+590 - Guadeloupe","value":"+590","code":"GP"},{"label":"+1671 - Guam","value":"+1671","code":"GU"},{"label":"+502 - Guatemala","value":"+502","code":"GT"},{"label":"+44 - Guernsey","value":"+44","code":"GG"},{"label":"+224 - Guinea","value":"+224","code":"GN"},{"label":"+245 - Guinea-Bissau","value":"+245","code":"GW"},{"label":"+595 - Guyana","value":"+595","code":"GY"},{"label":"+509 - Haiti","value":"+509","code":"HT"},{"label":"+379 - Holy See (Vatican City State)","value":"+379","code":"VA"},{"label":"+504 - Honduras","value":"+504","code":"HN"},{"label":"+852 - Hong Kong","value":"+852","code":"HK"},{"label":"+36 - Hungary","value":"+36","code":"HU"},{"label":"+354 - Iceland","value":"+354","code":"IS"},{"label":"+91 - India","value":"+91","code":"IN"},{"label":"+62 - Indonesia","value":"+62","code":"ID"},{"label":"+98 - Iran, Islamic Republic of Persian Gulf","value":"+98","code":"IR"},{"label":"+964 - Iraq","value":"+964","code":"IQ"},{"label":"+353 - Ireland","value":"+353","code":"IE"},{"label":"+44 - Isle of Man","value":"+44","code":"IM"},{"label":"+972 - Israel","value":"+972","code":"IL"},{"label":"+39 - Italy","value":"+39","code":"IT"},{"label":"+1876 - Jamaica","value":"+1876","code":"JM"},{"label":"+81 - Japan","value":"+81","code":"JP"},{"label":"+44 - Jersey","value":"+44","code":"JE"},{"label":"+962 - Jordan","value":"+962","code":"JO"},{"label":"+77 - Kazakhstan","value":"+77","code":"KZ"},{"label":"+254 - Kenya","value":"+254","code":"KE"},{"label":"+686 - Kiribati","value":"+686","code":"KI"},{"label":"+850 - Korea, Democratic People's Republic of Korea","value":"+850","code":"KP"},{"label":"+82 - Republic of South Korea","value":"+82","code":"KR"},{"label":"+965 - Kuwait","value":"+965","code":"KW"},{"label":"+996 - Kyrgyzstan","value":"+996","code":"KG"},{"label":"+856 - Laos","value":"+856","code":"LA"},{"label":"+371 - Latvia","value":"+371","code":"LV"},{"label":"+961 - Lebanon","value":"+961","code":"LB"},{"label":"+266 - Lesotho","value":"+266","code":"LS"},{"label":"+231 - Liberia","value":"+231","code":"LR"},{"label":"+218 - Libyan Arab Jamahiriya","value":"+218","code":"LY"},{"label":"+423 - Liechtenstein","value":"+423","code":"LI"},{"label":"+370 - Lithuania","value":"+370","code":"LT"},{"label":"+352 - Luxembourg","value":"+352","code":"LU"},{"label":"+853 - Macao","value":"+853","code":"MO"},{"label":"+389 - Macedonia","value":"+389","code":"MK"},{"label":"+261 - Madagascar","value":"+261","code":"MG"},{"label":"+265 - Malawi","value":"+265","code":"MW"},{"label":"+60 - Malaysia","value":"+60","code":"MY"},{"label":"+960 - Maldives","value":"+960","code":"MV"},{"label":"+223 - Mali","value":"+223","code":"ML"},{"label":"+356 - Malta","value":"+356","code":"MT"},{"label":"+692 - Marshall Islands","value":"+692","code":"MH"},{"label":"+596 - Martinique","value":"+596","code":"MQ"},{"label":"+222 - Mauritania","value":"+222","code":"MR"},{"label":"+230 - Mauritius","value":"+230","code":"MU"},{"label":"+262 - Mayotte","value":"+262","code":"YT"},{"label":"+52 - Mexico","value":"+52","code":"MX"},{"label":"+691 - Micronesia, Federated States of Micronesia","value":"+691","code":"FM"},{"label":"+373 - Moldova","value":"+373","code":"MD"},{"label":"+377 - Monaco","value":"+377","code":"MC"},{"label":"+976 - Mongolia","value":"+976","code":"MN"},{"label":"+382 - Montenegro","value":"+382","code":"ME"},{"label":"+1664 - Montserrat","value":"+1664","code":"MS"},{"label":"+212 - Morocco","value":"+212","code":"MA"},{"label":"+258 - Mozambique","value":"+258","code":"MZ"},{"label":"+95 - Myanmar","value":"+95","code":"MM"},{"label":"+264 - Namibia","value":"+264","code":"NA"},{"label":"+674 - Nauru","value":"+674","code":"NR"},{"label":"+977 - Nepal","value":"+977","code":"NP"},{"label":"+31 - Netherlands","value":"+31","code":"NL"},{"label":"+599 - Netherlands Antilles","value":"+599","code":"AN"},{"label":"+687 - New Caledonia","value":"+687","code":"NC"},{"label":"+64 - New Zealand","value":"+64","code":"NZ"},{"label":"+505 - Nicaragua","value":"+505","code":"NI"},{"label":"+227 - Niger","value":"+227","code":"NE"},{"label":"+234 - Nigeria","value":"+234","code":"NG"},{"label":"+683 - Niue","value":"+683","code":"NU"},{"label":"+672 - Norfolk Island","value":"+672","code":"NF"},{"label":"+1670 - Northern Mariana Islands","value":"+1670","code":"MP"},{"label":"+47 - Norway","value":"+47","code":"NO"},{"label":"+968 - Oman","value":"+968","code":"OM"},{"label":"+92 - Pakistan","value":"+92","code":"PK"},{"label":"+680 - Palau","value":"+680","code":"PW"},{"label":"+970 - Palestinian Territory, Occupied","value":"+970","code":"PS"},{"label":"+507 - Panama","value":"+507","code":"PA"},{"label":"+675 - Papua New Guinea","value":"+675","code":"PG"},{"label":"+595 - Paraguay","value":"+595","code":"PY"},{"label":"+51 - Peru","value":"+51","code":"PE"},{"label":"+63 - Philippines","value":"+63","code":"PH"},{"label":"+872 - Pitcairn","value":"+872","code":"PN"},{"label":"+48 - Poland","value":"+48","code":"PL"},{"label":"+351 - Portugal","value":"+351","code":"PT"},{"label":"+1939 - Puerto Rico","value":"+1939","code":"PR"},{"label":"+974 - Qatar","value":"+974","code":"QA"},{"label":"+40 - Romania","value":"+40","code":"RO"},{"label":"+7 - Russia","value":"+7","code":"RU"},{"label":"+250 - Rwanda","value":"+250","code":"RW"},{"label":"+262 - Reunion","value":"+262","code":"RE"},{"label":"+590 - Saint Barthelemy","value":"+590","code":"BL"},{"label":"+290 - Saint Helena, Ascension and Tristan Da Cunha","value":"+290","code":"SH"},{"label":"+1869 - Saint Kitts and Nevis","value":"+1869","code":"KN"},{"label":"+1758 - Saint Lucia","value":"+1758","code":"LC"},{"label":"+590 - Saint Martin","value":"+590","code":"MF"},{"label":"+508 - Saint Pierre and Miquelon","value":"+508","code":"PM"},{"label":"+1784 - Saint Vincent and the Grenadines","value":"+1784","code":"VC"},{"label":"+685 - Samoa","value":"+685","code":"WS"},{"label":"+378 - San Marino","value":"+378","code":"SM"},{"label":"+239 - Sao Tome and Principe","value":"+239","code":"ST"},{"label":"+966 - Saudi Arabia","value":"+966","code":"SA"},{"label":"+221 - Senegal","value":"+221","code":"SN"},{"label":"+381 - Serbia","value":"+381","code":"RS"},{"label":"+248 - Seychelles","value":"+248","code":"SC"},{"label":"+232 - Sierra Leone","value":"+232","code":"SL"},{"label":"+65 - Singapore","value":"+65","code":"SG"},{"label":"+421 - Slovakia","value":"+421","code":"SK"},{"label":"+386 - Slovenia","value":"+386","code":"SI"},{"label":"+677 - Solomon Islands","value":"+677","code":"SB"},{"label":"+252 - Somalia","value":"+252","code":"SO"},{"label":"+27 - South Africa","value":"+27","code":"ZA"},{"label":"+211 - South Sudan","value":"+211","code":"SS"},{"label":"+500 - South Georgia and the South Sandwich Islands","value":"+500","code":"GS"},{"label":"+34 - Spain","value":"+34","code":"ES"},{"label":"+94 - Sri Lanka","value":"+94","code":"LK"},{"label":"+249 - Sudan","value":"+249","code":"SD"},{"label":"+597 - Surilabel","value":"+597","code":"SR"},{"label":"+47 - Svalbard and Jan Mayen","value":"+47","code":"SJ"},{"label":"+268 - Swaziland","value":"+268","code":"SZ"},{"label":"+46 - Sweden","value":"+46","code":"SE"},{"label":"+41 - Switzerland","value":"+41","code":"CH"},{"label":"+963 - Syrian Arab Republic","value":"+963","code":"SY"},{"label":"+886 - Taiwan","value":"+886","code":"TW"},{"label":"+992 - Tajikistan","value":"+992","code":"TJ"},{"label":"+255 - Tanzania, United Republic of Tanzania","value":"+255","code":"TZ"},{"label":"+66 - Thailand","value":"+66","code":"TH"},{"label":"+670 - Timor-Leste","value":"+670","code":"TL"},{"label":"+228 - Togo","value":"+228","code":"TG"},{"label":"+690 - Tokelau","value":"+690","code":"TK"},{"label":"+676 - Tonga","value":"+676","code":"TO"},{"label":"+1868 - Trinidad and Tobago","value":"+1868","code":"TT"},{"label":"+216 - Tunisia","value":"+216","code":"TN"},{"label":"+90 - Turkey","value":"+90","code":"TR"},{"label":"+993 - Turkmenistan","value":"+993","code":"TM"},{"label":"+1649 - Turks and Caicos Islands","value":"+1649","code":"TC"},{"label":"+688 - Tuvalu","value":"+688","code":"TV"},{"label":"+256 - Uganda","value":"+256","code":"UG"},{"label":"+380 - Ukraine","value":"+380","code":"UA"},{"label":"+971 - United Arab Emirates","value":"+971","code":"AE"},{"label":"+44 - United Kingdom","value":"+44","code":"GB"},{"label":"+1 - United States","value":"+1","code":"US"},{"label":"+598 - Uruguay","value":"+598","code":"UY"},{"label":"+998 - Uzbekistan","value":"+998","code":"UZ"},{"label":"+678 - Vanuatu","value":"+678","code":"VU"},{"label":"+58 - Venezuela, Bolivarian Republic of Venezuela","value":"+58","code":"VE"},{"label":"+84 - Vietnam","value":"+84","code":"VN"},{"label":"+1284 - Virgin Islands, British","value":"+1284","code":"VG"},{"label":"+1340 - Virgin Islands, U.S.","value":"+1340","code":"VI"},{"label":"+681 - Wallis and Futuna","value":"+681","code":"WF"},{"label":"+967 - Yemen","value":"+967","code":"YE"},{"label":"+260 - Zambia","value":"+260","code":"ZM"},{"label":"+263 - Zimbabwe","value":"+263","code":"ZW"}]
     

  }

  ]

  change(key: string, event: Event) {
    console.log(key, event);
  }
  search(text: string) {
    this.data1 = text
        ? (JSON.parse(JSON.stringify(this.data1)) as Select2Option[]).filter(
              options => options.label.toLowerCase().indexOf(text.toLowerCase()) > -1,
          )
        : JSON.parse(JSON.stringify(this.data1));
  }
  update(key: string, event: Select2UpdateEvent<any>) {
    console.log(event.value);
  }
  value1 = '+82';

}
