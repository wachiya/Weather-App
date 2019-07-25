import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ActivitiesService } from '../activities.service';
import { ForecastComponent } from './forecast.component';
import { HomeComponent } from '../home/home.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent, HomeComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent }
      ])
      ],
      providers: [ActivitiesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
