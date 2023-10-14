import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersPageComponent} from "./users-page/users-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TableComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    UsersPageComponent
  ],
  bootstrap: []
})
export class UsersModule {
}
