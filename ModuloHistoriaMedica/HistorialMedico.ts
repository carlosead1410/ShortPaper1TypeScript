
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

    getDatos() {
        return this._datos
    }
}


export class HistorialMedico {
    private _registros: Array<RegistroMedico> = [];

    mostrarRegistro(): void {
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        for(let regist of this._registros){
            console.log(regist.getDatos());
            console.log("\n");
        }
    }

    agregarRegistro(a: RegistroMedico): void {
        this._registros.push(a);
    }

}