import { Injectable } from "@angular/core";
// İlk olarak declare etmek gerekiyor.
declare let alertify: any;

@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}

  // Yeşil Uyarı!
  success(message: string) {
    alertify.success(message);
  }

  // Turuncu Uyarı!
  warning(message: string) {
    alertify.warning(message);
  }

  // Kırmızı Uyarı!
  error(message: string) {
    alertify.error(message);
  }
}
