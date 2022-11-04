import { Directive, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  @Input() set customIf( condicion: boolean ) {

    if(condicion){
      this.ViewContainer.createEmbeddedView(this.templateRef);

    }else{
      this.ViewContainer.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<HTMLAreaElement>,
    private ViewContainer: ViewContainerRef,
  ) { 

    console.log('esta funcionando')
  } 

}
