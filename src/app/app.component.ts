import {Component, HostBinding} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo_theming';

  @HostBinding('class') className = '';

  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    this.className = this.isDark ? 'dark-theme' : '';
  }
}
