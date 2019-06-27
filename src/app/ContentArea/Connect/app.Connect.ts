import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'Connect',
  templateUrl: './Connect.html',
  styleUrls: ['./Connect.scss']
})
export class ConnectComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;

  registerForm: FormGroup;
  submitted = false;

  public constructor(private titleService: Title, private meta: Meta,private formBuilder: FormBuilder,private http: HttpClient) {
       this.titleService.setTitle( "" );
       this.meta.updateTag({ name: 'description', content: '' });
       this.meta.updateTag({ name: 'keywords', content: '' });
      }
      ngOnInit() {
        $(function() {
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
            phone: ['', ],
            message: ['', ],
            email: ['', [Validators.required, Validators.email]],
        }, );
      }
     
    
      get f() { return this.registerForm.controls; }
    
      onSubmit() {
        this.submitted = true;
    
        if (this.registerForm.invalid) {
          return;
      }
        const req = this.http.get('https://hooks.zapier.com/hooks/catch/5207658/oyzzer8/?' + $.param(this.registerForm.value))
        .subscribe(
          res => {
         
            $(function(){
              $("#contactusbutton").attr("disabled", "disabled");
              $("#contactusbutton").val("I will be in touch shortly");
             });
              
          },
          err => {
            console.log("Error occured");
          }
        );
        
          
        
    
    
    }
    
    
    }
    