import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../features/menu/menu.component';
import { WelcomeComponent } from 'src/features/welcome/welcome.component';
import { WhoweareComponent } from 'src/features/whoweare/whoweare.component';
import { HomeComponent } from 'src/features/home/home.component';
import { AboutUsComponent } from 'src/features/about-us/about-us.component';
import { MenuBranchComponent } from 'src/features/menu-branch/menu-branch.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'menu', component: MenuBranchComponent },
  { path: '', component:HomeComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
