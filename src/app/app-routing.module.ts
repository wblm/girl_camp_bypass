import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from './customizer/customizer.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveshellComponent } from './leaveshell/leaveshell.component';
import { ModalComponent } from './modal/modal.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/customizer", pathMatch: 'full'
  },
  {
    path: "show",
    component: ShowComponent
  },
  {
    path: "customizer",
    component: CustomizerComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "leave",
    component: LeaveshellComponent,
    children: [
      { path: "show", component: LeaveComponent },
      { path: "qrcode", component: QrcodeComponent },
      { path: "**", redirectTo: "show" }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
