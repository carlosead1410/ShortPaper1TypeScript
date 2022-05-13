"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./ModuloUsuarios/Paciente");
var MetodoPago_1 = require("./ModuloSuscripccion/MetodoPago");
var ObservadorRegistro_1 = require("./PatronObservadorAuditoria/ObservadorRegistro");
//ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE AUDITORIAS Y DE ACTIVIDADES DE LOS PACIENTES
var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
//METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA
paciente1.suscribirse(new MetodoPago_1.Paypal('arriaga1410@gmail.com', MetodoPago_1.TipoPlan.mensual));
//MOSTRANDO SI EL PACIENTE TIENE SUSCRIPCCION
paciente1.obtenerPlan();
console.log("\n");
console.log(paciente1);
console.log("Cristian de vaina caga el proyecto");
// paciente1.verHistorialMedico();
