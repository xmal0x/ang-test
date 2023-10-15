import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersPageComponent} from "./users-page/users-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddUserFormComponent} from "./components/add-user-form/add-user-form.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TableComponent,
    UsersPageComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,

  ],
  providers: [],
  exports: [
    UsersPageComponent
  ],
  bootstrap: []
})
export class UsersModule {
}
