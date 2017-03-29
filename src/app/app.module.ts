import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';

import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { NoContentComponent } from './no-content/no-content.component';
import { DecodeUrlPipe } from './extras/pipes/decode-url.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { MainMenuComponent } from './extras/html_components/main-menu/main-menu.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { ExcerptPipe } from './extras/pipes/excerpt.pipe';
import { PostsPaginationComponent } from './posts/posts-pagination/posts-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    NoContentComponent,
    DecodeUrlPipe,
    ContactsComponent,
    MainMenuComponent,
    StaticPageComponent,
    ExcerptPipe,
    PostsPaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
