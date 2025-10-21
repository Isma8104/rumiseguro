import { AbstractControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export function dateValidator(control: AbstractControl) {
    let startDate = moment().format('yyyy/MM/DD');
    let date = moment(control.value, 'yyyy/MM/DD');

    if (date.isAfter(startDate) || date.isSame(startDate)) {
        return null;
    }else{
        return { dateError: 'Fecha incorrecta' };
    }
}

export function noWhitespaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

export function onlyNumberKey(control: AbstractControl) {
    if (control.value) {
        // const numbers = control?.value;
        const numbers = String(control?.value)?.split('');
        let contSuccess = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (Number(numbers[i]) >= 0 && Number(numbers[i]) <= 9) {
                contSuccess += 1;
            }
        }

        if (Number(contSuccess) === Number(numbers.length)) {
            return false;
        } else {
            return { numberError: 'Campo no válido' };
        }
    } else {
        return false;
    }
}

export function onlyDecimalKey(control: AbstractControl) {
    if (control.value) {
        const numbers = control.value.split('');
        let contSuccess = 0;

        for (let i = 0; i < numbers.length; i++) {
            if ((Number(numbers[i]) >= 0 && Number(numbers[i]) <= 9) || numbers[i] === '.') {
                contSuccess += 1;    
            }
        }

        if (Number(contSuccess) === Number(numbers.length)) {
            return null;
        }else{
            return { decimalError: 'Campo no válido' };
        }
    }else{
        return null;
    }
}

// ! VALIDAR EN FORMULARIO

export function ciValidate(control: AbstractControl) {
    if (control.value?.length > 10 || control.value?.length < 10) {
        return { error: 'Identificación no válida' };
    } else {
        const ci = control.value?.split('');
        const digitoRegion = Number(ci[0] + ci[1]);
        if (digitoRegion < 1 || digitoRegion > 24) {
            return { error: 'Cédula no válida' };
        }
        const tercerDigito = Number(ci[2]);
        if (tercerDigito < 0 || tercerDigito > 6) {
            return { error: 'Cédula no válida' };
        }
        let suma = 0;
        let val = 0;
        for (let i = 0; i < 9; i++) {
            if (i & 1) {
                val = ci[i] * 1;
                if (val >= 10) {
                    val = val - 9;
                }
            } else {
                val = ci[i] * 2;
                if (val >= 10) {
                    val = val - 9;
                }
            }
            suma += val;
        }
        suma = suma % 10 ? 10 - suma % 10 : 0;
        if (suma === Number(ci[ci?.length - 1])) {
            return null;
        } else {
            return { error: 'Cédula no válida' };
        }
    }
}

export function rucValidate(control: AbstractControl) {
    
    let COEFICIENTES6 = [3, 2, 7, 6, 5, 4, 3, 2];
    let COEFICIENTES9 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let rucPub = [8];
    let rucPri = [9];
    let multi = 0;
    let residuo = 0;
    let novDig = 0;
    let decDig = 0;

    if (control.value.length > 13 || control.value.length < 13) {
        return { error: 'Ruc no válido' };
    }else{
        const ruc = control.value.split('');

        const prov = Number(ruc[0] + ruc[1]);

        const tercerDigito = Number(ruc[3]);

        const tresUltimos = (ruc[10] + ruc[11] + ruc[12]);
        const cuatroUlt = (ruc[9] + ruc[10] + ruc[11] + ruc[12]);
        
        if (prov >= 1 && prov <= 24) {
            if (tercerDigito < 6) { //Personas Naturales
                // let ced = ruc.toString().substring(0, 10);
                
                let ced = control.value.substring(0,10);

                if (validarCedula(ced) === true && tresUltimos == "001") {
                    return null;
                }else{
                    return { rucError: 'Ruc no válido' };
                }
            } else if (tercerDigito == 6 && cuatroUlt == "0001") { //Empresas Publicas
                novDig = parseFloat(ruc.substring(8, 9));

                for (let i = 0; i < 8; i++) {
                    rucPub[i] = parseInt(ruc.substring(i, i + 1));
                    multi = multi + (rucPub[i] * COEFICIENTES6[i]);
                } //Fin for

                // let div = multi / 11;
                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    return null;
                } else {
                    let res = 11 - residuo;

                    if (res == novDig) {
                        return null;
                    } else {
                        return { error: 'Ruc no válido' };
                    } //Fin if(res == novDig)
                } //Fin if if(residuo == 0 && decDig == 0)
            } else if (tercerDigito == 9 && tresUltimos == "001") { //Empresas Privadas
                decDig = parseFloat(ruc.substring(9, 10));

                for (let i = 0; i < 9; i++) {
                    rucPri[i] = parseInt(ruc.substring(i, i + 1));
                    multi = multi + (rucPri[i] * COEFICIENTES9[i]);
                } //Fin for

                // let div = multi / 11;
                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    return null;
                } else {
                    let res = 11 - residuo;

                    if (res == decDig) {
                        return null;
                    } else {
                        return { error: 'Ruc no válido' };
                    } //Fin if(res == novDig)
                } //Fin if(residuo == 0 && decDig == 0)
            } else {
                return { error: 'Ruc no válido' };
            } //Fin if(tercerDigito == 6){
        } else {
            return { error: 'Ruc no válido' };
        } //Fin if(prov>=1 && prov<=24)

    }
} //Fin metodo ruc

export function validarCedula(cedula) {
    let ci = cedula.toString().split('');
    
    if (ci.length > 10 || ci.length < 10) {
        return false;
    }

    let digitoRegion = Number(ci[0] + ci[1]);
    if (digitoRegion < 1 || digitoRegion > 24) {
        return false;
    }

    let tercerDigito = Number(ci[2]);
    if (tercerDigito < 0 || tercerDigito > 6) {
        return false;
    }

    let suma = 0;
    let val = 0;
    for (let i = 0; i < 9; i++) {
        if (i & 1) {
            val = ci[i] * 1;
            if (val >= 10) {
                val = val - 9;
            }
        } else {
            val = ci[i] * 2;
            if (val >= 10) {
                val = val - 9;
            }
        }
        suma += val;
    }

    suma = suma % 10 ? 10 - suma % 10 : 0;

    if (suma === Number(ci[ci.length - 1])) {
        return true;
    } else {
        return false;
    }
}

export function checkDateEnd(group: FormGroup) {
    const dateStart = group.controls.from.value;
    const dateEnd = group.controls.to.value;
    return new Date(dateEnd).valueOf() >= new Date(dateStart).valueOf() ? null : { notSame: true }
}

export function matchValues(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors.matchValues) {
        // Devolver si ya existe un error en el control de comparación
        return;
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ matchValues: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }