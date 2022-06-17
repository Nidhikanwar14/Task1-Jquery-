
    function fname(){ 
        let name = $('#fname').val();
        let name_pattern = "[a-zA-Z]{2,30}$";
         if(!name.match(name_pattern) || name ==" "){
          let text;
          text = ' First Name must contain alphabets and it contain atleast two character.'
          $('#demo').text(text);  
        }
    }
    function name1(){
        let name1 = $('#name1').val();
        let name1_pattern = "[a-zA-Z]{2,30}$";
         if(!name1.match(name1_pattern) || name1 ==" "){
          let text1;
          text1 = 'Last Name must contain alphabets and it contain atleast two character.'
          $('#demo1').text(text1);  
        }
    }

   function address(){
        let address = $('#address').val();
        let address_pattern = "[a-zA-Z]{2,30}$";
         if(!address.match(address_pattern) || address ==" "){
          let text1;
          text1 = 'Please enter valid address.'
          $('#demo3').text(text1);  
        }
   }
   function city(){
        let city = $('#city').val();
        let city_pattern = "[a-zA-Z]{2,30}$";
         if(!city.match(city_pattern) || city ==" "){
          let text1;
          text1 = 'Please enter valid city.'
          $('#demo4').text(text1);  
        }
      }

      function state(){
        let pincode = $('#pincode').val();
        let pincode_pattern = "[a-zA-Z]{2,10}$";

        if(!pincode.match(pincode_pattern) ||pincode==" "){
        let text;
        text = 'Please enter valid state';
        $('#demo5').text(text); 
        }
      }

      function zipcode(){
        let postal = $('#postal').val();
        let postal_pattern = "^[0-9]{6}$";

        if(!postal.match(postal_pattern) ||pincode==" "){
        let text;
        text = 'Please enter valid postal code';
        $('#demo6').text(text); 
        }
      }
      function phone_num(){
        let phone_num = $('#phone_num').val();
        let phone_num_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";

        if(!phone_num.match(phone_num_pattern) ||phone_num==" "){
        let text;
        text = 'Please enter valid phone number';
        $('#demo7').text(text); 
        }
      }

      function email_val(){
        let email = $('#email').val();
            let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
            if(!email.match(email_pattern)){
              let text;
              text = 'Enter valid Email-id'
              $('#demo8').text(text);
            }
      }
      function feedback(){
          let subject = $('#subject').val();
          let subject_pattern = "[a-zA-Z]{3,10}$";
  
          if(!subject.match(subject_pattern) ||subject==" "){
          let text;
          text = 'Please write something';
          $('#demo12').text(text); 
          }
      }

      function suggestion(){
          let subject1 = $('#subject1').val();
          let subject1_pattern = "[a-zA-Z]{3,100}$";
  
          if(!subject1.match(subject1_pattern) ||subject1==" "){
          let text;
          text = 'Please suggest something';
          $('#demo11').text(text); 
          }
      }

         
    
    $(document).ready(function(){

      $("#fname").blur(function(){
        fname(); 
    });
    $("#name1").blur(function(){
      name1();
    });
    $("#address").blur(function(){
      address();
    });
    $("#city").blur(function(){
      city();
    });
    $("#pincode").blur(function(){
      state();
    });
    $("#postal").blur(function(){
      zipcode();
    });
    $("#phone_num").blur(function(){
      phone_num();
    });
    $("#email").blur(function(){
      email_val();
    });
    $("#subject").blur(function(){
      feedback();
    });
    $("#subject1").blur(function(){
      suggestion();
    });
    $("#submit").click(function(event) {
      event.preventDefault();    
      if($('input[type=radio][name=gender]:checked').length == 0)
      {
          let text = 'Please select any one';
          $('#genderErr').text(text); 
      }
       
  });
    $("#submitbtn").click(function () {
      event.preventDefault();
      fname();
      name1();
      address();
      city();
      state();
      zipcode();
      phone_num();
      email_val();
      feedback();
      suggestion();

      if ($('input[type=radio][name=Gender]:checked').length == 0) {
        let text = 'Please choose your gender';
        $('#demo10').text(text); 
      }
    });
    });

    
    
