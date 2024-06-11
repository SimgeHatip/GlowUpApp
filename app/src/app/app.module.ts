import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {WebcamModule} from "ngx-webcam";
import {NgOptimizedImage} from "@angular/common";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {HeaderComponent} from "./components/header/header.component";
import {ChatBoxComponent} from "./components/chat-box/chat-box.component";
import {CaptureComponent} from "./components/capture/capture.component";
import {AvatarSelectionComponent} from "./components/avatar-selection/avatar-selection.component";
import {httpInterceptorProviders} from "./components/helper/auth.interceptor";
import {BlogListComponent} from './components/blog/blog-list/blog-list.component';
import {BlogDetailComponent} from './components/blog/blog-detail/blog-detail.component';
import {BlogService} from './services/blog.service';
import { BlogCreateComponent } from './components/blog/blog-create/blog-create.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {NgxSimpleTextEditorModule} from "ngx-simple-text-editor";

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
        CaptureComponent,
        AvatarSelectionComponent,
        BlogListComponent,
        BlogDetailComponent,
        BlogCreateComponent,
        ContactUsComponent
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
        NgxSimpleTextEditorModule
    ],
    providers: [
        provideClientHydration(),
        httpInterceptorProviders,
        BlogService,
        [provideHttpClient(withFetch())]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
