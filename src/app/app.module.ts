import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './library/primeng.library';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PersonalComponent } from './component/personal/personal.component';
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PersonalComponent,
        ProjectDetailComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        PrimeNgModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
