import { ObservadorNotificacion } from "./PatronObservador";

export class SMS implements ObservadorNotificacion {
    notificar(): void {
       console.log('Notificacion a traves de SMS') 
    }
}


export class CorreoElectronico implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Correo Electronico')
    }
}

export class Llamada implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Llamada')
    }
}

export class NotificacionPush implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Notificacion Push')
    }
}