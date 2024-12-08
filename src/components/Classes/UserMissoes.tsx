import { Missao } from "./Missoes";
import { Usuario } from "./Usuario";

export class usermissao {
    private id: string;
    private usuario: Usuario;
    private missao: Missao;
    private progressoUser: number;
    private concluido: boolean;

    constructor(
        id: string,
        usuario: Usuario,
        missao: Missao,
        progressoUser: number,
        concluido: boolean = false
    ){
        this.id = id;
        this.usuario = usuario;
        this.missao = missao;
        this.progressoUser = progressoUser;
        this.concluido = concluido;
    }

    public getId(): string {
        return this.id;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    public getMissao(): Missao {
        return this.missao;
    }

    public getProgressoUser(): number {
        return this.progressoUser;
    }

    public getConcluido(): boolean {
        return this.concluido;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

    public setMissao(missao: Missao): void {
        this.missao = missao;
    }

    public setProgressoUser(progresso: number): void {
        this.progressoUser = progresso;
    }

    public setConcluido(concluido: boolean): void {
        this.concluido = concluido;
    }
}
