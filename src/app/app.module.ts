import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TargetNumberComponent } from './target-number/target-number.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TargetNumberComponent,
    PlusComponent,
    MinusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
