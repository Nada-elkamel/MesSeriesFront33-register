import { Image } from './image.model';
import { Type } from './type.model';
export class Serie {
    idSerie! : number;
    nomSerie! : string;
     dateDiffusion! : Date ;
     langue! : string;
     type! : Type;
     image! : Image;
     imageStr!:string
    }
    