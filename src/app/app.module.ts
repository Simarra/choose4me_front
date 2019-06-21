import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SwipeComponent } from './swipe-component/swipe-component.component';
import { HammertimeDirective } from './hammertime.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SwipeComponent,
    HammertimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
