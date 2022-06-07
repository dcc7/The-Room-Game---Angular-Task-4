import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [
    'Cool a key! I wonder what it unlocks..',
    'Somebody is probably looking for this right now..',
    'Great, I needed one of these for my piano!',
    'Why would somebody leave that there?',
    'KiKi do you love me… ahh now that song is stuck in my head'
  ]

  randomMessage() {
    const randomElement = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomElement];
  }
}
