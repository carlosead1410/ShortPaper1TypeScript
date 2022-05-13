export interface ObservadorRegistro{
    registrar():void;

}

export class Registro_Auditoria implements ObservadorRegistro{
    registro = [];
    registrar(): void{
        let registroA;
        this.registro.push(registroA);
    }
}

export class Registro_Actividad implements ObservadorRegistro{
    registro = [];
    registrar(): void{
        let registroA;
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