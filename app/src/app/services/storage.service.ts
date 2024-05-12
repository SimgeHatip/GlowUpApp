import {Inject, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/common';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  clean(): void {
    if (this.document?.defaultView?.sessionStorage) {
      this.document.defaultView.sessionStorage.clear();
    }
  }

  public saveUser(user: any): void {
    if (this.document?.defaultView?.sessionStorage) {
      this.document.defaultView.sessionStorage.removeItem(USER_KEY);
      this.document.defaultView.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  public getUser(): any {
    if (this.document?.defaultView?.sessionStorage) {
      const user = this.document.defaultView.sessionStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
    }

    return {};
  }

  public isLoggedIn(): boolean {
    if (this.document?.defaultView?.sessionStorage) {
      const user = this.document.defaultView.sessionStorage.getItem(USER_KEY);
      return !!user;
    }

    return false;
  }
}
