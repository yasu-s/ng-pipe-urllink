# Overview

A sample of Pipe that adds a tag to the URL in the string.  
Within the sample Pipe has been added under the name `urllink`.

# System requirements

* Node.js 8.9.x
* TypeScript 2.9.x
* Angular 6.1.x

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-pipe-urllink.git
```

## 2. Installing packages  

```
cd ng-pipe-urllink
npm install
```

## 3. Launch sample application  

```
npm start
```

## 4. Execution result  

![urllink](https://user-images.githubusercontent.com/2668146/44306753-06f45100-a3d0-11e8-8d97-907e861131b2.gif)

# Sample source

## src/app/app.component.ts

```typescript
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
```

## src/app/url-link.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'urllink'})
export class UrlLinkPipe implements PipeTransform {
  
  /** URL Regex */
  urlRegex = /(http(s)?:\/\/[a-zA-Z0-9-.!'()*;/?:@&=+$,%#]+)/gi;

  transform(value: string): string {
    if (value)
      return value = value.replace(this.urlRegex, '<a href="$1" target="_blank">$1</a>');
    else
      return value;
  }
}
```
