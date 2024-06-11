import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    blogs: any[] = [];
    contactForms: any[] = [];
    selectedTab: string = 'blogs';

    constructor(
        private blogService: BlogService,
        private contactService: ContactService
    ) { }

    ngOnInit(): void {
        this.loadBlogs();
        this.loadContactForms();
    }

    loadBlogs(): void {
        this.blogService.getAllBlogs().subscribe(
            (data) => {
                this.blogs = data;
            },
            (error) => {
                console.error('Error fetching blogs', error);
            }
        );
    }

    loadContactForms(): void {
        this.contactService.getAllContacts().subscribe(
            (data) => {
                this.contactForms = data;
            },
            (error) => {
                console.error('Error fetching contact forms', error);
            }
        );
    }

    selectTab(tab: string): void {
        this.selectedTab = tab;
    }
}
