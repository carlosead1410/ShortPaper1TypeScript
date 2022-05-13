/*
    Necesito la clase Paciente Y Doctor
*/
export class RegistroMedico {
    /*
    constructor(paciente : Paciente, doctor: Doctor){
        this._paciente =  paciente;
        this._doctor = doctor;
    }
    */
    constructor(datos) {
        this._datos = datos;
    }
    get datos() {
        return this._datos;
    }
}
/*
    Clase Historial Medico
    esta conformada por 1 o mas registros medicos

*/
export class HistorialMedico {
    mostrarRegistro() {
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this._registros.forEach(e => {
            console.log(e);
        });
        ;
        console.log("\n");
    }
    agregarRegistro(a) {
        this._registros.push(a);
    }
}
