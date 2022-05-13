


/*
    Necesito la clase Paciente Y Doctor
*/ 

export class RegistroMedico{
    //private _paciente : Paciente;
    //private _doctor : Doctor;
    private _datos: object;

    /*
    constructor(paciente : Paciente, doctor: Doctor){
        this._paciente =  paciente;
        this._doctor = doctor;
    }
    */

    constructor(datos: object){
        this._datos = datos;
    }

    get datos(){
        return this._datos
    }
}



/* 
    Clase Historial Medico
    esta conformada por 1 o mas registros medicos

*/

export class HistorialMedico{
    private _registros: Array<RegistroMedico>
    
    mostrarRegistro():void{
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this._registros.forEach(e => {
            console.log(e);
        });;
        console.log("\n");
    }

    agregarRegistro(a: RegistroMedico):void{
        this._registros.push(a);
    }
    
}