import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarUserTemplateInjectorService {
  constructor() { }

  private _rightTemplate$ = new BehaviorSubject<TemplateRef<any>|null>(null)

  setRightTemplate(template:TemplateRef<any>|null){
    this._rightTemplate$.next(template)
  }

  get rightTemplate$(){
    return this._rightTemplate$.asObservable()
  }
}
