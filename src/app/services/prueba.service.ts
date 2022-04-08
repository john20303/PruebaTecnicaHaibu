import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private Url = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  getUsers() {
    return this._http.get<User[]>(`${this.Url}`);
  }

  userById(id: any): Observable<any> {
    return this._http.get(`${this.Url}/${id}`);
  }
}
