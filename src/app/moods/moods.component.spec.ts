import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodsComponent } from './moods.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoodsService } from '../moods.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';


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
