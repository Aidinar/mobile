import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gg = "888-888-8888"

  ww = "777"

  numbers = ["gg", "ww"]
  books = [
    {q:"Место",n:"Москва"},
    {q:"Язык",n:"Russian"}
  ]
  
  constructor() {}
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}
