import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from 'src/features/welcome/welcome.component';
import { WhoweareComponent } from 'src/features/whoweare/whoweare.component';
import { MenuComponent } from 'src/features/menu/menu.component';
import { HeaderComponent } from 'src/features/header/header.component';
import { HomeComponent } from 'src/features/home/home.component';
import { AboutUsComponent } from 'src/features/about-us/about-us.component';
import { FooterComponent } from 'src/features/footer/footer.component';
import { GrowWithUsComponent } from 'src/features/grow-with-us/grow-with-us.component';
import { MenuBranchComponent } from 'src/features/menu-branch/menu-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WhoweareComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    GrowWithUsComponent,
    MenuBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
