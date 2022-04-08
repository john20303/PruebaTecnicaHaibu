import {Component, OnInit} from '@angular/core';
import {PruebaService} from "../../services/prueba.service";
import {Address, User} from "../../interfaces/User";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] =[];
  p: number = 1;
  fecha : Date = new Date();
  nombre!: String; //search

  constructor(private _user: PruebaService, private router: Router) {
    this._user.getUsers().subscribe((res:any) => {
      this.users = res;
      console.log(this.users)
    })
  }

  ngOnInit(): void {
  }

  getUserById(id : number){
   this.router.navigate(['one',id]);
  }



  search() {
    // this.isLoading = true;
    this.users = this.users.filter(res => {
      if (!this.users || !this.nombre) {
        this._user.getUsers().subscribe(data => {
          this.users = data;
          console.log(data);
        })
      }
      else {
        (error: any) => console.log(error);
      }
      return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
    })
  }

}
