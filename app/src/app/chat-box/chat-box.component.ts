import {Component, OnInit} from '@angular/core';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent  {
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.chatService.sendMessage(this.userInput).subscribe(response => {
        this.messages.push({ text: response.message, sender: 'bot' });
      });
      this.userInput = '';
    }
  }

}
