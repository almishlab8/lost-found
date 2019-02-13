// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoundProvider {

  constructor(public storage: Storage ,
    public http: Http, 
     ) {
    console.log('Hello DonorProvider Provider');
  }




  getPosts(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new Headers();
       headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Content-Type', 'application/json');
       headers.append('Authorization', 'Bearer '+value);

       console.log('value: ' + value);
  
       this.http.get(apiKey+'/all-found', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }








 insertPosts(postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.post(apiKey+'/found',  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}

 insertComment(postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.post(apiKey+'/found-comments',  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}







editPosts(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.put(apiKey+'/found/' +id ,  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}

}
