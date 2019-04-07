import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActiveInstanceService {
    activeInstance: BehaviorSubject<any> = new BehaviorSubject(null);
}