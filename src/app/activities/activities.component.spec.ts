import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ActivitiesComponent } from './activities.component';
import { MoodsComponent } from '../moods/moods.component';
import { ActivitiesService } from '../activities.service';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesComponent, MoodsComponent],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'moods', component: MoodsComponent }
        ])
      ],
      providers: [ActivitiesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
