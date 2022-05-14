import { Paciente } from "./ModuloUsuarios/Paciente";
import { IVisitor, Pago } from "./ModuloSuscripccion/IVisitor";
import { MetodoPago, Paypal, TDC, TipoPlan} from "./ModuloSuscripccion/MetodoPago";
import { Suscripcion, StatusSuscripccion } from "./ModuloSuscripccion/Suscripccion";
import { Registro_Actividad, Registro_Auditoria } from "./PatronObservadorAuditoria/ObservadorRegistro";
import { HistorialMedico } from "./ModuloHistoriaMedica/HistorialMedico";
import { Cardiologo, Doctor, Peidatra, Ubicacion } from "./ModuloUsuarios/Doctor";




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
    paciente1.obtenerPlan();

    console.log("\n");

    //IMPRIMO EL OBJETO PACIENTE
    console.log(paciente1);

    console.log("\n");

}
cu_suscripccionPaciente();
