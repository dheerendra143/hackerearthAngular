import { Component } from '@angular/core';
import { GetDataService } from './get-data.service'
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Utopus';
  resultData: any;
  recordLimitEnd = 10;
  recordLimitStart = 1;
  rowNumbering=0;
  filterMovieTitle="khkj";
  constructor(private httpService: GetDataService) { }


  nextRecord() {
    this.recordLimitStart=this.recordLimitStart+this.recordLimitEnd;
    this.recordLimitEnd=this.recordLimitEnd+this.recordLimitEnd;
  }

  firstRecord() {
    this.recordLimitStart=1;
    this.recordLimitEnd=10;
  }
  previousRecord() {
    this.recordLimitStart=this.recordLimitStart-10;
    this.recordLimitEnd=this.recordLimitEnd-10;
  }

  endRecord() {
    this.recordLimitStart=this.resultData.length-10
    this.recordLimitEnd=this.resultData.length;
  }

  ngOnInit() {
    this.httpService.getHTTPData().pipe(map(res => res.json())).subscribe(res => {
      this.resultData = res;

    });

  }

}
