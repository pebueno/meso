import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  styleUrls : ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AGV Control Tower';
  //myimage1: string= "app/img/agv-yellow.jpg";
}
