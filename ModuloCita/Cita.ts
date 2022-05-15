
import { RegistroMedico } from "../ModuloHistoriaMedica/HistorialMedico";
import { FeedBack } from "./FeedBack";
import { Paciente } from "../ModuloUsuarios/Paciente";
import { ObservableNotificacion, ObservadorNotificacion } from "../ModuloNotificaciones/PatronObservador";
import { Registro } from "../PatronObservadorAuditoria/ObservadorRegistro";
import { Doctor, Especialidad } from "../ModuloUsuarios/Doctor";


// Status que puede tener la Cita

export enum StatusCita {
    enCurso = 'EN_CURSO',
    aceptada = 'ACEPTADA',
    pendiente = 'PENDIENTE',
    cancelada = 'CANCELADA',
    finalizada = 'FINALIZADA'
}



// Clase Cita
// Falta colocarle la clase Doctor

export abstract class Cita extends ObservableNotificacion {
    fecha: Date;
    status: StatusCita;
    feedback: FeedBack;
    paciente: Paciente;
    especialidad: Especialidad;
    registroMedico: RegistroMedico;

    constructor(paciente: Paciente, fecha: Date, especialidad: Especialidad, o: ObservadorNotificacion) {
        super(o)
        this.paciente = paciente;
        this.fecha = fecha;
        this.especialidad = especialidad;
        this.status = StatusCita.pendiente;
    }

    actualizarStatus(status: StatusCita) {
        this.status = status;
    }

    abstract obtenerPaciente(): Paciente
}



export class Telemedicina extends (Cita) {


    finalizarCita(): void {
        console.log('Finalizada  virtual')
        this.status = StatusCita.finalizada;
    }

    obtenerPaciente(): Paciente {
        return this.paciente;
    }

    add(o: ObservadorNotificacion): void {
        this.observador = o;
    }

    notify(): void {
        this.observador.notificar();
    }


}


export class Presencial extends (Cita) {

    finalizarCita(): void {
        console.log('Finalizada presencial')
        this.status = StatusCita.finalizada
    }

    obtenerPaciente(): Paciente {
        return this.paciente;
    }

    add(o: ObservadorNotificacion): void {
        this.observador = o;
    }

    notify(): void {
        this.observador.notificar();
    }
}







