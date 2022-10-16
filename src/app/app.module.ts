import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { StockApiService } from './services/stock-api.service';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
