import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ThemeService } from './core/components/header/services/theme/theme.service';
import { BroadcastChannelThemeService } from './core/components/header/services/broadcast-channel-theme/broadcast-channel-theme.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly #broadcastChannelTheme = inject(BroadcastChannelThemeService);
  readonly #themeService = inject(ThemeService);

  constructor() {
    this.#broadcastChannelTheme.onMessage((message) => {
      console.log(message);
      this.#themeService.setTheme(message.data);
    });
  }
}
