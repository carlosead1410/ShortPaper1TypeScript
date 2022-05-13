export var TipoPlan;
(function (TipoPlan) {
    TipoPlan["mensual"] = "MENSUAL";
    TipoPlan["anual"] = "ANUAL";
})(TipoPlan || (TipoPlan = {}));
// CREACION DE LAS CLASES DE METODOS DE PAGO
export class MetodoPago {
    constructor(modalidad) {
        this.modalidad = modalidad;
    }
}
//CREACION CLASE PAYPAL
export class Paypal extends MetodoPago {
    constructor(email, modalidad) {
        super(modalidad);
        this.email = email;
    }
    realizarPago(IVisitor) {
        IVisitor.visitPAYPAL(this);
    }
    getName() {
        return "Paypal";
    }
}
//CREACION CLASE TDC
export class TDC extends MetodoPago {
    constructor(nombre, banco, f_vencimiento, nro_tarjeta, cvc, modalidad) {
        super(modalidad);
        this.nombre = nombre;
        this.banco = banco;
        this.f_vencimiento = f_vencimiento;
        this.nro_tarjeta = nro_tarjeta;
        this.cvc = cvc;
    }
    realizarPago(IVisitor) {
        IVisitor.visitTDC(this);
    }
    getName() {
        return "TDC";
    }
}
