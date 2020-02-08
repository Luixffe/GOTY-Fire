import { Component, OnDestroy, Input } from "@angular/core";

@Component({
  selector: "app-grafico-barra",
  templateUrl: "./grafico-barra.component.html",
  styleUrls: ["./grafico-barra.component.css"]
})
export class GraficoBarraComponent implements OnDestroy {
  @Input() results: any[] = []
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Juegos";
  showYAxisLabel = true;
  yAxisLabel = "Votos";

  colorScheme = "nightLights";

  constructor() {
    // this.intervalo = setInterval( () => {
    //   console.log('tick');
    //   const newResults = [...this.results];
    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500)
    // Aqui se generan datos aleatoriamente para simular la funcionalidad de el grafico

    
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval(this.intervalo)
    // Aqui se elimina el intervalo
  }
}
