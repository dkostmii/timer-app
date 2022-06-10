import { Injectable } from '@angular/core';

import { Subscription, interval } from 'rxjs';

import { TimeSpan } from './timespan'


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private subscription?: Subscription
  private timeSpan?: TimeSpan

  // Service state
  private init = false;
  private destroyed = false;

  // CountDown state
  private updateEnabled = false;

  constructor() { }

  onInit() {

    this.init = true;

    this.reset();
  }

  onDestroy() {

    this.reset();

    this.destroyed = true;
  }

  private checkService() {
    if (!this.init) {
      throw new TypeError("Service has not initialized");
    }

    if (this.destroyed) {
      throw new TypeError("Service has been destroyed");
    }
  }

  private update() {

    this.checkService();

    this.timeSpan!.addSeconds(1);
  }

  get time(): TimeSpan {

    this.checkService();

    return this.timeSpan!;
  }

  public toggle() {

    this.checkService();

    this.updateEnabled = !this.updateEnabled;

    if (!this.updateEnabled) {
      this.subscription!.unsubscribe();
    }
    else {
      this.subscription = interval(1000)
          .subscribe(_ => { this.update(); });
    }
  }

  public reset() {
    this.checkService();

    if (this.updateEnabled) {
      this.toggle();
    }

    this.timeSpan = new TimeSpan();
  }

  public get enabled() {
    return this.updateEnabled;
  }
}
