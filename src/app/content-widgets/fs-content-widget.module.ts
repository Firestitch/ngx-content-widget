import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsHtmlEditorModule, FsHtmlRendererModule } from '@firestitch/html-editor';

import { FsContentWidgetComponent } from '../content-widget/components/content-widget';
import { FsContentWidgetRendererComponent } from '../content-widget/components/content-widget-renderer';
import { FsContentWidgetDialogComponent } from '../content-widget/components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FsDialogModule } from '@firestitch/dialog';


@NgModule({
  imports: [
    CommonModule,

    MatDialogModule,
    MatButtonModule,

    FsHtmlEditorModule,
    FsDialogModule,
    FsHtmlRendererModule,
  ],
  exports: [
    FsContentWidgetComponent,
  ],
  declarations: [
    FsContentWidgetRendererComponent,
    FsContentWidgetComponent,
    FsContentWidgetDialogComponent,
  ],
})
export class FsContentWidgetModule {
  static forRoot(): ModuleWithProviders<FsContentWidgetModule> {
    return {
      ngModule: FsContentWidgetModule,
    };
  }
}
