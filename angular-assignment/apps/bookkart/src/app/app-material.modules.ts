import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatBadgeModule,
    MatRippleModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatBadgeModule,
    MatRippleModule
  ]
})
export class AppMaterialModule { }

