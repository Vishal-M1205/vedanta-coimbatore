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

 $('#vedaForm').validate({
        errorClass : 'text-danger fs-small mt-2',
        rules:{
            name: {

                required:true
            },
            phone: {

                required:true,
                digits:true
            },
            email: {

                required:true,
                email:true
            },
            interest:{
                required:true
            },
            message:{
                required:true
            },
            terms:{
                required:true
            },

        },

    })

    $('#submitBtn').on('submit',(e)=>{
        e.preventDefault();
    })

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))