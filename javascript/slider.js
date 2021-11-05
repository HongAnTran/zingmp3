
const content =$('.content')
const profile = $('.profile-page')
const zingcharPage = $('.zingchar-page')
const radioPage = $('.radio-page')
const followPage = $('.follow-page')
const logoMp3 = $('.navbar-logo')
const navbtnprofile = $('.js-profile-btn')
const navBtnRadio = $('.js-radio-btn')
const navbtnhome = $('.js-home-btn')
const navbtnFollow = $('.js-follow-btn')


const avtHeader = $('.header-avt')
const navItem = $$('.profile-item')
const navbarFollow = $$('.follow-item')
const contentProfiles = $$('.profile-common')
const slidersprofile = $$('.profile-slider_item')
const prevSliderProfile = $('.profile-song_btn-prev')
const nextSliderProfile = $('.profile-song_btn-next')
const itemplaylistprofile = $$('.js-playlist_profile')
const silderContainerPlaylist = $('.slider-container-playlist')
const navBtnZing = $('.js-zingchar-btn')

const radiosilder = $('.radio-slider')
const radiosilder2 = $('.radio-slider-2')



const radioprev = $('.radio-prev')
const radionext = $('.radio-next')

const radioprev2 = $('.radio-prev-2')
const radionext2 = $('.radio-next-2')


const navbarItems = $$('.navbar-items')



    navbarItems.forEach(function(navItem,index){

        navItem.onclick= function(){
         
            $('.navbar-items.active').classList.remove('active')
            this.classList.add('active')
            
           }
       
       })





 function backhome(){
    content.style.display = 'block'
 
    main.style.scrollBehavior = 'auto'
    main.scrollTo(0,0)
    profile.style.display = 'none'
    zingcharPage.style.display = 'none'
    radioPage.style.display = 'none'
    followPage.style.display = 'none'


    navbtnFollow.classList.remove('active')
    navbtnhome.classList.add('active')
    navbtnprofile.classList.remove('active')
    navBtnZing.classList.remove('active')
    navBtnRadio.classList.remove('active')


}
function goprofile(){
    main.style.scrollBehavior = 'auto'
    main.scrollTo(0,0)
    content.style.display = 'none'
    profile.style.display = 'block'
    zingcharPage.style.display = 'none'
    radioPage.style.display = 'none'
    followPage.style.display = 'none'
    navbtnFollow.classList.remove('active')
  
    navbtnhome.classList.remove('active')
    navbtnprofile.classList.add('active')
    navBtnZing.classList.remove('active')
    navBtnRadio.classList.remove('active')

}
function gozingchar(){
    main.style.scrollBehavior = 'auto'
    main.scrollTo(0,0)
    content.style.display = 'none'
    profile.style.display = 'none'
    zingcharPage.style.display = 'block'
    radioPage.style.display = 'none'
    followPage.style.display = 'none'
    navbtnFollow.classList.remove('active')
    navbtnhome.classList.remove('active')
    navbtnprofile.classList.remove('active')
    navBtnZing.classList.add('active')
    navBtnRadio.classList.remove('active')

}
function goradio(){
    main.style.scrollBehavior = 'auto'
    main.scrollTo(0,0)
    content.style.display = 'none'
    profile.style.display = 'none'
    zingcharPage.style.display = 'none'
    radioPage.style.display = 'block'


    followPage.style.display = 'none'
    navbtnFollow.classList.remove('active')
  
    navbtnhome.classList.remove('active')
    navbtnprofile.classList.remove('active')
    navBtnZing.classList.remove('active')
    navBtnRadio.classList.add('active')

}
function gofollow(){
    main.style.scrollBehavior = 'auto'
    main.scrollTo(0,0)
    content.style.display = 'none'
    profile.style.display = 'none'
    zingcharPage.style.display = 'none'
    radioPage.style.display = 'none'
    followPage.style.display = 'block'
    navbtnFollow.classList.add('active')


  
    navbtnhome.classList.remove('active')
    navbtnprofile.classList.remove('active')
    navBtnZing.classList.remove('active')
    navBtnRadio.classList.remove('active')

}



