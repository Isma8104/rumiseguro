import { HttpHeaders } from "@angular/common/http";

function getToken() {
  return localStorage.getItem('token-shadow');
}

export const headersWithToken = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': getToken()
});

export const headersWithoutToken = new HttpHeaders({
  'Content-Type': 'application/json'
});

export function generateCode(): string {
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ123467890";
  var contraseña = "";

  for (let i = 0; i < 10; i++) {
    contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return contraseña;
}
