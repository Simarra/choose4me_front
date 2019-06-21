import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwipeComponent } from './swipe-page.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SwipeComponent,
    RouterModule.forChild([{ path: '', component: SwipeComponent }])
  ],
  declarations: [SwipeComponent]
})
export class SwipePageModule {}
