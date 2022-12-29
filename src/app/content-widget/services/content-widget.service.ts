import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FsContentWidgetDialogComponent } from '../components';


@Injectable({
  providedIn: 'root',
})
export class FsContentWidget {

  public constructor(
    private _dialog: MatDialog,
  ) {}

  public open(tag: string, title?: string) {
    this._dialog.open(FsContentWidgetDialogComponent, {
      data: { 
        tag, 
        title,
      }
    });
  }

}