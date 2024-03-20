// "use client"; 
import { fetchTemp } from '@/utils'
import { useState, useEffect } from "react"; 
import Products from './Products'; 
import Work from './Work';
import Contact from './Contact';
import Feature from './Feature';
import Design from './Design';



const Body = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (

    <div>
     
      <>
 

        <div className="topBannerWrapper"></div>


        <div id="topBannerWrapper" />


        <div className="pageHeaderMenuSearchUnderlay" style={{ display: "none" }}>
          <form action="/search" method="get" className="searchOverlay">
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.6 36">
                <path d="M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z" />
              </svg>
            </button>
            <div className="searchInputWrapper">
              <input type="text" name="q" placeholder="Search" />
              <span className="searchInputWrapper__underline" />
            </div>
          </form>
        </div>
         
        {/* Regular shipping rule applies */}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".materialVideoModal{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999999999}@media (min-width: 768px){.materialVideoModal{z-index:1000}}.materialVideoModal__backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,0.75);opacity:0;transition:opacity .2s ease}.materialVideoModal__modal{display:grid;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2;background-color:#EBEBEB;color:#231f20;text-align:center;width:96vw;max-width:500px;max-height:90vh;padding:45px 0 20px;overflow:hidden;overflow-y:auto;opacity:0;transition:opacity .4s ease}.materialVideoModal.materialVideoModal--active{display:block}.materialVideoModal--show .materialVideoModal__backdrop,.materialVideoModal--show .materialVideoModal__modal{opacity:1}@media (min-width: 375px){.materialVideoModal__modal{padding:55px 0 30px;width:90vw}}@media (min-width: 375px) and (min-height: 700px){.materialVideoModal__modal{max-height:550px}}@media (min-width: 768px){.materialVideoModal__modal{padding:70px 80px 40px;max-width:800px;max-height:70vh}}.materialVideoModal__modal__title{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;letter-spacing:2px;font-weight:700;color:#231f20;text-transform:uppercase;line-height:24px;margin-bottom:15px}@media (min-width: 768px){.materialVideoModal__modal__title{line-height:26px;grid-row:1;margin-bottom:23px}}.materialVideoModal__modal__blurb{font-family:\"PT serif\", sans;-webkit-font-smoothing:antialiased;font-size:14px;line-height:27px;color:#231f20;max-width:630px;margin:0 auto;padding:0 20px}.material__video{position:relative;overflow:hidden;height:60vw;width:100%;max-width:387px;max-height:258px;margin:0 auto 25px}@media (min-width: 769px){.material__video{width:450px;height:300px;max-width:unset;max-height:unset;margin:0 auto 25px}}@media (min-width: 1025px){.material__video{height:341px;width:511px}}.materialVideoModal__modal__close{position:absolute;top:12px;right:11px;height:19px;width:19px;cursor:pointer}.materialVideoModal__modal__close:before,.materialVideoModal__modal__close:after{display:block;content:' ';border-left:1px solid #231f20;position:absolute;left:50%;top:0;height:20px}.materialVideoModal__modal__close:before{transform:rotate(45deg)}.materialVideoModal__modal__close:after{transform:rotate(-45deg)}\n"
          }}
        />
        <template id="MaterialModalInformationTemplate" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".airTagModal{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999999999}@media (min-width: 768px){.airTagModal{z-index:1000}}.airTagModal__backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:rgba(0,0,0,0.75);opacity:0;transition:opacity .2s ease}.airTagModal__modal{display:grid;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2;background-color:#EBEBEB;color:#231f20;text-align:center;width:96vw;max-width:500px;max-height:90vh;padding:45px 0 20px;overflow:hidden;overflow-y:auto;opacity:0;transition:opacity .4s ease}.airTagModal.airTagModal--active{display:block}.airTagModal--show .airTagModal__backdrop,.airTagModal--show .airTagModal__modal{opacity:1}@media (min-width: 375px){.airTagModal__modal{padding:55px 0 30px;width:90vw}}@media (min-width: 375px) and (min-height: 700px){.airTagModal__modal{max-height:550px}}@media (min-width: 768px){.airTagModal__modal{padding:70px 80px 40px;max-width:800px;max-height:70vh}}.airTagModal__modal__title{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;letter-spacing:2px;font-weight:700;color:#231f20;text-transform:uppercase;line-height:24px;margin-bottom:15px}@media (min-width: 768px){.airTagModal__modal__title{line-height:26px;grid-row:1;margin-bottom:23px}}.airTagModal__modal__blurb{font-family:\"PT serif\", sans;-webkit-font-smoothing:antialiased;font-size:14px;line-height:27px;color:#231f20;max-width:630px;margin:0 auto;padding:0 20px}.material__video{position:relative;overflow:hidden;height:50vw;width:99%;max-width:387px;max-height:258px;margin:0 auto 25px}@media (min-width: 769px){.material__video{width:450px;height:300px;max-width:unset;max-height:unset;margin:0 auto 25px}}@media (min-width: 1025px){.material__video{height:324px;width:576px}}.airTagModal__modal__close{position:absolute;top:12px;right:11px;height:19px;width:19px;cursor:pointer}.airTagModal__modal__close:before,.airTagModal__modal__close:after{display:block;content:' ';border-left:1px solid #231f20;position:absolute;left:50%;top:0;height:20px}.airTagModal__modal__close:before{transform:rotate(45deg)}.airTagModal__modal__close:after{transform:rotate(-45deg)}\n"
          }}
        />
        <template id="airTagModalInformationTemplate" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".MiniCart_Cart_Accordion.MiniCart_Cart_Accordion_ImportsDuty{background-color:unset}.MiniCart_Cart_Accordion_ImportsDuty label{justify-content:start;padding:7px 21px}.MiniCart_Cart .Checkout_ShippingOptionWarnings{margin:0;text-align:left}\n"
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .Checkout_PaymentMethod_Express {\n        padding: 0;\n        margin-top: 1rem;\n    }\n\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options {\n        display: flex;\n        justify-content: center;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options_Button {\n        flex: 1 1 40%;\n        width: auto;\n        margin-bottom: 0;\n        box-shadow: 0 27px 15px -17px rgb(0 0 0 / 30%), 0 2px 4px rgb(0 0 0 / 30%);\n        transition: background-color 0.2s ease, box-shadow 0.2s ease;\n    }\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options_Button:hover,\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options_Button:focus {\n        box-shadow: 0 20px 15px -17px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 30%);\n    }\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options_Button:only-child,\n    .MiniCart_Cart .Checkout_PaymentMethod_Express_Options_Button:nth-last-child(3) {\n        flex-basis: 100%;\n    }\n    .MiniCart_Cart .Checkout_Finalize_FormError {\n        padding: 10px 20px;\n        /* overlap padding of parent MiniCart_Cart-bottom */\n        margin-left: -20px;\n        margin-right: -20px;\n        margin-bottom: -20px;\n        background: #EFEFEF;\n        border: 1px dashed #EB350C;\n    }\n    .MiniCart_Cart .MiniCart_Cart_SupportedPaymentTypes {\n        padding: 20px;\n    }\n    .MiniCart_Cart .MiniCart_Cart_SupportedPaymentTypes_Icons {\n        margin-top: 10px;\n        display: grid;\n        gap: 10px;\n        grid-template-columns: repeat(6, 1fr)\n    }\n    .MiniCart_Cart .MiniCart_Cart_SupportedPaymentTypes_Icons > span {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"
          }}
        />
        {/* cache LB */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".MiniCart_Cart_Heading{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;line-height:30px;font-size:12px;letter-spacing:0.5px;text-transform:none;min-height:73px;border-bottom:none;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;background-color:white}.MiniCart_Cart_Heading a{pointer-events:none;max-height:24px}.MiniCart_Cart_Heading bellroy-cart-indicator{padding-top:25px;max-height:24px}.MiniCart_Cart_CloseButton{position:absolute;right:0;padding:20px 25px;border:none;font-family:'Lato', sans-serif;font-weight:700;font-size:12px;line-height:15px;color:#676767;background-color:transparent;cursor:pointer;-webkit-font-smoothing:antialiased;letter-spacing:1px}.MiniCart_Cart_CloseButton>span{margin-right:15px}.MiniCart_Cart_CloseButtonIcon{width:15px;height:15px}.MiniCart_Cart_CloseButtonIcon:before,.MiniCart_Cart_CloseButtonIcon:after{display:block;content:' ';border-left:1px solid #676767;position:absolute;right:50%;top:20px;height:15px}.MiniCart_Cart_CloseButtonIcon:before{transform:rotate(45deg)}.MiniCart_Cart_CloseButtonIcon:after{transform:rotate(-45deg)}.MiniCart_Cart_CloseButton:focus{outline:none}\n"
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".MiniCart_Cart_Accordion{position:relative;font-size:12px;line-height:15px;letter-spacing:0.5px;background-color:#ffffff}.MiniCart_Cart_Accordion-Toggle{position:absolute;opacity:0;height:0;width:0}.MiniCart_Cart_Accordion-Toggle:checked~p{display:block}.MiniCart_Cart_Accordion-Arrow{content:\" \";display:block;height:8px;width:8px;border-width:0 2px 2px 0;border-style:solid;transform:rotate(45deg);transform-origin:66% 66%;transition:transform 0.2s ease;position:absolute;top:10px;right:16px}.MiniCart_Cart_Accordion__MessageLabel{position:relative;display:flex;align-items:center;justify-content:center;border:none;width:100%;padding:7px 24px;cursor:pointer;z-index:1;background-color:transparent}.MiniCart_Cart_Accordion__MessageLabel:after{content:' ';height:8px;width:8px;border-width:0 2px 2px 0;border-style:solid;transform:rotate(45deg);transform-origin:66% 66%;transition:transform 0.2s ease;position:absolute;top:4px;right:8px;display:none}.MiniCart_Cart_Accordion-Toggle:checked~.MiniCart_Cart_Accordion-Arrow{transform:rotate(225deg)}@keyframes fadeInAnimation{0%{opacity:0}100%{opacity:1}}.MiniCart_Cart_Accordion__MessageLabel span{opacity:0}.MiniCart_Cart_Accordion__MessageLabel span{animation:fadeInAnimation ease 3s 1 forwards}\n"
          }}
        /> 
        <div id="contentWrapper" />
        <style
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              '\n    .syw-container {\n      height: 110vw;\n      max-height: 90vh;\n      overflow: hidden;\n      position: relative;\n        -webkit-tap-highlight-color: transparent;\n      user-select: none;\n    }\n\n    .line-container {\n      width: 76vw;\n      height: 16px;\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      max-width: 970px;\n\n      left: 50%;\n      bottom: 29%;\n      transform: translateX(-50%);\n      position: absolute;\n      z-index: 2;\n      touch-action: none;\n    }\n\n    .line,\n    .line2 {\n      background-color: #D1E1E4;\n      width: 100%;\n      height: 8px;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n\n    .line2 {\n      background-color: #357176;\n      width: 0;\n    }\n\n    .stop {\n      width: calc(100% / 11);\n      display: block;\n      height: 100%;\n      border-left: 2px solid #D1E1E4;\n      z-index: 1;\n      cursor: pointer;\n      transition: border .2s linear;\n    }\n\n    .stop.active {\n      border-left: 2px solid #357176;\n    }\n\n\n    .stop:nth-child(13) {\n      border-right: 2px solid #D1E1E4;\n    }\n\n    .knob {\n      width: 32px;\n      height: 38px;\n      z-index: 2;\n      cursor: grabbing;\n      cursor: grab;\n      background-color: #fff;\n      box-shadow: 0 0 5px rgb(0 0 0 / 20%);\n      border-radius: 4px;\n      transition: box-shadow .3s ease;\n      position: relative;\n    }\n\n    .knob.dragging {\n      cursor: grabbing;\n      font-size: 16px;\n    }\n\n    .knob-container {\n      width: 32px;\n      display: flex;\n      justify-content: flex-end;\n      position: absolute;\n      left: -16px;\n    }\n\n    .image-container {\n      position: relative;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      top: 42%;\n      overflow: hidden;\n      transform: translate(-50%, -50%);\n      left: 50%;\n    }\n\n    .label {\n      position: absolute;\n      top: 35px;\n      color: #fff;\n      font-weight: bold;\n      font-size: 13px;\n      width: 0;\n      text-transform: uppercase;\n      font-family: Lato, sans-serif;\n      -webkit-font-smoothing: antialiased;\n      letter-spacing: .5px;\n      user-select: none;\n      pointer-events: none;\n    }\n\n    .label.empty {\n      left: 0;\n    }\n\n    .label.full {\n      right: 35px;\n    }\n\n    .syw-comparison-cards {\n      position: absolute;\n      bottom: calc(100% + 13px);\n      text-align: center;\n      white-space: nowrap;\n      font-weight: bold;\n      font-size: 14px;\n      color: #231f20;\n      transition: font-size .3s ease, top .3s ease;\n      transform: translate(-50%, 0);\n      left: 50%;\n      font-family: "Lato", sans-serif;\n      color: #336165;\n      letter-spacing: .5px;\n      font-weight: 700;\n      font-size: 14px;\n      white-space: nowrap;\n    }\n\n    @media (min-width: 768px) {\n      .image-container {\n        width: 100%;\n        height: 100%;\n        top: 49%;\n      }\n\n      .syw-container {\n        height: 100vw;\n      }\n\n      .line-container {\n        height: 32px;\n      }\n\n      .label {\n        top: unset;\n        bottom: 9px;\n        font-size: 18px;\n      }\n\n      .label.empty {\n        left: -100px;\n      }\n\n      .label.full {\n        right: -40px;\n      }\n\n      .syw-comparison-cards {\n        bottom: unset;\n        top: calc(100% + 12px);\n      }\n\n    }\n\n    @media (min-width: 1024px) {\n      .syw-container {\n        height: 55vw;\n        max-height: 80vh;\n      }\n\n      .line-container {\n        bottom: 180px;\n      }\n    }\n\n    .image-container img {\n      width: 100%;\n      transform: translateY(0%);\n    }\n\n    @keyframes color-in-stop {\n      100% {\n        border-left: 2px solid #357176;\n      }\n    }\n\n    .transition-grow {\n      transition: width ease 500ms;\n    }\n\n    .syw-header-content {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      text-align: center;\n      z-index: 1;\n    }\n\n    .syw-header-content h1 {\n      color: #fff;\n      padding: 20px 0 0 0;\n      text-decoration: none;\n    }\n\n    .syw-header-content p {\n      color: #231f20;\n      text-align: center;\n      margin: 8vw 0 0 0;\n      padding: 0;\n      user-select: none;\n      z-index: 2;\n      transition: opacity 2s ease;\n    }\n\n    .syw-cta-mobile {\n      color: #336165;\n      text-align: center;\n      text-decoration: none;\n      line-height: 40px;\n      border: 0;\n      border-radius: 4px;\n      background-color: #FFF;\n      padding: 0 25px;\n      position: absolute;\n      display: block;\n      left: 50%;\n      bottom: 5%;\n      transform: translate(-50%, -50%);\n      display: block;\n      z-index: 1;\n      pointer-events: all;\n      box-shadow: 0px 17px 9px -15px rgb(0 0 0 / 50%);\n      transition: box-shadow .2s ease;\n    }\n\n    .syw-cta-desktop {\n      display: none;\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      text-align: center;\n      color: #fff;\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      cursor: pointer;\n      pointer-events: all;\n      text-decoration: none;\n    }\n\n    .syw-cta-desktop:hover,\n    .syw-cta-desktop:focus {\n      color: #231f20;\n      text-decoration: none;\n    }\n\n    .sywMainBanner__scrollTo-arrow {\n      display: block;\n      z-index: 3;\n      width: 15px;\n      height: 15px;\n      margin: 2px auto 0;\n      background: transparent;\n      border-bottom: 2px solid #fff;\n      border-right: 2px solid #fff;\n      transform: translateX(-50%) rotate(45deg);\n      cursor: pointer;\n    }\n\n    @media (orientation: landscape) {\n      .syw-header-content h1 {\n        font-size: 4vw;\n        padding-top: 20px;\n      }\n\n      .syw-cta-mobile {\n        display: none;\n      }\n\n      .syw-cta-desktop {\n        display: block;\n      }\n    }\n\n    html {\n      scroll-behavior: smooth;\n    }\n  '
          }}
        />
        <div className="syw-container">
          <div className=" image-container">
            <img
              className="wallet-image"
              alt="wallet-comparison" 
              sizes="100%" />
          </div>

          
          
          
        </div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '.syw-usps{padding:20px 10px;background-color:#EFEFEF}.syw-usps>ul{padding:0;list-style-type:none;display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:10px;max-width:550px;margin:0 auto}.syw-usps>ul>li{align-self:start;justify-self:center}.syw-usps>ul>li>.icon{background-color:#FFF;border-radius:50%;width:40px;height:40px;margin:0 auto;padding:8px;display:flex;justify-content:center;align-items:center}.syw-usps>ul>li>.icon>svg{height:95%;fill:#608A8C}.syw-usps>ul>li>span{display:block;font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:bold;text-align:center;letter-spacing:1px;line-height:17px;color:#608A8C;padding-top:8px}.syw-usps>ul>li:first-child>span{padding:8px 14px 0}@media (min-width: 811px){.syw-usps{padding:16px 0}.syw-usps>ul{max-width:1000px}.syw-usps>ul>li{display:flex;align-items:center}.syw-usps>ul>li>.icon{width:58px;height:58px;padding:12px;background-color:unset}.syw-usps>ul>li>span{font-size:14px;padding-top:0;margin-left:5px;text-align:left}.syw-usps>ul>li:first-child>span{padding:0}}\n'
          }}
        />
        

        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '.sywCarousel{background-color:#f4f4f4;color:#231f20;padding:30px 0 0;margin:0 auto;position:relative;text-align:center}.sywCarousel--imageSlider{position:relative;background-color:#f4f4f4;overflow:hidden;z-index:1}.sywCarousel--imageSlider.desktop{display:none}.sywCarousel--imageSlider-arrowPrev,.sywCarousel--imageSlider-arrowNext{display:none}.sywCarousel--imageSlider-content{text-align:left;display:flex;align-items:flex-start;width:100%;overflow-x:scroll;scroll-snap-type:both mandatory;-webkit-overflow-scrolling:touch;padding:20px 0 80px}.sywCarousel--imageSlider-content::-webkit-scrollbar{display:none}.sywCarousel--imageSlider .imageSlider__slide{display:flex;flex-direction:column;justify-content:center;background-color:#f4f4f4;min-width:85%;scroll-snap-align:start;scroll-snap-stop:always;padding-left:15px}.sywCarousel--imageSlider .imageSlider__slide:nth-child(4){padding-right:15px}.sywCarousel--imageSlider .imageSlider__slide .logo{width:100%;height:64vw;background-size:cover;background-repeat:no-repeat;background-position:center center}.sywCarousel--imageSlider .imageSlider__slide .logo>img{width:100%;display:block}.sywCarousel--imageSlider .imageSlider__slide .text{padding:15px;background-color:#fff;box-shadow:0 20px 20px -20px rgba(0,0,0,0.5);text-align:center}.sywCarousel--imageSlider .imageSlider__navDots{position:absolute;left:50%;bottom:15px;transform:translate(-50%);z-index:10;list-style:none;padding:0;margin:0;text-align:center}.sywCarousel--imageSlider .imageSlider__navDots-dot{display:inline;margin:0 7px;padding:0;list-style:none}.sywCarousel--imageSlider .imageSlider__navDots-dot.dot-active span{background:#e9e9e9}.sywCarousel--imageSlider .imageSlider__navDots-dot span{display:inline-block;width:12px;height:12px;border:1px solid #e9e9e9;border-radius:50%;cursor:pointer}.syw-floating-image{display:none}@media (min-width: 811px){.sywCarousel{padding:45px 0;max-width:unset;position:relative;background-color:#f4f4f4}.sywCarousel:after{display:block;content:"";height:100%;width:100%;position:absolute;background-color:#f4f4f4;bottom:0;clip-path:polygon(100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);z-index:-1}.sywCarousel__title{margin-bottom:40px}.sywCarousel--imageSlider{display:flex;justify-content:center;margin:0 auto}.sywCarousel--imageSlider.desktop{display:flex}.sywCarousel--imageSlider.mobile{display:none}.sywCarousel--imageSlider-arrowPrev,.sywCarousel--imageSlider-arrowNext{height:374px;margin:0 25px;width:40px;display:flex;justify-content:center;align-items:center;cursor:pointer}.sywCarousel--imageSlider-arrowPrev:after,.sywCarousel--imageSlider-arrowNext:after{display:block;content:"";height:30px;width:30px}.sywCarousel--imageSlider-arrowPrev:after{border-left:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;transform:translateX(50%) rotate(45deg)}.sywCarousel--imageSlider-arrowNext:after{border-right:1px solid #e9e9e9;border-top:1px solid #e9e9e9;transform:translateX(-50%) rotate(45deg)}.sywCarousel--imageSlider-arrowPrev.arrow-invisible,.sywCarousel--imageSlider-arrowNext.arrow-invisible{opacity:0;pointer-events:none}.sywCarousel--imageSlider-content{padding:0 0 100px;max-width:770px}.sywCarousel--imageSlider .imageSlider__slide{flex-direction:row;min-width:100%;padding-left:0}.sywCarousel--imageSlider .imageSlider__slide-sub{width:50%;padding:0 10px}.sywCarousel--imageSlider .imageSlider__slide .logo{width:100%;height:30vw;max-height:280px}.sywCarousel--imageSlider .imageSlider__slide .text{padding:20px 35px}.sywCarousel--imageSlider .imageSlider__navDots{bottom:40px}.sywCarousel--imageSlider .imageSlider__navDots-dot{margin:0 5px}.sywCarousel--imageSlider .imageSlider__navDots-dot span{width:14px;height:14px}.syw-floating-image{display:block;position:absolute;width:11vw;max-width:190px;left:0;bottom:-6vmax;z-index:1}.syw-floating-image.cards{top:-8vmax;right:0;left:auto}}\n'
          }}
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".ContentBlockLoader--syw-2020-below-fold{height:45vh;display:grid;align-items:center;text-align:center}@media (min-width: 701px){.ContentBlockLoader--syw-2020-below-fold{display:none}}\n"
          }}
        />
        

        

