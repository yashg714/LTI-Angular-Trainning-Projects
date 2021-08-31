import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MyComment } from "./Comment";
import { Post } from "./post";

@Injectable()
export class MyapiService {

  //httpClient:HttpClient=new HttpClient();
  //dependency injection

  constructor(private httpClient:HttpClient) { }

  getAllComments():Observable<MyComment[]>
  {
      return this.httpClient.get<MyComment[]>("https://jsonplaceholder.typicode.com/posts/1/comments");
  }
  getCommentByUserId(userId:number):Observable<Post[]>
  {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts?userId="+userId);
  }
}
