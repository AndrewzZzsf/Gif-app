import { gifService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

constructor(private gif:gifService ){

}

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>

  searchByTag(){
    const input = this.tagInput.nativeElement.value;
    console.log({input})
    this.gif.searchTag(input);
    this.tagInput.nativeElement.value=''; //practicamente controla el input, lo que hay etc
  }


}
