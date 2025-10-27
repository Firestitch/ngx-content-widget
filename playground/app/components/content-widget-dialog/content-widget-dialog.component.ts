import { Component } from '@angular/core';
import { FsContentWidget } from '@firestitch/content-widget';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'app-content-widget-dialog',
    templateUrl: './content-widget-dialog.component.html',
    styleUrls: ['./content-widget-dialog.component.scss'],
    standalone: true,
    imports: [MatButton]
})
export class ContentWidgetDialogComponent {

  public constructor(
    private _contentWidget: FsContentWidget,
  ) {}

  public open(): void {
    this._contentWidget.open('terms', 'Terms and Conditions');
  }

}
