import { AfterViewChecked, Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';


@Component({
  selector: 'fs-content-widget-renderer',
  templateUrl: './content-widget-renderer.component.html',
  styleUrls: ['./content-widget-renderer.component.scss'],
})
export class FsContentWidgetRendererComponent implements OnDestroy, AfterViewChecked {

  @Input() public content;

  private destroy$ = new Subject();

  constructor(
    private _router: Router,
    private _el: ElementRef,
  ) { }
  
  public ngAfterViewChecked(): void {
    this.registerHrefs();
  }

  public get el(): any {
    return this._el.nativeElement;
  }

  public registerHrefs(): void {
    Array.from(this.el.querySelectorAll('a[href]'))
      .filter((el: Element) => {
        return el.getAttribute('href').match(/^\//);
      })
      .forEach((el: Element) => {
        el.addEventListener('click',(event: MouseEvent) => {
          if(!event.shiftKey && !event.ctrlKey) {
            event.preventDefault();
            const href = el.getAttribute('href');
            this._router.navigateByUrl(href);
          }
        });
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
