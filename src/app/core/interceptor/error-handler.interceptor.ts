import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Une erreur côté client ou réseau s'est produite. Traitez-la en conséquence.
      console.error('Une erreur s\'est produite:', error.error.message);
      errorMessage = `Une erreur s'est produite: ${error.error.message}`;
    } else {
      // Le backend a renvoyé un code de réponse infructueux.
      // Le corps de la réponse peut contenir des indices sur ce qui n'a pas fonctionné..
      console.error(
        `Code retourné par le backend ${error.status}, ` +
        `le corps était: ${error.error}`);
      errorMessage = `Code retourné par le backend ${error.status}, ` +
        `le corps était: ${error.error}`;
    }
    // Renvoyer un observable avec un message d'erreur pour l'utilisateur..
    return throwError(
      'Un problème est survenu ; veuillez réessayer plus tard.' +
      '\n' +
      errorMessage
    );
  }
}
