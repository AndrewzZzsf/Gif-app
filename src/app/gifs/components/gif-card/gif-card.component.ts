import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces.ts';

@Component({
  selector: 'gif-card',
  standalone: false,
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements OnInit{
  @Input()
  public gif!:Gif;


  ngOnInit(): void {
     if(!this.gif) throw new Error('Missing gif property');
  }
}
