import { Endereco } from "./endereco";
import { Proprietario } from "./proprietario";
export class ImovelModel{

    nome: string='';
    tipo: string = '';
    valor?: number;
    condominio?: number;
    quartos?: number;
    banheiros?: number;
    mobiliado?: boolean= false;
    area?: number;
    venda?: boolean = false;
    aluguel?: boolean = false;
    dataAnuncio?: Date;
    endereco?: Endereco;
    id!: number;
    proprietarioId?: number;
}