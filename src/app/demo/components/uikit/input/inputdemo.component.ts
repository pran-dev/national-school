import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    templateUrl: './inputdemo.component.html'
})
export class InputDemoComponent implements OnInit {
    tableData: any[] = [
        {
            "id": 1000,
            "name": "James Butt",
            "country": {
              "name": "Algeria",
              "code": "dz"
            },
            "company": "Benton, John B Jr",
            "date": "2015-09-13",
            "status": "unqualified",
            "activity": 17,
            "representative": {
              "name": "Ioni Bowcher",
              "image": "ionibowcher.png"
            }
          },
          {
            "id": 1015,
            "name": "Mattie Poquette",
            "country": {
              "name": "Venezuela",
              "code": "ve"
            },
            "company": "Century Communications",
            "date": "2017-12-12",
            "status": "negotiation",
            "activity": 52,
            "representative": {
              "name": "Anna Fali",
              "image": "annafali.png"
            }
          },
          {
            "id": 1016,
            "name": "Meaghan Garufi",
            "country": {
              "name": "Malaysia",
              "code": "my"
            },
            "company": "Bolton, Wilbur Esq",
            "date": "2018-07-04",
            "status": "unqualified",
            "activity": 31,
            "representative": {
              "name": "Ivan Magalhaes",
              "image": "ivanmagalhaes.png"
            }
          },
          {
            "id": 1017,
            "name": "Gladys Rim",
            "country": {
              "name": "Netherlands",
              "code": "nl"
            },
            "company": "T M Byxbee Company Pc",
            "date": "2020-02-27",
            "status": "renewal",
            "activity": 48,
            "representative": {
              "name": "Stephen Shaw",
              "image": "stephenshaw.png"
            }
          }
    ]
    countries: any[] = [];

    filteredCountries: any[] = [];

    selectedCountryAdvanced: any[] = [];

    valSlider = 50;

    valColor = '#424242';

    valRadio: string = '';

    valCheck: string[] = [];

    valCheck2: boolean = false;

    valSwitch: boolean = false;

    cities: SelectItem[] = [];

    selectedList: SelectItem = { value: '' };

    selectedDrop: SelectItem = { value: '' };

    selectedMulti: any[] = [];

    valToggle = false;

    paymentOptions: any[] = [];

    valSelect1: string = "";

    valSelect2: string = "";

    valueKnob = 20;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

        this.cities = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];

        this.paymentOptions = [
            { name: 'Option 1', value: 1 },
            { name: 'Option 2', value: 2 },
            { name: 'Option 3', value: 3 }
        ];
    }

    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
