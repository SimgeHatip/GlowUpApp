import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {ChatBoxComponent} from "./components/chat-box/chat-box.component";
import {BlogListComponent} from "./components/blog/blog-list/blog-list.component";
import {BlogDetailComponent} from "./components/blog/blog-detail/blog-detail.component";
import {BlogCreateComponent} from "./components/blog/blog-create/blog-create.component";
import {CaptureComponent} from "./components/capture/capture.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {ProductSliderComponent} from "./components/product-slider/product-slider.component";


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'capture', component: CaptureComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'user', component: BoardUserComponent, canActivate: [AuthGuard]},
    {path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard]},
    {path: 'chat-box', component: ChatBoxComponent, canActivate: [AuthGuard]},
    {path: 'blogs', component: BlogListComponent, canActivate: [AuthGuard]},
    {path: 'blog/:id', component: BlogDetailComponent, canActivate: [AuthGuard]},
    {path: 'create-blog', component: BlogCreateComponent, canActivate: [AuthGuard]},
    {path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard]},
    {path: 'product-details', component: ProductSliderComponent, canActivate: [AuthGuard]}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
