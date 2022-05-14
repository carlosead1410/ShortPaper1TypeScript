import { Paciente } from "./ModuloUsuarios/Paciente";
import { IVisitor, Pago } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";
import { Registro_Actividad, Registro_Auditoria } from "./PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "./ModuloHistoriaMedica/HistorialMedico";
import { Cardiologo, Doctor, Ubicacion } from "./ModuloUsuarios/Doctor";
import { Cita, StatusCita } from "./ModuloCita/Cita";

//ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
let registro_actividad: Registro_Actividad = new Registro_Actividad();
let registro_auditoria: Registro_Auditoria = new Registro_Auditoria();


let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);

//METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA
paciente1.suscribirse(new Paypal('arriaga1410@gmail.com', TipoPlan.mensual));

//MOSTRANDO SI EL PACIENTE TIENE SUSCRIPCCION
paciente1.obtenerPlan();

console.log("\n");
console.log(paciente1);

console.log("\n");

// paciente1.verHistorialMedico();



















































































// Caso de uso Doctor crea una Cita

function cu_DoctorCita(){
    /*
        En este punto el Paciente ya le paso Solicitud al Doctor para agendar una Cita
        paciente1 fue el que realizo la solicitud al doctor1

    */
    
    // LLEVAR EL REGISTRO DE AUDITORIA Y ACTIVIDAD DEL PACIENTE Y DOCTOR
    let registro_actividad: Registro_Actividad = new Registro_Actividad();
    let registro_auditoria: Registro_Auditoria = new Registro_Auditoria();  
    
    
    let paciente1: Paciente = new Paciente('Adrian Herrera', 42, 'Contador', ['1', '2', '3'], 'aa@gmail.com', 1212, registro_actividad);
    let doctor1: Doctor = new Doctor('Daniela Martinez', [new Cardiologo()], new Ubicacion('Venezuela', 'Miranda', 'San Antonio'), registro_auditoria);
    let cita1: Cita;
    //Se agenda la cita, en la Solicitud se conoce el tipo de cita
    cita1 = doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30), 'PRESENCIAL')

    console.log(cita1)

    cita1.actualizarStatus(StatusCita.aceptada)

    console.log(cita1)

}

cu_DoctorCita()