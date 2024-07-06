import { Component } from '@angular/core';
import * as CryptoTS from 'crypto-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cryptographic';


  encrypt(veri : string){
    // var CryptoTS = require("crypto-ts");
 
    // Encrypt
    var ciphertext = CryptoTS.AES.encrypt(veri, 'secret key 123');

    return ciphertext;
  }

  login(){
    let accessToken=this.encrypt("Access-Token")
    localStorage.setItem("token",accessToken.toString())
  }

  getToken(){
    let decrypt=this.decrypt();
    console.log(decrypt);
  }

  decrypt(){
    let  veri =localStorage.getItem("token");
    if(veri!=null){
      var bytes  = CryptoTS.AES.decrypt(veri,'secret key 123');
      var plaintext = bytes.toString(CryptoTS.enc.Utf8);
   
      return plaintext;
    }
    else{
      console.error("Token değeri boş.")
      return null;
    }
  }

}
