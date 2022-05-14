import { IVisitor, Pago } from "../ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan } from "../ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "../ModuloSuscripccion/Suscripccion";
import { ObservableAuditoria, ObservadorRegistro, Registro_Actividad, Registro_Auditoria } from "../PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "../ModuloHistoriaMedica/HistorialMedico";
import { Solicitud, TipoCita } from "../ModuloCita/Solicitud";
import { Doctor, Especialidad } from "./Doctor";
import { Cita, StatusCita } from "../ModuloCita/Cita";




export class Paciente extends ObservableAuditoria {
    private _nombre: string;
    private _edad: number;
    private _profesion: string;
    private _telefonos: string[];
    private _correo: string;
    private _doc_id: number;
    private _plan: Suscripcion;

    _historia: HistorialMedico;

    constructor(nombre: string, edad: number, profesion: string, telefonos: string[], correo: string, doc_id: number, o: ObservadorRegistro) {
        super(o);
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
        this._telefonos = telefonos;
        this._correo = correo;
        this._doc_id = doc_id;
    }


    suscribirse(metodo: MetodoPago,): void {
        console.log("Aqui el paciente iniciaria el proceso de suscripccion\n");
        let suscripccion = new Suscripcion();
        metodo.realizarPago(new Pago());
        suscripccion.agregarMetodo(metodo);
        suscripccion.actualizarFecha();
        suscripccion.actualizarStatus(StatusSuscripccion.Activa);
        this._plan = suscripccion;
    }

    obtenerHistorial() {
        return this._historia;
    }

    cancelarSuscripcion(): void {
        this._plan.actualizarStatus(StatusSuscripccion.Cancelada);
    }

    MostrarPlan(): void {
        this._plan.mostrarSuscripccion();
    }

    ObtenerPlan(): Suscripcion {
        return this._plan;
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(): void {
        let registrea;
        this.observador.registrar(registrea);
    }

    verHistorialMedico(): void {
        this._historia.mostrarRegistro();
    }

    solicitarCita(tipo: TipoCita, doctor: Doctor, especialidad: Especialidad): Solicitud {
        console.log('***PROCESO SOLICITUD DE CITA ***');
        console.log(`Paciente: ${this._nombre}`);
        console.log(`Doctor: ${doctor.getNombre()}`);
        console.log(`Doctor: ${especialidad.getNombre()}`);
        console.log(`Tipo Solicitud: ${tipo}`);
        console.log()
        let solicitud: Solicitud = new Solicitud(tipo, especialidad);
        return solicitud;
        //solicitud.notificarDoctor(doctor, this);
    }

    responderCita(cita: Cita, tipo: StatusCita) {
        cita.actualizarStatus(tipo);
    }

    setSuscripccion(s: Suscripcion): void {
        this._plan = s;
    }
}
