import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss']
})


export class AddPage {
  propositions: any;
  constructor(public api: RestApiService, public loadingController: LoadingController) { }
  ngOnInit() {
    this.getPropositions();
  }
  
  async getPropositions() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getPropositions()
      .subscribe(res => {
        console.log(res);
        this.propositions = res.results;
        console.log(this.propositions);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  
}
  
