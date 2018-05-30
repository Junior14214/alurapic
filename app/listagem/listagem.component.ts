import { PainelComponent } from './../painel/painel.component';
import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {

        this.service = service;

        service
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro));

    }

    remove(foto: FotoComponent, painel: PainelComponent) {

        this.service
            .remove(foto)
            .subscribe(() => {

                painel.fadeOut(() => {

                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto removida com sucesso!'

                });

            }, erro => this.mensagem = 'Não foi possivel remover a foto!');


    }

}