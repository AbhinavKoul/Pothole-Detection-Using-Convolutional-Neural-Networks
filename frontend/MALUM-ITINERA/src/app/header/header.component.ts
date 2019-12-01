import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  httpobj: HttpClient;
  img_url = "assets/images/newlogo.gif";
  model = {
    a: true,
    b: false,
    c: false,
    d: false,
  };
  username="abhay";
  password="rest";
  usernameEntered = "";
  passwordEntered ="";
  flag = true;

  alluser:any[]  = [];
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  authenticateUser(username,password :string){
    this.httpobj.get("./assets/impFiles/offcials.json").subscribe(
      serverResponse => (this.alluser = serverResponse as string[])
    );
    for(let x of this.alluser)
    {
      if(username==x.username && password == x.password)
      {
        alert("LOGGED IN SUCCESSFULLY");
        return;
      }

    }
    alert("Invalid Credentials");

    
  }
  f2() {
    if (this.flag == true) { this.flag = false; }
    else {this.flag = true;}
  }
  authenticateTemp()
  {
        if(this.username == this.usernameEntered && this.password== this.passwordEntered){
            alert("logged in successfully");
        }
        if (this.flag == true) { this.flag = false; }
        else {this.flag = true;}
  }

}
