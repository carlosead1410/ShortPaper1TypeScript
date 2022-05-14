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

    verificarEspecialidad(doctor : Doctor): void{
        console.log('ENTRO VERIFICAR')
        doctor.getEspecializaciones().forEach( (e) => {
            console.log('ITERADOR')
            if (e == this._especialidad){
                console.log('Entro')
                return ;

            }
        })
        console.log('NO ENTRO')
        throw new Error('El doctor no posee esta especialidad');
    }

    verificarSuscripccion(paciente: Paciente):void{
        let suscripcion_p = paciente.ObtenerPlan();
        if (suscripcion_p.status != StatusSuscripccion.Activa){
            throw new Error('El Paciente no tiene una suscripccion activa al sistema, NO podra solicitar citas');
        }
    }
}