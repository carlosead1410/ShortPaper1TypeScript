
import { ObservadorNotificacion, ObservableNotificacion } from "../ModuloNotificaciones/PatronObservador";


export class RegistroMedico extends ObservableNotificacion {

    private _datos: object;

    constructor(datos: object, o: ObservadorNotificacion) {
        super(o)
        this._datos = datos;
    }

    add(o: ObservadorNotificacion): void {
        this.observador = o;
    }

    notify(): void {
        this.observador.notificar();
    }

    getdatos() {
        return this._datos
    }
}


export class HistorialMedico {
    private _registros: Array<RegistroMedico> = [];

    mostrarRegistro(): void {
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this._registros.forEach(e => {
            console.log(e);
        });;
        console.log("\n");
    }

    agregarRegistro(a: RegistroMedico): void {
        this._registros.push(a);
    }

}