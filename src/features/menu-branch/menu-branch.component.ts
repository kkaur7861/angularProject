import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-branch',
  templateUrl: './menu-branch.component.html',
  styleUrls: ['./menu-branch.component.sass']
})
export class MenuBranchComponent implements OnInit {

  menuOptions =['Samosa',"Tea","Coffee","Sandwich"];
  branches = ['Delhi','Punjab','Bangalore'];
  constructor() { }

  ngOnInit(): void {
  }

}
