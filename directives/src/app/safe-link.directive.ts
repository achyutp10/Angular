import { Directive, input } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConformLeavePage($event)'
  }
})
export class SafeLinkDirective {
  queryParam = input('myapp',{alias:'appSafeLink'});
  constructor() {
    console.log("Safe link DIrective is active!");
  }
  onConformLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do You Want To Leave the App?')
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address+'?from='+this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
