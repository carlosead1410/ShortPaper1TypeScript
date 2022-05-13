
import { MetodoPago, TipoPlan } from "./MetodoPago";

export enum StatusSuscripccion{
    Activa = "ACTIVA",
    Cancelada = "CANCELADA",
    Bloqueada = "BLOQUEADA" 
        
}

export class Suscripcion{
    fecha_inicio: Date;
    fecha_fin: Date;
    mpago: MetodoPago;
    status: StatusSuscripccion;


    actualizarFecha():void{
        if (this.mpago.modalidad == TipoPlan.mensual){
            console.log("MENSUAL");
            this.fecha_inicio = new Date(Date.now());
            this.fecha_fin = new Date(this.fecha_inicio.getFullYear(),this.fecha_inicio.getMonth() + 1,this.fecha_inicio.getDate());
        }
        if (this.mpago.modalidad == TipoPlan.anual){
            console.log("ANUAL");

            this.fecha_inicio = new Date(Date.now());
            this.fecha_fin = new Date(this.fecha_inicio.getFullYear() + 1,this.fecha_inicio.getMonth(),this.fecha_inicio.getDate());
        }
    }

    agregarMetodo(mpago: MetodoPago):void{
        this.mpago = mpago;
    }

    mostrarSuscripccion():void{
        console.log(`Su Suscripccion Inicio el dia: ${this.fecha_inicio.toLocaleString()}`);
        console.log(`Su Suscripccion finaliza el dia: ${this.fecha_fin.toLocaleString()}`);
        console.log(`Su Metodo de Pago fue: ${this.mpago.getName()}`);
        console.log(`Su Estatus de suscripccion es : ${this.status}`);
        

    }

    actualizarStatus(statusSus: StatusSuscripccion): void{
        this.status = statusSus;
    }
}