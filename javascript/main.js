const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'AN-PLAYER'
const PLAYER_STORAGE_KEY_MODAL = 'AN-PLAYER2'

const login = $('.js-login');
const loginBTN = $('.js-login-btn');
const closeBTN = $('.close-icon');
const overlay = $('.js-overlay');
const overlay2 = $('.js-overlay-2');
const registerBTN = $('.login-register');
const register = $('.js-register');
const closeRegister = $('.close-register');
const loginText = $('.login-login');

//topic
const scrollTop = $('.scrolltop');
const topicheader = $('.topic-icon')
const modaltopic = $('.modal-topic_container')
const closeTopic = $('.modal-topic_close')
const overlaytopic = $('.overlay')
const btnSwapTopic = $$('.modal-toppic_use-btn')
const header = $('.header');
const body = $('body');
const playmusic = $('.playmusic');
const headerInput = $('.header-input')
const headerList = $('.header-list')
const headerSearch = $('.header-search')
const backgroundHeader = $('.background-scroll')
const modaltopicMain = $('.modal-topic_main')
const main = $('.main')
const checktopic = $$('.modal-check_item')
const titleList = $('.listplay-title')
const navlogin = $('.navbar-login')
const settime = $('.listplay-settime')




// list play 



const menuPlayList =$('.playmusic-icon_menu');
const PlayList =$('.js-listplay');
const titleSong = $('.js-title-current');
const singerSong = $('.playmusic-content_singer-link');
const audio = $('#audio');
const imgCurrentsong = $('.img-current-song');
const btnPlay = $('.play-toggle');
const progress = $('.time-duration_task');
const progressBar = $('.slider');
const nextBtn = $('.playmusic-control_next');
const prevBtn = $('.playmusic-control_prev');
const ramdomBtn = $('.playmusic-control_random');
const repeatBtn = $('.playmusic-control_repeat');
const listplay = $('.listplay-list');
const currentTime = $('.time-left');
const timeDuration = $('.time-right');
const taskVolume = $('.playmusic-icon_volume');
const volume = $('.volume');
const controlLeft = $('.playmusic-content');
const note = $$('.note')
const volumeIconMute = $('.icon-mute');
const volumeIconNoMute = $('.icon-nomute');

// slider 
const prevSlider = $('.sileder-prev')
const nextSlider = $('.sileder-next')
const slider = $$('.js-silder-img')
const silderContainer = $('.sileder')

// silder comming
const nextComing = $('.coming-next-icon')      
const prevComing = $('.coming-prev-icon')      
const comingItems = $$('.js-coming_item')

const profilePlaylist = $('.profile-playlist_list')
const playListMainProfile = $('.profile-playlist')
const playAll = $$('.profile-song_playall')
const theSongListPlay = $('.the_song-listplay')

// thay doi style cua bien
var rootStyle = document.documentElement.style;

const abc =$$('.modal-check_item')


const heartPlay = $('.playmusic-content_heart')

heartPlay.onclick = function(){
    heartPlay.classList.toggle('toggleHeart')
}
// lang nghe su kien click cua nut dang nhap va mo form login
loginBTN.addEventListener('click',function(){

    login.classList.add('open');

})
// dong form login

closeBTN.addEventListener('click',function(){

    login.classList.remove('open');

})

// dong form login

overlay.addEventListener('click',function(){

    login.classList.remove('open');

})



// mo form dang ki va dong login
registerBTN.addEventListener('click',function(){

    register.classList.add('open');
    login.classList.remove('open');



})

// dong form dang ki

overlay2.addEventListener('click',function(){

    register.classList.remove('open');

})
// dong form dang ki

closeRegister.addEventListener('click',function(){

    register.classList.remove('open');

})

// swap form
loginText.addEventListener('click',function(){

    register.classList.remove('open');
    login.classList.add('open');



})



function formatTime(sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);
  
    hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
  }


// list play 

menuPlayList.onclick = () =>{
    PlayList.classList.toggle('openlist')
    menuPlayList.classList.toggle('activeicon2')
}




nextComing.onclick = function(){
    isComing = true;
    this.classList.add('noclick')
    prevComing.classList.remove('noclick')
    comingItems.forEach(item => {
       item.classList.add('transport-items')
    });
    
  

}

    prevComing.onclick = function(){
        this.classList.add('noclick')
        nextComing.classList.remove('noclick')
    
        comingItems.forEach(item => {
            item.classList.remove('transport-items')
         });
    
    }



