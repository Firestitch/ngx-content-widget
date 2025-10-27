import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FsListModule } from '@firestitch/list';
import { FsDateModule } from '@firestitch/date';
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';
import { FsHtmlEditorModule } from '@firestitch/html-editor';
import { FsTextEditorModule } from '@firestitch/text-editor';

import { FsContentWidgetComponent } from './components/content-widget';
import { FsContentWidgetsComponent } from './components/content-widgets';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTabsModule,
        FsListModule,
        FsDateModule,
        FsFormModule,
        FsHtmlEditorModule,
        FsDialogModule,
        FsTextEditorModule,
        FsContentWidgetsComponent,
        FsContentWidgetComponent,
    ],
    exports: [
        FsContentWidgetsComponent,
    ],
})
export class FsContentWidgetsModule {
  static forRoot(): ModuleWithProviders<FsContentWidgetsModule> {
    return {
      ngModule: FsContentWidgetsModule,
    };
  }
}
