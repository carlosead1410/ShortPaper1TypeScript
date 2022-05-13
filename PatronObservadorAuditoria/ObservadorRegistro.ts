export interface ObservadorRegistro{
    registrar(registroA:any):void;

}

export class Registro_Auditoria implements ObservadorRegistro{
    registro = new Array();
    registrar(registroA:any): void{
        
        this.registro.push(registroA);
    }
}

export class Registro_Actividad implements ObservadorRegistro{
    registro = new Array();
    registrar(registroA:any): void{
    
        this.registro.push(registroA);
    }
}

export abstract class ObservableAuditoria{
    observador: ObservadorRegistro;
    abstract add(o: ObservadorRegistro):void;
    abstract notify():void;

    constructor(observador: ObservadorRegistro){
        this.observador = observador;
    }
}