import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) { }
  public get<T>(url: string): Promise<T>{
    return new Promise((resolve, reject)=>{
      this.httpClient.get<T>(url).subscribe({
        next(value){
          resolve(value);
        },
        error(err){
          reject(err);
          
        },
      })

    })
  }
}
  

