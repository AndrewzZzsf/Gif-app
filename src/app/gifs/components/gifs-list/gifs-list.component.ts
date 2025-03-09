import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces.ts';

@Component({
  selector: 'gifs-list',
  standalone: false,
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {

  @Input()
  public gifs: Gif[] = [];
}
