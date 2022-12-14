import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heros';
import {Hero} from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  constructor(private heroService:HeroService){}
  
  heroes: Hero[] = [];
 
  selectedHero?: Hero;

  onSelect(hero:Hero) : void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(hh => this.heroes = hh);
  }
}