logoMp3.addEventListener('click',backhome)
navbtnhome.addEventListener('click',backhome)



navbtnprofile.addEventListener('click',goprofile)
avtHeader.addEventListener('click',goprofile)

navBtnZing.addEventListener('click',gozingchar)
navBtnRadio.addEventListener('click',goradio)
navbtnFollow.addEventListener('click',gofollow)







navItem.forEach(function(tab,index){

       const contentProfile = contentProfiles[index]
    tab.onclick= function(){
        $('.profile-common.active').classList.remove('active')
        contentProfile.classList.add('active')


        $('.profile-item.isactive').classList.remove('isactive')
        this.classList.add('isactive')

    }
    

})

const sectionFollowS = $$('.follow-section')
navbarFollow.forEach(function(tab,index){

    const sectionFollow = sectionFollowS[index]
 tab.onclick= function(){
     $('.follow-section.ison').classList.remove('ison')
     sectionFollow.classList.add('ison')


     $('.follow-item.isactive').classList.remove('isactive')
     this.classList.add('isactive')

 }
 

})



var firstIndexSlider = 1;
var secondIndexSlider = 2;


    function sliderprofile(){
        if(firstIndexSlider>0){
            slidersprofile[firstIndexSlider-1].classList.add('third')
            slidersprofile[firstIndexSlider-1].classList.remove('first')
        }else{
            slidersprofile[slidersprofile.length-1].classList.remove('first')
            slidersprofile[slidersprofile.length-1].classList.add('third')

        }
 
        slidersprofile[firstIndexSlider].classList.add('first')
        if(secondIndexSlider>0){

            slidersprofile[secondIndexSlider-1].classList.remove('second')
        }else{
            slidersprofile[slidersprofile.length-1].classList.remove('second')

        }



        slidersprofile[secondIndexSlider].classList.add('second')
        slidersprofile[secondIndexSlider].classList.remove('third')

    firstIndexSlider++
    secondIndexSlider++

    if(firstIndexSlider===slidersprofile.length){
        firstIndexSlider =0
    }
    if(secondIndexSlider===slidersprofile.length){
            secondIndexSlider=0

     }


}

setInterval(function(){
    sliderprofile()

},3000)





var isnext = true ;
var isprev = false ;
var index=0;
function next (){
    index++
    if(isnext){
        silderContainerPlaylist.style.transform = `translateX(-${20*index}%)`;
            }else{
                index=itemplaylistprofile.length-5
            }
       
           if(index===itemplaylistprofile.length-5){
             isnext = false;
              nextSliderProfile.classList.add('noclick')
                
            }
          
            isprev=true;
          
            

            
            
        }
     
function prev (){
    index--
    if(index<=0){
        index=0;
        
        prevSliderProfile.classList.add('noclick')

       
    }
    if(isprev){
        silderContainerPlaylist.style.transform = `translateX(-${20*index}%)`;
            }
          
        
          

            isnext=true
            nextSliderProfile.classList.remove('noclick')

}

 nextSliderProfile.onclick= function(){
        prevSliderProfile.classList.remove('noclick')
        next()
       
    }
    prevSliderProfile.onclick= function(){
        prev()
       
    }


    function sliderfullpercent(){
        radioprev.classList.remove('backgroundaphal')
        radionext.classList.add('backgroundaphal')
    
       radiosilder.style.transform = 'translateX(-100%)'

    }
    function sliderfullpercentprev(){
        radioprev.classList.add('backgroundaphal')
        radionext.classList.remove('backgroundaphal')

        radiosilder.style.transform = 'translateX(0%)'

    }

 
    
 radionext.addEventListener('click',sliderfullpercent)   
 radioprev.addEventListener('click',sliderfullpercentprev)  
 
 
 radionext2.addEventListener('click',sliderfullpercent2)   
 radioprev2.addEventListener('click',sliderfullpercentprev2)  
 function sliderfullpercent2(){
    radioprev2.classList.remove('backgroundaphal')
    radionext2.classList.add('backgroundaphal')

    radiosilder2.style.transform = 'translateX(-100%)'

 }
 function sliderfullpercentprev2(){
    radioprev2.classList.add('backgroundaphal')
    radionext2.classList.remove('backgroundaphal')

     radiosilder2.style.transform = 'translateX(0%)'

 }


