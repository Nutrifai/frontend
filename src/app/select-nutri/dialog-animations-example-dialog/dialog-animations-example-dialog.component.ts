import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'dialog-animations-example',
  styleUrls: ['dialog-animations-example-dialog.component.css'],
  templateUrl: 'dialog-animations-example.component.html',
  standalone: true,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExample {
  readonly dialog = inject(MatDialog);

  // Propriedade para armazenar a resposta do diálogo
  dialogResult: boolean | null = null;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    // Captura o resultado após o fechamento do diálogo e exibe no console
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
      console.log('Resposta do diálogo:', result); // Depuração no console
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  template: `
    <h2 mat-dialog-title>Confirmar horário</h2>
    <mat-dialog-content>Confirma este horário de agendamento?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="close(false)">No</button>
      <button mat-button cdkFocusInitial (click)="close(true)">Yes</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);

  // Método para fechar o diálogo com a resposta
  close(answer: boolean): void {
    this.dialogRef.close(answer);
  }
}
