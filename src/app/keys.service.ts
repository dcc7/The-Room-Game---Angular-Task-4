import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor() { }

  keys: string[] = [];

  rooms: string[] = ['living', 'bathroom-one', 'bedroom-one', 'kitchen', 'bathroom-two', 'bedroom-two'];

}
