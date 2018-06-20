import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FunctionService {
  public subject = new Subject<any>();

  constructor() {
    this.subject.asObservable();
  }

  setSubject(sub): void {
    this.subject.next(sub);
  }
}
