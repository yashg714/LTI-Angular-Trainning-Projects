import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../myapi.service';
import { MyComment } from '../Comment';
import { Post } from '../post';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  comments:MyComment[]=[];
  posts:Post[]=[];
  userID:number;
  userName:string
  constructor(private myApiService:MyapiService) { }

  ngOnInit(): void {

    this.userName=sessionStorage.getItem("uname");

      this.myApiService.getAllComments().subscribe(
      userComments=>{
        //console.log(JSON.stringify(userComments));
        this.comments=userComments;
      }
        
    );
  }

  getData(){
    this.myApiService.getCommentByUserId(this.userID).subscribe(
      allPosts=>{
        //console.log(JSON.stringify(userComments));
        this.posts=allPosts;
      });
  }

}
