import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from 'app/client/client.service';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpModule
  ],
  providers: [
    ClientService
  ],
  declarations: [ClientComponent, ClientDetailComponent, ClientEditComponent, ClientListComponent]
})
export class ClientModule { }
