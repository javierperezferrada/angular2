import {Injectable, Inject} from "@angular/core";
import {AppConfig} from "../../../app/app.module";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";


interface auth{
  token:string
}

@Injectable()

export class ProjectsService {

  constructor(@Inject ('APP_CONFIG_TOKEN') private config:AppConfig, private http:Http){
  }

getProjects():Observable<Response>{
  var Authorization = "Bearer "+JSON.parse(localStorage.getItem("currentUser")).token;
  console.log(Authorization);
  console.log(this.config.APP_ID);
  return this.http.get(
  `${this.config.BASE_URL}/api/v1/db/m/projects`,
{headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'Authorization':Authorization,'sb-app-secret':this.config.APP_SECRET})
});
}

login(formData:auth):Observable<Response>{
return this.http.post(
`${this.config.BASE_URL}/api/v1/auth/login`,
JSON.stringify(formData),
{headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'sb-app-secret':this.config.APP_SECRET})})
}

}
