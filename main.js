"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./ModuloUsuarios/Paciente");
var MetodoPago_1 = require("./ModuloSuscripccion/MetodoPago");
var ObservadorRegistro_1 = require("./PatronObservadorAuditoria/ObservadorRegistro");
var Doctor_1 = require("./ModuloUsuarios/Doctor");
//ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
var registro_auditoria = new ObservadorRegistro_1.Registro_Auditoria();
var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
//METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA
paciente1.suscribirse(new MetodoPago_1.Paypal('arriaga1410@gmail.com', MetodoPago_1.TipoPlan.mensual));
//MOSTRANDO SI EL PACIENTE TIENE SUSCRIPCCION
paciente1.obtenerPlan();
console.log("\n");
console.log(paciente1);
console.log("\n");
// paciente1.verHistorialMedico();
// Caso de uso Doctor crea una Cita
function cu_DoctorCita() {
    /*
        En este punto el Paciente ya le paso Solicitud al Doctor para agendar una Cita
        paciente1 fue el que realizo la solicitud al doctor1

    */
    // LLEVAR EL REGISTRO DE AUDITORIA Y ACTIVIDAD DEL PACIENTE Y DOCTOR
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    var registro_auditoria = new ObservadorRegistro_1.Registro_Auditoria();
    var paciente1 = new Paciente_1.Paciente('Adrian Herrera', 42, 'Contador', ['1', '2', '3'], 'aa@gmail.com', 1212, registro_actividad);
    var doctor1 = new Doctor_1.Doctor('Daniela Martinez', [new Doctor_1.Cardiologo()], new Doctor_1.Ubicacion('Venezuela', 'Miranda', 'San Antonio'), registro_auditoria);
    //Se agenda la cita, en la Solicitud se conoce el tipo de cita
    console.log(doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30), 'PRESENCIAL'));
}
cu_DoctorCita();
