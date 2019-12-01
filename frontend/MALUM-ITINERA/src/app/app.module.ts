import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { ReportComponent } from './report/report.component';
import { SeeReportsComponent } from './see-reports/see-reports.component';

const myPage: Routes = [
  {path:'home', component: HomeComponent},
  {path:'maps', component: MapsComponent},
  {path:'report', component: ReportComponent},
  {path:'seereport', component: SeeReportsComponent},
  
  {path: '', redirectTo: '/home', pathMatch: 'full'} // default landing path for empty url.
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    MapsComponent,
    ReportComponent,
    SeeReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(myPage),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
