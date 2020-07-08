import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numero: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (const numero of this.numero) {
      this.container.createEmbeddedView(
        this.template, { $implicit: numero});
    }
  }

}
