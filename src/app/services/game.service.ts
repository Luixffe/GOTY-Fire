import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Game } from "../class/Game";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private juegos: Game[] = [];
  private url = `${environment.url}/api/goty`;

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http
        .get<Game[]>(this.url)
        .pipe(tap(juegos => (this.juegos = juegos)));
    }
  }

  voteGame(id: string) {
    return this.http.post(`${this.url}/${id}`, {}).pipe(
      catchError(err => {
        return of({
          ok: err.error.ok,
          mensaje: err.error.mensaje,
          status: err.status
        });
      })
    );
  }
}
