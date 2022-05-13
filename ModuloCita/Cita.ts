
import { RegistroMedico } from "../ModuloHistoriaMedica/HistorialMedico";
import { FeedBack } from "./FeedBack";
import { Paciente } from "../Paciente";
import { Registro_Actividad, Registro_Auditoria } from "../PatronObservadorAuditoria/ObservadorRegistro";



// Status que puede tener la Cita

enum StatusCita{
    enCurso = 'EN_CURSO',
    aceptada = 'ACEPTADA',
    pendiente = 'PENDIENTE',
    cancelada = 'CANCELADA',
    finalizada = 'FINALIZADA'
}



// Clase Cita
// Falta colocarle la clase Doctor

abstract class Cita{
    hora: number;
    dia: number;
    status: StatusCita;
    feedback: FeedBack;
    paciente: Paciente;
    doctor: void;

    constructor (paciente : Paciente, dia: number, hora: number){
        let date: Date = new Date()
        this.paciente = paciente;
        this.dia = date.setDate(dia)
        this.hora = date.setHours(hora)
        this.status = StatusCita.pendiente;
    }


    abstract finalizarCita():void

}



class Telemedicina extends (Cita){


    finalizarCita(): void {
        console.log('Finalizada  virtual')
        this.status = StatusCita.finalizada;
    }
}


class Presencial extends(Cita){

    finalizarCita(): void {
        console.log('Finalizada presencial')
        this.status = StatusCita.finalizada
    }
}







