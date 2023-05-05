import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn

{

 

    return (control: AbstractControl): {[key: string]: any} | null =>

    {

      const email = control.value;

     

     

      const emails = email.split(',').map((e: string) => e.trim());

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const anyInvalidEmail = emails.every((e: string) => e.match(emailRegex) !== null);

      if (email !== '' && anyInvalidEmail) {

       

       

       

          return null;

       

      }else{

        return { checkIfGuestEmailsAreValid: true }

      }

    }

     

    }