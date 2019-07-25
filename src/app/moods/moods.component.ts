import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MoodsService } from '../moods.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MoodsComponent implements OnInit {

  cityName = 'Eldoret';
  error;
  title = 'Add Mood';
  output: any[];
  mood: any = {
    date: new Date(),
    time: null,
    mood_type: null,
    edit: false
  };

  constructor(private moodsService: MoodsService) { }

  ngOnInit() {
    this.allMoods();
  }


  allMoods() {
    this.moodsService.getAllMoods()
      .subscribe(moods => this.output = moods);
    // console.log('Hey, these are my moods!', moods));

  }

  saveMood() {
    this.mood.time = (new Date()).getHours() + ':' + (new Date()).getMinutes();
    delete this.mood.edit;
    this.moodsService.insertMood(this.mood).subscribe((mood) => {
      this.output.push(mood);
    });
  }

  deleteOneMood(id: number) {
    this.moodsService.deleteMood(id).subscribe();
    this.allMoods();
  }

  updateOneMood(mood: any) {
    mood.edit = !mood.edit;
    this.moodsService.updateMood(mood)
      .subscribe(updatedMood => {
        if (updatedMood.success) {
          mood.mood_type = updatedMood.mood.mood_type;
        } else {
          this.moodsService.handleError();
        }
      });
  }
  toggleEdit(mood: any) {
    mood.edit = true;
  }
}
