import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatTooltipModule,
		MatCardModule,
		MatSelectModule,
		MatPaginatorModule,
		MatSlideToggleModule,
		MatDialogModule,
		MatMenuModule,
		FlexLayoutModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	exports: [
		MatInputModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatTooltipModule,
		MatCardModule,
		MatSelectModule,
		MatPaginatorModule,
		MatSlideToggleModule,
		MatDialogModule,
		MatMenuModule,
		FlexLayoutModule,
		MatDatepickerModule,
		MatNativeDateModule
	]
})
export class AppMaterialModule { }