import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },
  { path: '', component: LandingPageComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      AuthModule
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}