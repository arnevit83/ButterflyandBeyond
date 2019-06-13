import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

declare var $: any;


@Component({
  selector: 'SignupPopup',
  templateUrl: './SignupPopup.html',
})
export class SignupPopupComponent {
  faEnvelope = faEnvelope
  ngOnInit() {
/*     $(function() {
      setTimeout(function() {
        $('#SignupPopup').modal('show');
      }, 10000);
    }); */
  };
}



