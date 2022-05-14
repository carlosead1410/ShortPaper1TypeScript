import { StatusSuscripccion } from "../ModuloSuscripccion/Suscripccion";
import { Doctor, Especialidad } from "../ModuloUsuarios/Doctor";
import { Paciente } from "../ModuloUsuarios/Paciente";
import { Cita } from "./Cita";

export enum TipoCita{
    Teleconsulta = "Teleconsulta",
    Presencial = "Presencial"
}

export class Solicitud{
    private _tipo: TipoCita;
    private _especialidad : Especialidad
    constructor(tipo: TipoCita, especialidad: Especialidad){
        this._tipo = tipo;
        this._especialidad = especialidad;
    }

    getTipo():TipoCita{
        return this._tipo;
    }

    getEspecialidad():Especialidad{
        return this._especialidad;
    }

    verificarEspecialidad(doctor : Doctor): boolean{
        let especializaciones = doctor.getEspecializaciones();
        let especialidad: Especialidad;

        if (especializaciones.length == 0){
            throw new Error('El doctor no posee esta especialidad');
            return false;
        }
        for (let especialidad of especializaciones){
            if (especialidad.getNombre() == this._especialidad.getNombre()){
                return true;
            }
        }
        throw new Error('El doctor no posee esta especialidad');
        return false;
    }

    verificarSuscripccion(paciente: Paciente):void{
        let suscripcion_p = paciente.ObtenerPlan();
        if (suscripcion_p.status != StatusSuscripccion.Activa){
            throw new Error('El Paciente no tiene una suscripccion activa al sistema, NO podra solicitar citas');
        }
    }
}