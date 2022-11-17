import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public eightBall = '';
  public clickBall: boolean;
  constructor() {
  }

  ngOnInit() {

  }
  generateRandomQuestion() {
      this.clickBall = true;
      const randomQuestion = Math.floor(Math.random() * 8);
      this.eightBall = '';
      switch(randomQuestion){
        case 0:
          this.eightBall = 'It is certain';
          break;
        case 1:
          this.eightBall = 'It is decidedly so';
          break;
        case 2:
          this.eightBall = 'Reply hazy try again';
          break;
        case 3:
          this.eightBall = 'Cannot predict now';
          break;
        case 4:
          this.eightBall = 'Do not count on it';
          break;
        case 5:
          this.eightBall = 'My sources say no';
          break;
        case 6:
          this.eightBall = 'Outlook not so good';
          break;
        case 7:
          this.eightBall = 'Signs point to yes';
          break;
        default:
          console.log('You\'re unfortunate!');
          break;
      }
    }
}
