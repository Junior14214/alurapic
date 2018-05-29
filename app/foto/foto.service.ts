import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos'

    constructor(http: Http) {

        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(foto: FotoComponent): Observable<any> {

        if (foto._id) {
            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
                .map(() => ({ mensagem: 'Foto alterada com sucesso!', inclusao: false }))
        } else {
            return this.http
                .post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(() => ({ mensagem: 'Foto incluida com sucesso!', inclusao: true }))
        }



    }

    lista(): Observable<FotoComponent[]> {

        return this.http
            .get(this.url)
            .map(res => res.json());

    }

    remove(foto: FotoComponent) {
        return this.http.delete(this.url + '/' + foto._id)
    }

    buscaPorId(id: string): Observable<FotoComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

}