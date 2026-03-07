import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'fs-content-widget-renderer',
  templateUrl: './content-widget-renderer.component.html',
  styleUrls: ['./content-widget-renderer.component.scss'],
  standalone: true,
})
export class FsContentWidgetRendererComponent implements OnChanges, OnDestroy {

  @Input() public content: string;

  @ViewChild('container', { static: true }) 
  public containerRef: ElementRef<HTMLDivElement>;

  private _router = inject(Router);
  private _addedScripts: HTMLScriptElement[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.content) {
      this._renderContent();
    }
  }

  public ngOnDestroy(): void {
    this._cleanup();
  }

  private _renderContent(): void {
    this._cleanup();
    const container = this.containerRef.nativeElement;

    if (!this.content) {
      container.innerHTML = '';

      return;
    }

    const temp = document.createElement('div');
    temp.innerHTML = this.content;

    const scripts = Array.from(temp.querySelectorAll('script'));
    scripts.forEach((script) => script.remove());

    container.innerHTML = temp.innerHTML;

    scripts.forEach((original) => {
      const script = document.createElement('script');
      Array.from(original.attributes).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });

      if (original.textContent) {
        script.textContent = original.textContent;
      }

      container.appendChild(script);
      this._addedScripts.push(script);
    });

    this._registerHrefs(container);
  }

  private _registerHrefs(container: HTMLElement): void {
    Array.from(container.querySelectorAll('a[href]'))
      .filter((el: Element) => {
        return el.getAttribute('href').match(/^\//);
      })
      .forEach((el: Element) => {
        el.addEventListener('click', (event: MouseEvent) => {
          if (!event.shiftKey && !event.ctrlKey) {
            event.preventDefault();
            const href = el.getAttribute('href');
            this._router.navigateByUrl(href);
          }
        });
      });
  }

  private _cleanup(): void {
    this._addedScripts.forEach((script) => script.remove());
    this._addedScripts = [];
  }
}
