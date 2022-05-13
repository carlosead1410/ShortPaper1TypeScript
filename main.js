"use strict";
exports.__esModule = true;
var Paciente_1 = require("./Paciente");
var MetodoPago_1 = require("./ModuloSuscripccion/MetodoPago");
var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212);
// console.log(paciente1);
paciente1.suscribirse(new MetodoPago_1.Paypal('arriaga1410@gmail.com', MetodoPago_1.TipoPlan.mensual));
paciente1.obtenerPlan();
console.log(paciente1);
