class CategoriasComponentes {
    private categorias: string[];
    private htmlObjeto: { [key: string]: React.ReactNode };

    constructor(categorias: string[] = [], htmlObjeto: { [key: string]: React.ReactNode } = {}) {
        this.categorias = categorias;
        this.htmlObjeto = htmlObjeto;
    }

    // Getters
    public getCategorias(): string[] {
        return this.categorias;
    }

    public getHtmlObjeto(): { [key: string]: React.ReactNode } {
        return this.htmlObjeto;
    }

    // Setters
    public setCategorias(categorias: string[]): void {
        this.categorias = categorias;
    }

    public setHtmlObjeto(htmlObjeto: { [key: string]: React.ReactNode }): void {
        this.htmlObjeto = htmlObjeto;
    }

    // Adicionar uma nova categoria
    public addCategoria(categoria: string): void {
        this.categorias.push(categoria);
    }

    // Adicionar um novo par chave-valor no objeto htmlObjeto
    public addHtmlObjeto(key: string, value: React.ReactNode): void {
        this.htmlObjeto[key] = value;
    }
}
