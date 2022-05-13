


/*
    Necesito la clase Paciente Y Doctor
*/ 

export class RegistroMedico{

    private _datos: object;

    constructor(datos: object){
        this._datos = datos;
    }

    get datos(){
        return this._datos
    }
}


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