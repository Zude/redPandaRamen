import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {Recipe} from './recipe';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({ providedIn : 'root' }) export class RecipeService
{
  constructor(private http: HttpClient, private messageService: MessageService)
  {}

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(rezeptName: string): Observable<Recipe>
  {
    const url = `${this.recipesUrl}/det?dts=${rezeptName}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${rezeptName}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${rezeptName}`)));
  }

  /** GET recipes from the server */
  getRecipes(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(tap(_ => this.log('fetched recipes')),
            catchError(this.handleError<Recipe[]>('getRecipes', [])));
  }

  /** PUT: update the recipe on the server */
  updateRecipe2(recipe: Recipe): Observable<any>
  {
    return this.http.put(this.recipesUrl, recipe, httpOptions)
      .pipe(tap(_ => this.log(`updated recipe id=${recipe.rezeptName}`)),
            catchError(this.handleError<any>('updateRecipe')));
  }
  /** PUT: update the recipe on the server */
  updateRecipe(recipe: Recipe): Observable<any>
  {
    const url = `${this.recipesUrl}/save`;
    console.log(JSON.stringify(recipe));
    return this.http.post(url, JSON.stringify(recipe), httpOptions)
      .pipe(tap(_ => this.log(`updated recipe id=${recipe.rezeptName}`)),
            catchError(this.handleError<any>('updateRecipe')));
  }

  /** Log a RecipeService message with the MessageService */
  private log(message: string)
  {
    this.messageService.add(`RecipeService: ${message}`);
  }
  private recipesUrl = '/api/data'; // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET recipes whose name contains search term */
  searchRecipes(term: string): Observable<Recipe[]>
  {
    if (!term.trim()) {
      // if not search term, return empty recipe array.
      return of([]);
    }
    return this.http.get<Recipe[]>(`${this.recipesUrl}/?name=${term}`)
      .pipe(tap(_ => this.log(`found recipes matching "${term}"`)),
            catchError(this.handleError<Recipe[]>('searchRecipes', [])));
  }
}
