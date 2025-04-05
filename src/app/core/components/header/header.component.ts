import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { BroadcastChannelThemeService } from './services/broadcast-channel-theme/broadcast-channel-theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly theme: ThemeService = inject(ThemeService);
  readonly #broadcastChannel: BroadcastChannelThemeService = inject(BroadcastChannelThemeService);

  toggleTheme() {
    this.theme.toggle();
    this.#broadcastChannel.postMessage(this.theme.actualTheme());
  }
}
