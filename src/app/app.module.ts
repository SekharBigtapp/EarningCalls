import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { SideNavComponent } from './core/layouts/side-nav/side-nav.component';
import { TopNavComponent } from './core/layouts/top-nav/top-nav.component';
import { SentimentAnalysisComponent } from './modules/sentiment-analysis/sentiment-analysis.component';
import { NamedEntitiesRecgComponent } from './modules/named-entities-recg/named-entities-recg.component';
import { WordCloudComponent } from './modules/word-cloud/word-cloud.component';
import { SummaryInfoComponent } from './modules/summary-info/summary-info.component';
import { UploadDocumentComponent } from './modules/upload-document/upload-document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CompanyRegisterComponent } from './modules/company-register/company-register.component';
import { IndividualSentimentAnalysisComponent } from './modules/individual-sentiment-analysis/individual-sentiment-analysis.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    TopNavComponent,
    SentimentAnalysisComponent,
    NamedEntitiesRecgComponent,
    WordCloudComponent,
    SummaryInfoComponent,
    UploadDocumentComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CompanyRegisterComponent,
    IndividualSentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
