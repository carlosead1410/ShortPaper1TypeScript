"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./ModuloUsuarios/Paciente");
var MetodoPago_1 = require("./ModuloSuscripccion/MetodoPago");
var ObservadorRegistro_1 = require("./PatronObservadorAuditoria/ObservadorRegistro");
// CASO DE USO SUSCRIPCCION
function cu_suscripccionPaciente() {
    console.log("ESTE ES EL CASO DE USO DE SUSCRIPCCION DE UN PACIENTE\n");
    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    //Se crea al paciente
    var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de Paypal y lo va pagar mensualmente)
    paciente1.suscribirse(new MetodoPago_1.Paypal('arriaga1410@gmail.com', MetodoPago_1.TipoPlan.mensual));
    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    paciente1.obtenerPlan();
    console.log("\n");
    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);
    console.log("\n");
}
// cu_suscripccionPaciente();
//CASO DE USO SUSCRIPCCION POR TDC Y ANUAL
function cu_suscripccionPacienteTDC() {
    console.log("ESTE ES EL CASO DE USO DE SUSCRIPCCION DE UN PACIENTE A TRAVES DE UNA TDC Y ANUAL\n");
    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    //Se crea al paciente
    var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de Paypal y lo va pagar mensualmente)
    paciente1.suscribirse(new MetodoPago_1.TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, MetodoPago_1.TipoPlan.anual));
    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    paciente1.obtenerPlan();
    console.log("\n");
    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);
    console.log("\n");
}
cu_suscripccionPacienteTDC();
