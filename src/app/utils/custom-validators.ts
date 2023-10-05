import { ValidatorFn } from "@angular/forms";

export function forbiddenUserValidator(user: string): ValidatorFn | null {
    return (control) => {
        if (
            typeof control.value === 'string' &&
            control.value.toLocaleLowerCase() === user ||
            control.value.toLocaleLowerCase() === user
            ) {
            return {
                forbiddenUser: true
            }
        }
    
        return null;
    }
}