import { Component, OnInit } from '@angular/core';
import { mainContentService } from '../../service/main-content.service';
import { mainContentModel } from '../../model/main-content.model';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  allData: mainContentModel[] = [];
  isLoading: boolean = false;
  // loadedPosts: Post[] = [];
  error = null;

  constructor(private serviceMainContent: mainContentService) { }

  ngOnInit(): void {
    // loading
    this.isLoading = true;
    // get data subscribe
    this.serviceMainContent.getData_API()
      .subscribe(getData => {
        this.isLoading = false;
        console.log(getData);
        this.allData = getData;
        //  this.getAllDataDisplay(this.allData);
      },
        // catchError
        catchError => {
          this.error = catchError.message
          console.log(catchError);
        }
      );
  }

}
