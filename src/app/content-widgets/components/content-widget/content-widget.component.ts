import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FsHtmlEditorConfig, FsHtmlEditorModule } from '@firestitch/html-editor';

import { FsMessage } from '@firestitch/message';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatTabGroup, MatTab, MatTabContent } from '@angular/material/tabs';
import { FsTextEditorModule } from '@firestitch/text-editor';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';


@Component({
    templateUrl: './content-widget.component.html',
    styleUrls: ['./content-widget.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatTabGroup,
        MatTab,
        MatTabContent,
        FsTextEditorModule,
        FsHtmlEditorModule,
        MatFormField,
        MatInput,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsContentWidgetComponent implements OnInit {

  public contentWidget;
  public htmlEditorConfig: FsHtmlEditorConfig;
  
  private _saveContentWidget: (contentWidget: any) => Observable<any>;

  public constructor(
    private _message: FsMessage,
    @Inject(MAT_DIALOG_DATA) private _data: any,
  ) {
  }

  public ngOnInit(): void {
    this._saveContentWidget = this._data.saveContentWidget;
    this.htmlEditorConfig = {
      ...this._data.htmlEditorConfig
    };
    
    this.contentWidget = { ...this._data.contentWidget };
  }

  public save = () => {
    return this._saveContentWidget(this.contentWidget)
      .pipe(
        tap((contentWidget) => {
          this.contentWidget = { ...this.contentWidget, ...contentWidget };
          this._message.success('Saved Changes');
        }),
      );
  }

}
