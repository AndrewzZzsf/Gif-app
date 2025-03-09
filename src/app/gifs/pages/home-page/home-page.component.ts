import { Component } from '@angular/core';
import { gifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces.ts';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifs:gifService ){
  }

  get GifList(){
    return this.gifs.gifList
  }

}
