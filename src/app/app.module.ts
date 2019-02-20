import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GetDataService} from './get-data.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FilterRecordPipe } from './filter-record.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterRecordPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
