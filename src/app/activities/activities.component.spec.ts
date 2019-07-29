import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { of } from 'rxjs';
import { ActivitiesComponent } from './activities.component';
import { MoodsComponent } from '../moods/moods.component';
import { ActivitiesService } from '../activities.service';

const mockActivities = [
  { id: 1, date: '25/07/2019', time: '11:14AM', activity_type: 'walking' },
  { id: 2, date: '26/07/2019', time: '12:07PM', activity_type: 'running' },
  { id: 3, date: '27/07/2019', time: '08:30AM', activity_type: 'eating' }
];

const activitiesServiceStub = {
  getAllActivities: () => {
    return of(mockActivities);
  }
};

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesComponent, MoodsComponent],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'moods', component: MoodsComponent }
        ])
      ],
      providers: [
        {
          provide: ActivitiesService,
          useValue: activitiesServiceStub
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = debugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all its methods defined', () => {
    expect(component.allActivities).toBeDefined();
    expect(component.deleteOneActivity).toBeDefined();
    expect(component.saveActivity).toBeDefined();
    expect(component.updateOneActivity).toBeDefined();
    expect(component.toggleEdit).toBeDefined();
  });

  it('should show all activities after the component initializes', () => {
    fixture.detectChanges();
    const activities = nativeEl.querySelectorAll('.activity');
    expect(activities[0].textContent).toContain('walking');
    expect(activities[1].textContent).toContain('running');
    expect(activities[2].textContent).toContain('eating');
  });

});
