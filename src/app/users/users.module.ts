import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersPageComponent} from "./users-page/users-page.component";

@NgModule({
  declarations: [
    TableComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    UsersPageComponent
  ],
  bootstrap: []
})
export class UsersModule {
}
