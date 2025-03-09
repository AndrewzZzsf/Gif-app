import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifSearchResponse } from '../interfaces/gifs.interfaces.ts';

@Injectable({ providedIn: 'root' })
export class gifService {

  private apiKey: string = '3xfIVuZ6tdy0ZouQFg0cBJJv0G8yfY6U';
  private _tagHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    if(!this.tagHistory[0]==null)return;
    this.searchTag(this._tagHistory[0])
  }

  get tagHistory() {
    return [...this._tagHistory]
  }

  private orderHistory(tag: string) {

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(arrayTag => arrayTag != tag) /* para cada elemento del arreglo (arrayTag)
                                                                                 lo va a comparar y el que no sea igual lo
                                                                                 pondra en el nuevo arreglo, si es igual no lo
                                                                                 incluirá*/
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 11);
    this.saveLocalStorage();
  }

  private saveLocalStorage(){
    localStorage.setItem('history',JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage(){
    if(!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!)
  }

  searchTag(tag: string): void {
    if (tag.length >= 1) {
      this.orderHistory(tag)

      const params: HttpParams = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '12')
        .set('q', tag)

      this.http.get<GifSearchResponse>('https://api.giphy.com/v1/gifs/search?', { params }).subscribe(res => {
       const resp= res.data;
       console.log(resp)
      this.gifList = resp
      console.log({gifList :this.gifList});})


    }



    console.log(this._tagHistory)
  }

}
