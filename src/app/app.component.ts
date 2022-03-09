import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBind';



  alertar1(e: any){
    alert('voce comprou')

  }

  constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
      this._snackBar.open('PACOTE COMPRADO', 'fechar');
    }
}
