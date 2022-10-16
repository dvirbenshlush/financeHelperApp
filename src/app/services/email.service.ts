import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  onSubmit() {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/maykbdjj',
        { name: 'email.name', replyto: 'dvirbenshlush95@gmail.com', message: 'hello world test' },
        { 'headers': headers }).subscribe(
          (          response: any) => {
            console.log(response);
          }
        );
  }
}
