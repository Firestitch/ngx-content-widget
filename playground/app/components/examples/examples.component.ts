import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { ContentWidgetsComponent } from '../content-widgets/content-widgets.component';
import { ContentWidgetComponent } from '../content-widget/content-widget.component';
import { ContentWidgetContainerComponent } from '../content-widget-container/content-widget-container.component';
import { ContentWidgetDialogComponent } from '../content-widget-dialog/content-widget-dialog.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, ContentWidgetsComponent, ContentWidgetComponent, ContentWidgetContainerComponent, ContentWidgetDialogComponent]
})
export class ExamplesComponent {
  public config = environment;
}
