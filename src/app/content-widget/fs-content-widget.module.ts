import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsHtmlEditorModule, FsHtmlRendererModule } from '@firestitch/html-editor';

import { FsContentWidgetComponent } from './components/content-widget';
import { FsContentWidgetRendererComponent } from './components/content-widget-renderer';


@NgModule({
  imports: [
    CommonModule,

    FsHtmlEditorModule,
    FsHtmlRendererModule,
  ],
  exports: [
    FsContentWidgetComponent,
  ],
  declarations: [
    FsContentWidgetRendererComponent,
    FsContentWidgetComponent,
  ],
})
export class FsContentWidgetModule {
  static forRoot(): ModuleWithProviders<FsContentWidgetModule> {
    return {
      ngModule: FsContentWidgetModule,
    };
  }
}
