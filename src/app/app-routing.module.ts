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

const routes: Routes = [
   {path: '',component:LoginComponent},
   {path: 'dashboard',component:DashboardComponent},
   {path: 'register',component:RegisterComponent},
  { path: 'sentimentanalysiscomponent', component: SentimentAnalysisComponent },
  { path: 'nameEntityRecz', component: NamedEntitiesRecgComponent },
  { path: 'wordCloud', component: WordCloudComponent },
  { path: 'summary-info', component:SummaryInfoComponent },
    { path: 'upload-doc', component:UploadDocumentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
