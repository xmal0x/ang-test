import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersPageComponent} from "./users-page/users-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddUserFormComponent} from "./components/add-user-form/add-user-form.component";
import {ButtonComponent} from "../shared/components/button/button.component";

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
    ButtonComponent,
  ],
  providers: [],
  exports: [
    UsersPageComponent
  ],
  bootstrap: []
})
export class UsersModule {
}
