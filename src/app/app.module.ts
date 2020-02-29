import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { HttpClientModule} from '@angular/common/http';
import { AddeventComponent } from './components/addevent/addevent.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    FirstAppComponent,
    AddeventComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
