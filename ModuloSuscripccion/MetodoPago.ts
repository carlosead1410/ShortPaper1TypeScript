import { IVisitor, PagoSuscripccion } from "./IVisitor";

export enum TipoPlan{
    mensual = "MENSUAL",
    anual = "ANUAL"
}
// CREACION DE LAS CLASES DE METODOS DE PAGO
export abstract class MetodoPago{
    modalidad: TipoPlan;
    abstract realizarPago(IVisitor: IVisitor):void;
    abstract getName():void;

    constructor(modalidad:TipoPlan){
        this.modalidad = modalidad;
    }
}

//CREACION CLASE PAYPAL
export class Paypal extends MetodoPago{
    email:string;

    constructor(email:string, modalidad:TipoPlan){
        super(modalidad);
        this.email = email;
    }

    realizarPago(IVisitor: IVisitor): void {
        IVisitor.visitPAYPAL(this);
    }

    getName(): string {
        return "Paypal";
    }
}


//CREACION CLASE TDC
export class TDC extends MetodoPago{
    nombre:string;
    banco:string;
    f_vencimiento: Date;
    nro_tarjeta: number;
    cvc: number;

    constructor(nombre:string, banco:string, f_vencimiento:Date, nro_tarjeta:number, cvc:number ,modalidad:TipoPlan){
        super(modalidad);
        this.nombre = nombre;
        this.banco = banco;
        this.f_vencimiento = f_vencimiento;
        this.nro_tarjeta = nro_tarjeta;
        this.cvc = cvc;
    }

    realizarPago(IVisitor: IVisitor): void {
        IVisitor.visitTDC(this);
    }

    getName(): string {
        return "TDC";
    }
}