import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0, manualCleanup: true});
  // interval = signal(0);
  // doubleIntervl = computed(() => this.interval() *2);
  private destroyRef = inject(DestroyRef)

  constructor() {
    // effect(() => {
    //   console.log(`Clicked: ${this.clickCount()} times`);
    // })
    // toObservable(this.clickCount)
  }

  ngOnInit(): void {
      // setInterval(() =>{
      //   this.interval.update(pIN => pIN+1);
      //  },1000)
      const subscription = this.clickCount$.subscribe({
        next: (val) => console.log(`Clicked: ${this.clickCount()} times`),

      });
      this.destroyRef.onDestroy(() => {
          subscription.unsubscribe();
        })
    }
  // ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val*2)
    // ).subscribe({
    //   next: (val) => console.log(val),
    // });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // })
  // }


  onClick() {
    this.clickCount.update(prevCount => prevCount+1);
  }
}
