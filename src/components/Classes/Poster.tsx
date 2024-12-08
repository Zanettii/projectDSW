import { Reacao } from "./Reacao"; // Importa a classe Reacao, se necessário
import { Usuario } from "./Usuario";

export class Post {
    private titulo: string;
    private descricao: string;
    private user: Usuario;
    private data: Date;
    private reacoes: Reacao[];  // Lista de reações

    constructor(
        titulo: string,
        descricao: string,
        user: Usuario,
        data: Date,
        reacoes: Reacao[] = [] // Inicializa com uma lista vazia de reações
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.user = user;
        this.data = data;
        this.reacoes = reacoes;
    }

    // Getters
    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getuser(): Usuario {
        return this.user;
    }

    public getData(): Date {
        return this.data;
    }

    public getReacoes(): Reacao[] {
        return this.reacoes;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setuser(user: Usuario): void {
        this.user = user;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public setReacoes(reacoes: Reacao[]): void {
        this.reacoes = reacoes;
    }

    public adicionarReacao(reacao: Reacao): void {
        this.reacoes.push(reacao);
    }


}
