import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  user: User = new User(); // Initialize with an empty user object
  //users: User[] = [];
  role!: Role;
  roles: Role[] = [];
 // roleId!: number;
  newRole!: Role;
  oldRole!: Role;
  updatedRoleId!:number;
  currentUser = new User();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private serieService: SerieService) { }

  ngOnInit(): void {

     this.serieService
        .consulterUser(this.activatedRoute.snapshot.params['id'])
        .subscribe((user) => {
          console.log(user);
          this.currentUser = user;
          console.log(this.currentUser?.role.role_id)
          this.updatedRoleId = this.currentUser.role.role_id;
        });
    
      this.serieService.getAllRoles().subscribe((roles) => {
        this.roles = roles;
        console.log(roles);
      });
    }
    
    addRoleToUser() {
       this.serieService
         .addRoleToUser(this.currentUser.username, this.newRole.role)
         .subscribe((data) => {
           console.log('Role added to user');
           this.user.roles.push(this.newRole); 
         });
      console.log(this.currentUser);
    }
    
    removeRoleFromUser(role: Role) {
      console.log(role);
     // console.log('ROLE ID: ' + id);
      // this.serieService.findRoleById(id).subscribe((role) => {
      //   this.currentUser.user_id = role.role_id;
      //   this.oldRole = role;
      //   this.serieService
      //     .removeRoleFromUser(this.currentUser.user_id, this.oldRole)
      //     .subscribe((data) => {
      //       console.log(data);
      //       // this.currentUser.roles = this.currentUser.roles.filter(
      //       //   (userRole) => userRole.role_id !== id
      //       // );
      //     });
      // });


      this.serieService
          .removeRoleFromUser(this.currentUser.user_id, role)
          .subscribe((data) => {
             console.log(data);
              this.currentUser.roles = this.currentUser.roles.filter(
             (userRole) => userRole.role_id !== role.role_id
              );
          });
    }
    
    confirmAddRole() {
      // if (!this.user.roles.find(role => role.role === this.newRole.role)) {
      //   if (confirm('Voulez-vous vraiment ajouter ce rôle ?')) {
      //     this.addRoleToUser();
      //     alert('User modified');
      //     this.router.navigate(['/listeUser'], { skipLocationChange: true }).then(() => {
      //       window.location.reload();
      //     });
      //   } else {
      //     alert('Aucune modification apportée');
      //   }
      // } else {
      //   alert('Aucune modification apportée');
      // }
      
        console.log(this.newRole);
        this.addRoleToUser();
        this.router.navigate(['/listeUsers']).then(()=>{
          window.location.reload();
        }); 
     
    }
    
    confirmDeleteRole(role: Role) {
      if (confirm('Voulez-vous vraiment supprimer ce rôle ?')) {
        this.removeRoleFromUser(role);
      }
    }
    
    
}
