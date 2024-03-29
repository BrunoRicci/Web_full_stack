import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DescriptionComponent } from './components/description/description.component'
import { EditComponent } from "./components/edit/edit.component";

const appRoutes: Routes = [
    {path: '', component: AboutmeComponent},
    {path: 'aboutme', component: AboutmeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'createproject', component: CreateComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:id', component: DescriptionComponent},
    {path: 'editproject/:id', component: EditComponent},
    {path: '**', component: ErrorComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);