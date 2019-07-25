import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from '../home/home.component';
import { MoodsComponent } from './moods.component';
import { MoodsService } from '../moods.service';

describe('MoodsComponent', () => {
  let component: MoodsComponent;
  let fixture: ComponentFixture<MoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoodsComponent, HomeComponent],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent }
        ])
      ],
      providers: [MoodsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
