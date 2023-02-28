import { Component } from '@angular/core';
import { HttpServerService } from '../Server/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    const payload = { body: 'some 3', postId: 3 };
    this.httpServerService.postComment(payload).subscribe((data) => {
      console.log(data);
    });
  }
}
