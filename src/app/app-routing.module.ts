import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main-components/login/login.component';
import { RegistrationComponent } from './main-components/registration/registration.component';
import { HomeComponent } from './main-components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'seller-details', component: SellerDetailsComponent },
    // { path: 'seller-home', component: SellerHomepageComponent },
    // { path: 'sell-items', component: SellerItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
