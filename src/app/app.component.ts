import {Component} from '@angular/core';
import {MainService} from './Main.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private mainService: MainService) {
    this.mainService.checkUser().subscribe();
  }
  getHeight() {
    return document.documentElement.clientHeight - 80;
  }
  scroll(el) {
    el.scrollIntoView({block: 'end', behavior: 'smooth'});
  }
  toggle(menu) {
    if (menu.style.visibility === 'hidden') {
      menu.style.visibility = 'visible';
      menu.style.opacity = '1';
    } else {
      menu.style.visibility = 'hidden';
      menu.style.opacity = '0';
    }
  }
  toggleFeedback(a, feedback) {
    if (a.style.color === 'white') {
      a.style.background =  'white';
      a.style.color =  'black';
      feedback.style.visibility = 'hidden';
      feedback.style.opacity = '0';
    } else {
      a.style.background =  'rgb(0, 150, 150)';
      a.style.color =  'white';
      feedback.style.visibility = 'visible';
      feedback.style.opacity = '1';
      feedback.style.right = '2%';
      feedback.style.bottom = '90px';
    }
  }
  sendMessage(name, phone, email, textArea) {
    event.preventDefault();
    this.mainService.sendMessage(name.value, phone.value, email.value, textArea.value).subscribe(value => {
        alert('Спасибо за ответ!');
      },
      error => {
      alert('Упс! Возникла ошибка.');
      });
  }
}
