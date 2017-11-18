import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatToolbarModule } from '@angular/material'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contains the title in a span tag', async(() => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('Angular + Github = <3')
  }))
})
