import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { FS_CONTENT_WIDGET_CONFIG } from 'src/app/content-widget/injectors';
import { contentWidgetConfigFactory } from './app/helpers/content-widget-config-factory';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsContentWidgetsModule, FsContentWidgetModule } from '@firestitch/content-widget';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsLabelModule } from '@firestitch/label';
import { FsStoreModule } from '@firestitch/store';
import { FsExampleModule } from '@firestitch/example';
import { FsHtmlEditorModule } from '@firestitch/html-editor';
import { FsMessageModule } from '@firestitch/message';
import { provideRouter, Routes } from '@angular/router';
import { ExamplesComponent } from './app/components';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'contact', component: ExamplesComponent },
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsContentWidgetsModule, FsContentWidgetModule, FormsModule, FsLabelModule, FsStoreModule, FsExampleModule.forRoot(), FsHtmlEditorModule.forRoot(), FsMessageModule.forRoot()),
        { provide: FS_CONTENT_WIDGET_CONFIG,
            useFactory: contentWidgetConfigFactory,
            deps: []
        },
        provideAnimations(),
        provideRouter(routes),
    ]
})
  .catch(err => console.error(err));

