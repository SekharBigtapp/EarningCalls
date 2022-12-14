import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedEntitiesRecgComponent } from './modules/named-entities-recg/named-entities-recg.component';
import { SentimentAnalysisComponent } from './modules/sentiment-analysis/sentiment-analysis.component';
import { SummaryInfoComponent } from './modules/summary-info/summary-info.component';
import { WordCloudComponent } from './modules/word-cloud/word-cloud.component';
import { UploadDocumentComponent } from './modules/upload-document/upload-document.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CompanyRegisterComponent } from './modules/company-register/company-register.component';
import { IndividualSentimentAnalysisComponent } from './modules/individual-sentiment-analysis/individual-sentiment-analysis.component';
import { IndividualDashboardComponent } from './modules/individual-dashboard/individual-dashboard.component';

const routes: Routes = [
  //  {path: '',component:LoginComponent},
  //  {path: 'register',component:RegisterComponent},
  {path: '', component:DashboardComponent}, 
  {path: 'dashboard', component:DashboardComponent},
  {path: 'individual-dashboard', component:IndividualDashboardComponent},
   {path: 'company_register', component:CompanyRegisterComponent},
  { path: 'sentimentanalysiscomponent', component: SentimentAnalysisComponent },
  { path: 'nameEntityRecz', component: NamedEntitiesRecgComponent },
  { path: 'wordCloud', component: WordCloudComponent },
  { path: 'summary-info', component:SummaryInfoComponent },
  { path: 'upload-doc', component:UploadDocumentComponent },
  { path: 'individual-analytics', component:IndividualSentimentAnalysisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
