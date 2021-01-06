import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[], size: number = 0): string {

    if (image.length > 0) {
      if (size === 0) {
        return image[0].url;
      } else {
        return image[size].url;
      }
    }
    else {
      return 'assets/img/noimage.png';
    }

  }

}
