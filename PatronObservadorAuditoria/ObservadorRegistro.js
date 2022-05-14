export class Registro_Auditoria {
    constructor() {
        this.registro = new Array();
    }
    registrar(registroA) {
        this.registro.push(registroA);
    }
}
export class Registro_Actividad {
    constructor() {
        this.registro = new Array();
    }
    registrar(registroA) {
        this.registro.push(registroA);
    }
}
export class ObservableAuditoria {
    constructor(observador) {
        this.observador = observador;
    }
}
