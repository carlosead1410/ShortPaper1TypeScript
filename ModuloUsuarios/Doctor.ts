import { Paciente } from './Paciente';
import { ObservableAuditoria, ObservadorRegistro } from '../PatronObservadorAuditoria/ObservadorRegistro';
import { Cita, Telemedicina, Presencial, StatusCita } from '../ModuloCita/Cita';
import { NotificacionPush, SMS } from '../ModuloNotificaciones/Notificacion'
import { Solicitud, TipoCita } from '../ModuloCita/Solicitud';
import { HistorialMedico, RegistroMedico } from '../ModuloHistoriaMedica/HistorialMedico';
/* IMPORTAR CITA PARA USARLA EN DOCTOR */

//NOMBRABLE

export interface Nombrable {
    getNombre(): string;
}

//UBICACION

export class Ubicacion implements Nombrable {
    pais: string;
    estado: string;
    ciudad: string;

    constructor(pais: string, estado: string, ciudad: string) {
        this.pais = pais;
        this.estado = estado;
        this.ciudad = ciudad;
    }

    getNombre(): string {
        return `${this.pais} / ${this.estado} / ${this.ciudad}`;
    }
}

//ESPECIALIDADES

export interface Especialidad extends Nombrable {
    examenMedico(): object;
}

export class Cardiologo implements Especialidad {
    getNombre() {
        return 'Cardiologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        /* ¡¡¡ ACLARACION !!!: Se sabe que es una muy mala practica instanciar objetos dentro de una clase en si,
        pero para efectos de esta entrega y la simulacion de este caso de uso, se agilizara el proceso de esta manera
        rellenando aqui el examen medico */

        let exMed = {
            presionArterial: 120,
            antecedentesPersonales: ['Obesidad'],
            altura: '1.75 m',
            peso: '112 kg',
            colesterol: '95 mg/dl',
            frecuenciaCardiaca: '75 ppm'
        }
        return exMed;
    }
}

export class Peidatra implements Especialidad {
    getNombre() {
        return 'Pediatra';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        return {

        };
    }
}

export class Neurologo implements Especialidad {
    getNombre() {
        return 'Neurologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
        return {

        };
    }
}

//DOCTOR

export class Doctor extends ObservableAuditoria {
    private _nombre: string;
    _especializaciones: Array<Especialidad> = [];
    private _consultorio: Ubicacion;
    private _historialCitas: Array<Cita> = [];

    constructor(nombre: string, especializaciones: Array<Especialidad>, consultorio: Ubicacion, o: ObservadorRegistro) { // esto no se si va
        super(o);
        this._nombre = nombre;
        this._especializaciones = especializaciones;
        this._consultorio = consultorio;
    }

    getNombre(): string {
        return "Dr. " + this._nombre;
    }

    getEspecializaciones(): Array<Especialidad> {
        return this._especializaciones;
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(arreglo: Array<any>): void {
        this.observador.registrar(arreglo);
    }

    addRegistroMed(registro: RegistroMedico, paciente: Paciente) {
        const historia: HistorialMedico = paciente.obtenerHistorial();
        historia.agregarRegistro(registro);
        historia.mostrarRegistro();
    }

    crearRegistroMedico(paciente: Paciente, cita: Cita) {
        
        /*
            Se debe verificar si el paciente tiene o no tiene historia medica 
            si no tiene debe ser creada
        */
        if (paciente._historia === undefined) {
            paciente._historia = new HistorialMedico();
            this.notify([this.getNombre(),Date.now(),paciente.getNombre(),"Creó historia médica"])
        }
        //La Cita pasa a estar en curso
        cita.actualizarStatus(StatusCita.enCurso);
        /*
            El metodo debe recibir el tipo de especializacion a la cual sera atendido 
            ya que el doctor puede tener varias especializaciones

        */
        let espIndex: number = 0;
        for (var i: number = 0; i < this._especializaciones.length; i++) {
            if (this._especializaciones[i].getNombre() == cita.especialidad.getNombre()) {
                espIndex = i;
            }
        }
        const exMed = this._especializaciones[espIndex].examenMedico();
        cita.actualizarStatus(StatusCita.finalizada);
        let registro1 = new RegistroMedico(exMed, new NotificacionPush());
        this.addRegistroMed(registro1, paciente);       
        this.notify([this.getNombre(),Date.now(),paciente.getNombre(),"Creó registro médico"])
    }

    agendarCita(paciente: Paciente, fecha: Date, solicitud: Solicitud): Cita {
        let notificacion: SMS = new SMS()
        let cita: Cita;
        if (solicitud.getTipo() == TipoCita.Presencial) {
            cita = new Presencial(paciente, fecha, solicitud.getEspecialidad(), notificacion)

        } else {
            cita = new Telemedicina(paciente, fecha, solicitud.getEspecialidad(), notificacion)
        }

        this._historialCitas.push(cita)
        return cita;

    }

    modificarHistoriaMedica(paciente: Paciente) {

    }
}

//BUSQUEDA DE DOCTORES
export class BuscarDoctor {
    Doctores: Doctor[];

    buscarDoctor<tipoE>(E: tipoE): void {

        return;
    }

    buscarTopDoctor(): void {

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