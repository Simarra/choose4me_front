import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SwipeComponent } from './swipe-component/swipe-component.component'

const routes: Routes = [
  { path: 'login-screen', component: LoginScreenComponent },
  { path: 'choose', component: SwipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
