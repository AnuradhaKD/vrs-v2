import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  accessoriesData: any;


  ngOnInit() {
    this.accessoriesData = [
      {
        imgLink:'../../../assets/vimg/headlights1.jpeg',
        name:'Head Light',
        description:'Car head light You can call and get',
        price:'20000',

      },

      {
        imgLink:'../../../assets/vimg/headlights2.jpeg',
        name:'Head Light set',
        description:'Car head light',
        price:'15000',

      },

      {
        imgLink:'../../../assets/vimg/tire1.jpeg',
        name:'Car tire',
        description:'With good condition',
        price:'8500',

      },

      {
        imgLink:'../../../assets/vimg/seat1.jpeg',
        name:'Seat Cover set',
        description:'You can custermize what you want.call us',
        price:'19000',

      },

      {
        imgLink:'../../../assets/vimg/headlights3.jpeg',
        name:'Custom Head Light set',
        description:' Custom car head light set. With many colors',
        price:'35000',

      },
    ]

  }
}
