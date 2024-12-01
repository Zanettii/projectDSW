import { Usuario } from "./Usuario";

export class Reacao {
    private tipo: string;
    private usuario: Usuario;

    constructor(tipo: string, usuario: Usuario) {
        this.tipo = tipo;
        this.usuario = usuario;

    }

    // Getters
    public getTipo(): string {
        return this.tipo;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    // Setters
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

}
