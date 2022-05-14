import { Paciente } from './Paciente';
import { ObservableAuditoria, ObservadorRegistro } from '../PatronObservadorAuditoria/ObservadorRegistro';
import { Cita, Telemedicina, Presencial } from '../ModuloCita/Cita'; 
/* IMPORTAR CITA PARA USARLA EN DOCTOR */

//NOMBRABLE

export interface Nombrable {
    getNombre(): string;
}

//UBICACION

export class Ubicacion implements Nombrable{
    pais:string;
    estado:string;
    ciudad:string;

    constructor(pais:string, estado: string, ciudad: string){
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
    examenMedico(): void;
}

export class Cardiologo implements Especialidad {
    getNombre() {
        return 'Cardiologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

export class Peidatra implements Especialidad {
    getNombre() {
        return 'Pediatra';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

export class Neurologo implements Especialidad {
    getNombre() {
        return 'Neurologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

//DOCTOR

export class Doctor extends ObservableAuditoria {
    private _nombre: string;
    private _especializaciones: Array<Especialidad> = [];
    private _consultorio: Ubicacion;
    private _historialCitas: Array<Cita>;

    constructor(nombre: string, especializaciones:Array<Especialidad>, consultorio:Ubicacion, o: ObservadorRegistro) { // esto no se si va
        super(o);
        this._nombre = nombre;
        this._especializaciones = especializaciones;
        this._consultorio = consultorio;
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(): void {
        let registrea = [];
        this.observador.registrar(registrea);
    }

    crearRegistroMedico(paciente: Paciente, cita: Cita){
        this.notify()
    }

    agendarCita(paciente: Paciente, fecha:Date): void{
        /*
        let cita = new Telemedicina(paciente,fecha);
        this._historialCitas.push(cita)
        return cita;
        */
    }

    modificarHistoriaMedica(paciente: Paciente){

    }
}

//BUSQUEDA DE DOCTORES
export class BuscarDoctor{
    Doctores: Doctor[];

    buscarDoctor<tipoE>(E: tipoE):void{

        return ;
    }

    buscarTopDoctor():void{
        
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