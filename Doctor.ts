import { ObservableAuditoria, ObservadorRegistro } from './PatronObservadorAuditoria/ObservadorRegistro';

//NOMBRABLE

interface Nombrable {
    getNombre(): string;
}

//UBICACION

class Ubicacion implements Nombrable{
    pais:string;
    estado:string;
    ciudad:string;

    getNombre(): string {
        return `${this.pais} / ${this.estado} / ${this.ciudad}`;
    }
}

//ESPECIALIDADES

interface Especialidad extends Nombrable {
    examenMedico(): void;
}

class Cardiologo implements Especialidad {
    getNombre() {
        return 'Cardiologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

class Peidatra implements Especialidad {
    getNombre() {
        return 'Pediatra';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

class Neurologo implements Especialidad {
    getNombre() {
        return 'Neurologo';
    }
    examenMedico() {
        //Aqui van las especificaciones medicas tratadas en esta especialidad
    }
}

//DOCTOR

class Doctor extends ObservableAuditoria {
    nombre: string;
    especializacion: Especialidad;
    consultorio: Ubicacion;

    constructor(nombre: string, especializacion:Especialidad, consultorio:Ubicacion, o: ObservadorRegistro) { // esto no se si va
        super(o);
        this.nombre = nombre;
        this.especializacion = especializacion;
        this.consultorio = consultorio;
    }

    add(o: ObservadorRegistro): void {
        this.observador = this.observador;
    }

    notify(): void {
        this.observador.registrar();
    }
}

//BUSQUEDA DE DOCTORES
class BuscarDoctor {
    Doctores: Doctor[];

    buscarDoctor<tipoE>(E: tipoE):Doctor[]{

        return;
    }

    buscarTopDoctor():Doctor[]{
        
        return;
    }
}