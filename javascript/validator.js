function validator (options) {

    function getParent (element,seclertor) {
        while (element.parentElement) {
            if (element.parentElement.matches(seclertor)) {

                return element.parentElement;
            }
            element=element.parentElement;
        }


    }




    const selectorRules = {}


    function validate(inputElement,rule){



        var messageError;
        const errorElement =getParent( inputElement,options.formGroupSelector).querySelector(options.errorSelector)  
    

        // lay ra cac rule cuar seclertor
            const rules = selectorRules[rule.selector]
        //lap qua tung rules va kiem tra
        //neu co loi thi dung viec kiem tra
            for (let i = 0; i < rules.length; i++){
                messageError = rules[i](inputElement.value)
                if(messageError) break;
            }

          if (messageError){
              errorElement.innerHTML = messageError

              inputElement.parentElement.classList.add('invalid')
          }
          else{
              errorElement.innerHTML ='';
              inputElement.parentElement.classList.remove('invalid')

          }
          return !messageError 
    }

    function validateOnIput (inputElement){
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector)  
        errorElement.innerHTML ='';
        inputElement.parentElement.classList.remove('invalid')
    }

  const formElement = document.querySelector(options.form)

    if (formElement){
        // bo hanh dong mac dinh cua nut submit 
        // khi an vao btn submit kiem tra het tat ca cac rule
        formElement.onsubmit= function(e){
            e.preventDefault()

            var isFormValid = true;

            // lặp qua từng rule va validate
            options.rules.forEach(rule => {
                const inputElement = formElement.querySelector(rule.selector)
                const isvalid =  validate(inputElement, rule)

                if(!isvalid){
                    isFormValid = false;
                }

        });
        if(isFormValid){

            // truog hop submit voi js
            if(typeof options.onSubmit=== 'function'){

                const EnableInputs = formElement.querySelectorAll('[name]:not([dissabled])') 

                const formValue = Array.from(EnableInputs).reduce(function(value,input){
                    value[input.name] = input.value
                        return  value;

                },{})
                

                options.onSubmit(formValue)
            }
            // truong hop submit vơi form mac dinh 
            else{
                 formElement.submit();
            }
        }

        }


            //lang nge su kien va check cac rule 
        options.rules.forEach(rule => {
            // luu lai cac rules cho moi input 
            if(Array.isArray( selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }


           const inputElement = formElement.querySelector(rule.selector)
            if(inputElement){
                inputElement.onblur = () =>{
                

                    validate(inputElement, rule)
                }
                inputElement.oninput = () =>{
                  
                    validateOnIput(inputElement)
               
                }

            }
        });



    }

}


validator.isRequired = function (selector,message){

return {
    selector: selector,
    test: function (value) {
        
        return value.trim() ? undefined : message ||'Vui lòng nhập trường này!'

    }
}
}

validator.isPassword = function (selector,length,message){

    
return {
    selector: selector,
    test: function (value) {
        
      return value.length >=length ? undefined :message || `Độ dài tối thiểu của mật khẩu là ${length} kí tự!`

    }
}
}

validator.isConfirmPassword = function (selector,getConfirmValue,message){

    
    return {
        selector: selector,
        test: function (value) {
            
          return value===getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
    
        }
    }
    }