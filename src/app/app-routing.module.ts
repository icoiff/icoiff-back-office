import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { AuthGuard } from "./services/auth.guard";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { ManageSalonsComponent } from "./views/admin/manage-salons/manage-salons.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { CreateSalonComponent } from "./views/create-salon/create-salon.component";
import { Error404Component } from "./views/error404/error404.component";

const routes: Routes = [
  {
    path: "create/salon",
    component: CreateSalonComponent,
  },
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "clients",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "salons",
        component: ManageSalonsComponent,
        canActivate: [AuthGuard],
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  {
    path: "error-404",
    component: Error404Component,
  },
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "error-404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
