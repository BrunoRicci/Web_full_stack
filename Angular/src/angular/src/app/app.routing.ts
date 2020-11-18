//Import Angular router modules
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import components
import { MyComponentComponent } from "./mycomponent/mycomponent.component";
import { MyconsoleCompComponent } from "./myconsole-comp/myconsole-comp.component";
import { ShirtsComponent } from "./shirts/shirts.component";
import { HomeComponent } from "./home/home.component";
import { UrlParameterComponent } from "./url-parameter/url-parameter.component";
import { ExternalComponent } from "./external/external.component";
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes = [
    {path:'', component: HomeComponent},
    {path:'mycomponent', component:MyComponentComponent },
    {path:'shirts', component: ShirtsComponent},
    {path:'urlparams', component: UrlParameterComponent},
    {path:'urlparams/:param1', component: UrlParameterComponent},
    {path:'urlparams/:param1/:param2', component: UrlParameterComponent},
    
    {path:'external', component: ExternalComponent},
    {path:'contact', component: ContactComponent},



    {path: '**', component:HomeComponent}  //For error 404. -> Must always be defined the last.
]

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
