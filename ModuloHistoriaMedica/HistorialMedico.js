import { ObservableNotificacion } from "../ModuloNotificaciones/PatronObservador";
export class RegistroMedico extends ObservableNotificacion {
    constructor(datos, o) {
        super(o);
        this._datos = datos;
    }
    add(o) {
        this.observador = o;
    }
    notify() {
        this.observador.notificar();
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
