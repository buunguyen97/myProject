import {Component} from '@angular/core';
import {HttpServerService} from '../Server/http-server.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private httpServerService: HttpServerService) {
  }

  public data: any[] = [];

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  public Themdata() {
    const payload = {body: 'some 3', postId: 3};
    this.httpServerService.postComment(payload).subscribe((data) => {
      this.httpServerService.getComments().subscribe((response: any[]) => {
        this.data = response;
      });
    });
  }

  // public deleteComment(id: number): void {
  //   console.log(`Deleting comment with ID: ${id}`);
  //   this.httpServerService.deleteComment(id).subscribe(() => {});
  // }

  deleteComment(id: number): void {
    this.httpServerService.deleteComment(id).subscribe(
        () => {
          console.log(`Comment with id ${id} was deleted successfully.`);
          this.httpServerService.getComments().subscribe((response: any[]) => {
            this.data = response;
          });
        },
        (error) => {
          console.error(`Failed to delete comment with id ${id}: ${error}`);
        },
        () => {
          console.log('Delete comment request completed');
        }
    );
  }


  // public getComments(): void {
  //   this.httpServerService.getComments().subscribe((response: any[]) => {
  //     this.data = response;
  //   });
  // }
}
