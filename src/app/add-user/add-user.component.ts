import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';
import { SerieService } from '../services/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  newUser = new User();
  roles!: Array<Role>;
  newIdRole!: number;
  newRoles!: Role;


  constructor(private serieService: SerieService,
    private router: Router) { }

  ngOnInit(): void {

    this.serieService.listeRoles().
      subscribe((rols: any) => {
        console.log(rols);
        this.roles = rols;
      });
  }

  addUser(){
    this.newUser.role = this.roles.find(rol => rol.role_id == this.newIdRole)!;
    this.serieService.creerUser(this.newUser)
                      .subscribe(user => {
                      console.log(user);
                      this.router.navigate(['users']);
                      }); 
    }
}
