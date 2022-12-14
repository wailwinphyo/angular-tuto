import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heros');
    return heroes;
  }
  constructor(private messageService: MessageService) { 
    
  }
}
