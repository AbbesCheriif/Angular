import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit
{
  constructor(private Ms: MemberService, private dialog: MatDialog) { }

  //déclarer le tableau
  dataSource :Member[]= [];

  ngOnInit()
  {
    // appeler la fonction du service getAllMembers
    this.Ms.getAllMembers().subscribe(data => {
      this.dataSource = data;});
  };

  delete(id:String):void{
    //1/ lancer la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    //2/ attendre le resultat de click
    //3/ si click = ok (confirm)=>
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.Ms.deleteMember(id).subscribe(()=>{
          this.Ms.getAllMembers().subscribe((response)=>{
            this.dataSource = response;
          })
        })
      }
    })
    // this.Ms.deleteMember(id).subscribe( () => {
    //   // appeler la fonction du service getAllMembers
    //   this.Ms.getAllMembers().subscribe(response => {
    //   this.dataSource = response;});
    // } )
  }

  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createDate', 'icons'];

}
