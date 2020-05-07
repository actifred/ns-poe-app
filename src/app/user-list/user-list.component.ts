import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Olivia",
            "last": "Jensen"
        },
        "location": {
            "street": {
                "number": 8934,
                "name": "Strandvej"
            },
            "city": "Askeby",
            "state": "Hovedstaden",
            "country": "Denmark",
            "postcode": 76435,
            "coordinates": {
                "latitude": "-34.7888",
                "longitude": "115.1275"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "olivia.jensen@example.com",
        "login": {
            "uuid": "c3b3ec14-b323-428a-89a2-200114446fbf",
            "username": "bluecat147",
            "password": "never",
            "salt": "lloiGPWL",
            "md5": "fdea9e801b7989df79a664721fce6eaa",
            "sha1": "e2ceff59ea72f78a8d443985d1acf642451149f2",
            "sha256": "86811e41a7d5e7116fc2f89c0b15234898b7c8390fe0e21bb613356ccfbe8bb9"
        },
        "dob": {
            "date": "1945-11-17T20:08:10.541Z",
            "age": 75
        },
        "registered": {
            "date": "2003-07-04T22:49:21.340Z",
            "age": 17
        },
        "phone": "22249791",
        "cell": "83696322",
        "id": {
            "name": "CPR",
            "value": "171145-9485"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/7.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
        },
        "nat": "DK"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "رها",
            "last": "گلشن"
        },
        "location": {
            "street": {
                "number": 2402,
                "name": "سمیه"
            },
            "city": "تهران",
            "state": "خراسان جنوبی",
            "country": "Iran",
            "postcode": 70487,
            "coordinates": {
                "latitude": "-63.0773",
                "longitude": "134.1845"
            },
            "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
            }
        },
        "email": "rh.glshn@example.com",
        "login": {
            "uuid": "5ae9644f-7e9b-4c6e-8135-54ab304e65e3",
            "username": "greenfrog381",
            "password": "caprice",
            "salt": "Rmbq7Au4",
            "md5": "9f37c81817d7a7d8890d55e2b78ca141",
            "sha1": "d279698320d3463668d235905e87268d646e62ac",
            "sha256": "4f73bf0d33be53a6ba35b4715b9b4f15c1c689f4f8d8e8bbdfa63ead4cda599d"
        },
        "dob": {
            "date": "1963-11-13T08:57:54.698Z",
            "age": 57
        },
        "registered": {
            "date": "2010-04-27T19:22:32.151Z",
            "age": 10
        },
        "phone": "097-18430894",
        "cell": "0916-079-4181",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/10.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
        },
        "nat": "IR"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
