import { Component, OnInit, OnDestroy } from '@angular/core';

import { TimeSpan } from '../timespan'

import { TimeService } from '../time.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass']
})
export class CountDownComponent implements OnInit, OnDestroy { 

  private service: TimeService;

  constructor(service: TimeService) {
    this.service = service;
  }

  public get time(): TimeSpan {
    return this.service.time;
  }

  public get toggleCaption(): string {
    return this.service.enabled ? "Pause" : "Start";
  }

  public toggleClickHandler() {
    this.service.toggle();
  }

  public resetClickHandler() {
    this.service.reset();
  }  

  ngOnInit(): void {
    this.service.onInit();     
  }

  ngOnDestroy(): void {
    this.service.onDestroy();
  }
}