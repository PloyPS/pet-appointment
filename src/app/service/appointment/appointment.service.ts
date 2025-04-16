import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { config } from 'src/app/config/config';

export interface DataAppointment {
  id: string;
  name: string;
  subject: string;
  animals_type: string;
  time: string;
  status: string;
}
export interface AnimalsTypes {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(
      `${environment.baseUrl}${config.api.endpoint.user.profile}`
    );
  }

  saveUser(data: any) {
    console.log('data', data);
    return this.http.post(
      `${environment.baseUrl}${config.api.endpoint.user.addUser}`,
      data
    );
  }

  getPetsByUserId(userId: number): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}${config.api.endpoint.appointment.getPets}?userId=${userId}`
    );
  }

  getPrice() {
    return this.http.get(
      `${environment.baseUrl}${config.api.endpoint.appointment.getPrice}`
    );
  }

  getAnimalsTypes() {
    return this.http.get(
      `${environment.baseUrl}${config.api.endpoint.appointment.getAnimalType}`
    );
  }

  getWeight(petWeightId: number) {
    return this.http.get(
      `${environment.baseUrl}${config.api.endpoint.appointment.getWeigth}?petWeightId=${petWeightId}`
    );
  }

  savePets(data: any) {
    console.log('data', data);
    return this.http.post(
      `${environment.baseUrl}${config.api.endpoint.appointment.savePets}`,
      data
    );
  }

  getSubject() {
    return this.http.get(
      `${environment.baseUrl}${config.api.endpoint.appointment.getSubject}`
    );
  }

  getData(): Observable<DataAppointment[]> {
    return of([
      {
        id: '0',
        name: 'พลอย ไพลิน',
        subject: 'จองอาบน้ำ',
        animals_type: 'สุนัข',
        animals_breed: 'บางแก้ว',
        animals_name: 'บาสเก็ตบอล',
        time: '10/11/24 13:00 - 14:00',
        status: 'Approved',
      },
    ]);
  }

}
