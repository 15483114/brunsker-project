import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImoveisService } from '../imoveis.service';
import { ImovelModel } from './imovel.model';
import { Endereco } from './endereco';
import { ImoveisCardComponent } from "../imoveis-card/imoveis-card.component";
import { Proprietario } from './proprietario';
@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent implements OnInit {
  endereco: Endereco = new Endereco();
  cep: string = '';
  public proprietario: Proprietario = new Proprietario();
  public imoveis: ImovelModel[] = new Array();
  public imovel: ImovelModel = new ImovelModel();
  public showProprietario: boolean=false;
  constructor( private imoveisService : ImoveisService ) {}

  ngOnInit() {
    this.listarImoveis();
  }

  publicar(){
    this.imovel.endereco = this.endereco;
    this.imovel.proprietarioId = this.proprietario.id;
    debugger;
    this.imoveisService.salvarImovel(this.imovel).subscribe(imovel =>{
      this.imovel = new ImovelModel();
      this.listarImoveis();
      this.proprietario.imovelId=imovel.id;
    }, err => {
      console.log("Erro ao registrar imóvel", err);
    });
  }

  buscarProprietario(){
    this.imoveisService.buscarProprietarioPeloNome(this.proprietario.nome).subscribe(proprietario =>{
      if(proprietario.length === 0){
        this.imoveisService.salvarProprietario(this.proprietario).subscribe(proprietario=>{
        });
      }else{
        this.proprietario = proprietario[0];
        this.showProprietario=true;
      }
      
    },err=>{
      
    }
    )
  }

  buscarCep(){
    this.imoveisService.buscarCep(this.endereco.cep).subscribe(endereco =>{
        this.endereco=endereco;
    })
  }
  

  listarImoveis(){
    this.imoveisService.listarImoveis().subscribe(imoveis =>{
        this.imoveis = imoveis;
    }, err =>{
      console.log("Não foi possível listar os imóveis cadastrados", err);
    }
    )
  }

}
