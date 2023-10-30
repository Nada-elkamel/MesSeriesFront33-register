import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: any; 

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
