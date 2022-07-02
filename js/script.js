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
    contactsBTN = document.querySelector('.contacts-btn');

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

    function showPhotoSlider()
    {
        {
        photoSlider.classList.remove('hide');
        photoSlider.classList.add('show');
        }
    };

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
               

            }
        });






});