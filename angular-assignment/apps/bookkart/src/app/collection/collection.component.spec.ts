import { of } from 'rxjs';
import { CollectionService } from './../collection.service';
import { CollectionData } from './../models/collectionData.model';
import { AuthorTransformPipe } from './../shared/author-transform.pipe';
import { TruncatePipe } from './../shared/truncate.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let collectionService: any;
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
    collectionService = fixture.debugElement.injector.get(CollectionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test ng on init', () => {
    it('should subscribe to book collection', () => {
      const app = fixture.componentInstance;
      const collectionValue: CollectionData[] = [];
      const collectionSpy = spyOn(collectionService, 'getCollectionSubject').and.returnValue(of(collectionValue));
      fixture.detectChanges();
      expect(app.booksCollection.length).toBe(0);
    });

    it('should load intitial collection data', () => {
      const app = fixture.componentInstance;
      const collectionValue: CollectionData[] = [];
      const collectionValueSpy = spyOn(collectionService, 'getCollectionData').and.returnValue(collectionValue);
      fixture.detectChanges();
      expect(app.booksCollection.length).toBe(0);
    });
  });

  describe('Test on componenet destroy', () => {
    it('unsubscribe on destroy', () => {
      const app = fixture.componentInstance;
      const subscription = app.collectionSubscription;
      const subSpy = spyOn(subscription, 'unsubscribe');
      app.ngOnDestroy();
      expect(subSpy).toHaveBeenCalledWith();
    });
  });
});
