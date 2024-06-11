import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import {ContactForm} from "../../../shared/models/contact-form";

@Component({
  selector: 'app-admin-contact-us-form-list',
  templateUrl: './admin-contact-us-form-list.component.html',
  styleUrls: ['./admin-contact-us-form-list.component.css']
})
export class AdminContactUsFormListComponent implements OnInit {
  contactForms: ContactForm[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContactForms();
  }

  loadContactForms(): void {
    this.contactService.getAllContacts().subscribe(
        (data: ContactForm[]) => {
          this.contactForms = data;
        },
        (error) => {
          console.error('Error fetching contact forms', error);
        }
    );
  }
}
