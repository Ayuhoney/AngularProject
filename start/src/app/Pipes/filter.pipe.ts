import { Course } from 'src/app/Models/course';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{

    transform(list: Course[], filterBy: string) {
        console.log('FILTER PIPE CALLED!');
        if(filterBy.toLowerCase() === 'all' || filterBy === '' || list.length === 0){
            return list;
        }else{
            return list.filter((std) => {
                return std.title.toLowerCase() === filterBy.toLowerCase();
            })
        }
    }
}