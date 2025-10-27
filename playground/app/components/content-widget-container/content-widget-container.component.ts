import { Component } from '@angular/core';
import { FsContentWidgetComponent } from '../../../../src/app/content-widget/components/content-widget/content-widget.component';
import { FsContentWidgetContentDirective } from '../../../../src/app/content-widget/directives/content-widget-content.directive';
import { NgTemplateOutlet } from '@angular/common';


@Component({
    selector: 'app-content-widget-container',
    templateUrl: './content-widget-container.component.html',
    styleUrls: ['./content-widget-container.component.scss'],
    standalone: true,
    imports: [FsContentWidgetComponent, FsContentWidgetContentDirective, NgTemplateOutlet]
})
export class ContentWidgetContainerComponent {


}
