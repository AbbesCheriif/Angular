import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';
import { Member } from 'src/models/Member';

@Component({
  selector: 'app-memeber-form',
  templateUrl: './memeber-form.component.html',
  styleUrls: ['./memeber-form.component.css']
})
export class MemeberFormComponent implements OnInit{
  showCin: boolean = true;
  ngOnInit(){
    //chercher la route active
    //chercher id dans la route
    const idCourant = this.activatedRoute.snapshot.params['id'] ;
    console.log("id courant:  ", idCourant);

    //if id exist => je suis dans edit
    if(!!idCourant){
      // getMemberById(idCourant): member
      this.MS.getMemberById(idCourant).subscribe(
        (member) => {
          //  remplir les champs avec les valeurs de member
          this.form = new FormGroup({
            cin: new FormControl(member.cin, [Validators.required]) ,
            name: new FormControl(member.name, [Validators.required]) ,
            cv: new FormControl(member.cv, [Validators.required]) ,
            type: new FormControl(member.type, [Validators.required]) ,
          })
        }
      );
    }
    //else je suis dans create
    else{
      this.initForm();
    }
  }
  constructor(
    private  MS:MemberService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
  ){}
  form!: FormGroup ;
  member!: Member;
  initForm(): void
  {
      this.form = new FormGroup({
        cin: new FormControl(null, [Validators.required]) ,
        name: new FormControl(null, [Validators.required]) ,
        cv: new FormControl(null, [Validators.required]) ,
        type: new FormControl(null, [Validators.required]) ,
      })
  }

  sub(): void
  {
    const idCourant = this.activatedRoute.snapshot.params['id'] ;
    if(!!idCourant){
      // je suis dans update
      const m : Member = this.form.value;
      const data = {...this.form.value, createDate:new Date().toISOString()};
      this.MS.updateMember(idCourant, data).subscribe(()=>{
        this.router.navigate(['']);
      })
    }
    else if(this.form.valid) {
      const formData = {...this.form.value, createDate:new Date().toISOString()};
      console.log('Form Data:', formData);
      //appeler la fonction du service
      this.MS.add(formData).subscribe( () => {
        this.router.navigate([''])
       }
      );
    }
  }
}
