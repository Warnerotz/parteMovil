
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage, ListasPage } from '../index.pages';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabHome: any;
  tabListas: any;

  constructor() {
    this.tabHome = HomePage;
    this.tabListas= ListasPage;
    console.log('taaaabs')
  }


}
