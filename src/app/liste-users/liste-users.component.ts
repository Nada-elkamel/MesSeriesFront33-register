import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit{

  users? : User[]; 
  roles?: Role[];
  constructor(public authService: AuthService, private serieService: SerieService) {}

  ngOnInit(): void {
    this.chargerUsers();
  }

  chargerUsers(){
    this.serieService.listeUser().
    subscribe((users:any)=>{
    console.log(users);
    this.users=users;
    });
    }

    supprimerUser(user: User)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.serieService.supprimerUser(user.user_id).subscribe(() => {
        console.log("user supprimé");
        this.chargerUsers();     
      
});
}
}
