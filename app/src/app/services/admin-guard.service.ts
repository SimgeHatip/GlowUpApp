import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private storageService: StorageService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean> {
        const id = this.storageService.getUser().id;

        return this.userService.getUser(id).pipe(
            map(user => {
                if (user.roles.some((role: any) => role.name === 'ROLE_ADMIN')) {
                    return true;
                } else {
                    this.router.navigate(['/home']);
                    return false;
                }
            }),
            catchError((error) => {
                this.router.navigate(['/home']);
                console.error('Error fetching user data', error);
                return of(false);
            })
        );
    }
}
