import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from "@angular/common/http";
import { FlipclickComponent } from './flipclick/flipclick.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { TestflexboxComponent } from './testflexbox/testflexbox.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { GheptuComponent } from './gheptu/gheptu.component';
import { ThienthachComponent } from './thienthach/thienthach.component';
import { StudyComponent } from './study/study.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { RegisterComponent } from './register/register.component';
import { DetailTitleComponent } from './detail-title/detail-title.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FlipclickComponent,
    TestflexboxComponent,
    LoginComponent,
    HeaderComponent,
    HomepageComponent,
    CoursesComponent,
    GheptuComponent,
    ThienthachComponent,
    StudyComponent,
    FlashcardComponent,
    RegisterComponent,
    DetailTitleComponent,
    WriteComponent  
  ],
  imports: [
    BrowserModule,
    HotkeyModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    ScrollDispatchModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
