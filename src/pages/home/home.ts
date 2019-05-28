import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompanyAddPage } from '../../pages/company-add/company-add';
import { CompanyDetailsPage } from '../../pages/company-details/company-details';
import { Company } from '../../services/company';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies: Array<Company>;

  constructor(public navCtrl: NavController) {
    this.companies = [];
  }

  goTo(page) {
    this.navCtrl.push((page && page === 'add') ? CompanyAddPage : CompanyDetailsPage);
  }

}
