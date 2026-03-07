import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { FsDialogModule } from '@firestitch/dialog';
import { FsHtmlEditorModule } from '@firestitch/html-editor';

import { FsContentWidgetDialogComponent } from './components';
import { FsContentWidgetComponent } from './components/content-widget';
import { FsContentWidgetRendererComponent } from './components/content-widget-renderer';
import { FsContentWidgetContentDirective } from './directives';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FsHtmlEditorModule,
    FsDialogModule,
    FsContentWidgetRendererComponent,
    FsContentWidgetComponent,
    FsContentWidgetDialogComponent,
    FsContentWidgetContentDirective,
  ],
  exports: [
    FsContentWidgetComponent,
    FsContentWidgetContentDirective,
  ],
})
export class FsContentWidgetModule {
  public static forRoot(): ModuleWithProviders<FsContentWidgetModule> {
    return {
      ngModule: FsContentWidgetModule,
    };
  }
}
