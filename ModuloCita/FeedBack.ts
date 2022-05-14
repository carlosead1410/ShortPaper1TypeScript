/*
    Clase FeedBack, despues de cada Cita se tiene
    un feedback del cliente hacia el doctor
*/


export class FeedBack {
    private _valoracion: number;
    private _comentario: string;

    constructor (){
    }


    getvaloracion(){
        return this._valoracion;
    }

    getcomentario(){
        return this._comentario;
    }

    setvaloracion(valoracion:number){
        if (valoracion < 0 && valoracion > 5) {
            throw new Error('La valoracion debe estar en un Rango de [0-5]')
        }
        this._valoracion = valoracion;
    }

    setcomentario(comentario:string){
        this._comentario = comentario;
    }

    registrarValoracion(): void{
        //Do_Something
    }

}