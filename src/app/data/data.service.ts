import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(["Monthly", "Annual", "Lifetime"]);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    // the <> specifies what type of data the observable will return
    // return of(userSettings); -> this was only useful without http
    return this.http.post('https://putsreq.com/ip3ZBSQEdvepu9hPTavs', userSettings)
  }
}
