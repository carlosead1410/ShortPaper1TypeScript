
import { RegistroMedico } from "../ModuloHistoriaMedica/HistorialMedico";
import { FeedBack } from "./FeedBack";
import { Paciente } from "../ModuloUsuarios/Paciente";
import { Registro_Actividad, Registro_Auditoria } from "../PatronObservadorAuditoria/ObservadorRegistro";
import { Doctor} from "../ModuloUsuarios/Doctor";


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

export abstract class Cita{
    fecha: Date;
    status: StatusCita;
    feedback: FeedBack;
    paciente: Paciente;
    registroMedico: RegistroMedico;

    constructor (paciente : Paciente, fecha: Date){
        this.paciente = paciente;
        this.fecha = fecha;
        this.status = StatusCita.pendiente;
    }


    abstract finalizarCita():void

    abstract obtenerPaciente():Paciente
}



export class Telemedicina extends (Cita){


    finalizarCita(): void {
        console.log('Finalizada  virtual')
        this.status = StatusCita.finalizada;
    }

    obtenerPaciente(): Paciente {
        return this.paciente;
    }
}


export class Presencial extends(Cita){

    finalizarCita(): void {
        console.log('Finalizada presencial')
        this.status = StatusCita.finalizada
    }

    obtenerPaciente(): Paciente {
        return this.paciente;
    }
}







