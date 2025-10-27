import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsHtmlEditorModule, FsHtmlRendererModule } from '@firestitch/html-editor';

import { FsContentWidgetComponent } from './components/content-widget';
import { FsContentWidgetRendererComponent } from './components/content-widget-renderer';
import { FsContentWidgetDialogComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FsDialogModule } from '@firestitch/dialog';
import { FsContentWidgetContentDirective } from './directives';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        FsHtmlEditorModule,
        FsDialogModule,
        FsHtmlRendererModule,
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
  static forRoot(): ModuleWithProviders<FsContentWidgetModule> {
    return {
      ngModule: FsContentWidgetModule,
    };
  }
}
