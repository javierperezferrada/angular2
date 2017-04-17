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
  return this.http.get(
  `${this.config.BASE_URL}/api/v1/db/m/projects`,
{headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'Authorization':Authorization,'sb-app-secret':this.config.APP_SECRET})
});
}

getProject(id: string):Observable<Response>{
console.log("id %s",id);
var Authorization = "Bearer "+JSON.parse(localStorage.getItem("currentUser")).token;
return this.http.get(
`${this.config.BASE_URL}/api/v1/db/m/projects/`+id,
{headers:new Headers({'Content-Type':'application/json','sb-app-id':this.config.APP_ID,'Authorization':Authorization,'sb-app-secret':this.config.APP_SECRET})
});
}
