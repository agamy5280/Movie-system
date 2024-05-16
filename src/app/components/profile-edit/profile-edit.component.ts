import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  userID: any;
  Udata: any = [];
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private _router: Router
  ) {
    if (_router.url == '/profile') {
      this._router.navigate(['log-in']);
    }
  }
  myform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]+'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]+'),
    ]),
    phoneNumber: new FormControl(0, [
      Validators.required,
      Validators.min(1000000000),
      Validators.max(99999999999),
      Validators.pattern('[0-9]+'),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  add() {
    if (!this.myform.valid) {
      alert('wrong data');
    } else {
      alert('valid data');
      this.usersService
        .updateObjectById(this.userID, this.myform.value)
        .subscribe();
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.userID = params['id'];
      (await this.usersService.getUser(this.userID)).subscribe({
        next: (data: any) => {
          console.log(data);

          this.Udata = data;
        },
      });
    });
  }
}
