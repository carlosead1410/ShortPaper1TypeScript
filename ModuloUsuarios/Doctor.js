"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BuscarDoctor = exports.Doctor = exports.Neurologo = exports.Peidatra = exports.Cardiologo = exports.Ubicacion = void 0;
var ObservadorRegistro_1 = require("../PatronObservadorAuditoria/ObservadorRegistro");
var Cita_1 = require("../ModuloCita/Cita");
var Notificacion_1 = require("../ModuloNotificaciones/Notificacion");
var Solicitud_1 = require("../ModuloCita/Solicitud");
var HistorialMedico_1 = require("../ModuloHistoriaMedica/HistorialMedico");
//UBICACION
var Ubicacion = /** @class */ (function () {
    function Ubicacion(pais, estado, ciudad) {
        this.pais = pais;
        this.estado = estado;
        this.ciudad = ciudad;
    }
    Ubicacion.prototype.getNombre = function () {
        return "".concat(this.pais, " / ").concat(this.estado, " / ").concat(this.ciudad);
    };
    return Ubicacion;
}());
exports.Ubicacion = Ubicacion;
var Cardiologo = /** @class */ (function () {
    function Cardiologo() {
    }
    Cardiologo.prototype.getNombre = function () {
        return 'Cardiologo';
    };
    Cardiologo.prototype.examenMedico = function () {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        /* ¡¡¡ ACLARACION !!!: Se sabe que es una muy mala practica instanciar objetos dentro de una clase en si,
        pero para efectos de esta entrega y la simulacion de este caso de uso, se agilizara el proceso de esta manera
        rellenando aqui el examen medico */
        var exMed = {
            presionArterial: 120,
            antecedentesPersonales: ['Obesidad'],
            altura: '1.75 m',
            peso: '112 kg',
            colesterol: '95 mg/dl',
            frecuenciaCardiaca: '75 ppm'
        };
        return exMed;
    };
    return Cardiologo;
}());
exports.Cardiologo = Cardiologo;
var Peidatra = /** @class */ (function () {
    function Peidatra() {
    }
    Peidatra.prototype.getNombre = function () {
        return 'Pediatra';
    };
    Peidatra.prototype.examenMedico = function () {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        return {};
    };
    return Peidatra;
}());
exports.Peidatra = Peidatra;
var Neurologo = /** @class */ (function () {
    function Neurologo() {
    }
    Neurologo.prototype.getNombre = function () {
        return 'Neurologo';
    };
    Neurologo.prototype.examenMedico = function () {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        return {};
    };
    return Neurologo;
}());
exports.Neurologo = Neurologo;
//DOCTOR
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(nombre, especializaciones, consultorio, o) {
        var _this = _super.call(this, o) || this;
        _this._especializaciones = [];
        _this._historialCitas = [];
        _this._nombre = nombre;
        _this._especializaciones = especializaciones;
        _this._consultorio = consultorio;
        return _this;
    }
    Doctor.prototype.getNombre = function () {
        return "Dr. " + this._nombre;
    };
    Doctor.prototype.getEspecializaciones = function () {
        return this._especializaciones;
    };
    Doctor.prototype.add = function (o) {
        this.observador = this.observador;
    };
    Doctor.prototype.notify = function () {
        var registrar = [];
        this.observador.registrar(registrar);
    };
    Doctor.prototype.addRegistroMed = function (registro, paciente) {
        var historia = paciente.obtenerHistorial();
        historia.agregarRegistro(registro);
        historia.mostrarRegistro();
    };
    Doctor.prototype.crearRegistroMedico = function (paciente, cita) {
        this.notify();
        /*
            Se debe verificar si el paciente tiene o no tiene historia medica
            si no tiene debe ser creada
        */
        if (paciente._historia === undefined) {
            paciente._historia = new HistorialMedico_1.HistorialMedico();
        }
        //La Cita pasa a estar en curso
        cita.actualizarStatus(Cita_1.StatusCita.enCurso);
        /*
            El metodo debe recibir el tipo de especializacion a la cual sera atendido
            ya que el doctor puede tener varias especializaciones

        */
        var espIndex = 0;
        for (var i = 0; i < this._especializaciones.length; i++) {
            if (this._especializaciones[i].getNombre() == cita.especialidad.getNombre()) {
                espIndex = i;
            }
        }
        var exMed = this._especializaciones[espIndex].examenMedico();
        cita.actualizarStatus(Cita_1.StatusCita.finalizada);
        var registro1 = new HistorialMedico_1.RegistroMedico(exMed, new Notificacion_1.NotificacionPush());
        this.addRegistroMed(registro1, paciente);
    };
    Doctor.prototype.agendarCita = function (paciente, fecha, solicitud) {
        var notificacion = new Notificacion_1.SMS();
        var cita;
        if (solicitud.getTipo() == Solicitud_1.TipoCita.Presencial) {
            cita = new Cita_1.Presencial(paciente, fecha, solicitud.getEspecialidad(), notificacion);
        }
        else {
            cita = new Cita_1.Telemedicina(paciente, fecha, solicitud.getEspecialidad(), notificacion);
        }
        this._historialCitas.push(cita);
        return cita;
    };
    Doctor.prototype.modificarHistoriaMedica = function (paciente) {
    };
    return Doctor;
}(ObservadorRegistro_1.ObservableAuditoria));
exports.Doctor = Doctor;
//BUSQUEDA DE DOCTORES
var BuscarDoctor = /** @class */ (function () {
    function BuscarDoctor() {
    }
    BuscarDoctor.prototype.buscarDoctor = function (E) {
        return;
    };
    BuscarDoctor.prototype.buscarTopDoctor = function () {
        return;
    };
    return BuscarDoctor;
}());
exports.BuscarDoctor = BuscarDoctor;
// function buscarDoctores<T extends Nombrable>(lista: T[], nombre: string): T[] {
//     let listaFiltrada: T[] = [];
//     lista.forEach(element => {
//         if (element.getNombre().includes(nombre)) {
//             listaFiltrada.push(element);
//         }
//     });
//     return listaFiltrada;
// }
