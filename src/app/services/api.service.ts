import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_SERVICES } from '../configurations/url.service';
import { headersWithToken, headersWithoutToken } from '../utils/constants';
import * as XLSX from 'xlsx';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getUser() {
    return localStorage.getItem('id-sh')
  }

  buildHeadersWithToken() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token-shadow')
    });
  }

  //**AUTH
  login(body): Observable<any> {
    const url = URL_SERVICES + `/administrator/login`;
    return this._http.post(url, body, { headers: headersWithoutToken, observe: 'response' }).pipe(
      tap((response: any) => {
        localStorage.setItem("token-shadow", response.body['token']);
        localStorage.setItem("id-sh", response.body['administrator']._id);
        localStorage.setItem("role", response.body['administrator'].role);
      }
      ),
    )
  }

  //**TEAMS
  getTeams(page: number = 1, itemsPage: number = 10, word: string): Observable<any> {
    const url = URL_SERVICES + `/teams`;

    const params = new HttpParams()
      .set('word', word)
      .set('page', page)
      .set('idUser', this.getUser())
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  postTeams(body): Observable<any> {
    const url = URL_SERVICES + `/team`;

    return this._http.post(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  putTeams(body, id): Observable<any> {
    const url = URL_SERVICES + `/team/update/` + id;
    return this._http.put(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  //**Centrales
  getNeighborhoodByTeam(idTeam: string, page: number = 1, itemsPage: number = 10, word: string) {
    const url = URL_SERVICES + `/neighbourhoodByTeam/${idTeam}`;

    const params = new HttpParams()
      .set('word', word)
      .set('page', page)
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  postNeighborhood(body): Observable<any> {
    const url = URL_SERVICES + `/neighborhood`;

    return this._http.post(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  putNeighborhood(body, id): Observable<any> {
    const url = URL_SERVICES + `/neighborhood/update/` + id;

    return this._http.put(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  //**Vecinos
  getUserByNeighborhood(idNeigh: string, page: number = 1, itemsPage: number = 10, word: string) {
    const url = URL_SERVICES + `/usersNeighbourhood`;

    const params = new HttpParams()
      .set('idNeighbourhood', idNeigh)
      .set('word', word)
      .set('page', page)
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  postNeighbour(body): Observable<any> {
    const url = URL_SERVICES + `/newuser`;

    return this._http.post(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  putNeighbour(body: any, id): Observable<any> {
    const url = URL_SERVICES + '/admin/user/' + id;
    return this._http.put(url, body).pipe(tap(data => { }));
  }


  postNeighbourImport(body) {
    const url = URL_SERVICES + `/newuser-import`;

    return this._http.post(url, { data: body }, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  getCentralInformation(type, identifier) {
    const url = `https://api.rumiseguro.com/box-stats/${type}/${identifier}`;
    return this._http.get(url);
  }

  getCentralInformationLast(type, identifier) {
    const url = `https://api.rumiseguro.com/box-stats/${type}/${identifier}?last=true`;
    return this._http.get(url);
  }

  //**Operators
  getOperatorsById(id): Observable<any> {
    const url = URL_SERVICES + `/administratorById/${id}`;

    return this._http.get(url, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  getOperators(page: number = 1, itemsPage: number = 10, word: string): Observable<any> {
    const url = URL_SERVICES + `/administrator/list`;
    const params = new HttpParams()
      .set('word', word)
      .set('page', page)
      .set('userId', this.getUser())
      .set('role', localStorage.getItem('role'))
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  postOperators(body): Observable<any> {
    const url = URL_SERVICES + `/administrator/new`;

    return this._http.post(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  putOperators(body, id): Observable<any> {
    const url = URL_SERVICES + `/administrator/update/` + id;

    return this._http.put(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  resetPaswordOperator(body, id): Observable<any> {
    const url = URL_SERVICES + `/administrator/update/resetPassword/` + id;

    return this._http.put(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  getOperatorsByTeam(idTeam: string, page: number = 1, itemsPage: number = 10, word: string) {
    const url = URL_SERVICES + `/team/users`;

    const params = new HttpParams()
      .set('idTeam', idTeam)
      .set('word', word)
      .set('page', page)
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  postOperatorTeam(idUser, idTeam) {
    const url = URL_SERVICES + `/team/assing/user`;

    const params = new HttpParams()
      .set('idUser', idUser)
      .set('idTeam', idTeam);

    return this._http.post(url, {}, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  //**Codigos
  getKeys(page: number = 1, itemsPage: number = 10): Observable<any> {
    const url = URL_SERVICES + `/keys`;

    const httParams = new HttpParams()
      .set('page', page)
      .set('itemsPage', itemsPage);

    return this._http.get(url, { params: httParams, headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  generateKeys(quantity: string) {
    const url = URL_SERVICES + `/keygenerator`;

    const params = new HttpParams()
      .set('quantity', quantity);

    return this._http.post(url, {}, { params, headers: this.buildHeadersWithToken(), observe: 'response' });
  }


  getAlertsByTeam(team: string) {

    const url = URL_SERVICES + `/getAlertsByTeam/${team}`;
    console.log("URL Service", url);
    return this._http.get(url, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  putAlertHeeded(id: string, body) {
    const url = URL_SERVICES + `/alert-heeded/${id}`;

    return this._http.put(url, body, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  readExcelFile(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });

        resolve(jsonData);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsBinaryString(file);
    });
  }

  //**Reports

  generateReport(idTeam: string, startDate: string, endDate: string): Observable<any> {
    const url = URL_SERVICES + `/reports/alerts/getAlertsByTeam/`;

    const httParams = new HttpParams()
      .set('idTeam', idTeam)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this._http.get(url, { params: httParams, headers: this.buildHeadersWithToken(), observe: 'response' });

  }

  getUserPosition(idUser) {
    const url = URL_SERVICES + `/user/position/${idUser}`;

    return this._http.get(url, { headers: this.buildHeadersWithToken(), observe: 'response' });
  }

  getAddressFromCoords(lat: number, lng: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

    return this._http.get(url);
  }
}
