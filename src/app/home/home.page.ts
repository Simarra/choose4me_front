import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { Proposition } from '../propositions';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  propositions: Proposition[] = [];
  constructor(public api: RestApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) { }

    ngOnInit() {
      this.getPropositions();
    }

    async getPropositions() {
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
      await this.api.getPropositions()
        .subscribe(res => {
          this.propositions = res;
          console.log(this.propositions);
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.propositions, event.previousIndex, event.currentIndex);
    }
  
}
