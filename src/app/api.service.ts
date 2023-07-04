import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  api():Observable<any>{
    return this.http.get<any[]>('http://universities.hipolabs.com/search?country=United+States').pipe(map((response:any)=>
    { for (let x of response){
      if( x['state-province'] === null){
        x['state-province'] = '';
      }
    }
    
    return response

    }))
  }
  // search(value:any, Keyword:string){
  //   console.log(value)
  //   return value.filter((search: { name: string; })=>{
  //     return search.name.toLowerCase().indexOf(Keyword.toLowerCase())>-1
  //   })
  // }
}
