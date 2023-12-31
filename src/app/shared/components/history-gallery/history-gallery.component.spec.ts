import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryGalleryComponent } from './history-gallery.component';

describe('HistoryGalleryComponent', () => {
  let component: HistoryGalleryComponent;
  let fixture: ComponentFixture<HistoryGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [HistoryGalleryComponent] }).compileComponents();
    fixture = TestBed.createComponent(HistoryGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
