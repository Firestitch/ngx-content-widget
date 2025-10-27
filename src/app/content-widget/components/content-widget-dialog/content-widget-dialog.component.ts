import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsContentWidgetComponent } from '../content-widget/content-widget.component';
import { MatButton } from '@angular/material/button';

@Component({
    templateUrl: './content-widget-dialog.component.html',
    styleUrls: ['./content-widget-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsContentWidgetComponent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsContentWidgetDialogComponent {
  private _data = inject(MAT_DIALOG_DATA);


  public title;
  public tag;

  constructor() {
    const _data = this._data;

    this.title = _data.title;
    this.tag = _data.tag;
  }
}
