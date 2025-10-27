import { Component, ViewChild, OnInit, OnDestroy, Input, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FsListComponent, FsListConfig, FsListModule } from '@firestitch/list';
import { ItemType } from '@firestitch/filter';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { FsContentWidgetComponent } from '../content-widget/content-widget.component';
import { FsHtmlEditorConfig } from '@firestitch/html-editor';
import { FsDateModule } from '@firestitch/date';


@Component({
    selector: 'fs-content-widgets',
    templateUrl: './content-widgets.component.html',
    styleUrls: ['./content-widgets.component.scss'],
    standalone: true,
    imports: [FsListModule, FsDateModule],
})
export class FsContentWidgetsComponent implements OnInit, OnDestroy {
  private _dialog = inject(MatDialog);


  @Input() public fetchContentWidgets: (query?: any) => Observable<{ contentWidgets: any[], paging?: any }>;
  @Input() public saveContentWidget: (contentWidget: any) => Observable<any>;
  @Input() public htmlEditorConfig: FsHtmlEditorConfig;

  @ViewChild(FsListComponent, { static: true })
  public list: FsListComponent;

  public config: FsListConfig;

  private _destroy$ = new Subject();

  public ngOnInit(): void {
    this.config = {
      paging: false,
      filters: [
        {
          name: 'keyword',
          type: ItemType.Keyword,
          label: 'Search',
        },
      ],
      fetch: (query) => {
        return this.fetchContentWidgets(query)
          .pipe(
            map((data: any) => ({ data: data.contentWidgets })),
          );
      },
    };
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public open(contentWidget): void {
    this._dialog.open(FsContentWidgetComponent, {
      width: '90%',
      data: { 
        contentWidget,
        htmlEditorConfig: this.htmlEditorConfig,
        saveContentWidget: this.saveContentWidget,
      },
    })
      .afterClosed()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.list.reload();
      });
  }

}
