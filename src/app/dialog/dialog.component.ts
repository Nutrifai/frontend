import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

}
