import { Component, OnInit } from '@angular/core';

import { Serie } from '../model/serie.model';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';
import { Image } from '../model/image.model';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

    series? : Serie[]; 

  constructor(private serieService: SerieService,
              public authService: AuthService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerSeries();
  }

  chargerSeries(){
    this.serieService.listeSerie().subscribe(sers => {
      console.log(sers);
      this.series = sers;

      this.series.forEach((ser) => {
        this.serieService
        .loadImage(ser.image.idImage)
        .subscribe((img: Image) => {
        ser.imageStr = 'data:' + img.type + ';base64,' + img.image;
        });
        }); 
      });
  }

supprimerSerie(s: Serie)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.serieService.supprimerSerie(s.idSerie).subscribe(() => {
        console.log("serie supprimée");
        this.chargerSeries();     
      
});
}
 
 

}