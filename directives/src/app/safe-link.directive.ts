import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConformLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log("Safe link DIrective is active!");
  }
  onConformLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do You Want To Leave the App?')
    if (wantsToLeave) {
      return;
    }
    event?.preventDefault();
  }
}
