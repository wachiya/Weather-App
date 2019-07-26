import { Component, OnInit } from '@angular/core';

import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  cityName = 'Eldoret';
  error;
  title = 'Add Activity';
  output: any;
  activity: any = {
    date: new Date(),
    time: null,
    activity_type: null,
    edit: false
  };

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.allActivities();
  }

  allActivities() {
    console.log('called');
    this.activitiesService.getAllActivities()
      .subscribe(activities => this.output = activities);
    console.log('activities----', this.output);

  }

  saveActivity() {
    this.activity.time = (new Date()).getHours() + ':' + (new Date()).getMinutes();
    delete this.activity.edit;
    this.activitiesService.insertActivity(this.activity).subscribe((activity) => {
      this.output.push(activity);
    });
  }

  deleteOneActivity(id: number) {
    this.activitiesService.deleteActivity(id).subscribe();
    this.allActivities();
  }

  updateOneActivity(activity: any) {
    activity.edit = !activity.edit;
    this.activitiesService.updateActivity(activity)
      .subscribe(updatedActivity => {
        if (updatedActivity.success) {
          activity.activity_type = updatedActivity.activity.activity_type;
        } else {
          this.activitiesService.handleError();
        }
      });
  }
  toggleEdit(activity: any) {
    activity.edit = true;
  }
}

