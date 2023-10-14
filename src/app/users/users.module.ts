import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersPageComponent} from "./users-page/users-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from "./components/modal/modal.component";

@NgModule({
  declarations: [
    TableComponent,
    UsersPageComponent,
    ModalComponent
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
