import { Injectable, signal, WritableSignal } from '@angular/core';

enum Icon {
  LIGHT = 'pi-moon',
  DARK = 'pi-sun'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  icon: WritableSignal<string> = signal(Icon.DARK);

  constructor() {
    if (this.#isSystemDarkMode()) {
      this.toggle();
    }
  }

  toggle() {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');

    const darkMode = element!.classList.contains('my-app-dark');
    this.icon.update(() => darkMode ? Icon.DARK : Icon.LIGHT);
  }

  getIcon(): string {
    return this.icon();
  }

  #isSystemDarkMode(): boolean {
    return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches;
  }

  actualTheme(): string {
    return document.querySelector('html')?.classList.contains('my-app-dark') ? 'dark' : 'light';
  }

  setTheme(theme: string) {
    const element = document.querySelector('html');
    if (theme === 'dark') {
      element!.classList.add('my-app-dark');
      this.icon.update(() => Icon.DARK);
      console.log('Dark mode enabled');
    } else {

      element!.classList.remove('my-app-dark');
      this.icon.update(() => Icon.LIGHT);
      console.log('Dark mode disabled');
    }
  }
}
