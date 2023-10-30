import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';
import { SeriesComponent } from '../series/series.component';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
series!:Serie[];
IdType!:number;
types!:Array<Type>;

  constructor(private serieService:SerieService,
              public authService:AuthService) { }

  ngOnInit(): void {
    this.serieService.listeTypes().
    subscribe((typs: any) => {
      //this.types = typs._embedded.types;
    console.log(typs);
    this.types=typs;
    });

  }
  onChange() {
    this.serieService.rechercherParType(this.IdType).
    subscribe(sers =>{this.series=sers});
    }

}
