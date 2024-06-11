import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    constructor(private contactService: ContactService) {}

    onSubmit(contactForm: NgForm) {
        if (contactForm.valid) {
            this.contactService.createContact(contactForm.value).subscribe(
                response => {
                    contactForm.reset();
                    alert('Form submitted successfully!');
                },
                error => {
                    console.error('Error submitting form', error);
                    alert('There was an error submitting the form. Please try again.');
                }
            );
        }
    }
}
