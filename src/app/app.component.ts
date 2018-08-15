import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>URL Link Pipe Sample</h2>
    <textarea cols="30" rows="4" [(ngModel)]="memo"></textarea>
    <div [innerHTML]="memo | urllink"></div>
  `
})
export class AppComponent {
  memo: string = '';
}
