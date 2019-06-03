import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/restresponse';
import { Word } from '../model/word';
@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  // URL_API = environment.URL_API;
  private URL_API="http://localhost:9059/worduserapi/"
  constructor(private http: HttpClient) { 
  }

  getAllWord(auth_token): Observable<RestResponse> {
    return this.http.get<RestResponse>(this.URL_API, { headers: new HttpHeaders().append('Authorization', `Bearer ${auth_token}`)});
  }
  getWordFromId(id: number,auth_token:any): Observable<RestResponse> {
    // const url = `${this.URL_API}+${id}`;
    return this.http.get<RestResponse>(this.URL_API + id, { headers: new HttpHeaders().append('Authorization', `Bearer ${auth_token}`)});
  }
  // postArticle(word:Word) {
  //   return this.http.post<RestResponse>(this.URL_API, word);
  // }

  // putArticle(id: number, article: Article) {
  //   return this.http.put<RestResponse>(this.URL_API + id, article);
  // }

  // deleteArticle(id: number) {
  //   return this.http.delete<RestResponse>(this.URL_API + id);
  // }
}