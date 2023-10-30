import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styles: [
  ]
})
export class ListeTypesComponent implements OnInit {
types!:Type[];

updatedType:Type = {"idType":0,"nomType":""};

ajout:boolean=true;
  constructor(private serieService:SerieService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

chargerTypes(){
    this.serieService.listeTypes().
    subscribe((types:any)=>{
      //this.types=types._embedded.types;
    console.log(types);
    this.types=types;
    });
    }

  updateType(type:Type) {
      this.updatedType=type;
      this.ajout=false;  
    }
typeUpdated(type:Type){
  console.log("type updated event",type);
  this.serieService.ajouterType(type).
  subscribe(() => this.chargerTypes());
}

supprimerType(type : Type) {
  let conf = confirm("Etes-vous sûr ?");
     if (conf)
     {
       this.serieService.supprimerType(type.idType).subscribe(() => {
        console.log("Type supprimée");
        this.chargerTypes(); }  );
     }
}

}
