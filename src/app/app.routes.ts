import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    { path: "home" , component: HomeComponent },
    { path: "footer" , component: FooterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
