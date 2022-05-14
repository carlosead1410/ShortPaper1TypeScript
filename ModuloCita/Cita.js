import { ObservableNotificacion } from "../ModuloNotificaciones/PatronObservador";
// Status que puede tener la Cita
var StatusCita;
(function (StatusCita) {
    StatusCita["enCurso"] = "EN_CURSO";
    StatusCita["aceptada"] = "ACEPTADA";
    StatusCita["pendiente"] = "PENDIENTE";
    StatusCita["cancelada"] = "CANCELADA";
    StatusCita["finalizada"] = "FINALIZADA";
})(StatusCita || (StatusCita = {}));
// Clase Cita
// Falta colocarle la clase Doctor
export class Cita extends ObservableNotificacion {
    constructor(paciente, fecha, o) {
        super(o);
        this.paciente = paciente;
        this.fecha = fecha;
        this.status = StatusCita.pendiente;
    }
}
export class Telemedicina extends (Cita) {
    finalizarCita() {
        console.log('Finalizada  virtual');
        this.status = StatusCita.finalizada;
    }
    obtenerPaciente() {
        return this.paciente;
    }
    add(o) {
        this.observador = o;
    }
    notify() {
        this.observador.notificar();
    }
}
export class Presencial extends (Cita) {
    finalizarCita() {
        console.log('Finalizada presencial');
        this.status = StatusCita.finalizada;
    }
    obtenerPaciente() {
        return this.paciente;
    }
    add(o) {
        this.observador = o;
    }
    notify() {
        this.observador.notificar();
    }
}
