import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {AuthGuard} from "./services/auth-guard";
import {ChatBoxComponent} from "./chat-box/chat-box.component";
import {CaptureComponent} from "./capture/capture.component";
import {SkinAnalysisComponent} from "./skin-analysis/skin-analysis.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'user', component: BoardUserComponent, canActivate: [AuthGuard]},
    {path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard]},
    {path: 'chat-box', component: ChatBoxComponent},
    {path: 'capture', component: CaptureComponent},
    {path: 'skin-analysis', component: SkinAnalysisComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
