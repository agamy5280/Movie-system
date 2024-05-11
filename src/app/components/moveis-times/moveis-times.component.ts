
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MyServiceService } from '../../services/my-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-moveis-times',
  templateUrl: './moveis-times.component.html',
  styleUrl: './moveis-times.component.scss'
})
export class MoveisTimesComponent implements OnInit{
  id = 0
  movieName = "";
  
  constructor(private movieService:MyServiceService,  route:ActivatedRoute){
    this.id = route.snapshot.params["id"];
  }
  
  
  times:any;
  // {location:string, times:string[]}[] = [
  //   {
  //     location: "City Center Almaza",
  //     times: [
  //       "1:45pm",
  //       "4:45pm",
  //       "8:30pm",
  //       "11:45pm",
  //     ]
  //   }
  // ]; 
   
  //   {
  //     loaction: "Mall Of Egypt",
  //     times: [
  //       "1:45pm",
  //       "4:45pm",
   
  //     ]
  //   },
  //   {
  //     loaction: "City Center Alexandria",
  //     times: [
  //       "1:45pm",
  //       "4:45pm",
  //       "8:30pm",

  //     ]
  //   },
    
  // ];

  ngOnInit(): void {
    this.movieService.getShowTimes(this.id).subscribe({
      next: (data) => {
        this.times = data;
        this.movieName = this.times["title"]
        this.times = this.times["show_times"];
      } ,
      error: (err) => console.log(err)
    })
  }

}
