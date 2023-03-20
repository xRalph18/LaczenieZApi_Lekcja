import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repos } from '../Model/JokeModel';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  baseUrl: string = "https://official-joke-api.appspot.com/jokes/ten";
  repos: Repos[];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.getRepos()
  }

  public getRepos() {
    return this.http
      .get<Repos[]>(this.baseUrl)
      .subscribe({
        next: (response) => {
          console.log('response recived');
          console.log(response);
          this.repos = response;
        },
        error: (error) => {
          console.error('Request failed with error');
          alert(error);
        },
        complete: () => {
          console.log('Request completed');
        }
        })
  }
}
