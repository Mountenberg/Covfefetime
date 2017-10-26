import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FefeComponent } from './fefe/fefe.component'
import { LunchComponent } from './lunch/lunch.component';
import { HomeComponent } from './home/home.component';
import { RiftenComponent } from './riften/riften.component';
import { JokesComponent } from './jokes/jokes.component';

const appRoutes: Routes = [
  {path: 'fefe/:message', component : FefeComponent},
  {path: 'lunch/:message', component : LunchComponent},
  {path: 'riften/:message', component : RiftenComponent},
  {path: 'jokes', component : JokesComponent},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/home',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FefeComponent,
    LunchComponent,
    HomeComponent,
    RiftenComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
