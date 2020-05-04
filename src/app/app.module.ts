import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarTabComponent } from './side-bar/side-bar-tab/side-bar-tab.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './content/header/header.component';
import { SearchComponent } from './content/header/search/search.component';
import { ToolsComponent } from './content/header/tools/tools.component';
import { UploadComponent } from './content/header/tools/upload/upload.component';
import { ImageContainerComponent } from './content/image-container/image-container.component';
import { ImageComponent } from './content/image-container/image/image.component';
import { ImageComponent as ViewerImageComponent } from './content/image-viewer/image/image.component';
import { VerticalImageComponent } from './content/image-container/image/vertical-image/vertical-image.component';
import { HorizontalImageComponent } from './content/image-container/image/horizontal-image/horizontal-image.component';
import { PictureComponent } from './content/image-container/image/picture/picture.component';
import { DescriptionComponent } from './content/image-container/image/description/description.component';
import { PaginationComponent } from './content/pagination/pagination.component';
import { ImageViewerComponent } from './content/image-viewer/image-viewer.component';
import { ImageSliderComponent } from './content/image-viewer/image-slider/image-slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './content/image-container/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    SideBarTabComponent,
    SearchComponent,
    ToolsComponent,
    ContentComponent,
    ContactComponent,
    UploadComponent,
    ImageContainerComponent,
    ImageComponent,
    ViewerImageComponent,
    PictureComponent,
    DescriptionComponent,
    VerticalImageComponent,
    HorizontalImageComponent,
    PaginationComponent,
    ImageViewerComponent,
    ImageSliderComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
