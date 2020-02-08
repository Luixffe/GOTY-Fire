import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { GraficoBarraComponent } from "./grafico-barra/grafico-barra.component";
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NavbarComponent, GraficoBarraComponent],
  imports: [CommonModule, RouterModule, NgxChartsModule, BrowserAnimationsModule],
  exports: [NavbarComponent, GraficoBarraComponent]
})
export class ComponentsModule {}
