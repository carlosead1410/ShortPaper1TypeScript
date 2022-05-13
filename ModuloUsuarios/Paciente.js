import { Pago } from "../ModuloSuscripccion/IVisitor";
import { Suscripcion, StatusSuscripccion } from "../ModuloSuscripccion/Suscripccion";
import { ObservableAuditoria } from "../PatronObservadorAuditoria/ObservadorRegistro";
export class Paciente extends ObservableAuditoria {
    constructor(nombre, edad, profesion, telefonos, correo, doc_id, o) {
        super(o);
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
        this._telefonos = telefonos;
        this._correo = correo;
        this._doc_id = doc_id;
    }
    suscribirse(metodo) {
        console.log("Aqui el paciente iniciaria el proceso de suscripccion\n");
        let suscripccion = new Suscripcion();
        metodo.realizarPago(new Pago());
        suscripccion.agregarMetodo(metodo);
        suscripccion.actualizarFecha();
        suscripccion.actualizarStatus(StatusSuscripccion.Activa);
        this._plan = suscripccion;
    }
    cancelarSuscripcion() {
        this._plan.actualizarStatus(StatusSuscripccion.Cancelada);
    }
    obtenerPlan() {
        this._plan.mostrarSuscripccion();
    }
    add(o) {
        this.observador = this.observador;
    }
    notify() {
        let registrea;
        this.observador.registrar(registrea);
    }
    verHistorialMedico() {
        this._historia.mostrarRegistro();
    }
}
// let pago1: MetodoPago = new Paypal("arriaga1410@gmail.com","anual");
// let pago2: MetodoPago = new TDC("carlos","Mercantil",new Date("5/21/2025"), 12345567890, 123,"anual");
// console.log(pago1);
// console.log(pago1.realizarPago(new Pago()));
// console.log(pago2);
// console.log(pago2.realizarPago(new Pago()));