<div id="usp-scroll-to"></div>

          <Products /> 
          <Design/>

          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                ".sywMobileQuotes{background-color:#ea6a2b;padding:35px 0 0}.sywMobileQuotes__quoteIcon{max-width:35px;margin:0 auto}.sywMobileQuotes__quoteIcon img{width:100%}.sywMobileQuotes__title{text-align:center;color:#FFF;margin:25px auto 0}.sywMobileQuotes--quoteSlider{position:relative;background-color:transparent;color:#FFF;overflow:hidden;z-index:1}.sywMobileQuotes__content{text-align:center;display:flex;width:100%;overflow-x:scroll;scroll-snap-type:both mandatory;padding:15px 0 80px}.sywMobileQuotes--quoteSlider .sywQuoteSlider__slide{display:flex;flex-direction:column;justify-content:center;background-color:#ea6a2b;min-width:100%;scroll-snap-align:start;scroll-snap-stop:always;-webkit-overflow-scrolling:touch}.sywMobileQuotes--quoteSlider .sywQuoteSlider__slide .logo{height:15vw;max-height:25px;margin:0 auto}.sywMobileQuotes--quoteSlider .sywQuoteSlider__slide .logo>img{height:100%}.sywMobileQuotes--quoteSlider .sywQuoteSlider__slide .text{padding:10px 20px 25px;max-width:375px;margin:0 auto}.sywMobileQuotes--quoteSlider .quoteDots{position:absolute;left:50%;bottom:10px;transform:translate(-50%);z-index:10;list-style:none;padding:0}.sywMobileQuotes--quoteSlider .quoteDots__dot{display:inline;margin:0 5px;padding:0;list-style:none;cursor:pointer}.sywMobileQuotes--quoteSlider .quoteDots__dot.quote_dot_active span{background:#FFF}.sywMobileQuotes--quoteSlider .quoteDots__dot span{display:inline-block;width:12px;height:12px;border:1px solid #FFF;border-radius:50%;pointer-event:none}@media (pointer: fine){.sywMobileQuotes__content{overflow-x:hidden;padding:40px 0 100px}.sywMobileQuotes--quoteSlider .sywQuoteSlider__slide{box-sizing:content-box}}@media (min-width: 769px){.sywMobileQuotes{display:none}}\n"
            }}
          />




