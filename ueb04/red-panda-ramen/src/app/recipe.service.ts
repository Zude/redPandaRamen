import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {RECIPES} from './mock-recipes';
import {Recipe} from './recipe';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({ providedIn : 'root' }) export class RecipeService
{
  constructor(private http: HttpClient, private messageService: MessageService)
  {}

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(id: number): Observable<Recipe>
  {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`)));
  }

  /** GET recipes from the server */
  getRecipes(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(tap(_ => this.log('fetched recipes')),
            catchError(this.handleError<Recipe[]>('getRecipes', [])));
  }

  /** PUT: update the recipe on the server */
  updateRecipe(recipe: Recipe): Observable<any>
  {
    return this.http.put(this.recipesUrl, recipe, httpOptions)
      .pipe(tap(_ => this.log(`updated recipe id=${recipe.id}`)),
            catchError(this.handleError<any>('updateRecipe')));
  }

  /** Log a RecipeService message with the MessageService */
  private log(message: string)
  {
    this.messageService.add(`RecipeService: ${message}`);
  }
  private recipesUrl = 'api/recipes'; // URL to web api

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
