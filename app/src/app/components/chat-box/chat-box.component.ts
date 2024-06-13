import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  userInput: string = '';
  messages: { sender: string, content: string }[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.messages.push({ sender: 'user', content: this.userInput });
      this.chatService.sendMessage(this.userInput).subscribe({
        next: (response) => {
          this.messages.push({ sender: 'bot', content: response.response }); // Yanıtın `response` alanını kullan
        },
        error: (err) => console.error('Error sending message:', err)
      });
      this.userInput = '';
    }
  }
}
