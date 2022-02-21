import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ImoveisService } from '../imoveis.service';
import { ImovelModel } from '../imoveis/imovel.model';
@Component({
  selector: 'app-imoveis-card',
  templateUrl: './imoveis-card.component.html',
  styleUrls: ['./imoveis-card.component.scss']
})
export class ImoveisCardComponent implements OnInit {

  @Input() propriedade: ImovelModel = new ImovelModel;
  @Output() deletados: EventEmitter<any> = new EventEmitter();
  constructor(private imoveisService : ImoveisService) { }

  ngOnInit(): void {
  }

  deletarPropriedade(){
    this.imoveisService.deletarPropriedade(this.propriedade.id).subscribe(propriedade =>{
    });
    this.deletados.emit();
  }
}
