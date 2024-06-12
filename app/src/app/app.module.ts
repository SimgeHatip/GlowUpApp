import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WebcamModule } from "ngx-webcam";
import { NgOptimizedImage } from "@angular/common";
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { BoardAdminComponent } from "./components/board-admin/board-admin.component";
import { BoardUserComponent } from "./components/board-user/board-user.component";
import { HeaderComponent } from "./components/header/header.component";
import { ChatBoxComponent } from "./components/chat-box/chat-box.component";
import { CaptureComponent } from "./components/capture/capture.component";
import { AvatarSelectionComponent } from "./components/avatar-selection/avatar-selection.component";
import { httpInterceptorProviders } from "./components/helper/auth.interceptor";
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogService } from './services/blog.service';
import { BlogCreateComponent } from './components/blog/blog-create/blog-create.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgxSimpleTextEditorModule } from "ngx-simple-text-editor";
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CategoryService } from "./services/category.service";
import { AdminComponent } from "./components/admin/admin.component";
import { MatTabsModule } from '@angular/material/tabs';
import { AdminBlogDetailComponent } from './components/admin/admin-blog-detail/admin-blog-detail.component';
import { AdminBlogListComponent } from "./components/admin/admin-blog-list/admin-blog-list.component";
import { AdminBlogCreateComponent } from './components/admin/admin-blog-create/admin-blog-create.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminContactUsFormListComponent } from './components/admin/admin-contact-us-form-list/admin-contact-us-form-list.component';
import { AdminPostCreateComponent } from './components/admin/admin-post-create/admin-post-create.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AdminPostListComponent } from './components/admin/admin-post-list/admin-post-list.component';
import { AdminPostDetailComponent } from './components/admin/admin-post-detail/admin-post-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        BoardAdminComponent,
        BoardUserComponent,
        HeaderComponent,
        ChatBoxComponent,
        CaptureComponent,
        AvatarSelectionComponent,
        BlogListComponent,
        BlogDetailComponent,
        BlogCreateComponent,
        ContactUsComponent,
        ProductSliderComponent,
        AdminComponent,
        AdminBlogDetailComponent,
        AdminBlogListComponent,
        AdminBlogCreateComponent,
        AdminSidebarComponent,
        AdminContactUsFormListComponent,
        AdminPostCreateComponent,
        PostListComponent,
        PostDetailComponent,
        AdminPostListComponent,
        AdminPostDetailComponent
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
        NgxSimpleTextEditorModule,
        MatTabsModule,
        MatSidenavModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    providers: [
        provideClientHydration(),
        httpInterceptorProviders,
        BlogService,
        CategoryService,
        [provideHttpClient(withFetch())]
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
