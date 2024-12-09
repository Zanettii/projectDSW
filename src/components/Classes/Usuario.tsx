
import dados from '../Interfaces/dadosTipoConquistas'

export class Usuario {
    private userName: string;
    private nome: string;
    private anoNascimento: Date;
    private avatar: string;
    private avatarIcone: string[];
    private conquistas: string[];
    private amigos: string[];
    private avancoDados: dados;
    private missoes: string[];

    constructor(
        userName: string,
        nome: string,
        anoNascimento: Date,
        avatar: string,
        avatarIcone: string[] = [],
        conquistas: string[] = [],
        amigos: string[] = [],
        avancoDados: dados,
        missoes: string[] = []
    ) {
        this.userName = userName;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.avatar = avatar;
        this.avatarIcone = avatarIcone;
        this.conquistas = conquistas;
        this.amigos = amigos;
        this.avancoDados = avancoDados;
        this.missoes = missoes;
    }

    // Getters
    public getUserName(): string {
        return this.userName;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): Date {
        return this.anoNascimento;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public getAvatarIcone(): string[] {
        return this.avatarIcone;
    }

    public getConquistas(): string[] {
        return this.conquistas;
    }

    public getAmigos(): string[] {
        return this.amigos;
    }

    public getAvancoDados(): dados {
        return this.avancoDados;
    }

    public getMissoes(): string[] {
        return this.missoes;
    }


    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(anoNascimento: Date): void {
        this.anoNascimento = anoNascimento;
    }

    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }

    public setAvancoDados(avancoDados: dados): void {
        this.avancoDados = avancoDados;
    }


    public addAvatarIcone(icone: string): void {
        this.avatarIcone.push(icone);
    }

    public addConquista(conquista: string): void {
        this.conquistas.push(conquista);
    }

    public addAmigo(amigo: string): void {
        this.amigos.push(amigo);
    }

    public addMissao(missao: string): void {
        this.missoes.push(missao);
    }
};

