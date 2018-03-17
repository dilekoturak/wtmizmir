import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpClient ) { }
  private scientists = [];

  ngOnInit(){
    this.httpService.get('././assets/woman-scientists.json').subscribe(
      data => {
        this.scientists = data as string [];

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

}
