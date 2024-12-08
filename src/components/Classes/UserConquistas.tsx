import { Conquista } from "./Conquistas";
import { Usuario } from "./Usuario";

export class userConquista {
    private id: string;
    private usuario: Usuario;
    private conquista: Conquista;

    constructor(
        id: string,
        usuario: Usuario,
        conquista: Conquista){
        this.id = id;
        this.usuario = usuario;
        this.conquista = conquista;
    }


    public getId(): string {
        return this.id;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    public getConquista(): Conquista {
        return this.conquista;
    }


    public setId(id: string): void {
        this.id = id;
    }

    public setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

    public setConquista(conquista: Conquista): void {
        this.conquista = conquista;
    }


}