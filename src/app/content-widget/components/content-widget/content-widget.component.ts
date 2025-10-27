import { ChangeDetectorRef, Component, ContentChild, Inject, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

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

  @ContentChild(FsContentWidgetContentDirective, { read: TemplateRef })
  public contentWidgetContent: TemplateRef<any>;

  public content;

  private destroy$ = new Subject();

  @Input() public tag: string;

  constructor(
    @Inject(FS_CONTENT_WIDGET_CONFIG) public config: FsContentWidgetConfig,
    private _cdRef: ChangeDetectorRef,
  ) { }
  
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
