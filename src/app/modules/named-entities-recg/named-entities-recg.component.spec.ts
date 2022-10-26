import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedEntitiesRecgComponent } from './named-entities-recg.component';

describe('NamedEntitiesRecgComponent', () => {
  let component: NamedEntitiesRecgComponent;
  let fixture: ComponentFixture<NamedEntitiesRecgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedEntitiesRecgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedEntitiesRecgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
