import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { MoodsComponent } from './moods.component';
import { MoodsService } from '../moods.service';
import { of } from 'rxjs';

const mockMoods = [
  { id: 1, date: '25/07/2019', time: '11:14AM', activity_type: 'happy' },
  { id: 2, date: '26/07/2019', time: '12:07PM', activity_type: 'sad' },
  { id: 3, date: '27/07/2019', time: '08:30AM', activity_type: 'jovial' }
];

const moodsServiceStub = {
  getAllMoods: () => {
    return of(mockMoods);
  }
}

describe('MoodsComponent', () => {
  let component: MoodsComponent;
  let fixture: ComponentFixture<MoodsComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoodsComponent, HomeComponent],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent }
        ])
      ],
      providers: [
        {
          provide: MoodsService,
          useValue: moodsServiceStub
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = debugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all its methods defined', () => {
    expect(component.allMoods).toBeDefined();
    expect(component.deleteOneMood).toBeDefined();
    expect(component.saveMood).toBeDefined();
    expect(component.updateOneMood).toBeDefined();
    expect(component.toggleEdit).toBeDefined();
  });

  it('should', () => {
    fixture.detectChanges();
    const moods = nativeEl.querySelector('.mood');
    expect(moods[0].textContent).toContain('happy');
    expect(moods[1].textContent).toContain('sad');
    expect(moods[2].textContent).toContain('jovial');
  });

});
