import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'invisionapp';
  data: any[] = [
    {
      id: "1",
      name: 'Jacob Grant',
      price: "151",
      category: 'Outstanding',
      date: '19/1/2022'

    },
    {
      id: "2",
      name: 'Mindy Francis',
      price: "101",
      category: 'Archived',
      date: '19/1/2022'

    },
    {
      id: "3",
      name: 'Tanya Paul',
      price: "200",
      category: 'Outstanding',
      date: '19/1/2022'
    },
    {
      id: "4",
      name: 'Lawrence Vasquez',
      price: "1214",
      category: 'Recived Payments',
      date: '19/1/2022'

    },
    {
      id: "5",
      name: 'Jack Greene',
      price: "9520",
      category: 'Paid',
      date: '19/1/2022'

    },

    {
      id: "6",
      name: 'Sonya Holland',
      price: "770",
      category: 'Paid',
      date: '20/1/2022'

    },
    {
      id: "7",
      name: 'Jessie King',
      price: "7500",
      category: 'Archived',
      date: '19/1/2022'

    },
    {
      id: "8",
      name: 'Michele Chambers',
      price: "4100",
      category: 'Stripe Funding',
      date: '19/1/2022'

    },
    {
      id: "9",
      name: 'Shelly Parker',
      price: "10000",
      category: 'Recived Payments'
      ,
      date: '19/1/2022'
    },
    {
      id: "10",
      name: 'Adrienne Rice',
      price: "5000",
      category: 'Outstanding',
      date: '19/1/2022'
    }
  ]
  payArray!: any[];
  selected: any;
  selectedSortOrder!: string;
  ngOnInit(): void {
    this.payArray = this.data;
  }
  async getdataByfilter(type: any) {

    if (type === 'Archived' || type === 'Recived Payments' || type === 'Stripe funding') {
      await document.getElementById('dropdownManual')?.classList.remove('nav-active')
      await document.getElementById('dropdownManual')?.classList.add('nav-active');
    } else {
      await document.getElementsByClassName('nav-active')[0].classList.remove('nav-active');
      await document.getElementById(type)?.classList.add('nav-active');
    }

    if (type === 'all') {
      this.payArray = this.data;
    } else {
      this.payArray = this.data.filter((data) => {
        return data.category == type
      })
    }
  }
  ChangeSortOrder(newSortOrder: string, item: any) {

    this.data.find(function (dataitem) {
      if (dataitem.id == item.id) {
        dataitem.category = newSortOrder;
      }
    })
  }

  searchQs(qs: string) {
    // this.selectedSortOrder = newSortOrder;
    console.log(qs)
    let filteredUsers: any[] = [];
    if (qs !== null) {
      for (let selectedUser of this.data) {
        if (selectedUser.name.toLowerCase().search(qs.toLowerCase()) != -1 ||
          selectedUser.price.search(qs) != -1 ||
          selectedUser.id.search(qs) != -1 ||
          selectedUser.category.toLowerCase().search(qs.toLowerCase()) != -1) {
          filteredUsers.push(selectedUser);
        }
      }
    } else {
      filteredUsers = this.data;
    }

    this.payArray = filteredUsers;
  }
}
