import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { RegisterComponent } from './register/register.component';
import { NoticeComponent } from './notice/notice.component';
import { DailogComponent } from './dailog/dailog.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    RegisterComponent,
    NoticeComponent,
    DailogComponent
  ],
  imports: [
    CommonRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    DailogComponent,
  ],
  entryComponents: []
})
export class CommonModule {

}
