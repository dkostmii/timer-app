import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TimeSpan } from '../timespan'

import { mod } from '../util'

@Component({
  selector: 'app-new-checkpoint',
  templateUrl: './new-checkpoint.component.html',
  styleUrls: ['./new-checkpoint.component.sass']
})
export class NewCheckpointComponent implements OnInit {

  private d: number;

  private h: number;

  private m: number;

  private s: number;

  public get days() {
    return this.d;
  }

  public get hours() {
    return this.h;
  }

  public get minutes() {
    return this.m;
  }

  public get seconds() {
    return this.s;
  }

  public set days(value: number) {
    if (typeof value === "undefined") return;
    this.d = mod(value, TimeSpan.maxDays);
  }

  public set hours(value: number) {
    if (typeof value === "undefined") return;
    this.h = mod(value, TimeSpan.hoursInADay);
  }

  public set minutes(value: number) {
    if (typeof value === "undefined") return;
    this.m = mod(value, TimeSpan.minutesInAHour);
  }

  public set seconds(value: number) {
    if (typeof value === "undefined") return;
    this.s = mod(value, TimeSpan.secondsInAMinute);
  }

  @Output()
  checkpointAdded = new EventEmitter<TimeSpan>();

  addCheckpoint() {
    const t = new TimeSpan();
    t.addSeconds(this.seconds);
    t.addMinutes(this.minutes);
    t.addHours(this.hours);
    t.addDays(this.days);

    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    if (t.compare(new TimeSpan) > 0) {
      this.checkpointAdded.emit(t);
    }
  }

  constructor() {
    this.d = 0;
    this.h = 0;
    this.m = 0;
    this.s = 0;

  }

  ngOnInit(): void {
  }

}
