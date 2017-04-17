import {Injectable, Inject} from "@angular/core";
import {AppConfig} from "../../../app/app.module";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";


interface expense{
  name:string,
  description:string
}

@Injectable()

export class ExpenseReportService {

  constructor(@Inject ('APP_CONFIG_TOKEN') private config:AppConfig, private http:Http){
  }

add(formData:expense):Observable<Response>{
  var Authorization = "Bearer "+JSON.parse(localStorage.getItem("currentUser")).token;
  return this.http.post(
  `${this.config.BASE_URL}/api/v1/db/m/expense`,
JSON.stringify(formData),
{headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'Authorization':Authorization,'sb-app-secret':this.config.APP_SECRET})
});
}
getExpense():Observable<Response>{
  var Authorization = "Bearer "+JSON.parse(localStorage.getItem("currentUser")).token;
  return this.http.get(
    `${this.config.BASE_URL}/api/v1/db/m/expense`,
    {headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'Authorization':Authorization,'sb-app-secret':this.config.APP_SECRET}) 
  });
}

}