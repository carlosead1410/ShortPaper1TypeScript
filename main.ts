import { Paciente } from "./Paciente";
import { IVisitor, Pago } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";

let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212);
// console.log(paciente1);
paciente1.suscribirse(new Paypal('arriaga1410@gmail.com', TipoPlan.mensual));

paciente1.obtenerPlan();

console.log(paciente1);

console.log("Hola");

console.log("Hola Carlos");
