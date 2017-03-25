import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if(value) {
            let searchFilter = "";
            // Make the incoming search arguments lower case
            if(typeof args[0] === 'undefined') {
                return value;
            }
            else {
                for(var i=0; i < args.length; i++){
                    searchFilter = searchFilter + args[i].toLowerCase();
                }
            }
            if (searchFilter && Array.isArray(value)) {
                return value.filter(function (el) {
                    return el.title.toLowerCase().indexOf(searchFilter) !== -1;
                });
            }
            return value;
        } else {
              return;
        }
    }
}