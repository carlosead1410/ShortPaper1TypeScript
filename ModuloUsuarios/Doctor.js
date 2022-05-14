import { ObservableAuditoria } from '../PatronObservadorAuditoria/ObservadorRegistro';
//UBICACION
export class Ubicacion {
    getNombre() {
        return `${this.pais} / ${this.estado} / ${this.ciudad}`;
    }
}
export class Cardiologo {
    getNombre() {
        return 'Cardiologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}
export class Peidatra {
    getNombre() {
        return 'Pediatra';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}
export class Neurologo {
    getNombre() {
        return 'Neurologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}
//DOCTOR
export class Doctor extends ObservableAuditoria {
    constructor(nombre, especializaciones, consultorio, o) {
        super(o);
        this._especializaciones = [];
        this._nombre = nombre;
        this._especializaciones = especializaciones;
        this._consultorio = consultorio;
    }
    add(o) {
        this.observador = this.observador;
    }
    notify() {
        let registrea;
        this.observador.registrar(registrea);
    }
    crearRegistroMedico(paciente, cita) {
    }
    agendarCita(paciente, fecha) {
        /*
        let cita = new Telemedicina(paciente,fecha);
        this._historialCitas.push(cita)
        return cita;
        */
    }
    modificarHistoriaMedica(paciente) {
    }
}
//BUSQUEDA DE DOCTORES
export class BuscarDoctor {
    buscarDoctor(E) {
        return;
    }
    buscarTopDoctor() {
        return;
    }
}
// function buscarDoctores<T extends Nombrable>(lista: T[], nombre: string): T[] {
//     let listaFiltrada: T[] = [];
//     lista.forEach(element => {
//         if (element.getNombre().includes(nombre)) {
//             listaFiltrada.push(element);
//         }
//     }); 
//     return listaFiltrada; 
// }
