export interface ObservadorRegistro{
    registrar(registroA:any):void;
    mostrarRegistros():void;
}

export class Registro_Auditoria implements ObservadorRegistro{
    registro = new Array();
    registrar(registroA:any): void{
        
        this.registro.push(registroA);
    }
    mostrarRegistros(): void {
        console.log("****   REGISTRO DE AUDITORIA   ****\n");
        for(let regist of this.registro){
            console.log(regist);
            console.log("\n");
        }
    }
}

export class Registro_Actividad implements ObservadorRegistro{
    registro = new Array();
    registrar(registroA:any): void{
    
        this.registro.push(registroA);
    }
    mostrarRegistros(): void {
        console.log("****   REGISTRO DE ACTIVIDAD   ****\n");
        for(let regist of this.registro){
            console.log(regist);
            console.log("\n");
        }
    }
}

export abstract class ObservableAuditoria{
    observador: ObservadorRegistro;
    abstract add(o: ObservadorRegistro):void;
    abstract notify(arreglo: Array<any>):void;

    constructor(observador: ObservadorRegistro){
        this.observador = observador;
    }
}