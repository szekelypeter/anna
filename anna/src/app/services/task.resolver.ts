import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TaskService } from './task.service';
 
@Injectable({ providedIn: 'root' })
export class TaskResolver implements Resolve<boolean> {
    constructor(private taskService: TaskService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.taskService.phase = route.queryParams['phase']
        this.taskService.round = route.queryParams['round']
        return of(true)
    }
}