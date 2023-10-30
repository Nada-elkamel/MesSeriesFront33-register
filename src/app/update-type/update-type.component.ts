import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: [
  ]
})
export class UpdateTypeComponent implements OnInit {
@Input()
type!:Type;

@Output()
typeUpdated=new EventEmitter<Type>();

@Input()
ajout!:boolean;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.type);
  }
  saveType(){
    this.typeUpdated.emit(this.type);
  }
  modeAjout(){
    this.ajout=true;
    this.type.idType=0;
    this.type.nomType="";
  }

}
