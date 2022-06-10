import { Pipe, PipeTransform } from '@angular/core';

import { format } from './util'

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, places: number = 2): string {
    return format(value, places);
  }

}
