export interface ObservadorRegistro{
    registrarActividad():void;

}

export class Registro_Historico implements ObservadorRegistro{
    registro = [];
    registrarActividad(): void{
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