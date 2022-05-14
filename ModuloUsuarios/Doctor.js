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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarDoctor = exports.Doctor = exports.Neurologo = exports.Peidatra = exports.Cardiologo = exports.Ubicacion = void 0;
var ObservadorRegistro_1 = require("../PatronObservadorAuditoria/ObservadorRegistro");
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
        _this._nombre = nombre;
        _this._especializaciones = especializaciones;
        _this._consultorio = consultorio;
        return _this;
    }
    Doctor.prototype.add = function (o) {
        this.observador = this.observador;
    };
    Doctor.prototype.notify = function () {
        var registrea = [];
        this.observador.registrar(registrea);
    };
    Doctor.prototype.crearRegistroMedico = function (paciente, cita) {
        this.notify();
    };
    Doctor.prototype.agendarCita = function (paciente, fecha) {
        /*
        let cita = new Telemedicina(paciente,fecha);
        this._historialCitas.push(cita)
        return cita;
        */
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
