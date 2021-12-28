import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { AuthGuard } from "./guards/auth.guard";
import { AutoLoginGuard } from "./guards/auto-login.guard";

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { UserActivitiesModule } from "./views/user-activities/user-activities.module";
import { SalesTargetModule } from "./views/sales-target/sales-target.module";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "logout",
    component: LogoutComponent,
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AutoLoginGuard],
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then((m) => m.BaseModule),
      },
      {
        path: "buttons",
        loadChildren: () =>
          import("./views/buttons/buttons.module").then((m) => m.ButtonsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/chartjs/chartjs.module").then((m) => m.ChartJSModule),
      },

     { 
     

      
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
      {
        path: "quote",
        loadChildren: () =>
          import("./quote/quote.module").then((m) => m.QuoteModule),
      },
      {
        path: "soci",
        loadChildren: () =>
          import("./soci/soci.module").then((m) => m.SociModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./views/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: "opportunity",
        loadChildren: () =>
          import("./views/opportunity/opportunity.module").then(
            (m) => m.OpportunityModule
          ),
      },
      {
        path: "dms",
        loadChildren: () => import("./dms/dms.module").then((m) => m.DmsModule),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./views/contact/contact.module").then((m) => m.ContactModule),
      },
      {
        path: "leads",
        loadChildren: () =>
          import("./views/leads/leads.module").then((m) => m.LeadsModule),
      },
      {
        path: "prospects",
        loadChildren: () =>
          import("./views/prospects/prospects.module").then(
            (m) => m.ProspectsModule
          ),
      },
      {
        path: 'fps',
        loadChildren: () => import('./fps/fps.module').then(m => m.FpsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./views/coming-soon/coming-soon.module").then(
            (m) => m.ComingSoonModule
          ),
      },

      {
        path: "salestarget",
        loadChildren: () =>
          import("./views/sales-target/sales-target-routing.module").then(
            (m) => m.SalesTargetRoutingModule
          ),
      },


      {
        path: "activities",
        loadChildren: () =>
          import("./views/user-activities/user-activities.module").then(
            (m) => m.UserActivitiesModule
          ),
      },
      {
        path: "managerview",
        loadChildren: () =>
          import("./views/manager-view/manager-view.module").then(
            (m) => m.ManagerViewModule
          ),
      },
      {
        path: 'profile',
        // loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
        component:ProfileComponent
      },
      {
        
        path: "customers",
        loadChildren: () =>
          import("./views/customers/customers.module").then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: "useraccess",
        loadChildren: () =>
          import("./system-admin/user-access/user-access.module").then(
            (m) => m.userAccessModule
          ),
      },
      {
        path: "systemadmin",
        loadChildren: () =>
          import("./system-admin/admin/system-admin.module").then(
            (m) => m.SystemAdminModule
          ),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./system-admin/user/user.module").then((m) => m.UserModule),
      },
      
      
    ],
  },
  // { path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
