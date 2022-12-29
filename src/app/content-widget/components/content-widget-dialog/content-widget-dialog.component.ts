import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './content-widget-dialog.component.html',
  styleUrls: ['./content-widget-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsContentWidgetDialogComponent {

  public title;
  public tag;

  constructor(@Inject(MAT_DIALOG_DATA) private _data) {
    this.title = _data.title;
    this.tag = _data.tag;
  }
}
