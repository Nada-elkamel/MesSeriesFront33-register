import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  series!:Serie[];
  nomSerie!:string;
  allSeries!:Serie[];
  searchTerm!:string;

  constructor(private serieService:SerieService,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.serieService.listeSerie().subscribe(sers=>{
console.log(sers);
this.series=sers;
this.allSeries=sers;
    })
  }
  rechercherSers(){
    this.serieService.rechercherParNom(this.nomSerie).
    subscribe(sers => {
      console.log(sers);
    this.series = sers;
    });
    }
    onKeyUp(filterText:string){
      this.series=this.allSeries.filter(item=>
        item.nomSerie.toLowerCase().includes(filterText));
    }

}
