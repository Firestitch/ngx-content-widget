import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsContentWidgetModule, FsContentWidgetsModule } from '@firestitch/content-widget';
import { FsExampleModule } from '@firestitch/example';
import { FsHtmlEditorModule } from '@firestitch/html-editor';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsStoreModule } from '@firestitch/store';

import { FS_CONTENT_WIDGET_CONFIG } from 'src/app/content-widget/injectors';
import { AppComponent } from './app.component';
import {
  ContentWidgetContainerComponent,
  ExamplesComponent
} from './components';
import { ContentWidgetComponent } from './components/content-widget';
import { ContentWidgetDialogComponent } from './components/content-widget-dialog';
import { ContentWidgetsComponent } from './components/content-widgets';
import { contentWidgetConfigFactory } from './helpers/content-widget-config-factory';
import { AppMaterialModule } from './material.module';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'contact', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsContentWidgetsModule,
    FsContentWidgetModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsLabelModule,
    FsStoreModule,
    FsExampleModule.forRoot(),
    FsHtmlEditorModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: FS_CONTENT_WIDGET_CONFIG, 
      useFactory: contentWidgetConfigFactory, 
      deps: [ ] 
    },
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ContentWidgetsComponent,
    ContentWidgetComponent,
    ContentWidgetDialogComponent,
    ContentWidgetContainerComponent,
  ],
})
export class PlaygroundModule {
}
