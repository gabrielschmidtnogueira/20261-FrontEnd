import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponen } from './post-list-componen';

describe('PostListComponen', () => {
  let component: PostListComponen;
  let fixture: ComponentFixture<PostListComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
