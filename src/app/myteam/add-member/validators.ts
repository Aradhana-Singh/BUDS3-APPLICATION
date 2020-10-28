import{ AbstractControl } from '@angular/forms'
import { isError } from 'util';
export function empidValidator(control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const regex = new RegExp('^[0-9]{1,3}$');

        if(!regex.test(control.value)){
            return{
                isError: true
            };
        }
    }
    return null;

}

export function emailValidator(control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const regex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        if(!regex.test(control.value)){
            return{
                isError: true
            };
        }    
    }

    return null;
}

export function phonevalidator(control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const regex = new RegExp('^[0-9]{10}$');
        if(!regex.test(control.value)){
            return{
                isError: true
            };
        }    
    }

    return null;
}