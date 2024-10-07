import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/models/Member';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }


  getAllMembers(): Observable<Member[]> {
    // envoyer une requête http vers le back
    return this.http.get< Member[] > ('http://localhost:3000/members') ;
  }

  add(m:Member): Observable<void> {
    return this.http.post<void>("http://localhost:3000/members", m);
  }

  deleteMember(id: String): Observable<void>
  {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }

  getMemberById(id: String): Observable<Member>
  {
    return this.http.get< Member > (`http://localhost:3000/members/${id}`) ;
  }


  // editMember(id: String): Observable<void>
  // {
  //   return this.http.put<>(`http://localhost:3000/`);
  // }
  updateMember(id: String, m: Member): Observable<void>
  {
    return this.http.put<void>(`http://localhost:3000/members/${id}`, m);
  }

}
