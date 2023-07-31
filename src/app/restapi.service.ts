import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  // public insertSubject(subjectName:string, coef:BigInteger){
  //   const header = new HttpHeader
  //   this.http.post("http://localhost:8080/subject/createSubject");
  // }

  public getSubjects():Observable<any>{
    // const header = new HttpHeaders({Authorization: 'Basic '+btoa('') })
    return this.http.get("http://localhost:8080/subject/getAllSubjects");
  }
}
