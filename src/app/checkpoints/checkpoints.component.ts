import { Component, OnInit } from '@angular/core';

import { TimeService } from '../time.service';

import { TimeSpan } from '../timespan'

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.sass']
})
export class CheckpointsComponent implements OnInit {

  private service: TimeService;

  private chckpts: TimeSpan[];

  getCheckPointCaption(checkpoint: TimeSpan): string {
    return this.service.time.compare(checkpoint) < 0 ? "pending..." : "done";
  }

  get checkpoints(): TimeSpan[] {
    return this.chckpts;
  }

  newCheckpoint(checkpoint: TimeSpan) {
    this.addIfUnique(checkpoint);
  }

  removeCheckpoint(id: number) {
    this.chckpts = this.chckpts.filter((_, i) => id !== i);
    this.sort();
  }

  private sort() {
    this.chckpts = this.chckpts.sort((a, b) => a.compare(b));
  }

  private addIfUnique(checkpoint: TimeSpan) {
    if (this.checkpoints.some(c => c.compare(checkpoint) === 0)) return;
    this.chckpts = [ ...this.chckpts, checkpoint ];
    this.sort();
  }

  constructor(service: TimeService) {
    this.service = service;

    this.chckpts = new Array(5).fill(0).map((_, id) => {
      const t = new TimeSpan();
      t.addSeconds(4 * (id + 1));

      return t;
    });
  }

  ngOnInit(): void {
  }

}