const radioCalendar = $('.radio-calendar-right')


const prevCalendar = $('.radio-calendar-prev')
const nextCalendar = $('.radio-calendar-next')
 const withsliderCalendar = 1108.4 ;
var indexCalendar = 0; 

if(indexCalendar===0){
    prevCalendar.style.display = 'none'
}
nextCalendar.onclick= function(){
    indexCalendar++
    radioCalendar.style.transform = `translateX(-${withsliderCalendar * indexCalendar}px)`
    prevCalendar.style.display = 'flex'
    if(indexCalendar===8){
        nextCalendar.style.display = 'none'
    }else{
        nextCalendar.style.display = 'flex'

    }
}

prevCalendar.onclick= function(){
    indexCalendar--
    radioCalendar.style.transform = `translateX(-${withsliderCalendar * indexCalendar}px)`
    nextCalendar.style.display = 'flex'
    if(indexCalendar===0){
        prevCalendar.style.display = 'none'
    }else{
        prevCalendar.style.display = 'flex'

    }
}


const radioSliderCommon = $$('.js-commom-slider-radio')
const prevRadio = $$('.radio-row-right-prev')
const nextRadio = $$('.radio-row-right-right')
const radioItem = $$('.radio-content-item')
const lengthItem = radioItem.length/2 // bao nhieu row thi chia bay nhieu
const IntLength = Math.floor(lengthItem/5) 
const modLength = lengthItem%5

var indexcommon = 0;

var checkNext = true
var checkPrev = true


    function SlidertoitemNext(index) {
        checkPrev =true
        if(checkNext) {
            indexcommon++

        }
        if(lengthItem<=10){
            nextRadio[index].classList.add('disabled')
    
            }

         if(indexcommon<IntLength){
            radioSliderCommon[index].style.transform = `translateX(-${indexcommon * 100}%)` 
          // length = %5 = 0
            if( indexcommon>=2&&indexcommon === IntLength-1){
            nextRadio[index].classList.add('disabled')
                 
            }
        }else if(indexcommon>=IntLength){
            radioSliderCommon[index].style.transform = `translateX(-${indexcommon * 100 +(modLength *20) - 100}%)` 
            nextRadio[index].classList.add('disabled')
            checkNext = false
        }
        // remove class disabled for prev
        prevRadio[index].classList.remove('disabled')

      
        
        }

        function SlidertoitemPrev(index) {
            checkNext =true
                if(checkPrev){
                    indexcommon--
                }
    
         
            if(lengthItem <=10){
                radioSliderCommon[index].style.transform = `translateX(0)` 
                prevRadio[index].classList.add('disabled')
            
            }
            else if(indexcommon<IntLength){
                radioSliderCommon[index].style.transform = `translateX(-${indexcommon * 100}%)` 
                
            }
            
            if(indexcommon===0){
            
                 checkPrev=false;

                prevRadio[index].classList.add('disabled')

            }
            
            nextRadio[index].classList.remove('disabled')
            }


    
nextRadio.forEach(function(next,index){
    next.onclick=function(){
       
        SlidertoitemNext(index)
    }

})

prevRadio.forEach(function(prev,index){
    prev.onclick=function(){

        SlidertoitemPrev(index) 
    }

})


const prevSingerS = $$('.singer-prev')
const nextSingerS = $$('.singer-next')

const SliderSingle = $$('.js-singer')

const singerItem = $$('.singer-img')

var indexSinger = 0;

var checkNextSinger = true
var checkPrevSinger = true

const ItemSingleLength = singerItem.length/2
const IntLengthSinger = Math.floor(ItemSingleLength/5) 
const modLengthSinger = ItemSingleLength%5

nextSingerS.forEach(function(nextSinger , index){

    nextSinger.onclick= function(){
        SliderSingerNext(index)
    }

})

