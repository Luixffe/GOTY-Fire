import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { Game } from "../../class/Game";

import swal from "sweetalert2";

@Component({
  selector: "app-goty",
  templateUrl: "./goty.component.html",
  styleUrls: ["./goty.component.css"]
})
export class GotyComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getNominados().subscribe(res => {
      this.games = res;
    });
  }

  votarJuego(juego: Game) {
    this.gameService
      .voteGame(juego.id)
      .subscribe((res: { ok: boolean; mensaje: string; status: number }) => {
        if (res.ok)
          swal.fire("Gracias por la votacion", res.mensaje, "success");
        else {
          swal.fire(`${res.status}`, res.mensaje, "error");
        }
      });
  }
}
