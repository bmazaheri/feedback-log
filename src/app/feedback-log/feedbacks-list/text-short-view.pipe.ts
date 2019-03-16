import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShortView'
})
export class TextShortViewPipe implements PipeTransform {
  transform(value: string, maxCharacters: number = 50, suffixText: string = '...'): string {
    if (!value || value.length < maxCharacters) {
      return value;
    }
    return `${value.slice(0, maxCharacters)}${suffixText}`;
  }
}
