/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategorieDto } from '../models/categorie-dto';
@Injectable({
  providedIn: 'root',
})
class CategoriesService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/categories/all';
  static readonly savePath = '/gestiondestock/v1/categories/create';
  static readonly deletePath = '/gestiondestock/v1/categories/delete/{idCategorie}';
  static readonly findByCodePath = '/gestiondestock/v1/categories/filter/{codeCategorie}';
  static readonly findByIdPath = '/gestiondestock/v1/categories/{idCategorie}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategorieDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategorieDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAll(): __Observable<Array<CategorieDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategorieDto>)
    );
  }

  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet category cree / modifie
   */
  saveResponse(body?: CategorieDto): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet category cree / modifie
   */
  save(body?: CategorieDto): __Observable<CategorieDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategorie undefined
   */
  deleteResponse(idCategorie: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/categories/delete/${encodeURIComponent(String(idCategorie))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategorie undefined
   */
  delete(idCategorie: number): __Observable<null> {
    return this.deleteResponse(idCategorie).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategorie undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeResponse(codeCategorie: string): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/filter/${encodeURIComponent(String(codeCategorie))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategorie undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCode(codeCategorie: string): __Observable<CategorieDto> {
    return this.findByCodeResponse(codeCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Rechercher une categorie par ID
   *
   * Cette methode permet de chercher une categorie par son ID
   * @param idCategorie undefined
   * @return La categorie a ete trouve dans la BDD
   */
  findByIdResponse(idCategorie: number): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/${encodeURIComponent(String(idCategorie))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par ID
   *
   * Cette methode permet de chercher une categorie par son ID
   * @param idCategorie undefined
   * @return La categorie a ete trouve dans la BDD
   */
  findById(idCategorie: number): __Observable<CategorieDto> {
    return this.findByIdResponse(idCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }
}

module CategoriesService {
}

export { CategoriesService }
