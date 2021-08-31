import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  showChild1()
  {
      this.router.navigate(['child1'],{relativeTo:this.aroute});
  }
  showChild2()
  {
    this.router.navigate(['child2'],{relativeTo:this.aroute});
  }
}
