import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custompipe'
})

export class CustomPipe implements PipeTransform{

    // data | pipe_name: data_2
    // data | custompipe: data2
    transform(value:any, data_2:any){
        let v = `
        sum: ${value + data_2} -
        dif: ${value - data_2} -
        mul: ${value * data_2} -
        div: ${value / data_2} -
        `;
        return v;
    }
}