import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { NewCheckpointComponent } from './new-checkpoint/new-checkpoint.component';
import { FormatNumberPipe } from './format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    CheckpointsComponent,
    NewCheckpointComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
