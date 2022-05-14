import { Paciente } from "./ModuloUsuarios/Paciente";
import { IVisitor, PagoSuscripccion } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";
import { Registro_Actividad, Registro_Auditoria } from "./PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "./ModuloHistoriaMedica/HistorialMedico";
import { Cita, StatusCita } from "./ModuloCita/Cita";
import { Cardiologo, Doctor, Peidatra, Ubicacion, Especialidad } from "./ModuloUsuarios/Doctor";
import { Solicitud, TipoCita } from "./ModuloCita/Solicitud";




// CASO DE USO SUSCRIPCCION
function cu_suscripccionPaciente():void{
    console.log("ESTE ES EL CASO DE USO DE SUSCRIPCCION DE UN PACIENTE\n");

    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    let registro_actividad: Registro_Actividad = new Registro_Actividad();

    //Se crea al paciente
    let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);

    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de Paypal y lo va pagar mensualmente)
    paciente1.suscribirse(new Paypal('arriaga1410@gmail.com', TipoPlan.mensual));

    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    paciente1.MostrarPlan();

    console.log("\n");

    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);

    console.log("\n");

}
// cu_suscripccionPaciente();

//CASO DE USO SUSCRIPCCION POR TDC Y ANUAL (DIFERENTE METODO DE PAGO)
function cu_suscripccionPacienteTDC():void{
    console.log("ESTE ES EL CASO DE USO DE SUSCRIPCCION DE UN PACIENTE A TRAVES DE UNA TDC Y ANUAL\n");

    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    let registro_actividad: Registro_Actividad = new Registro_Actividad();

    //Se crea al paciente
    let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);

    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de TDC y lo va pagar ANUAL)
    paciente1.suscribirse(new TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, TipoPlan.anual));

    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    paciente1.MostrarPlan();

    console.log("\n");

    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);

    console.log("\n");

}
// cu_suscripccionPacienteTDC();


//CASO DE USO PACIENTE SOLICITA CITA (SUSCRIPCCION ACTIVA)
function cu_solicitarCitaActiva():void{
    console.log("****CASO DE USO SOLICITUD CITA CON SUSCRIPCCION ACTIVA");

    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    let registro_actividad: Registro_Actividad = new Registro_Actividad();
    let registro_Auditoria: Registro_Auditoria = new Registro_Auditoria();


    //Se crea al paciente
    let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    paciente1.suscribirse(new TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, TipoPlan.anual));
    console.log("\n");
    console.log("\n");

    // paciente1.ObtenerPlan().actualizarStatus(StatusSuscripccion.Cancelada);
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE BUSCA AL DOCTOR POR ESPECIALIDAD O UBICACION
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE SELECCIONA AL DOCTOR CON EL QUE QUIERE LA CITA

    //Se crea al doctor
    let doctor1 = new Doctor("Eduardo Damiano", [new Cardiologo(), new Peidatra()], new Ubicacion("Venezuela", "Dto Capital", "Caracas"), registro_Auditoria);

    //EL PACIENTE HACE LA SOLICITUD DE CITA
    let solucitud: Solicitud = paciente1.solicitarCita( TipoCita.Teleconsulta, doctor1, new Peidatra());

    solucitud.verificarSuscripccion(paciente1);
    console.log("El Paciente si puede solicitar la cita ya que esta suscrito al sistema");
}
// cu_solicitarCitaActiva();


//CASO DE USO PACIENTE SOLICITA CITA (SUSCRIPCCION CANCELADA O BLOQUEADA)
function cu_solicitarCitaCancelada():void{
    console.log("****CASO DE USO SOLICITUD CITA CON SUSCRIPCCION CANCELADA O BLOQUEADA");

    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    let registro_actividad: Registro_Actividad = new Registro_Actividad();
    let registro_Auditoria: Registro_Auditoria = new Registro_Auditoria();


    //Se crea al paciente
    let paciente1: Paciente = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
    // paciente1.suscribirse(new TDC("Carlos A", "Banco Mercantil", new Date("2025-02-10"), 1234567890, 123, TipoPlan.anual));
    // console.log("\n");
    // console.log("\n");

    let suscripccion: Suscripcion = new Suscripcion();
    suscripccion.actualizarStatus(StatusSuscripccion.Cancelada);
    paciente1.setSuscripccion(suscripccion);
    console.log(paciente1);

    //SE LE CANCELA LA SUSCRIPCCION AL PACIENTE

    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE BUSCA AL DOCTOR POR ESPECIALIDAD O UBICACION
    //SE OMITE LOS PROCEDIMIENTOS EN EL QUE EL PACIENTE SELECCIONA AL DOCTOR CON EL QUE QUIERE LA CITA

    //Se crea al doctor
    let doctor1 = new Doctor("Eduardo Damiano", [new Cardiologo(), new Peidatra()], new Ubicacion("Venezuela", "Dto Capital", "Caracas"), registro_Auditoria);

    //EL PACIENTE HACE LA SOLICITUD DE CITA
    let solicitud: Solicitud = paciente1.solicitarCita(TipoCita.Presencial, doctor1, new Peidatra());

    solicitud.verificarSuscripccion(paciente1);
}

//  cu_solicitarCitaCancelada();


// CASO DE USO DOCTOR AGENDA CITA DEL PACIENTE Y PACIENTE ACEPTA LA CITA

