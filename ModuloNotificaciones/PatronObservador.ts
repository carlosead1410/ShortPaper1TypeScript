
export interface ObservadorNotificacion{
    notificar(): void
}


export abstract class ObservableNotificacion{
    observador: ObservadorNotificacion;
    abstract add(o: ObservableNotificacion):void;
    abstract notify():void;

    constructor(observador: ObservadorNotificacion){
        this.observador = observador;
    }
}



