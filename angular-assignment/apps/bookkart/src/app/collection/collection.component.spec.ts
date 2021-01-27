import { CollectionFacade } from './../store/facades/collection.facade.service';
import { CollectionData } from './../models/collectionData.model';
import { AuthorTransformPipe } from './../shared/author-transform.pipe';
import { TruncatePipe } from './../shared/truncate.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let collectionFacade: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionComponent,
        TruncatePipe,
        AuthorTransformPipe],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    collectionFacade = fixture.debugElement.injector.get(CollectionFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test ng on init', () => {

    it('should load intitial collection data', () => {
      const app = fixture.componentInstance;
      const collectionValue: CollectionData[] = [];
      fixture.detectChanges();
      expect(app.booksCollection).toBeTruthy();
    });
  });
});
