/*
    Necesito la clase Paciente Y Doctor
*/
export class RegistroMedico {
    constructor(datos) {
        this._datos = datos;
    }
    get datos() {
        return this._datos;
    }
}
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
