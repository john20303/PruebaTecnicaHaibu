import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  fecha : Date = new Date();
  id!: number;
  i!: number;
  user!: User;

  constructor(private _oneUser : PruebaService, private activateroute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.i = this.activateroute.snapshot.params['id'];

    this._oneUser.userById(this.i).subscribe(data =>{
      this.user = data;
      console.log(this.user);
    },(error) => {
      console.log(error);
    })
  }

}
