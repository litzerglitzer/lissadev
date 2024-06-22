import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ImprintComponent } from './components/imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'resume', component:ResumeComponent},
    { path: 'imprint', component:ImprintComponent}
];
