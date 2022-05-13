/*
    Clase FeedBack, despues de cada Cita se tiene
    un feedback del cliente hacia el doctor
*/
export class FeedBack {
    constructor() {
    }
    get valoracion() {
        return this._valoracion;
    }
    get comentario() {
        return this._comentario;
    }
    set valoracion(valoracion) {
        if (valoracion < 0 && valoracion > 5) {
            throw new Error('La valoracion debe estar en un Rango de [0-5]');
        }
        this._valoracion = valoracion;
    }
    set comentario(comentario) {
        this._comentario = comentario;
    }
    registrarValoracion() {
        //Do_Something
    }
}
