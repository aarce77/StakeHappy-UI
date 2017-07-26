import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from 'app/client/client.component';
import { ClientDetailComponent } from 'app/client/client-detail/client-detail.component';
import { ClientEditComponent } from 'app/client/client-edit/client-edit.component';
import { ClientListComponent } from 'app/client/client-list/client-list.component';

const routes: Routes = [
	{
		path: "client", component: ClientComponent,
		children: [
			{path:'', component: ClientListComponent},
			{path:'view', component: ClientDetailComponent},
			{path:'edit', component: ClientEditComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientRoutingModule { }
