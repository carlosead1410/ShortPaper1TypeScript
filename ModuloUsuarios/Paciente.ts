import { IVisitor, Pago } from "../ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "../ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "../ModuloSuscripccion/Suscripccion";
import { ObservableAuditoria, ObservadorRegistro, Registro_Actividad, Registro_Auditoria } from "../PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "../ModuloHistoriaMedica/HistorialMedico";



export class Paciente extends ObservableAuditoria{
    private _nombre:string;
    private _edad:number;
    private _profesion: string;
    private _telefonos: string[];
    private _correo: string;
    private _doc_id:number;
    private _plan: Suscripcion;

    private _historia: HistorialMedico;

    constructor(nombre:string, edad:number, profesion: string, telefonos:string[], correo: string, doc_id:number, o: ObservadorRegistro){
        super(o);
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
        this._telefonos = telefonos;
        this._correo = correo;
        this._doc_id = doc_id;        
    }


    suscribirse( metodo: MetodoPago,):void{
        console.log("Aqui el paciente iniciaria el proceso de suscripccion\n");
        let suscripccion = new Suscripcion();
        metodo.realizarPago(new Pago());
        suscripccion.agregarMetodo(metodo);
        suscripccion.actualizarFecha();
        suscripccion.actualizarStatus(StatusSuscripccion.Activa);
        this._plan = suscripccion;
    }

    cancelarSuscripcion():void{
        this._plan.actualizarStatus(StatusSuscripccion.Cancelada);
    }

    obtenerPlan():void{
        this._plan.mostrarSuscripccion();
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(): void {
        let registrea;
        this.observador.registrar(registrea);
    }

    verHistorialMedico():void{
        this._historia.mostrarRegistro();
    }
}

// let pago1: MetodoPago = new Paypal("arriaga1410@gmail.com","anual");

// let pago2: MetodoPago = new TDC("carlos","Mercantil",new Date("5/21/2025"), 12345567890, 123,"anual");

// console.log(pago1);
// console.log(pago1.realizarPago(new Pago()));


// console.log(pago2);
// console.log(pago2.realizarPago(new Pago()));


