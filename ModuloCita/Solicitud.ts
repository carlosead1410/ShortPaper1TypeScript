import { StatusSuscripccion } from "../ModuloSuscripccion/Suscripccion";
import { Doctor } from "../ModuloUsuarios/Doctor";
import { Paciente } from "../ModuloUsuarios/Paciente";

export enum TipoCita{
    Teleconsulta = "Teleconsulta",
    Presencial = "Presencial"
}

export class Solicitud{
    private _tipo: TipoCita;
    constructor(tipo: TipoCita){
        this._tipo = tipo;
    }

    getTipo():TipoCita{
        return this._tipo;
    }

    notificarDoctor(doctor: Doctor, paciente: Paciente):void{
        this.verificarSuscripccion(paciente);
        doctor.agendarCita(paciente);
    }


    notificarPaciente():void{}


    verificarSuscripccion(paciente: Paciente):void{
        let suscripcion_p = paciente.ObtenerPlan();
        if (suscripcion_p.status != StatusSuscripccion.Activa){
            throw new Error('El Paciente no tiene una suscripccion activa al sistema, NO podra solicitar citas');
        }
    }
}