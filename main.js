"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./ModuloUsuarios/Paciente");
var MetodoPago_1 = require("./ModuloSuscripccion/MetodoPago");
var Suscripccion_1 = require("./ModuloSuscripccion/Suscripccion");
var ObservadorRegistro_1 = require("./PatronObservadorAuditoria/ObservadorRegistro");
var Cita_1 = require("./ModuloCita/Cita");
var Doctor_1 = require("./ModuloUsuarios/Doctor");
var Solicitud_1 = require("./ModuloCita/Solicitud");
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
    paciente1.MostrarPlan();
    console.log("\n");
    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);
    console.log("\n");
}
// cu_suscripccionPaciente();
//CASO DE USO SUSCRIPCCION POR TDC Y ANUAL (DIFERENTE METODO DE PAGO)
function cu_suscripccionPacienteTDC() {
    console.log("ESTE ES EL CASO DE USO DE SUSCRIPCCION DE UN PACIENTE A TRAVES DE UNA TDC Y ANUAL\n");
    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    //Se crea al paciente
    var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de TDC y lo va pagar ANUAL)
    paciente1.suscribirse(new MetodoPago_1.TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, MetodoPago_1.TipoPlan.anual));
    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    paciente1.MostrarPlan();
    console.log("\n");
    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);
    console.log("\n");
}
// cu_suscripccionPacienteTDC();
//CASO DE USO PACIENTE SOLICITA CITA (SUSCRIPCCION ACTIVA)
function cu_solicitarCitaActiva() {
    console.log("****CASO DE USO SOLICITUD CITA CON SUSCRIPCCION ACTIVA");
    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    var registro_Auditoria = new ObservadorRegistro_1.Registro_Auditoria();
    //Se crea al paciente
    var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    paciente1.suscribirse(new MetodoPago_1.TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, MetodoPago_1.TipoPlan.anual));
    console.log("\n");
    console.log("\n");
    // paciente1.ObtenerPlan().actualizarStatus(StatusSuscripccion.Cancelada);
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE BUSCA AL DOCTOR POR ESPECIALIDAD O UBICACION
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE SELECCIONA AL DOCTOR CON EL QUE QUIERE LA CITA
    //Se crea al doctor
    var doctor1 = new Doctor_1.Doctor("Eduardo Damiano", [new Doctor_1.Cardiologo(), new Doctor_1.Peidatra()], new Doctor_1.Ubicacion("Venezuela", "Dto Capital", "Caracas"), registro_Auditoria);
    //EL PACIENTE HACE LA SOLICITUD DE CITA
    var solucitud = paciente1.solicitarCita(Solicitud_1.TipoCita.Teleconsulta, doctor1);
    solucitud.verificarSuscripccion(paciente1);
}
// cu_solicitarCitaActiva();
//CASO DE USO PACIENTE SOLICITA CITA (SUSCRIPCCION CANCELADA O BLOQUEADA)
function cu_solicitarCitaCancelada() {
    console.log("****CASO DE USO SOLICITUD CITA CON SUSCRIPCCION CANCELADA O BLOQUEADA");
    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    var registro_Auditoria = new ObservadorRegistro_1.Registro_Auditoria();
    //Se crea al paciente
    var paciente1 = new Paciente_1.Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    paciente1.suscribirse(new MetodoPago_1.TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, MetodoPago_1.TipoPlan.anual));
    console.log("\n");
    console.log("\n");
    //SE LE CANCELA LA SUSCRIPCCION AL PACIENTE
    paciente1.ObtenerPlan().actualizarStatus(Suscripccion_1.StatusSuscripccion.Cancelada);
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE BUSCA AL DOCTOR POR ESPECIALIDAD O UBICACION
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE SELECCIONA AL DOCTOR CON EL QUE QUIERE LA CITA
    //Se crea al doctor
    var doctor1 = new Doctor_1.Doctor("Eduardo Damiano", [new Doctor_1.Cardiologo(), new Doctor_1.Peidatra()], new Doctor_1.Ubicacion("Venezuela", "Dto Capital", "Caracas"), registro_Auditoria);
    //EL PACIENTE HACE LA SOLICITUD DE CITA
    var solicitud = paciente1.solicitarCita(Solicitud_1.TipoCita.Presencial, doctor1);
    solicitud.verificarSuscripccion(paciente1);
}
// cu_solicitarCitaCancelada();
// Caso de uso Doctor crea una Cita
function cu_agendarCita() {
    /*
        En este punto el Paciente ya le paso Solicitud al Doctor para agendar una Cita
        paciente1 fue el que realizo la solicitud al doctor1

    */
    // LLEVAR EL REGISTRO DE AUDITORIA Y ACTIVIDAD DEL PACIENTE Y DOCTOR
    var registro_actividad = new ObservadorRegistro_1.Registro_Actividad();
    var registro_auditoria = new ObservadorRegistro_1.Registro_Auditoria();
    var paciente1 = new Paciente_1.Paciente('Adrian Herrera', 42, 'Contador', ['1', '2', '3'], 'aa@gmail.com', 1212, registro_actividad);
    var doctor1 = new Doctor_1.Doctor('Daniela Martinez', [new Doctor_1.Cardiologo()], new Doctor_1.Ubicacion('Venezuela', 'Miranda', 'San Antonio'), registro_auditoria);
    var cita1;
    var solicitud = paciente1.solicitarCita(Solicitud_1.TipoCita.Presencial, doctor1);
    // El paciente esta activo en la suscripcion
    //Se agenda la cita, en la Solicitud se conoce el tipo de cita
    cita1 = doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30), solicitud);
    // Cita Creada 
    console.log(cita1);
    //Si el paciente acepta la cita 
    paciente1.responderCita(cita1, Cita_1.StatusCita.aceptada);
    console.log(cita1);
}
cu_agendarCita();
