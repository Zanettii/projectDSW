import { ReactNode } from "react";
import SimplesVisu from '@/components/VisualizacaoSimples';

interface imagem{
    perfil: string,
    Token: string,
}

export class Conquista {
    private titulo: string;
    private imagens: imagem;
    private descricao: string;
    private meta: number;
    private id: string;


    constructor(
        titulo: string,
        imagens: imagem,
        descricao: string,
        meta: number,
        id: string,
    ) {
        this.titulo = titulo;
        this.imagens = imagens;
        this.descricao = descricao;
        this.meta = meta;
        this.id = id;
    }

    // Getters
    public getTitulo(): string {
        return this.titulo;
    }

    public getImagens(): imagem {
        return this.imagens;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getMeta(): number {
        return this.meta;
    }

    public getId(): string{
        return this.id;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setImagens(imagens: imagem): void {
        this.imagens = imagens;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setMeta(meta: number): void {
        this.meta = meta;
    }

    public getElementoSimples(){
        return (
            <div></div>
        )
    }

    public getElementoFoco(){
        return (
            <div>
                
            </div>
        )
    }

    public getElementoPopUp(){
        return (
            <div>
                
            </div>
        )
    }
}
