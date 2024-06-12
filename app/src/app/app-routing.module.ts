import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth-guard";
import {AdminGuard} from "./services/admin-guard.service";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {ChatBoxComponent} from "./components/chat-box/chat-box.component";
import {BlogListComponent} from "./components/blog/blog-list/blog-list.component";
import {BlogDetailComponent} from "./components/blog/blog-detail/blog-detail.component";
import {BlogCreateComponent} from "./components/blog/blog-create/blog-create.component";
import {CaptureComponent} from "./components/capture/capture.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminBlogListComponent} from "./components/admin/admin-blog-list/admin-blog-list.component";
import {AdminBlogDetailComponent} from "./components/admin/admin-blog-detail/admin-blog-detail.component";
import {AdminBlogCreateComponent} from "./components/admin/admin-blog-create/admin-blog-create.component";
import {
    AdminContactUsFormListComponent
} from "./components/admin/admin-contact-us-form-list/admin-contact-us-form-list.component";
import {AdminPostCreateComponent} from './components/admin/admin-post-create/admin-post-create.component';
import {AdminPostListComponent} from './components/admin/admin-post-list/admin-post-list.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {AdminPostDetailComponent} from './components/admin/admin-post-detail/admin-post-detail.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'capture', component: CaptureComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard], children: [
            {path: 'comments', component: AdminBlogListComponent},
            {path: 'comment/:id', component: AdminBlogDetailComponent},
            {path: 'create-comment', component: AdminBlogCreateComponent},
            {path: 'contact-forms', component: AdminContactUsFormListComponent},
            {path: 'create-blog', component: AdminPostCreateComponent},
            {path: 'blogs', component: AdminPostListComponent},
            {path: 'blog/:id', component: AdminPostDetailComponent}
        ]
    },
    {path: 'admin-board', component: BoardAdminComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'chat-box', component: ChatBoxComponent, canActivate: [AuthGuard]},
    {path: 'comments', component: BlogListComponent, canActivate: [AuthGuard]},
    {path: 'comment/:id', component: BlogDetailComponent, canActivate: [AuthGuard]},
    {path: 'create-comment', component: BlogCreateComponent, canActivate: [AuthGuard]},
    {path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard]},
    {path: 'blogs', component: PostListComponent, canActivate: [AuthGuard]},
    {path: 'blog/:id', component: PostDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
