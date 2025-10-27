import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FsContentWidgetDialogComponent } from '../components';


@Injectable({
  providedIn: 'root',
})
export class FsContentWidget {
  private _dialog = inject(MatDialog);


  public open(tag: string, title?: string) {
    this._dialog.open(FsContentWidgetDialogComponent, {
      data: { 
        tag, 
        title,
      }
    });
  }

}