nextSlider.onclick =function(){

   const item1 =  document.querySelector('.js-silder-img-1')
   const item2 =document.querySelector('.js-silder-img-2')
   const item3 = document.querySelector('.js-silder-img-3')
   const item4 = document.querySelector('.js-silder-img-4')
   const item5 = document.querySelector('.js-silder-img-5')
   const item6 = document.querySelector('.js-silder-img-6')

   item1.classList.remove('js-silder-img-1')
   item1.classList.add('js-silder-img-6')

   //
   item2.classList.remove('js-silder-img-2')
   item2.classList.add('js-silder-img-1')


   item3.classList.remove('js-silder-img-3')
   item3.classList.add('js-silder-img-2')

          
   item4.classList.remove('js-silder-img-4')
   item4.classList.add('js-silder-img-3')


   item5.classList.remove('js-silder-img-5')
   item5.classList.add('js-silder-img-4')

   item6.classList.remove('js-silder-img-6')
   item6.classList.add('js-silder-img-5')
}

prevSlider.onclick =function(){

    const item1 =  document.querySelector('.js-silder-img-1')
    const item2 =document.querySelector('.js-silder-img-2')
    const item3 = document.querySelector('.js-silder-img-3')
    const item4 = document.querySelector('.js-silder-img-4')
    const item5 = document.querySelector('.js-silder-img-5')
    const item6 = document.querySelector('.js-silder-img-6')
 
    item1.classList.remove('js-silder-img-1')
    item1.classList.add('js-silder-img-2')
 
    //
    item2.classList.remove('js-silder-img-2')
    item2.classList.add('js-silder-img-3')
 
 
    item3.classList.remove('js-silder-img-3')
    item3.classList.add('js-silder-img-4')
 
           
    item4.classList.remove('js-silder-img-4')
    item4.classList.add('js-silder-img-5')
 
 
    item5.classList.remove('js-silder-img-5')
    item5.classList.add('js-silder-img-6')
 
    item6.classList.remove('js-silder-img-6')
    item6.classList.add('js-silder-img-1')
 }
 
// khi hover vao silder k chayj tu dong nua
 var isoffsilder = true;
silderContainer.onmouseover = function(){

    isoffsilder = false
  

}
silderContainer.onmouseout = function(){

    isoffsilder = true
 

}

// silder chay tu dong
setInterval(function() {
   if(isoffsilder){

       nextSlider.click();
   }else{

   }

},5000)




// ham add color cho header mac dinh
function scrollswapbackdefauild (){
    if (main.scrollTop > 50 ) {
        header.style.backgroundColor = 'var(--layout-bg)'
    
    } 
    else {
        header.style.backgroundColor = 'transparent'
    

      
        }
 }

 //function off on button scroll top
function scrolldefauild (){
    if (main.scrollTop > 200 ) {
        // header.classList.add('background-scroll')

        //hien nut an de keo len dau
        scrollTop.style.display = 'block'
} 
else {
        // header.classList.remove('background-scroll')

        //an nut an de keo len dau
        scrollTop.style.display = 'none'
}

 }

// ham swap  color
function scrollswapback (color){
    if (main.scrollTop > 50) {
        header.style.backgroundColor = `${color}`
     
    } 
    else {
        header.style.backgroundColor = 'transparent'
   
        }
 }


 scrollTop.onclick= function(){
    main.style.scrollBehavior = 'smooth'
   main.scrollTo(0,0)
 }

 // event page scroll defauild
 main.onscroll =function(){
             
    scrollswapbackdefauild();
             scrolldefauild();
    
 }

// mo modal topic
topicheader.onclick = function(){

modaltopic.classList.add('open')

}
// tat modal topic

closeTopic.onclick = function(){

    modaltopic.classList.remove('open')
    
    }
// tat modal topic
    
overlaytopic.onclick = function(){

modaltopic.classList.remove('open')
        
 }




// app music


