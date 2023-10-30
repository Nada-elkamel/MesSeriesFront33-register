import { Type } from './../model/type.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from '../model/serie.model';
import { SerieService } from '../services/serie.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html'
})
export class AddSerieComponent implements OnInit {

  newSerie = new Serie();
  types!: Array<Type>;
  newIdType!: number;
  newTypes!: Type;

  uploadedImage!: File;
  imagePath: any;

  constructor(private serieService: SerieService,
    private router: Router) { }

  ngOnInit(): void {

    this.serieService.listeTypes().
      subscribe((typs: any) => {
        //this.types = typs._embedded.types;
        console.log(typs);
        this.types = typs;
      });
  }


  /* addSerie() {
    this.newSerie.type = this.types.find(typ => typ.idType == this.newIdType)!;
    this.serieService.ajouterSerie(this.newSerie)
      .subscribe(ser => {
        console.log(ser);
        this.router.navigate(['series']);
      });
  } */

   addSerie() {
    this.serieService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        this.newSerie.image = img;
        this.newSerie.type = this.types.find(typ => typ.idType
          == this.newIdType)!;
        this.serieService
          .ajouterSerie(this.newSerie)
          .subscribe(() => {
            this.router.navigate(['series']);
          });
      });
  } 





  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }


}