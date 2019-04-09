import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { Router } from '@angular/router/src/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountriesService } from './shared/services/countries-list-service.service';
import { HighlightPipe } from './highlight.pipe';


const appRoutes:Routes=[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'countries',
      component:CountriesListComponent
    },
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'**',
      component:PageNotFoundComponent
    }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    CountriesListComponent,
    PageNotFoundComponent,
    HighlightPipe    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
