import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Departments');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Departments',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Departments',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Departments/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employees',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employees',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employees/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employees/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employees/GetAllDepartmentNames');
  }

}
