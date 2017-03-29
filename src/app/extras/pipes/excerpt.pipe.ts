import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.cutString(value);
  }

  cutString(str: any = "") {
  	let s = str.split(" ");
  	s = s.slice(0, 16);
  	s = s.join(" ") + "...";
  	return s;
  	
  }

}