prevSingerS.forEach(function(prevSinger , index){

    prevSinger.onclick= function(){
        SliderSingerprev(index)
    }

})

function SliderSingerNext(index) {
    checkPrevSinger =true
    if(checkNextSinger) {
        indexSinger++

    }

        if(ItemSingleLength<=10){
        nextSingerS[index].classList.add('disabled')

        }
     if(indexSinger<IntLengthSinger){
        SliderSingle[index].style.transform = `translateX(-${indexSinger * 100}%)` 
      // length = %5 = 0
     
        if( indexSinger>=2&&indexSinger === IntLengthSinger-1){
        nextSingerS[index].classList.add('disabled')
            //  checkNextSinger = false
        }
    }else if(indexSinger>=IntLengthSinger){
       SliderSingle[index].style.transform = `translateX(-${indexSinger * 100 +(modLengthSinger *20) - 100}%)` 
        nextSingerS[index].classList.add('disabled')
        checkNextSinger = false
    }
    // remove class disabled for prev
    prevSingerS[index].classList.remove('disabled')

  
    
    }

    function SliderSingerprev(index) {
        checkNextSinger =true
            if(checkPrevSinger){
                indexSinger--
            }

            if(IntLengthSinger)
        if(ItemSingleLength <=10){
            SliderSingle[index].style.transform = `translateX(0)` 
            prevSingerS[index].classList.add('disabled')
        
        }
        else if(indexSinger<IntLengthSinger){
            SliderSingle[index].style.transform = `translateX(-${indexSinger * 100}%)` 
            
        }
        
        if(indexSinger===0){
        
             checkPrevSinger=false;

            prevSingerS[index].classList.add('disabled')

        }
        
        nextSingerS[index].classList.remove('disabled')
        }



const btncares = $$('.feed-card-cares')   
const btncared = $$('.feed-card-cared')   


btncares.forEach(function(care,index){

care.onclick= function(){
    this.classList.add('hidden')
    btncared[index].classList.remove('hidden')

}


})

btncared.forEach(function(cared,index){

    cared.onclick= function(){
        this.classList.add('hidden')
        btncares[index].classList.remove('hidden')
    
    }
    
    
    })


 const date = new Date()
  
  
const feedcarddate = $$('.feed-card-date')

const TimeCard =  function dateCurrent (){
    const day = date.getDate()
    const month = date.getMonth()+1
    const H = date.getHours()
    const M = date.getMinutes()
   
    return `${day} tháng ${month} lúc ${H}:${M <10 ? `0${M}` : M} `
    
 }
for (const carddate of feedcarddate) {
    carddate.innerText = TimeCard()
    
}


const feedcardHeart = $$('.feed-card_heart')
const heartIcon = $$('.fa-heart-card')
const NumberHeart = $$('.feed-card-number-heart')




NumberHeart.forEach(function (Numbers) {
    // ramdom heart
    var randomNumber  = Math.floor(Math.random()*1000)
    Numbers.innerText = randomNumber


    feedcardHeart.forEach(function (heart,index) {

        heart.onclick= function(){
            // toggle color heart
            heartIcon[index].classList.toggle('isavtive')
            // plus 1 if active
            if(heartIcon[index].classList.contains('isavtive')){
                var N =  parseInt(NumberHeart[index].innerText) +1
           
                NumberHeart[index].innerText = N
            }else{
              
           var NL =  parseInt(NumberHeart[index].innerText) -1
                NumberHeart[index].innerText = NL
            }
         
            
        }
        })
})

const btnCM = $$('.coming-btn_text')

btnCM.forEach(function(btn){

    btn.onclick= function(){
        alert('HAPPY BIRTHDAY')
    }

})


function creatStorages(key){

const store = JSON.parse(localStorage.getItem(key)) ?? {}

const save = ()=>{
localStorage.setItem(key, JSON.stringify(store))

}

const storages = {
    get2(key){
        return store[key]

    },
    set(key, value){
        store[key] = value
        save()
    },
    remove(key){
        delete store[key]
        save()
    }


}

return storages


}


const profileSettings = creatStorages('music')