const app = {
    currentIndex :0,
    isPlaying :false,
    isRamdom :false,
    isRepeat :false,
    isTimeupdate:true,
    config : JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    config2 : JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY_MODAL)) || [],
    songs : [
            {
                name: "Thằng Điên",
                singer: "Justatee",
                singer2: "Phương Ly",
                path: "music/songdien2.mp3",
                image: "storage/images/imgsongdien.jpg",
               timeaudio: "02:37"
              },
              {
                name: "forget me now",
                singer: "Fishy",
                singer2: "Trí Dũng",
                path: "music/song2.mp3",
                image:
                  "storage/images/song2.jpg",
                  timeaudio: "03:18"
              },
              {
                name: "Death Bed ",
                singer: "Powfu",
                singer2: "Beabadoobee",
                path:
                  "music/song3.mp3",
                image:  "storage/images/song3.jpg"
                ,
               timeaudio: "02:53"
              },
              {
                name: "Stay",
                singer: "The Kid LAROI",
                singer2: "Justin Bieber",
                path: "music/song4.mp3",
                image:
                "storage/images/song4.jpg"
                ,
               timeaudio: "02:21"
              },
              {
                name: "Cheating On you",
                singer: "Charlie Puth",
                path: "music/song5.mp3",
                image:
                  "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
                  ,
               timeaudio: "03:16"
              },
              {
                name: "I Like Me Better ",
                singer: "LauV",
                path:
                  "music/song6.mp3",
                image:
                  "storage/images/listmusic2.jpg",
                  timeaudio: "03:17"
              },
              {
                name: "Double Take",
                singer: "Dhruv",
                path: "music/song7.mp3",
                image:
                "storage/images/song5.jpg",
                timeaudio: "02:52"
              },
              {
                name: "ONLY",
                singer: "LeeHi",
                path: "music/song8.mp3",
                image:
                "storage/images/song6.jpg",
                timeaudio: "04:00"
              },  {
                name: "Chúng Ta Của Hiện Tại",
                singer: "Sơn Tùng-MTP",
               
                path: "music/song9.mp3",
                image:
                "storage/images/sontung.jpg",
                timeaudio: "05:01"
              },
              {
                name: "Paris In The Rain",
                singer: "LauV",
                path: "music/song10.mp3",
                image:
                "storage/images/song8.jpg",
                timeaudio: "03:24"
              },
              {
                name: "Play Date",
                singer: "Melanie Martinez",
                path: "music/song11.mp3",
                image:
                "storage/images/song7.jpg",
                timeaudio: "02:59"
              },
              {
                name: "i.f.l.y",
                singer: "Bazzi",
                path: "music/song14.mp3",
                image:
                "storage/images/song10.jpg",
                timeaudio: "02:45"
              },
              {
                name: "mascara",
                singer: " Chillies",
                path: "music/song15.mp3",
                image:
                "storage/images/song11.jpg",
                timeaudio: "04:55"
              },
      
            
    ],

    settingconfig: function (key,value){

        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config));
    },
    settingconfig2: function (index){
                
        this.config2[0] = index;
        localStorage.setItem(PLAYER_STORAGE_KEY_MODAL,JSON.stringify(this.config2));
    },
    defineProperties : function(){
        Object.defineProperty(this,'currentSong',{

            get : function(){
                return this.songs[this.currentIndex]

            }
        })
    },
    render : function(){
        const htmls = this.songs.map((song,index) =>{
            return ` 
            <li class="listplay-item ${index === this.currentIndex ? 'active':''}" data-index="${index}">    
            <div class="listplay-img">
                <img src="${song.image}">
                <div class="overlay-btn">

                    <i class="play-release fa fa-play ${index === this.currentIndex ? 'check':''}" aria-hidden="true"></i>
                </div>
            </div>
            <div class="listplay-item_text">
                <span class ="listplay-item_title" >${song.name} </span>
                <div class="listplay-item_singers">
                    <span class ="listplay-item_singer" >${song.singer}</span>
                    <span  >${song.singer2 ===undefined ?"":"," }</span>
                    
                    <span class ="listplay-item_singer" >${song.singer2 ===undefined ? "" : song.singer2}</span>
                  

                </div>
            </div>
            <div class="listplay-item_icon">
                <div class="listplay-item_icon-heart">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div class="listplay-item_icon-dot">
                    <i class=" fas fa-ellipsis-h"></i>

                </div>
            </div>
        </li>
            `
        })
            var html= htmls.join('');
             listplay.innerHTML = html;

            // render ra time bai hat 
        audio.onloadedmetadata = function() {
                     
                   const timesong =   formatTime( audio.duration)
                  
                   timeDuration.textContent = timesong;

        };

      
  
            
              
    },

    render2: function() {
      var htmls2 =  this.songs.map((song,index)=>{
          
                return `  <li class="profile-playlist_item  ${index === this.currentIndex ? 'isplay':''}"  data-index="${index}">
                <div class="profile-item_left">

                    <div class="profile-item_img">
                        <img src="${song.image}">
                        <div class="profile-item_img-icon ${index === this.currentIndex ? 'check2':''}">
                            <i class="fa fa-play " aria-hidden="true"></i>

                        </div>
                    </div>

                    <div class="profile-item_content">
                     <div class="profile-item_name">
                             <span  class="profile-item_name-song">${song.name} </span> 
                                <i class="fa fa-user-o " aria-hidden="true"></i>
                   </div>
                      <div class="profile-item_singer">
                        <span class="profile-item_singer_text">${song.singer}</span>
                        <span  >${song.singer2 ===undefined ?"":"," }</span>
                    
                        <span class ="listplay-item_singer" >${song.singer2 ===undefined ? "" : song.singer2}</span>
                       </div>
                     </div>
          </div>
                   

              <div class="profile-item_duration">${song.timeaudio}</div>
                
                <div class="profile-item_btns">
                    <div class="profile-item_btn">
                        <i class="fa fa-heart profile-btn-heart" aria-hidden="true"></i>
                    </div>
                    <div class="profile-item_btn">
                        <i class=" fas fa-ellipsis-h profile-btn-dot"></i>
                    </div>
                   
                </div>
            </li>
            `

        })
        var html2 = htmls2.join('');
        profilePlaylist.innerHTML = html2

        const hearts = [...$$('.profile-btn-heart')]

hearts.forEach(function(heart){

heart.onclick= function(){
    heart.classList.toggle('like')
}

})


    },
    render3: function() {
        var htmls3 =  this.songs.map((song,index)=>{
            
                  return `   <li class="profile-playlist_item ${index === this.currentIndex ? 'isplay':''} profile-playlist_item-r " data-index="${index}">
                            
                                <div class="profile-item_left">
                                        <div class="profile-item-check">
                                            <i class="music fa fa-music" aria-hidden="true"></i>
                                            <div class="playlist__song-check ">
                                                <input type="checkbox" name="" id="playlist__check-${index}" style="display:none">
                                                <label for="playlist__check-${index}"></label>
                                            </div>
                                        </div>
                                    <div class="profile-item_img">
                                        <img src="${song.image}">
                                        <div class="profile-item_img-icon  ${index === this.currentIndex ? 'check3':''}">
                                            <i class="fa fa-play " aria-hidden="true"></i>

                                        </div>
                                    </div>

                                    <div class="profile-item_content">
                                     <div class="profile-item_name">
                                             <span  class="profile-item_name-song">${song.name} </span> 
                                                <i class="fa fa-user-o" aria-hidden="true"></i>
                                   </div>
                                      <div class="profile-item_singer">
                                        <span class="profile-item_singer_text">${song.singer}</span>
                                        <span  >${song.singer2 ===undefined ?"":"," }</span>
                    
                                        <span class ="listplay-item_singer" >${song.singer2 ===undefined ? "" : song.singer2}</span>
                                       </div>
                                     </div>
                          </div>
                                   
                
                              <div class="profile-item_duration">${song.timeaudio}</div>
                                
                                <div class="profile-item_btns">
                                    <div class="profile-item_btn">
                                        <i class="fa fa-heart profile-btn-heart" aria-hidden="true"></i>
                                    </div>
                                    <div class="profile-item_btn">
                                        <i class=" fas fa-ellipsis-h profile-btn-dot"></i>
                                    </div>
                                   
                                </div>
                               
                            </li>

                    `
  
          })
          var html3 = htmls3.join('');
                   $('.profile-playlist_song').innerHTML = html3
  
          const hearts = [...$$('.profile-btn-heart')]
  // render trai tim 
  hearts.forEach(function(heart){
  
  heart.onclick= function(){
      heart.classList.toggle('like')
  }
  
})                              

const InputCheckBoxS = $$('input[type="checkbox"]')
const Item = $$('.profile-playlist_item-r')
InputCheckBoxS.forEach(function(input,index){
    
    input.onclick= function(){
          
           if(input.checked===true){
        Item[index].classList.add('ischecked')
                
    }else{
        Item[index].classList.remove('ischecked')
           
    }
           
        }
})
                             

                        

                      



  
      },

 
    handleEvent : function(){
        const _this = this;

              // quay dung cd 
              const cdThumbAnimate = imgCurrentsong.animate([
                { transform: 'rotate(360deg)'}

             ],{
                duration:10000, //10s
                iterations:Infinity, //
             } )

             cdThumbAnimate.pause()
        // xu khi khi click play
        btnPlay.onclick = function(){
            if(_this.isPlaying){       
                     audio.pause();   
            }
            else{
                    audio.play();
            }
          
        }
        // khi song dang play 
        audio.onplay = function(){
            _this.isPlaying = true;
            btnPlay.classList.add('playing');
            cdThumbAnimate.play()
            controlLeft.style.transform = ' translateX(30px)'
            for (const notes of note) {
                
                notes.classList.add('running')
            }

            const musicactive = $('.check');
            const musicactive2 = $('.check2 i');
            const musicactive3 = $('.check3 i');


            musicactive.classList.add('gif-icon')
            musicactive.classList.remove('fa-play')

            musicactive2.classList.add('gif-icon')
            musicactive2.classList.remove('fa-play')

            musicactive3.classList.add('gif-icon')
            musicactive3.classList.remove('fa-play')

        
 
        };
        // khi song bi pause 
        audio.onpause = function(){
            _this.isPlaying = false;
            btnPlay.classList.remove('playing');
            cdThumbAnimate.pause()
            for (const notes of note) {
                
                notes.classList.remove('running')
            }

            const musicactive = $('.check');
            const musicactive2 = $('.check2 i');
            const musicactive3 = $('.check3 i');
            // controlLeft.style.transform = 'translateX(0px)'


            musicactive.classList.remove('gif-icon')
            musicactive.classList.add('fa-play')


            musicactive2.classList.remove('gif-icon')
            musicactive2.classList.add('fa-play')

            musicactive3.classList.remove('gif-icon')
            musicactive3.classList.add('fa-play')
        };

        // tien do bai hat thay doi 
        progressBar.onmousedown = function(){
            _this.isTimeupdate = false;
         
            progressBar.oninput = function (e){
                const oneStimeSong =  audio.duration /100
                const percent =e.target.value;
                 const seekTime =   percent * oneStimeSong;
        
                const timechange  = formatTime(seekTime)  
                currentTime.textContent = timechange
               

                progress.style.background =`linear-gradient(to right, var(--progressbar-active-bg) ${percent}%, 
                var(--progressbar-active-bg) ${percent}%, var(--progressbar-player-bg) ${percent}%, var(--progressbar-player-bg) 100%)`
                
                progressBar.onmouseup = function(){ 
                    audio.currentTime = seekTime
                    _this.isTimeupdate = true
           
        
                }        

             }
            
        }

        
        // khi tien trinh bài hat thay doi 
        audio.ontimeupdate = function(){
            if(_this.isTimeupdate){
                if (audio.duration){
                    const  progresspercent = audio.currentTime/audio.duration*100;
    
                    progress.style.background =`linear-gradient(to right, var(--progressbar-active-bg) ${progresspercent}%, 
                    var(--progressbar-active-bg) ${progresspercent}%, var(--progressbar-player-bg) ${progresspercent}%, var(--progressbar-player-bg) 100%)`
                }
    
            }
         
            // lay chieu rong cua task play 
         if(_this.isTimeupdate) {
            if(audio.duration){
   
            const oneSwidthProgressBar =  100/audio.duration 

          const progressBarWidth =  audio.currentTime * oneSwidthProgressBar
              progressBar.value = progressBarWidth
             progressBar.step = oneSwidthProgressBar

          
         }
        }
         //currentTime
           const timeCr  = formatTime( audio.currentTime)  
           currentTime.textContent = timeCr

        } ;
    

          
             // next 
             nextBtn.onclick = function(){
                 if(_this.isRamdom){
                    _this.randomSong()
                 }else{

                     _this.nextSong();
                 }
                 audio.play();
                 _this.render();
                 _this.render2();
                 _this.render3();
                 _this.srollToActiveSong();

    
             };
            prevBtn.onclick = function(){

                if(_this.isRamdom){
                    _this.randomSong()
                 }else{

                  
                     _this.prevSong();
                 }
                audio.play();
                _this.render();
                 _this.render2();
                 _this.render3();
                _this.srollToActiveSong();
           
               
               
            };
            ramdomBtn.onclick = function(e){
                    _this.isRamdom = !_this.isRamdom ;
                    _this.settingconfig('isRamdom',_this.isRamdom)

                    ramdomBtn.classList.toggle('activeicon',_this.isRamdom);
            
            }

            // tu phat sang bai ke tiep ki het nhac
            audio.onended = function(){
                if(_this.isRepeat){
                    _this.currentIndex = _this.currentIndex;
                    audio.play();
                }else{

                    nextBtn.click();
                }

            }

            // repeat
            repeatBtn.onclick = function(){
                _this.isRepeat = !_this.isRepeat
                _this.settingconfig('isRepeat',_this.isRepeat)
                repeatBtn.classList.toggle('activeicon',_this.isRepeat)
            }
            // click chon nhac 
           
            PlayList.onclick = function(e){
                   
                const songNode = e.target.closest('.listplay-item:not(.active)')
                const songactiveNode = e.target.closest('.active')
                    if(songNode
                    &&
                     e.target.closest('.listplay-img')){ 
                       
                
                            _this.currentIndex = Number(songNode.dataset.index)
                            
                             _this.loadcurrentSong();
                                audio.play();
                                

                              _this.render(); 
                              _this.render2(); 
                              _this.render3();



                    }else if(songactiveNode &&
                        e.target.closest('.listplay-img')){

                        // check audio co dang pause hay khong
                    if(audio.paused){

                        audio.play();

                    }else{
                        audio.pause();

                    }

                        

                    }


            }

            
            //click chon nhac o profile
            playListMainProfile.onclick = function(e){
                   
                const songNode2 = e.target.closest('.profile-playlist_item:not(.isplay)')
                const songactiveNode2 = e.target.closest('.isplay')
                    if(songNode2 && e.target.closest('.profile-item_img-icon ')){ 
                       
                          
                            _this.currentIndex = Number(songNode2.dataset.index)
                           
                             _this.loadcurrentSong();
                                audio.play();
                                

                              _this.render(); 
                              _this.render2(); 
                              _this.render3(); 



                    }else if(songactiveNode2 &&  e.target.closest('.profile-item_img-icon')){

                        // check audio co dang pause hay khong
                    if(audio.paused){

                        audio.play();

                    }else{
                        audio.pause();

                    }

                        

                    }


            }
            theSongListPlay.onclick = function(e){
                   
                const songNode3 = e.target.closest('.profile-playlist_item:not(.isplay).profile-playlist_item-r')
                const songactiveNode3 = e.target.closest('.isplay')
                 
                    if(songNode3 && e.target.closest('.profile-item_img-icon')){ 
                       
                       
                            _this.currentIndex = Number(songNode3.dataset.index)
                       
                            
                             _this.loadcurrentSong();
                                audio.play();
                                

                              _this.render(); 
                              _this.render2(); 
                              _this.render3(); 



                    }else if(songactiveNode3 &&  e.target.closest('.profile-item_img-icon')){

                        // check audio co dang pause hay khong
                    if(audio.paused){

                        audio.play();

                    }else{
                        audio.pause();

                    }

                        

                    }


            }
        
                  

                // volume mac dinh
            var volumeCurrent =0.5;
            audio.volume = volume.value /100;
            // dieu chinh am luong
            volume.oninput = function(e){
                //set volume
                const volumeset = e.target.value
                 audio.volume = volumeset /100
                // set mau nen task volume
             
                if(audio.volume === 0){
                    volumeIconMute.style.display = 'block'
                    volumeIconNoMute.style.display = 'none'
                }else{
                    volumeIconMute.style.display = 'none'
                    volumeIconNoMute.style.display = 'block'
                }
                taskVolume.style.background =`linear-gradient(to right, var(--progressbar-active-bg) ${volumeset}%, var(--progressbar-active-bg) ${volumeset}%, var(--progressbar-player-bg)${volumeset}%, var(--progressbar-player-bg) 100%)`
                volumeCurrent = volumeset /100
                 
              
            }

                    //click vao no icon mute 
            volumeIconNoMute.onclick= function(){
           
                volumeIconMute.style.display = 'block'
                volumeIconNoMute.style.display = 'none'
                audio.volume = 0;
                taskVolume.style.background =`linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) 0%, var(--progressbar-player-bg)0%, var(--progressbar-player-bg) 100%)`
                volume.value =0;
              
            }
            //click vao icon mute 
            volumeIconMute.onclick= function(){
                  

                volumeIconMute.style.display = 'none'
                volumeIconNoMute.style.display = 'block'
                audio.volume = volume.value /100;
                taskVolume.style.background =`linear-gradient(to right, var(--progressbar-active-bg) ${volumeCurrent*100}%, var(--progressbar-active-bg)${volumeCurrent*100}%, var(--progressbar-player-bg)${volumeCurrent*100}%, var(--progressbar-player-bg) 100%)`
                audio.volume = volumeCurrent;
                volume.value =volumeCurrent*100;

               if(volumeCurrent===0){
                audio.volume = 1;
                volume.value = 100;
                taskVolume.style.background =`linear-gradient(to right, var(--progressbar-active-bg) ${volumeCurrent*100}%, var(--progressbar-active-bg)${100}%, var(--progressbar-player-bg)${100}%, var(--progressbar-player-bg) 100%)`
               }
            }


            //----------------------------------------------------------------

             // when click button topic num 1
 btnSwapTopic[0].onclick = function(){
        rootStyle.setProperty('--layout-bg', "#1e1e1e");
        rootStyle.setProperty('--link-text-hover', " #c662ef");
        rootStyle.setProperty('--purple-primary', "#7200a1");
    body.style.background ='#1e1e1e'
    playmusic.style.background ='#1e1e1e'

    headerList.style.backgroundColor ='#1e1e1e'
    modaltopicMain.style.backgroundColor ='#1e1e1e'
    PlayList.style.background ='#1e1e1e'


    navlogin.style.backgroundColor ='var(--purple-primary)'
    modaltopic.classList.remove('open')
    headerSearch.onfocus = function(){
     headerInput.style.backgroundColor ='#1e1e1e'
    
    }
    headerSearch.onblur = function(){
        headerInput.style.backgroundColor ='var( --alpha-bg)'
       }


       for(let i=1 ;i<6;i++){
          
 
        checktopic[i].classList.remove('check')
    
    }
       checktopic[0].classList.add('check')

       
       _this.settingconfig2(0)
     
}

//london
btnSwapTopic[1].onclick = function(){
    rootStyle.setProperty('--purple-primary', "#3460f5");
    rootStyle.setProperty('--link-text-hover', " #6e8ffb");
    rootStyle.setProperty('--layout-bg', " #061d50");

body.style.background =  ' url(storage/images/LondonBG.jpg) 0px 0px/1920px auto '
playmusic.style.background ='#061d50'
headerList.style.backgroundColor ='#192f60'
PlayList.style.background ='#061d50'
modaltopicMain.style.backgroundColor ='#192f60'


modaltopic.classList.remove('open')
headerSearch.onfocus = function(){
headerInput.style.backgroundColor ='#192f60'

}
headerSearch.onblur = function(){
   headerInput.style.backgroundColor ='var( --alpha-bg)'
  }


  for(let i=0 ;i<6;i++){
    if(i!=1){

        checktopic[i].classList.remove('check')
    }
    }
  checktopic[1].classList.add('check')
       

  _this.settingconfig2(1)
 

}
// defauild
btnSwapTopic[2].onclick = function(){
    rootStyle.setProperty('--layout-bg', "#170f23");
    rootStyle.setProperty('--link-text-hover', " #c662ef");
    rootStyle.setProperty('--purple-primary', "#7200a1");



body.style.background =  'var(--layout-bg)'
playmusic.style.background ='var(--layout-bg)'
headerList.style.backgroundColor ='var(--layout-bg)'


navlogin.style.backgroundColor ='var(--purple-primary)'
PlayList.style.background ='var(--layout-bg)'
modaltopicMain.style.backgroundColor ='#432275'
modaltopic.classList.remove('open')
headerSearch.onfocus = function(){
headerInput.style.backgroundColor ='var(--primary-bg)'

}
headerSearch.onblur = function(){
   headerInput.style.backgroundColor ='var( --alpha-bg)'
  }


  for(let i=0 ;i<6;i++){
    if(i!=2){

        checktopic[i].classList.remove('check')
    }
    }
  checktopic[2].classList.add('check')
       
  _this.settingconfig2(2)

  

}
// zing char
btnSwapTopic[3].onclick = function(){

    rootStyle.setProperty('--layout-bg', "#37075d");
    rootStyle.setProperty('--link-text-hover', " #fe63da");
    rootStyle.setProperty('--purple-primary', " #ed2b91");
// body
body.style.background=  ' url(storage/images/background1.svg) 0px 0px/1920px auto '
// task control music 
playmusic.style.background = 'url(storage/images/zma.png)'
//


navlogin.style.backgroundColor ='#ed2b91'

// list input
headerList.style.backgroundColor ='#6a39af'
// playlits music
PlayList.style.background ='#37075d'
//modal topic
modaltopicMain.style.backgroundColor ='#6a39af'
modaltopic.classList.remove('open')
// input header
headerSearch.onfocus = function(){
headerInput.style.backgroundColor ='#6a39af'

}
headerSearch.onblur = function(){
   headerInput.style.backgroundColor ='var( --alpha-bg)'
  }

  
  for(let i=0 ;i<6;i++){
      if(i!=3){
          
          checktopic[i].classList.remove('check')
        }
    }
    checktopic[3].classList.add('check')

    _this.settingconfig2(3)
}
// eiffel
btnSwapTopic[4].onclick = function(){

    rootStyle.setProperty('--layout-bg', "#1e1e1e");
    rootStyle.setProperty('--link-text-hover', " #c662ef");
    rootStyle.setProperty('--purple-primary', "#7200a1");
// body
body.style.background=  ' url(storage/images/eiffelBR.jpg) 0px 0px/1920px auto '
// task control music 
playmusic.style.background = '#282828'
//

//
navlogin.style.backgroundColor ='#282828'
// list input
headerList.style.backgroundColor ='#3d3d3d'
// playlits music
PlayList.style.background ='#282828'
//modal topic
modaltopicMain.style.backgroundColor ='#3d3d3d'
modaltopic.classList.remove('open')
// input header
headerSearch.onfocus = function(){
headerInput.style.backgroundColor ='#3d3d3d'

}
headerSearch.onblur = function(){
   headerInput.style.backgroundColor ='var( --alpha-bg)'
  }

  for(let i=0 ;i<6;i++){
    if(i!=4){

        checktopic[i].classList.remove('check')
    }
    }
    checktopic[4].classList.add('check')
    _this.settingconfig2(4)

}

          //rose
btnSwapTopic[5].onclick = function(){
    rootStyle.setProperty('--purple-primary', "#3460f5");
    rootStyle.setProperty('--link-text-hover', " #6e8ffb");
    rootStyle.setProperty('--layout-bg', "#061d50");
    // body
    body.style.background=  ' url(storage/images/roseBR.jpg) 0px 0px/1920px auto '
    // task control music 
   playmusic.style.background = '#061d50'

   // list input
   headerList.style.backgroundColor ='#192f60'
   // playlits music
   PlayList.style.background ='#061d50'
   //modal topic
   modaltopicMain.style.backgroundColor ='#192f60'

   modaltopic.classList.remove('open')
   
   // input header
   headerSearch.onfocus = function(){
    headerInput.style.backgroundColor ='#192f60'
   
   }
   headerSearch.onblur = function(){
       headerInput.style.backgroundColor ='var( --alpha-bg)'
      }
      for(let i=0 ;i<6;i++){
        if(i!=5){

            checktopic[i].classList.remove('check')
        }
        }
      checktopic[5].classList.add('check')
        
      _this.settingconfig2(5)
    
}
       




          for (const playal of playAll) {
              
              playal.onclick= function(){
                  _this.currentIndex = 0
                  _this.loadcurrentSong()
                 
                  _this.render();
                  _this.render2();
                  _this.render3(); 

                  audio.play();
                
                }
            }
          
      


    },
    loadconfig: function(){
        this.isRepeat =  this.config.isRepeat
        this.isRamdom =  this.config.isRamdom
    },


    loadcurrentSong : function(){

        titleSong.textContent = this.currentSong.name;
        singerSong.textContent = this.currentSong.singer;
        imgCurrentsong.src = this.currentSong.image
        audio.src = this.currentSong.path
     


    },

    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >this.songs.length - 1){
            this.currentIndex = 0
        }
        this.loadcurrentSong()
        

    },
    prevSong: function(){
     
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length -1;
               
        }
        this.loadcurrentSong()
        

    },


    randomSong: function(){
        let newIndex 
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadcurrentSong()
     
    },
 
 
    srollToActiveSong: function(){
        const item =  $('.listplay-item.active')
        const itemPLs = $$('.profile-playlist_item.isplay')
        setTimeout(function(){
            item.scrollIntoView({
                behavior:'smooth',
                block: 'center'
            })

        },200)
        for (const itemPL of itemPLs) {
            itemPL.scrollIntoView({
                behavior:'smooth',
                block: 'center'
    
            })
        }
       

      

    },


       start: function(){
        // load cau hinh 
        this.loadconfig()

        //
        this.defineProperties();
        // xu li cac su kien
        this.handleEvent();

        
        // load bai hat hien tai
        this.loadcurrentSong();
        // render ra bai hat
        this.render();
        this.render2();
        this.render3();
    
      
        ramdomBtn.classList.toggle('activeicon',this.isRamdom)
        repeatBtn.classList.toggle('activeicon',this.isRepeat)


        
             btnSwapTopic[JSON.parse(localStorage.getItem("AN-PLAYER2"))[0]].click()
        

     }

}
app.start();














