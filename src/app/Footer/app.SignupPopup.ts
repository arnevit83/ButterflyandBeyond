import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'SignupPopup',
  templateUrl: './SignupPopup.html',
})
export class SignupPopupComponent {
  faDownload = faDownload
  registerForm: FormGroup;
  submitted = false;


  public constructor(private formBuilder: FormBuilder,private http: HttpClient) {

  }
  
  
  ngOnInit() {
     $(function() {
        setTimeout(function() {
        $('#SignupPopup').modal('show');
      }, 3000);  



      $(".form-control").focus(function(){
        $(this).parent().find('label').addClass("is-focused")
      $(this).parent().addClass("is-focused")
      }).blur(function(){
        if($(this).val() != ''){
          $(this).parent().find('label').removeClass("is-focused")
          $(this).parent().removeClass("is-focused").addClass("is-filled");
        }else{
          $(this).parent().find('label').removeClass("is-focused")
        }
});
});


this.registerForm = this.formBuilder.group({
  firstName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
}, );
}


get f() { return this.registerForm.controls; }

onSubmit() {
this.submitted = true;

if (this.registerForm.invalid) {
return;
}
const req = this.http.get('https://hooks.zapier.com/hooks/catch/5207658/oydy5g9/?' + $.param(this.registerForm.value))
.subscribe(
res => {

  $(function(){
    $("#contactusbutton").attr("disabled", "disabled");
    $("#contactusbutton").val("Please check your emails!");
    setTimeout(function() {
      $('#SignupPopup').modal('hide');
    }, 2000);


   });
    
},
err => {
  console.log("Error occured");
}
);





}}