import { Pipe, PipeTransform } from '@angular/core';

import * as distanceInWOrdsToNow from 'date-fns/distance_in_words_to_now';
import * as frLocale from 'date-fns/locale/fr';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return distanceInWOrdsToNow(new Date(value), {locale: frLocale});
  }
}
