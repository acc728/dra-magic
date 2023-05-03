import { Component, Injector } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magic Library';

  constructor(
    private injector: Injector
) {}

}
