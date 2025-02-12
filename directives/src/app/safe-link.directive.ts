import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConformLeavePage($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myapp',{alias:'appSafeLink'});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log("Safe link DIrective is active!");
  }
  onConformLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do You Want To Leave the App?')
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address+'?from='+this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
