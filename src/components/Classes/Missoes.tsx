export class Missao {
    private nome: string;
    private tipo: string;
    private meta: number;
    private dataInicio: Date;
    private dataFim: Date;
    private prazo: number;
    private userProgresso: number;
    private user: string;
    private icone: string;
    private id: string;

    constructor(
        nome: string,
        tipo: string,
        meta: number,
        dataInicio: Date,
        dataFim: Date,
        icone: string,
        id: string,
        user: string,
    ) {
        this.nome = nome;
        this.tipo = tipo;
        this.meta = meta;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.icone = icone;
        this.prazo = this.calcularPrazo();
        this.id = id;
        this.userProgresso = 0;
        this.user = user;
    }

    // Métodos para calcular o prazo
    private calcularPrazo(): number {
        const diffInMs = this.dataFim.getTime() - this.dataInicio.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Converter de milissegundos para dias
        return diffInDays;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getUser(): string{
        return this.user;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getMeta(): number {
        return this.meta;
    }

    public getDataInicio(): Date {
        return this.dataInicio;
    }

    public getUserProgresso(): number{
        return this.userProgresso;
    }

    public getDataFim(): Date {
        return this.dataFim;
    }

    public getPrazo(): number {
        return this.prazo;
    }

    public getIcone(): string {
        return this.icone;
    }

    public getId(): string{
        return this.id;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setUser(user: string): void{
        this.user = user;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setMeta(meta: number): void {
        this.meta = meta;
    }

    public setDataInicio(dataInicio: Date): void {
        this.dataInicio = dataInicio;
        this.prazo = this.calcularPrazo(); // Recalcular o prazo
    }

    public setDataFim(dataFim: Date): void {
        this.dataFim = dataFim;
        this.prazo = this.calcularPrazo(); // Recalcular o prazo
    }

    public setUserProgresso(userProgresso: number): void{
        this.userProgresso = userProgresso;
    }

    public setIcone(icone: string): void {
        this.icone = icone;
    }


}
