import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent   {

  @Input()
  titulo:string = ''

  @Input()
  subtitulo:string = ''

  @Input()
  space:string = ''

  @Input()
  users:string = ''

  @Input()
  send:string = ''

  @Input()
  classe:string = 'card'


  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void{
    this.btnClickEvent.emit()
  }


    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
  }

