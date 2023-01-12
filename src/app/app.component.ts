import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mode: string = ''
  readonly apiURL: string = ''

  constructor(private http: HttpClient) {

    this.apiURL == 'http://localhost:3200';

  }

  ngOnInit(): void {
    this.mode = 'register'
  }

  viewMode(mode: string) {
    this.mode = mode
  }

  login() {
    this.http.get(`http://localhost:3200/user/1/members`).subscribe(resultado => console.log(resultado));
  }

}
