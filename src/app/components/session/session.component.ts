import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  sessionId: string;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  createSession(): void {
    this.sessionService.createSession().subscribe(
      (sessionId: string) => {
        this.sessionId = sessionId;
      },
      (error) => {
        console.error('Error creating session:', error);
      }
    );
  }

  endSession(): void {
    this.sessionService.endSession().subscribe(
      () => {
        console.log('Session ended');
        this.sessionId = null;
      },
      (error) => {
        console.error('Error ending session:', error);
      }
    );
  }

}