function cu_agendarCita(){
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
    let solicitud: Solicitud = paciente1.solicitarCita(TipoCita.Presencial, doctor1, new Cardiologo());
    // El paciente esta activo en la suscripcion
    //Se agenda la cita, en la Solicitud se conoce el tipo de cita
    
    cita1 = doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30),solicitud);

    // Cita Creada 
    console.log('*********************************************************************');
    console.log('********************DATOS DE LA CITA*********************************');
    console.log(cita1);
    console.log('*********************************************************************');
    
    //Si el paciente acepta la cita 
    paciente1.responderCita(cita1, StatusCita.aceptada);

    console.log('****************************************************************************');
    console.log('********************DATOS DE LA CITA CREADA*********************************');
    console.log(cita1);
    console.log('****************************************************************************');


    //Si el paciente cancela la cita flujo alterno
    paciente1.responderCita(cita1, StatusCita.cancelada);
    
    console.log('****************************************************************************');
    console.log('******************DATOS DE LA CITA CANCELADA********************************');
    console.log(cita1);
    console.log('****************************************************************************');

}

// cu_agendarCita();

//CASO DE USO CONSULTA MEDICA
function cu_consulta(){
    /*
        En este punto el Paciente ya acepto y es el turno de ir a la cita
    */
     // LLEVAR EL REGISTRO DE AUDITORIA Y ACTIVIDAD DEL PACIENTE Y DOCTOR
     let registro_actividad: Registro_Actividad = new Registro_Actividad();
     let registro_auditoria: Registro_Auditoria = new Registro_Auditoria();  
     
     
     let paciente1: Paciente = new Paciente('Adrian Herrera', 42, 'Contador', ['1', '2', '3'], 'aa@gmail.com', 1212, registro_actividad);
     let doctor1: Doctor = new Doctor('Daniela Martinez', [new Cardiologo()], new Ubicacion('Venezuela', 'Miranda', 'San Antonio'), registro_auditoria);
     let cita1: Cita;
     let solicitud: Solicitud = paciente1.solicitarCita(TipoCita.Presencial, doctor1, new Cardiologo());
     
     cita1 = doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30),solicitud);
 
      
     paciente1.responderCita(cita1, StatusCita.aceptada);

     doctor1.crearRegistroMedico(paciente1, cita1)

}


// CASO DE USO EL PACIENTE SE SUSCRIBE SOLICITA LA CITA Y EL DOCTOR LA AGENDA
function cu_procesoCompletoCita(){

    //ESTE OBJETO ES UNICO PARA LLEVAR TODO EL REGISTRO DE ACTIVIDADES DE LOS PACIENTES
    let registro_actividad: Registro_Actividad = new Registro_Actividad();
    let registro_Auditoria: Registro_Auditoria = new Registro_Auditoria();

    //Se crea al paciente
    let paciente1: Paciente = new Paciente('Maria Puentes', 65, 'Administradora', ['1', '2', '3'], 'maria@gmail.com', 4545, registro_actividad);

    // METODO PARA SUSCRIBIRSE AL SISTEMA DE TELEMEDICINA (Aqui el paciente selecciona el metodo de pago de TDC y lo va pagar anualmente)
    paciente1.suscribirse(new TDC('Maria P', 'Bank of America', new Date('2024-05-24'), 12345678, 5232, TipoPlan.anual));

    //SE MUESTRA LA SUSCRIPCCION DEL PACIENTE AL SISTEMA DE TELEMEDICINA (FECHA INICIO, FECHA FIN, METODO DE PAGO)
    console.log('*********************************************************************');
    console.log('********************SUSCRIPCION**************************************');
    paciente1.MostrarPlan();
    console.log('*********************************************************************');
    console.log('\n');

    //Se crea al doctor
    let doctor1 = new Doctor("Rafael Romero", [new Cardiologo(), new Peidatra()], new Ubicacion("Colombia", "Antoquia", "Medillin"), registro_Auditoria);

    //EL PACIENTE HACE LA SOLICITUD DE CITA
    
    
    let solicitud: Solicitud = paciente1.solicitarCita( TipoCita.Teleconsulta, doctor1, new Cardiologo());
    console.log('\n');
    console.log('\n');
    console.log('*******SE VERIFICA LA SUSCRIPCCION DEL PACIENTE*******');
    //SE VERIFICA SI EL CLIENTE ESTA ACTIVO    
    solicitud.verificarSuscripccion(paciente1);
    //SE VERIFICA QUE LA ESPECIALIDAD QUE ESTE SOLICITANDO EL PACIENTE LA POSEA EL DOCTOR
    console.log('*******SE VERIFICA LA ESPECIALIDAD DEL DOCTOR*******');
    solicitud.verificarEspecialidad(doctor1)
    console.log('\n');
    console.log('Puede solicitar la cita');

    console.log('\n');
    console.log('*********************************************************************');
    console.log('********************SOLICITUD****************************************');
    console.log(solicitud);
    console.log('*********************************************************************');
    console.log('\n');

    // LUEGO DEL DOCTOR QUE DOCTOR RECIBE LA SOLICITUD EL DOCTOR AGENDA LA CITA
    let cita1: Cita;
    cita1 = doctor1.agendarCita(paciente1, new Date(2022, 5, 16, 8, 30),solicitud);

    // SE AGENDA LA CITA 
    console.log('*********************************************************************');
    console.log('********************DATOS DE LA CITA*********************************');
    console.log(cita1);
    console.log('*********************************************************************');
    console.log('\n');
    
    // EL PACIENTE LA ACEPTA  
    paciente1.responderCita(cita1, StatusCita.aceptada);

    console.log('****************************************************************************');
    console.log('********************DATOS DE LA CITA ACEPTADA*********************************');
    console.log(cita1);
    console.log('****************************************************************************');
    console.log('\n');
}

cu_procesoCompletoCita()