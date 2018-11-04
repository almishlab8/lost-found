 
import { Injectable } from '@angular/core';


import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public token: any;
  public id: any;
  public username: any;

  constructor(public storage: Storage , public http: Http) {
    console.log('Hello AuthProvider Provider');
  }






  createAccount(details){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin' , '*');
        this.http.post(apiKey+'/api/user/register', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
            let data = res.json();
           // this.token = data.token;
            //this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }






  login(credentials){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
       // headers.append('Content-Type', 'application/json');
       headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
     
        this.http.post(apiKey+'api/user/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();
            // if (data['email']!="The email must be a valid email address."){
            //      this.token = data.token;
            //       this.storage.set('token', data.token);
            //       this.storage.set('UserIsLogin', true);
            //       this.getUserInfo();
            // }
         
           
            resolve(data);
            console.log(data);
   }, (err) => {
            reject(err);
          
          });  });
 
  }





  checkAuthentication(){

    return new Promise((resolve, reject) => {
    this.storage.get('token').then((value) => {
 
      this.token = value;

      resolve(this.token)


    }) 
  });        



  }




  logout(){
    this.storage.set('token', '');
    this.storage.set('UserIsLogin', false);
  
   }


getUserInfo(){
  return new Promise((resolve, reject) => {
    this.storage.get('token').then((value) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer '+value);

      console.log('value: ' + value);
 
      this.http.get(apiKey+'/users', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          this.storage.set('userId', data.id);
          console.log('id: ' + data.id);
          this.storage.set('userName', data.name);
          console.log('name: ' + data.name);
          resolve(data);
        }, (err) => {
          reject(err);
        }); 
    }) 

  });
}



}
