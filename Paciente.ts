import { IVisitor, Pago } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";
import { ObservableAuditoria, ObservadorRegistro, Registro_Actividad, Registro_Auditoria } from "./PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "./ModuloHistoriaMedica/HistorialMedico";



export class Paciente extends ObservableAuditoria{
    nombre:string;
    edad:number;
    profesion: string;
    telefonos: string[];
    correo: string;
    doc_id:number;
    plan: Suscripcion;

    historia: HistorialMedico;

    constructor(nombre:string, edad:number, profesion: string, telefonos:string[], correo: string, doc_id:number, o: ObservadorRegistro){
        super(o);
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.telefonos = telefonos;
        this.correo = correo;
        this.doc_id = doc_id;        
    }


    suscribirse( metodo: MetodoPago,):void{
        console.log("Aqui el paciente iniciaria el proceso de suscripccion\n");
        let suscripccion = new Suscripcion();
        metodo.realizarPago(new Pago());
        suscripccion.agregarMetodo(metodo);
        suscripccion.actualizarFecha();
        suscripccion.actualizarStatus(StatusSuscripccion.Activa);
        this.plan = suscripccion;
    }

    cancelarSuscripcion():void{
        this.plan.actualizarStatus(StatusSuscripccion.Cancelada);
    }

    obtenerPlan():void{
        this.plan.mostrarSuscripccion();
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(): void {
        let registrea;
        this.observador.registrar(registrea);
    }

    verHistorialMedico():void{
        this.historia.mostrarRegistro();
    }
}

// let pago1: MetodoPago = new Paypal("arriaga1410@gmail.com","anual");

// let pago2: MetodoPago = new TDC("carlos","Mercantil",new Date("5/21/2025"), 12345567890, 123,"anual");

// console.log(pago1);
// console.log(pago1.realizarPago(new Pago()));


// console.log(pago2);
// console.log(pago2.realizarPago(new Pago()));


