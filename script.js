$(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      easing:'ease',
      speed:2000,
      autoplaySpeed:5000,
      // variableWidth: true,
      appendArrows:$('.why_right'),
     
    });
  });
 /*            --------------------------                */

$('.slider_prod').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  swipe: false,
 
});

$('.slider-dots .slider-dots__item').click(function() {
  var $this = $(this);
  $('.slider_prod').slick('slickGoTo', $this.data('index'))
});

const dotsItem = document.querySelectorAll('.slider-dots__item');

function removeActive(){
      dotsItem.forEach(item=>{
        item.classList.remove('activ');
      })
}

dotsItem.forEach(item =>{
    item.addEventListener('click', function(e){
      
    removeActive();
    item.classList.add('activ');
    
    

  })
})
dotsItem.forEach(item =>{
  item.addEventListener('touch', function(e){
    
  removeActive();
  item.classList.add('activ');
  
  

})
})

/*qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq*/
// const quizParent = document.querySelector('.var_field'),
//       quizItem = document.querySelectorAll('#var');


 
//      quizItem.forEach(item=>{
//       const res =item.getElementsById('var').value
         
//         console.log(res)
      
//      })

// 'use strict'
const submit = document.querySelector('#form').addEventListener('submit', function(e){
    

  e.preventDefault();
  
  const thanks= document.querySelector('.thanks');
  
  //  let email= this.email.value;;
  //  let name =  this.name.value;
  
  
  
  
  let message = '<b>Обращение от клиента</b>\n';
    
     message+=`<b>вид работ:</b>${attributeValues1}\n`;
     message+=`<b>замерщик:</b>${attributeValues2}\n`;
     message+=`<b>расстояние:</b>${attributeValues3}\n`;
     message+=`<b>доставка:</b>${attributeValues4}\n`;
     message+=`<b>монтаж:</b>${attributeValues5}\n`;
     message+=`<b>куда отправить расчет:</b>${attributeValues6}\n`;
       message+=`<b>имя:</b>${attributeValues7}\n`;
      message+=`<b>телефон:</b>${attributeValues8}\n`;
      message+=`<b>email:</b>${attributeValues9}\n`;
    
  
  
     console.log(message);
     let TOKEN='5791633342:AAEOD_eKDntfzgcOco4R0WbOB9jN-SMXGyY';
     let URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
     let CHAT_Id= '-1001830250177';
    
  // const errorM= document.querySelector('#error');
  // const spiner = document.querySelector('#load');
  // spiner.style.display = 'block';
  
  
  axios.post(URI_API, {
      chat_id:CHAT_Id,
      parse_mode:'html',
      text:message
      
  })
  .then((res)=>{
    // this.name.value='';
    // this.email.value='';
    // const alert = document.querySelector('#message');
    thanks.style.display="flex";
    quiz_field.style.display="none";
    
    // setTimeout(()=>{alert.style.display = 'none'},'5000')
  
  
  })
  // .catch((error)=>{
  //   errorM.style.display="block";
  //   errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`
  //   spiner.style.display = 'none';
    
  // })
  })
  
  
  // const mail = document.querySelector('#exampleInputEmail1').addEventListener('input', function(e){
    
  //     let eMail = this.value;
  //     if(!eMail.includes("@")){console.log('нет')}
  //     console.log(eMail);
  //  });
  
  
   /*================================================================================*/
  
  
  
   const nextQuestion = document.querySelector('.btn_quiz'),
    prevQuestion = document.querySelector('.btn_quiz_prev'),
    
   quiz_field = document.querySelector('.quiz_field'),
   done=document.querySelector('.done'),
   
   one = document.querySelector('one');
   
   
   
   const inputs = document.querySelectorAll('.radio_btn input');
   const inputsS = document.querySelectorAll('.radio input');
     let attributeValues1 = [],
         attributeValues2 = [],
         attributeValues3 = [],
         attributeValues4 = [],
         attributeValues5 = [],
         attributeValues6 = [],
         attributeValues7 = [],
         attributeValues8 = [],
         attributeValues9 = [];
   
       inputs.forEach(element => {
       $(element).click(() => pushInputsDataToArray())
     })
     inputsS.forEach(element => {
      element.addEventListener('input',function(e){
        switch(element.name){
          case"name":
          attributeValues7 = this.value;
          break;
          case"phone":
          attributeValues8 = this.value;
          break;
          case"email":
          attributeValues9= this.value;
          break;
        }
        
       
      })
    })
    
   
     function pushInputsDataToArray() {
       
  
       
      
       inputs.forEach(element => {
         let input = $(element);
         
   
         if (input.is(":checked")) {
          switch(input.val())
          {
              case'Фасад':
              attributeValues1.push(input.val());
              break;
              case'Подшива':
              attributeValues1.push(input.val());
              break;
              case'Забор':
              attributeValues1.push(input.val());
              break;
              case'Стены и потолки':
              attributeValues1.push(input.val());
              break;
              case'Другое':
              attributeValues1.push(input.val());
              break;
              case'нужен замерщик':
              attributeValues2.push(input.val());
              break;
              case'без замерщика':
              attributeValues2.push(input.val());
              break;
              case'до 50 км.':
              attributeValues3.push(input.val());
              break;
              case'от 50 км. до 100 км.':
              attributeValues3.push(input.val());
              break;
              case'от 100 км. до 200 км.':
              attributeValues3.push(input.val());
              break;
              case'свыше 200 км.':
              attributeValues3.push(input.val());
              break;
              case'доставлять':
              attributeValues4.push(input.val());
              break;
              case'без доставки':
              attributeValues4.push(input.val());
              break;
              case'нужен монтаж':
              attributeValues5.push(input.val());
              break;
              case'без монтажа':
              attributeValues5.push(input.val());
              break;
              case'telegram':
              attributeValues6.push(input.val());
              break;
              case'viber':
              attributeValues6.push(input.val());
              break;
              case'whatsapp':
              attributeValues6.push(input.val());
              break;
              case'email':
              attributeValues6.push(input.val());
              break;
          }
         }
       })
   
           var _token   = $("input[name=_token]").val();
           var product = $('#productId').val();
     }
   
     /****************************************************************************************/
     const imgQuiz = document.querySelectorAll('.img_quiz'),
           imgForm = document.querySelectorAll('.form_img')
     
  
           imgForm.forEach(item=>{
      
            item.addEventListener('click', function(e){
             const target = e.currentTarget;
             
             if(target && target.classList.contains('form_img')){
               const done = document.createElement('div');
              
             
              item.classList.add('active_img_quiz');
     
     
             
              item.append(done);
             }
     
             
              
            })
          
          
        })
  
  
     imgQuiz.forEach(item=>{
      
         item.addEventListener('click', function(e){
          const target = e.currentTarget;
          
          if(target && target.classList.contains('img_quiz')){
            const done = document.createElement('div');
           
           done.classList.add('done');
           item.classList.add('active_img_quiz');
  
  
          
           item.append(done);
          }
  
          
           
         })
       
       
     })
  
     const twoQ = document.querySelectorAll('.check_one_quiz');
     
     twoQ.forEach(item=>{
      
      item.addEventListener('click', function(e){
        const target = e.currentTarget;
        
        if(target && target.classList.contains('check_one_quiz')){
          const doneT = document.createElement('div');
           
           doneT.classList.add('doneT');
           item.classList.add('active_two_quiz');
  
  
          
           item.append(doneT);
        }
      
           
         })
       
       
     })
   
   
   
   
   
     let card = 0;
     nextQuestion.addEventListener(('click'), ()=>{
       
       
       switch (card) {
         case 0:
           quiz_field.style.transform = "translateX(-100%)";
           card = 1;
           console.log(card)
           break;
         case 1:
           quiz_field.style.transform = "translateX(-200%)";
           card = 2;
           console.log(card)
  
           break;
         case 2:
           quiz_field.style.transform = "translateX(-300%)";
           card = 3;
           console.log(card)
           break;
         case 3:
           quiz_field.style.transform = "translateX(-400%)";
           card = 4;
           break;
        case 4:
          quiz_field.style.transform = "translateX(-500%)";
          card = 5;
          nextQuestion.style.display="none";
          break;
         
       }
   
     })
     prevQuestion.addEventListener(('click'), ()=>{
       
       
      switch (card) {
        case 1:
          quiz_field.style.transform = "translateX(0)";
          card = 0;
          console.log(card)
          break;
        case 2:
          quiz_field.style.transform = "translateX(-100%)";
          card = 1;
          break;
        case 3:
          quiz_field.style.transform = "translateX(-200%)";
          card = 2;
          break;
        case 4:
          quiz_field.style.transform = "translateX(-300%)";
          card = 3;
          break;
        case 5:
          quiz_field.style.transform = "translateX(-400%)";
          card = 4;
          nextQuestion.style.display="flex";
          break;
        
      }
  
    })
  
  
  
  
  
  
  /*pop up modal*/
  const popupFade = document.querySelector('.popup-fade'),
        popupClose = document.querySelector('#popup-close'),
        modalSub = document.querySelectorAll('#btn_modal'),
        popupOpen = document.querySelectorAll('#btn_stat'),
        modalInput = document.querySelectorAll('#modal_input');
        
        const submitS = document.querySelector('#formS').addEventListener('submit', function(e){
    

          e.preventDefault();
          
          
          let phone = this.phone.value,
              name =  this.name.value;
          
          
          let message = '<b>Сообщение из телеграмм</b>\n';
             message+=`<b>имя клиента:</b>${name}\n`;
             message+=`<b>телефон клиента:</b>${phone}`;
          
             console.log(message);
             let TOKEN='5791633342:AAEOD_eKDntfzgcOco4R0WbOB9jN-SMXGyY';
             let URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
             let CHAT_Id= '-1001830250177';
            
          // const errorM= document.querySelector('#error');
          // const spiner = document.querySelector('#load');
          // spiner.style.display = 'block';
          
          
          axios.post(URI_API, {
              chat_id:CHAT_Id,
              parse_mode:'html',
              text:message
              
          })
        })
        popupOpen.forEach(item=>{
          item.addEventListener('click', function (e){
            popupFade.style.display= "block";
          })
        })


        popupClose.addEventListener('click', function(e){

          e.preventDefault();
          popupFade.style.display = "none";


        })


     

  
  
  
  
  
   /*================================================================================*/
  
  
  
  
  
  /*MMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAPPPPPPPPPPPPPPPPP*/
