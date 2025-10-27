import { ChangeDetectorRef, Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FsContentWidgetContentDirective } from '../../directives';
import { FS_CONTENT_WIDGET_CONFIG } from '../../injectors';
import { FsContentWidgetConfig } from '../../interfaces/content-widget-config';
import { NgTemplateOutlet } from '@angular/common';
import { FsContentWidgetRendererComponent } from '../content-widget-renderer/content-widget-renderer.component';


@Component({
    selector: 'fs-content-widget',
    templateUrl: './content-widget.component.html',
    styleUrls: ['./content-widget.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet, FsContentWidgetRendererComponent],
})
export class FsContentWidgetComponent implements OnDestroy, OnInit {
  config = inject<FsContentWidgetConfig>(FS_CONTENT_WIDGET_CONFIG);
  private _cdRef = inject(ChangeDetectorRef);


  @ContentChild(FsContentWidgetContentDirective, { read: TemplateRef })
  public contentWidgetContent: TemplateRef<any>;

  public content;

  private destroy$ = new Subject();

  @Input() public tag: string;
  
  public ngOnInit(): void {
    this.config.fetchContentWidget(this.tag)
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe((content) => {
      this.content = content;
      this._cdRef.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
