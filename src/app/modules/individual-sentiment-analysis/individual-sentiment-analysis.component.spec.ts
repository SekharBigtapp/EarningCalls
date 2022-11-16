import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSentimentAnalysisComponent } from './individual-sentiment-analysis.component';

describe('IndividualSentimentAnalysisComponent', () => {
  let component: IndividualSentimentAnalysisComponent;
  let fixture: ComponentFixture<IndividualSentimentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualSentimentAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualSentimentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
