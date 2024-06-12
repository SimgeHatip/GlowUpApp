import { Component } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'] // Corrected from styleUrl to styleUrls
})
export class ChatBoxComponent {
  userInput: string = '';
  messages: { sender: string, content: any }[] = [];

  constructor(private  chatService: ChatService) {}

  sendMessage(): void { // Removed the input argument
    // if (this.userInput.trim()) {
    //   this.messages.push({ sender: 'user', content: this.userInput });
    //   this.chatService.sendMessage(this.userInput).subscribe({
    //     next: (response) => {
    //       this.messages.push({ sender: 'bot', content: response });
    //     },
    //     error: (err) => console.error('Error sending message:', err)
    //   });
    //   this.userInput = '';  // Clear input field after send
    // }
  }
}
