import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelThemeService {
  readonly #channel: BroadcastChannel;

  constructor() {
    this.#channel = new BroadcastChannel('toggle-theme');
  }

  postMessage(message: string) {
    this.#channel.postMessage(message);
  }

  onMessage(callback: (message: MessageEvent) => void) {
    this.#channel.onmessage = callback;
  }

  closeChannel() {
    this.#channel.close();
  }
}
