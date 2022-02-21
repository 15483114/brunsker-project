import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImovelModel } from './imoveis/imovel.model';
import { Proprietario } from './imoveis/proprietario';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(private http: HttpClient) {}

  listarImoveis() : Observable<any>{
    return this.http.get("http://localhost:5875/imovel");
  }

  buscarProprietarioPeloNome(name: string) : Observable<any>{
    return this.http.get("http://localhost:5875/proprietario?q="+name);
  }

  salvarImovel(imovel: ImovelModel)  : Observable<any>{
    return this.http.post("http://localhost:5875/imovel", imovel);
  }

  salvarProprietario(proprietario: Proprietario)  : Observable<any>{
    console.log("this is proppppp", proprietario);
    return this.http.post("http://localhost:5875/proprietario", proprietario);
  }

  buscarCep(cep: string) : Observable<any>{
    return this.http.get( "https://viacep.com.br/ws/"+ cep + "/json");
  }

  deletarPropriedade(id: number){
    return this.http.delete("http://localhost:5875/imovel/"+id);
  }
}
