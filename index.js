import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { init } from 'aos';
import 'aos/dist/aos.css';



// phone number input
const inputs = document.querySelectorAll("#phoneInput");
inputs.forEach(input=>{

    const telInput=intlTelInput(input, {
        initialCountry: "uz",
        separateDialCode: true,
        preferredCountries:['uz','ru','us']
    });
})

// data aos animations
init();