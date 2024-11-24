import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponível para todo o aplicativo
})
export class DateTimeService {
  private selectedDate: Date | null = null;

  // Método para armazenar a data selecionada
  setDate(date: Date): void {
    this.selectedDate = date;
  }

  // Método para obter a data armazenada
  getDate(): Date | null {
    return this.selectedDate;
  }
}
