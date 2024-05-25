import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { WebcamImage } from "ngx-webcam";
import { Observable, Subject } from "rxjs";
import { ImageService } from "../services/image.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  }
