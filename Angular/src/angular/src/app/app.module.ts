import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders} from './app.routing'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './mycomponent/mycomponent.component';
import { MyconsoleCompComponent } from './myconsole-comp/myconsole-comp.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { HomeComponent } from './home/home.component';
import { UrlParameterComponent } from './url-parameter/url-parameter.component';
import { ExternalComponent } from './external/external.component'
import { CustomPipe } from "./pipes/custompipe.pipe";
import { ContactComponent } from './contact/contact.component';  

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyconsoleCompComponent,
    ShirtsComponent,
    HomeComponent,
    UrlParameterComponent,
    ExternalComponent,
    CustomPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    appRoutingProviders,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
