import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenUserValidator(control: AbstractControl): ValidationErrors | null {
    if ( control.value === 'User' || control.value === 'Usuario' ) {
        return {
            forbiddenUser: true
        }
    }

    return null;
}