import {Component, ViewChild} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getHeight() {
    return document.documentElement.clientHeight - 80;
  }
  scroll(el) {
    el.scrollIntoView({block: 'end', behavior: 'smooth'});
  }
  toggle(menu) {
    if (menu.style.display === 'none') {
      menu.style.display = 'inherit';
    } else {
      menu.style.display = 'none';
    }
  }
}
