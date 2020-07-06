import { HttpClient } from '@angular/common/http';

import { mainContentModel} from '../model/main-content.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})

export class mainContentService{

    allData: mainContentModel[]=[];
    // Data: mainContentModel[] = [];
    // url:  'https://api.kuismilioner.net/helpdesk/faq/:category_id';
    // urlKeyAPI ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXhfaWQiOjEsIm5hbWVfZG9tYWluIjoiS00iLCJhcGlfa2V5X2lkIjoiNmFjZTBjNTA5YmU0NDEwYWJjYjQ5MmM1NjhlNjk1MjEiLCJpYXQiOjE1ODc2NTM1MTV9.HqiXwJdQXDp1ab4BHl1aEl2VNE00Ck-nsLcljK82_jY';
    
    getAllDataDisplay() {
        // this.Data=Datas;
        this.allData;
    }
    constructor(private http: HttpClient) {
    }

    getData_API(){
        return this.http
            .get
            ("https://angular-guidance.firebaseio.com/posts.json")
            .pipe(map((responseDatas: { [key: string]: mainContentModel})=>{
                const postData: mainContentModel[] = [];
                for (let key in responseDatas) {
                    if (responseDatas.hasOwnProperty(key)) {
                        postData.push({ ...responseDatas[key], id: key });
                    }
             }
            return postData;
            }
             )
             )     

    }
}