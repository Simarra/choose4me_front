import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwipePage } from './swipe-page.page';
import { HttpModule } from '@angular/http';
import { IonicSwingModule} from 'ionic-swing'

@NgModule({
  imports: [
    IonicModule,
    IonicSwingModule,
    HttpModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SwipePage }])
  ],
  declarations: [SwipePage]
})
export class SwipePageModule {}
