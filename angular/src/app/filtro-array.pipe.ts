import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value.legth === 0 || args === undefined) {
      return value;
    }
      const filtro = (args[0] as String).toLowerCase();
      return value.filter (
       v => v.toLocaleLowerCase().includes(filtro)
      );
    }

}
