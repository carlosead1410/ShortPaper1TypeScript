
import { Paypal, TDC, MetodoPago } from "./MetodoPago";
//CREACION DE LA INTERFAZ VISITOR
export interface IVisitor{
    visitTDC(tarjeta:TDC):void;
    visitPAYPAL(paypal: Paypal):void;
}

export class Pago implements IVisitor{
   visitTDC(tarjeta:TDC):void{
      console.log(tarjeta);
      console.log("El pago por TDC se ha registrado con exito\n");
   };

   visitPAYPAL(paypal:Paypal):void{
      console.log(paypal);
       console.log("El Pago por PayPal se ha registrado con exito\n");
   };

}