<Work/>
<Contact/>
<Feature/>

          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                ".sywPaymentOptions{background-color:transparent;color:#231f20;padding:30px 10px;text-align:center}.sywPaymentOptions>h2{margin:0 0 25px}.sywPaymentOptions>ul{padding:0;margin:0 auto;display:flex;flex-direction:row;align-items:center;justify-content:center;list-style:none}.sywPaymentOptions>ul>li{display:flex;margin:0 4%}.sywPaymentOptions>ul>li>img{max-height:22px;min-height:12px;height:3.5vw}.sywPaymentOptions>ul>li.mastercard>img{max-height:40px;min-height:23px}.sywPaymentOptions>ul>li.apple-pay>img,.sywPaymentOptions>ul>li.amex>img{min-height:16px}@media (min-width: 811px){.sywPaymentOptions>ul>li{display:flex;margin:0 2.8%}}\n"
            }}
          />
          <div className="sywPaymentOptions">
            <h2 className="br_text-2xl-serif md:br_text-3xl-serif">
              Safe, easy payment options
            </h2>
            <ul>
              <li>
                <img
                  className=" ls-is-cached lazyloaded"
                  sizes="100vw"
                  src="https://bellroy-cms-images.imgix.net/4420/payment-icons-visa.png?auto=format&fit=max"
                />
              </li>
              <li className="mastercard">
                <img
                  className=" ls-is-cached lazyloaded"
                  sizes="100vw"
                  src="https://bellroy-cms-images.imgix.net/4423/payment-icons-mastercard-2.png?auto=format&fit=max"
                />
              </li>
              <li>
                <img
                  className=" ls-is-cached lazyloaded"
                  sizes="100vw"
                  src="https://bellroy-cms-images.imgix.net/4421/payment-icons-paypal.png?auto=format&fit=max"
                />
              </li>
              <li className="apple-pay">
                <img
                  className=" ls-is-cached lazyloaded"
                  sizes="100vw"
                  src="https://bellroy-cms-images.imgix.net/4422/payment-icons-applepay.png?auto=format&fit=max"
                />
              </li>
            </ul>
          </div>
         

        <div id="EventStreamApp" />
      </>


 




    </div>


  )
}

export default Body