import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {httpInterceptorProviders} from "./helper/auth.interceptor";
import {WebcamModule} from "ngx-webcam";
import {HeaderComponent} from './header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {ChatBoxComponent} from './chat-box/chat-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SkinAnalysisComponent} from './skin-analysis/skin-analysis.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        BoardAdminComponent,
        BoardModeratorComponent,
        BoardUserComponent,
        HeaderComponent,
        ChatBoxComponent,
        SkinAnalysisComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        WebcamModule,
        NgOptimizedImage,
        MatTabGroup,
        MatTab,
        BrowserAnimationsModule,
        MatTabLabel,
        FontAwesomeModule
    ],
    providers: [
        provideClientHydration(),
        httpInterceptorProviders,
        [provideHttpClient(withFetch())]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
