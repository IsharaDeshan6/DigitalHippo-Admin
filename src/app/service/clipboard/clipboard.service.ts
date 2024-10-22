import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private snackbarService: MatSnackBar) { }

  copy(text: string) {
    if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackbarService.open('Copied to clipboard', 'Close');
    }).catch(error => {
      this.snackbarService.open('try again', 'Close');
    });
    }else{
      this.snackbarService.open('Clipboard api is not supported for this browser', 'Close');
    }
  }
}
