import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sessionId: string; // Declare the sessionId property

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  joinSession(): void {
    this.userService.joinSession(this.sessionId).subscribe(
      () => {
        console.log('Joined session:', this.sessionId);
      },
      (error) => {
        console.error('Error joining session:', error);
      }
    );
  }

  leaveSession(): void {
    this.userService.leaveSession(this.sessionId).subscribe(
      () => {
        console.log('Left session:', this.sessionId);
      },
      (error) => {
        console.error('Error leaving session:', error);
      }
    );
  }

}
