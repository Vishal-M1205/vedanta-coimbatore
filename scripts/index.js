$(document).ready(function(){
  
    $('.house-carousel').slick({
        infinite: true,
  speed: 300,
  slidesToShow: 1,
  responsive:[
    {
        breakpoint: 1024,
        settings:{
            slidesToShow:3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 998,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 580,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1,
            arrows:false,
            dots:true
        }
    },
  ]
    })

    $('.retirement-carousel').slick({
        infinite:true,
        speed:300,
        responsive:[
    {
        breakpoint: 1024,
        settings:{
            slidesToShow:2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 998,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 580,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1,
            arrows:false,
            dots:true
        }
    },
  ]
    })
    $('.resident-carousel').slick({
        infinite:true,
        speed:300,
        arrows:false,
            dots:true,
        responsive:[
    {
        breakpoint: 1024,
        settings:{
            slidesToShow:2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 998,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 580,
        settings:{
            slidesToShow:1,
            slidesToScroll: 1,
            
        }
    },
  ]
    })

})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))