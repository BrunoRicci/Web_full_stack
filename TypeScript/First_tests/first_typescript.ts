console.log('Hello world with TypeScript');
alert('Hi from TypeScript!!'); 


//Variable types.

let s: string = "my string";

let num: number = 5;

let true_false: boolean = true;

let any_type: any = 'hello';
                any_type = 9;       //Assign any new value

var languages: Array<string> = ['abc','def','ghi'];
var lang: string[] = ['abc','def','ghi'];       //The same

let multiple_values: string|number = "Bruno";
    console.log(multiple_values);
    multiple_values = '153';
    console.log(multiple_values);

type my_custom_type = string|number;
let my_variable: my_custom_type = 'Bruno!';
console.log(my_variable);
my_variable = 123;
console.log(my_variable);

/////////////////////// Function return types.
function myFunction(num:number):number{
    return num+1;
}