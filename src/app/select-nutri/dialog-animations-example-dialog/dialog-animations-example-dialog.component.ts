import { Component, inject } from '@angular/core';
import { DateTimeService } from '../date-time.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dialog-animations-example',
  templateUrl: './dialog-animations-example.component.html',
  styleUrls: ['dialog-animations-example-dialog.component.css'],
  standalone: true,
  imports: [],
})
export class DialogAnimationsExample {
  private dateTimeService = inject(DateTimeService);
  private http = inject(HttpClient); // Para realizar o POST

  openDialog(selectedTime: string): void {
    const selectedDate = this.dateTimeService.getDate();
    if (!selectedDate) {
      alert('Por favor, selecione uma data primeiro.');
      return;
    }

    const dataToPost = {
      date: selectedDate,
      time: selectedTime,
    };

    // Realiza o POST via API
    /*
    this.http.post('URL_DA_API', dataToPost).subscribe({
      next: () => console.log('Agendamento realizado com sucesso:', dataToPost),
      error: (err) => console.error('Erro ao realizar agendamento:', err),
    });
    
    this.http.post('URL_DA_API', dataToPost).subscribe({
      next: (response) => {
        console.log('Agendamento realizado com sucesso. Dados enviados:', dataToPost);
        console.log('Resposta da API:', response); // Exibe os dados retornados pela API
      },
      error: (err) => {
        console.error('Erro ao realizar agendamento:', err);
      },
    });
    */
        
    // Simula o que seria enviado para a API, exibindo no console
        console.log('Dados que seriam enviados:', dataToPost);

  }
}
