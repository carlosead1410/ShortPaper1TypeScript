import { Paciente } from "./Paciente";
import { IVisitor, Pago } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";
import { Registro_Actividad, Registro_Auditoria } from "./PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "./HistorialMedico";

//ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE AUDITORIAS Y DE ACTIVIDADES DE LOS PACIENTES
let registro_actividad: Registro_Actividad = new Registro_Actividad();

let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);

//METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA
paciente1.suscribirse(new Paypal('arriaga1410@gmail.com', TipoPlan.mensual));

//MOSTRANDO SI EL PACIENTE TIENE SUSCRIPCCION
paciente1.obtenerPlan();

console.log("\n");
console.log(paciente1);

console.log("\n");

// paciente1.verHistorialMedico();


