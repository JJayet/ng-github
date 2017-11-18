import { MatToolbarModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { GithubService } from './services/github.service'
import { BodyComponent } from './body/body.component'
import { AppComponent } from './app.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
