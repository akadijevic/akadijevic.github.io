import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable,from } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class authService {
  public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user =afAuth.authState;
   }

  login(email, password){
    var observableFromPromise = from(
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
  ) 
  return observableFromPromise;
}

isAuthenticated(): Observable<boolean> {
return this.user.pipe(map(user=>user && user.uid !== undefined));
}

logout() {
  this.afAuth.auth.signOut();
}
}

