import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlocsComponent } from './liste-blocs.component';

describe('ListeBlocsComponent', () => {
  let component: ListeBlocsComponent;
  let fixture: ComponentFixture<ListeBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
