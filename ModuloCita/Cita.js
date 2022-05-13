import { Paciente } from "../Paciente";
import { Registro_Historico } from "../PatronObservadorAuditoria/ObservadorRegistro";
// Status que puede tener la Cita
var StatusCita;
(function (StatusCita) {
    StatusCita["enCurso"] = "EN_CURSO";
    StatusCita["aceptada"] = "ACEPTADA";
    StatusCita["pendiente"] = "PENDIENTE";
    StatusCita["cancelada"] = "CANCELADA";
    StatusCita["finalizada"] = "FINALIZADA";
})(StatusCita || (StatusCita = {}));
// Clase Cita
// Falta colocarle la clase Doctor
class Cita {
    constructor(paciente, dia, hora) {
        let date = new Date();
        this.paciente = paciente;
        this.dia = date.setDate(dia);
        this.hora = date.setHours(hora);
        this.status = StatusCita.pendiente;
    }
}
class Telemedicina extends (Cita) {
    finalizarCita() {
        console.log('Finalizada  virtual');
        this.status = StatusCita.finalizada;
    }
}
class Presencial extends (Cita) {
    finalizarCita() {
        console.log('Finalizada presencial');
        this.status = StatusCita.finalizada;
    }
}
let registro_actividad = new Registro_Historico();
let paciente1 = new Paciente('Carlos Arriaga', 21, 'Estudiante', ['1', '2', '3'], 'arriaga1410@gmail.com', 1212, registro_actividad);
let cita = new Telemedicina(paciente1, 25, 8);
console.log(paciente1);
console.log(cita);
