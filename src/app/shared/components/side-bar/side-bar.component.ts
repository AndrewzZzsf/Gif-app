import { Component } from '@angular/core';
import { gifService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  get gifsList() {
    return this.gifs.tagHistory
  }

  constructor(private gifs:gifService){

  }

  buttonClick(word:string){
    this.gifs.searchTag(word);
  }

}
