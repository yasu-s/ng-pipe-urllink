import { Pipe, PipeTransform } from '@angular/core';

/**
 * URL Link Pipe
 */
@Pipe({name: 'urllink'})
export class UrlLinkPipe implements PipeTransform {

  urlRegex = /(http(s)?:\/\/[a-zA-Z0-9-.!'()*;/?:@&=+$,%#]+)/gi;

  transform(value: string): string {
    if (value)
      return value = value.replace(this.urlRegex, '<a href="$1" target="_blank">$1</a>');
    else
      return value;
  }
}
