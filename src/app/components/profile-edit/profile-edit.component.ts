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
  editProfileForm = new FormGroup({
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
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01/),
      Validators.minLength(10),
      Validators.maxLength(20),
      Validators.pattern('[0-9]+'),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.userID = params['id'];
      (await this.usersService.getUser(this.userID)).subscribe({
        next: (data: any) => {
          this.Udata = data;
        },
      });
    });
  }
  editProfle() {
    this.usersService
      .updateObjectById(this.userID, this.editProfileForm.value)
      .subscribe(() => {
        alert('Profile Updated!');
        this._router.navigate(['/movies']);
      });
  }
}
