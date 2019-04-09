import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight' // highlighting the input letters
})
export class HighlightPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { } // for security purposes

  transform(allcountries: any, searchText: string): any {

    if (!allcountries) { return []; }
    if (!searchText) { return allcountries; }

    const value = allcountries.replace(new RegExp(
      searchText,"gi"), match => // gi - not a case sensitive
      `<span style='background-color:yellow'>${match}</span>`);

    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}