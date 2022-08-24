window.addEventListener('DOMContentLoaded', function ()
{

'use strict';

let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    infoAll = document.querySelector('.info'),
    timerAll = document.querySelector('.timer'),
    morebtn = document.querySelector('.more'),
    contentAll = document.querySelector('.content'),
    photoSlider = document.querySelector('#photo'),
    priceCounter = document.querySelector('#price'),
    contacts = document.querySelector('#contacts'),
    photoBTN = document.querySelector('.photo-btn'),
    aboutBTN = document.querySelector('.about-btn'),
    priceBTN = document.querySelector('.price-btn'),
    contactsBTN = document.querySelector('.contacts-btn'),
    more = document.querySelectorAll('.description-btn, .more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    function hideTabContent (a) 
    {
        for( let i = a; i<tabContent.length; i++)
        {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            contentAll.style.minHeight = '1000px';
        }
    };

    hideTabContent(1);

    function showTabContent(b)
    {
        if ( tabContent[b].classList.contains('hide'))
        {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        }
    };

    function hideContent()
    {
        photoSlider.style.display = 'none';
        priceCounter.style.display = 'none';
        contacts.style.display = 'none';
    };

    hideContent();


        info.addEventListener('click', function(event)
        {
        let target = event.target;

        if ( target && target.classList.contains ('info-header-tab'))
        {
            for ( let i=0; i<tab.length; i++)
            {
                if (target == tab[i])
                    {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
            }
        }
});
 
        photoBTN.addEventListener('click', function()
        {
            {
                photoSlider.style.display = 'block';
                photoSlider.style.marginTop = '0px';
                priceCounter.style.display = 'none';
                contacts.style.display = 'none';
                infoAll.style.display = 'none';
                timerAll.style.display = 'none';
                morebtn.style.display = 'none';
                contentAll.style.minHeight = '1000px';
                window.scrollTo(0,520);
            }
        });

        aboutBTN.addEventListener('click', function()
        {
            {
                photoSlider.style.display = 'none';
                priceCounter.style.display = 'none';
                contacts.style.display = 'none';
                infoAll.style.display = 'block';
                timerAll.style.display = 'none';
                morebtn.style.display = 'none';
                contentAll.style.minHeight = '1000px';
                window.scrollTo(0,110);

            }
        });

        priceBTN.addEventListener('click', function()
        {
            {
                photoSlider.style.display = 'none';
                priceCounter.style.display = 'block';
                contacts.style.display = 'none';
                infoAll.style.display = 'none';
                timerAll.style.display = 'block';
                morebtn.style.display = 'block';
                contentAll.style.minHeight = '1000px';
                timerAll.style.marginTop = '0px';
                window.scrollTo(0,520);

            }
        });

        contactsBTN.addEventListener('click', function()
        {
            {
                photoSlider.style.display = 'none';
                priceCounter.style.display = 'none';
                contacts.style.display = 'block';
                infoAll.style.display = 'none';
                timerAll.style.display = 'none';
                morebtn.style.display = 'none';
                contentAll.style.minHeight = '1000px';
                contacts.style.width = '100%';
                contacts.style.marginTop = '0px';
                window.scrollTo(0,700);

            }
        });

        let deadline = '2022-07-05';

        function getTimeRemaining(endtime)
    {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function setClock(id, endtime)
    {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock()
    {
        let t = getTimeRemaining(endtime);

        function addZero(num)
        {
        if( num<=9 )
        {
            return '0' + num;
        }
        else return num;
        };

        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0)
        {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        };

    };
};

setClock('timer', deadline);

// more.addEventListener('click', function(){
//     overlay.style.display = 'block';
//     this.classList.add('more-splash');
//     document.body.style.overflow = 'hidden';
// });

// close.addEventListener('click', function(){
//     overlay.style.display = 'none';
//     more.classList.remove('more-splash');
//     document.body.style.overflow = '';
// });


more.forEach(function(btn) {
    btn.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';   
    })
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    more.forEach(function(btn) {
        btn.classList.remove('more-splash');
    })
});

let message ={
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

// В блоке Узнать Больше и Узнать Подробнее

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add ('status');
    form.addEventListener('submit', function (event){
    event.preventDefault();
    form.appendChild(statusMessage);
    let formData = new FormData(form);

function postData (data) {
return new Promise (function(resolve,reject){
    let request = new XMLHttpRequest();
    request.open ('POST', 'server.php');
    request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
    request.onreadystatechange = function () {
        if (request.readyState < 4) {
            resolve()
        } else if (request.readyState === 4 && request.status == 200) {
            resolve()
        } else {
            reject()
        }
    }
    request.send (data);
})
}

function clearInput(){
    for( let i=0; i<input.length; i++) {
        input [i].value = '';
    }
}

postData(formData)
.then ( () => statusMessage.innerHTML = message.loading)
.then ( () => statusMessage.innerHTML = message.success)
.catch ( () => statusMessage.innerHTML = message.failure)
.then (clearInput)

});


// В блоке контактов

let formContact = document.querySelector("#form"),
    inputContact = formContact.getElementsByTagName('input'),
    messageContact = document.createElement('div');
    messageContact.classList.add('status');
    messageContact.style.color = "white";
    messageContact.style.marginTop = "15px";

    formContact.addEventListener('submit', function(event){
    event.preventDefault();
    formContact.appendChild(messageContact);
    let formData = new FormData(formContact);

    function postData (data) {
        return new Promise (function(resolve,reject){
            let request = new XMLHttpRequest();
            request.open ('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            }
            request.send (data);
        })
        }

        function clearInput(){
            for( let i=0; i<inputContact.length; i++) {
                inputContact [i].value = '';
            }
        }

        postData(formData)
        .then ( () => messageContact.innerHTML = message.loading)
        .then ( () => messageContact.innerHTML = message.success)
        .catch ( () => messageContact.innerHTML = message.failure)
        .then (clearInput)

});




});