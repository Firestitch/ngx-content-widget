import { Component } from '@angular/core';
import { FsContentWidgetComponent } from '../../../../src/app/content-widget/components/content-widget/content-widget.component';


@Component({
    selector: 'app-content-widget',
    templateUrl: './content-widget.component.html',
    styleUrls: ['./content-widget.component.scss'],
    standalone: true,
    imports: [FsContentWidgetComponent]
})
export class ContentWidgetComponent {


}
