import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './add-subject/subject';
import { User } from './add-user/user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  // public insertSubject(subjectName:string, coef:BigInteger){
  //   const header = new HttpHeader
  //   this.http.post("http://localhost:8080/subject/createSubject");
  // }

  // **********SUBJECT FUNCTION************
  public getSubjects():Observable<any>{
    // const header = new HttpHeaders({Authorization: 'Basic '+btoa('') })
    return this.http.get("http://localhost:8080/subject/getAllSubjects");
  }

  public createSubject(subject:Subject): Observable<any>{
    return this.http.post("http://localhost:8080/subject/createSubject", subject);
  }

  public updateSubject(subject:Subject): Observable<any>{
    return this.http.put("http://localhost:8080/subject/updateSubject", subject);
  }

  // public updateSubject(subjectId:String, subject:Subject): Observable<any>{
  //   return this.http.put("http://localhost:8080/subject/updateSubject/"+subjectId, subject);
  // }
  public deleteSubject(subjectId:String): Observable<any>{
    return this.http.delete("http://localhost:8080/subject/deleteSubject/"+subjectId);
  }

  // **********USER FUNCTION************
  public getUsers():Observable<any>{
    // const header = new HttpHeaders({Authorization: 'Basic '+btoa('') })
    return this.http.get("http://localhost:8080/user/getAllUsers");
  }

  public createUser(user:User): Observable<any>{
    return this.http.post("http://localhost:8080/user/createUser", user);
  }

  public updateUser(user:User): Observable<any>{
    return this.http.put("http://localhost:8080/user/updateUser", user);
  }

  public deleteUser(userId:string): Observable<any>{
    return this.http.delete("http://localhost:8080/user/deleteUser/"+userId);
  }

}
