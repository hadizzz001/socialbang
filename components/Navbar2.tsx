"use client"
import { useState, useEffect } from "react";
import Cart from "components/Cart"
import { useBooleanValue } from '../app/context/CartBoolContext';
import { useCart } from '../app/context/CartContext';





function NavBar() {

  const [isActive, setIsActive] = useState(true);
  const { isBooleanValue, setBooleanValue } = useBooleanValue();
  const [isActive2, setIsActive2] = useState(true);
  const { cart } = useCart();
  const [isHovered, setIsHovered] = useState(true);

  // Function to handle hover
  const handleHover = () => {
    setIsHovered(!isHovered);
    var d = document.getElementById("myUniD");
    var d1 = document.getElementById("yourDivId");
    if (d && d1) {
      if (isHovered) {
        d.className += " br_submenu-open";
        d1.className += " br_open";
      }
      else {
        d.classList.remove("br_submenu-open");
        d1.classList.remove("br_open");
      }
    }
  };








  const handleClick = () => {
    var d = document.getElementById("myUniD");
    var d1 = document.getElementById("hamburger");
    setIsActive(!isActive);
    if (d && d1) {
      if (isActive) {
        d.className += " drawer-active br_open";
        d1.className += " open";
      }
      else {
        d.classList.remove("drawer-active");
        d.classList.remove("br_open");
        d1.classList.remove("open");
      }
    }
    // setIsActive(current => !current);
  };



  const handleClickc = () => {
    var cartb = document.getElementById("cartid");
    var cartb2 = document.getElementById("cartid2");
    setBooleanValue(!isBooleanValue);
    if (cartb && cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      }
      else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };


  const handleClickc2 = () => {
    var search = document.getElementById("search-menu-overlay");
    var searchc = document.getElementById("search-menu-overlay");
    setIsActive2(!isActive2);
    if (search && searchc) {
      if (isActive2) {
        search.className += " open";
      }
      else {
        search.classList.remove("open");
      }
    }
  };







  return (
    <>



      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'html,body{margin:0;padding:0}#topBannerWrapper{position:relative}#topBannerWrapper>a,.topBannerRotating>a{display:block;text-decoration:none;text-align:center}.topBannerRotating{min-height:30px;background-color:#231f20}.topBannerRotating .topBanner{position:absolute;width:100%;height:100%;animation-timing-function:ease-in-out;animation-iteration-count:infinite;z-index:1;opacity:0;display:flex;justify-content:center;align-items:center}.topBanner{font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;background-color:#231f20;color:#cecdca;position:relative;height:auto;overflow:hidden}.topBanner_Close{display:block;border:none;background:none;position:absolute;top:50%;right:0;height:32px;width:32px;cursor:pointer;z-index:2;transform:translateY(-50%)}.topBanner_Close:before,.topBanner_Close:after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.topBanner_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.topBanner_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.topBanner_Inner{display:flex}.topBanner_Inner_Icon{position:absolute;top:50%;left:5px;transform:translateY(-50%);padding:0 4px;display:flex;flex-direction:column;justify-content:center}.topBanner_Inner_Icon svg{height:24px;width:auto;max-width:24px;max-height:24px}.topBanner_Inner_Title{padding:0 5px}.topBanner_Inner_Cta{text-transform:uppercase;letter-spacing:1px;color:#ea6a2b;font-weight:bold}.topBanner_Inner{box-sizing:border-box;flex:1 1 auto;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;margin:0 42px;font-size:12px;font-weight:bold;line-height:18px;padding:6px 0;letter-spacing:1px}@media (min-width: 768px){.topBanner_Inner{display:flex;justify-content:center}.topBanner_Inner_Icon{position:static;top:auto;left:auto;transform:none;padding:0 4px;flex:0 1 auto}.topBanner_Inner{flex:0 1 auto;margin:0 20px;font-size:13px;line-height:18px;padding:6px 0}}@keyframes rotate--2{0%,50%,100%{opacity:0;z-index:1}3%,47%{opacity:1;z-index:2}}@keyframes rotate--3{0%,34%,100%{opacity:0;z-index:1}2%,32%{opacity:1;z-index:2}}.topBannerRotating--2 .topBanner{animation-name:rotate--2;animation-duration:6.8s}.topBannerRotating--3 .topBanner{animation-name:rotate--3;animation-duration:10.2s}.topBannerRotating .topBanner:nth-child(1){animation-delay:0s}.topBannerRotating .topBanner:nth-child(2){animation-delay:3.4s}.topBannerRotating .topBanner:nth-child(3){animation-delay:6.8s}\n'
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#ea6a2b}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #ea6a2b;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#ea6a2b}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
        }}
      />


      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#ea6a2b}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #ea6a2b;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#ea6a2b}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
        }}
      />


      <style
        dangerouslySetInnerHTML={{
          __html:
            ".MiniCart_Cart_Heading{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;line-height:30px;font-size:12px;letter-spacing:0.5px;text-transform:none;min-height:73px;border-bottom:none;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;background-color:white}.MiniCart_Cart_Heading a{pointer-events:none;max-height:24px}.MiniCart_Cart_Heading bellroy-cart-indicator{padding-top:25px;max-height:24px}.MiniCart_Cart_CloseButton{position:absolute;right:0;padding:20px 25px;border:none;font-family:'Lato', sans-serif;font-weight:700;font-size:12px;line-height:15px;color:#676767;background-color:transparent;cursor:pointer;-webkit-font-smoothing:antialiased;letter-spacing:1px}.MiniCart_Cart_CloseButton>span{margin-right:15px}.MiniCart_Cart_CloseButtonIcon{width:15px;height:15px}.MiniCart_Cart_CloseButtonIcon:before,.MiniCart_Cart_CloseButtonIcon:after{display:block;content:' ';border-left:1px solid #676767;position:absolute;right:50%;top:20px;height:15px}.MiniCart_Cart_CloseButtonIcon:before{transform:rotate(45deg)}.MiniCart_Cart_CloseButtonIcon:after{transform:rotate(-45deg)}.MiniCart_Cart_CloseButton:focus{outline:none}\n"
        }}
      />





      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                .MiniCart_Slider_Overlay {\n                    width: 100vw;\n                    height: 100vh;\n                    position: fixed;\n                    top: 0;\n                    bottom: 0;\n                    left: 0;\n                    right: 0;\n                    z-index: 1000000000;\n                    background-color: #000;\n                    opacity: 0;\n                    pointer-events: none;\n                }\n                .MiniCart_Slider_Overlay-visible {\n                    opacity: 0.4;\n                    pointer-events: all;\n                    transition: opacity 200ms ease-in;\n                }\n                .MiniCart_Slider {\n                    position: fixed;\n                    right: 0;\n                    bottom: 0;\n                    top: 0;\n                    width: 435px;\n                    max-width: 90vw;\n                    z-index: 1000000000;\n                    opacity: 0;\n                    pointer-events: none;\n                    transform: translateX(100%);\n                    transition: all 200ms linear;\n                }\n                .MiniCart_Slider-visible {\n                    transform: translateX(0);\n                    transition: all 500ms linear;\n                    opacity: 1;\n                    pointer-events: all;\n                }\n                .MiniCart_Slider_CloseButton {\n                    position: absolute;\n                    right: 0;\n                    top: 0;\n                    z-index: 200;\n                }\n            "
        }}
      />


      <Cart />








































      <div className="pageHeaderContainer">
        <div className="pageHeaderMenuOverlays">
          <div
            className="pageHeaderMenuOverlay pageHeaderMenuOverlays--search"
            id="search-menu-overlay"
          >
            <button
              className="pageHeaderMenuOverlay__close js-close-overlay"
              aria-label="close"
              onClick={handleClickc2}
            />
            <form action={'/search'} method="get" className="searchOverlay">
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.6 36">
                  <path d="M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z" />
                </svg>
              </button>
              <label className="searchInputWrapper">
                <input type="text" name="q" placeholder="Search" />
                <span className="searchInputWrapper__underline" />
              </label>
            </form>
          </div>
        </div>
        <div className="pageHeaderMenuPreHeader" id="PageMenuPreHeader">
          <a
            href="/"
            className="br_absolute br_left-1/2 br_top-1/2 br_-translate-y-1/2 br_-translate-x-1/2 xl:pointer-fine:br_absolute xl:pointer-fine:br_left-8 xl:pointer-fine:br_top-6 xl:pointer-fine:br_p-0 xl:pointer-fine:br_m-0 xl:pointer-fine:br_transform-none all-link-states:br_text-grey-600"
            data-roybell=""
            data-location="homePageLogoLink"
            data-auto-id="true"
            id="page-header-homepage-1"
          >
            <img src="https://res.cloudinary.com/duppvjinz/image/upload/v1700912468/ewehtbukhvujafl3zm6d.png" alt="" width={100} />
          </a>
          <button id='hamburger' className="hamburger xl:pointer-fine:br_invisible" onClick={handleClick}>
            <span />
            <span />
            <span />
          </button>
          <div className="shippingMessage" />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '.mobileNewsletter{position:absolute;top:15px;left:62px}.menuicon{position:relative}.menuicon .indicator{position:absolute;top:-14px;right:-9px;border-radius:50%;background-color:#ea6a2b;color:#fff;font-size:10px;height:12px;line-height:13px;text-indent:1px;white-space:nowrap;min-width:12px;text-align:center;font-family:"Lucida Console", Monaco, monospace;border:2px solid #fff;box-sizing:content-box}@media (min-width: 768px){.mobileNewsletter{display:none}.menuicon .indicator{top:-17px}}\n'
            }}
          />
          <div className="mobileNewsletter">
            <a
              className="js-open-newsletter"
              data-auto-id="true"
              id="page-header-newsletter-1"
              onClick={handleClickc}
            >
              <span className="menuicon">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#00055" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                {cart && cart.length > 0 ? (
                  <span className="MiniCart_CartIndicator_Badge1"></span>
                ) :
                  (<div></div>)
                }
              </span>
            </a>
          </div>
          <nav className="secondaryLevel">
            <ul>
              <li className="mobile-hidden">
                <a
                  className="secondaryLevel_Item br_no-underline js-open-newsletter"
                  data-auto-id="true"
                  onClick={handleClickc}
                >
                  <span className="menuicon">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#00055" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    {cart && cart.length > 0 ? (
                      <span className="MiniCart_CartIndicator_Badge1"></span>
                    ) :
                      (<div></div>)
                    }
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickc2}
                  className="js-open-search secondaryLevel_Item"
                  data-auto-id="true"
                  id="page-header-search-1"
                >
                  <span className="menuicon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27">
                      <circle cx="13.7" cy="11.1" r={9} />
                      <path d="M20.1 17.5l6.8 6.8" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* non_gendered_bags + non_gendered_wallets + non_spotlight */}
        <div id='myUniD' style={{ background: "white" }} className='pageHeaderMenu br_group/menu br_z-50 br_pointer-events-none br_relative br_w-screen br_h-screen br_inset-0 br_overflow-hidden br_bg-black/25 br_opacity-0 br_transition-opacity br_ease-in-out br_duration-300 open:br_opacity-100 open:br_pointer-events-auto xl:pointer-fine:br_h-[75px] xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_opacity-100 xl:pointer-fine:br_bg-transparent xl:pointer-fine:br_pointer-events-auto'>
          <div className="topLevel__close br_absolute br_inset-0"></div>
          <nav
            className="topLevel  br_h-screen br_overflow-y-auto br_max-w-[420px] br_h-screen br_pb-36 br_-translate-x-full br_transition-transform br_ease-in-out br_duration-300 group-open/menu:br_translate-x-0 xl:pointer-fine:br_translate-x-0 xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_z-10 xl:pointer-fine:br_h-auto xl:pointer-fine:br_max-w-none xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_top-[9px] xl:pointer-fine:br_pb-0"
            data-location="Menu"
            data-roybell=""
          >
            <ul className="xl:pointer-fine:br_flex xl:pointer-fine:br_pl-[155px]">



              <li className="br_group/item">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/"
                  id="2_phoneCases_all-phone-cases"
                >
                  <div className="br_flex br_items-center br_gap-2">
                    Home
                  </div>

                </a>

              </li>
              <li className="br_group/item"
                onClick={handleHover}
                id="yourDivId"
                onMouseEnter={() => {
                  document.getElementById('yourDivId')!.style.cursor = 'pointer';
                }}
              >
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"

                >
                  <div className="br_flex br_items-center br_gap-2">
                    Shop
                  </div>
                </a>





                <div
                  className="subMenu br_bg-white br_max-h-0 br_overflow-hidden br_transition-[max-height] br_duration-300 br_ease-in-out group-open/item:br_max-h-[720px] group-open/item:br_overflow-y-auto xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_w-screen xl:pointer-fine:br_block xl:pointer-fine:br_opacity-0 xl:pointer-fine:br_h-0 xl:pointer-fine:br_max-h-min xl:pointer-fine:br_overflow-hidden xl:pointer-fine:br_transition-all xl:pointer-fine:br_duration-300 xl:pointer-fine:group-submenu-open/menu:br_h-[174px] xl:pointer-fine:group-submenu-open/menu:br_overflow-hidden xl:pointer-fine:group-open/item:br_opacity-100 xl:pointer-fine:group-open/item:br_z-20 xl:pointer-fine:br_pointer-events-none xl:pointer-fine:group-hover/item:br_pointer-events-auto"
                   
                >
                  <div className="br_px-8 br_py-4 xl:pointer-fine:br_pb-8 xl:pointer-fine:br_pt-12">
                    <hr className="br_hidden br_border-none xl:pointer-fine:br_block xl:pointer-fine:br_bg-grey-200 br_absolute br_w-full br_h-[1px] br_top-[5px] br_left-0 " />
                    <ul className="br_columns-2 br_gap-4 xl:pointer-fine:br_columns-auto xl:pointer-fine:br_flex xl:pointer-fine:br_gap-5 xl:pointer-fine:br_justify-center xl:pointer-fine:br_items-stretch 2xl:pointer-fine:br_justify-start 2xl:pointer-fine:br_ml-[140px]">
                      <li className="br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center">
                        <a
                          className="br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center"
                          href="/search?cat=Cards"
                          id="0_bags_0_backpacks"
                        >
                          <figure className="br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24">
                            <img
                              alt="Backpacks"
                              className="br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center"
                              loading="lazy"
                              sizes="100vw"
                              src="https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/izipljt6kfdtdcu2xqsk.webp?auto=format&fit=max"
                            />
                          </figure>
                          <span>
                          Cards
                          </span>
                        </a>
                      </li>
                      <li className="br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center">
                        <a
                          className="br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center"
                          href="/search?cat=Tags"
                          id="0_bags_1_crossbody-bags"
                        >
                          <figure className="br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24">
                            <img
                              alt="Slings & Crossbody Bags"
                              className="br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center"
                              loading="lazy"
                              sizes="100vw"
                              src="https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/dfll4wwwtpt2myso4sys.webp?auto=format&fit=max"
                            />
                          </figure>
                          <span>
                            Tags
                          </span>
                        </a>
                      </li>
                      <li className="br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center">
                        <a
                          className="br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center"
                          href="/search?cat=Stands"
                          id="0_bags_2_tote-bags"
                        >
                          <figure className="br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24">
                            <img
                              alt="Tote & Shoulder Bags"
                              className="br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center"
                              loading="lazy"
                              sizes="100vw"
                              src="https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/akxxwxewhxemx6x2tqb8.webp?auto=format&fit=max"
                            />
                          </figure>
                          <span>
                          Stands
                          </span>
                        </a>
                      </li>
                      <li className="br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center">
                        <a
                          className="br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center"
                          href="/search?cat=Stickers"
                          id="0_bags_3_market-cooler-bags"
                        >
                          <figure className="br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24">
                            <img
                              alt="Market & Cooler Bags"
                              className="br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center"
                              loading="lazy"
                              sizes="100vw"
                              src="https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/v9dfrieph0t7ememxkvm.webp"
                            />
                          </figure>
                          <span>
                            Stickers
                          </span>
                        </a>
                      </li>
                      <li className="br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center">
                        <a
                          className="br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center"
                          href="/shop"
                          id="0_bags_4_work-bags"
                        >
                          <figure className="br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24">
                            <img
                              alt="Work Bags"
                              className="br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center"
                              loading="lazy"
                              sizes="100vw"
                              src="https://res.cloudinary.com/duppvjinz/image/upload/v1706734815/yhaeljnxa9wkthi7b48k.webp"
                            />
                          </figure>
                          <span>
                            All Products
                          </span>
                        </a>
                      </li> 
                    </ul>
                  </div>
                </div>





              </li>
              <li className="br_group/item">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/about"
                  id="4_travel_all-travel"
                >
                  <div className="br_flex br_items-center br_gap-2">About Us</div>
                </a>

              </li>
              <li className="br_group/item">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/contact"
                  id="about-us_about-us"
                >
                  <div className="br_flex br_items-center br_gap-2">Contact Us</div>
                </a>
              </li> 
            </ul>
          </nav>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.MiniCart_CartIndicator_Badge1 {\n    box-sizing: content-box!important;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    height: 3px;\n    width: 3px;\n    border-radius: 8px;\n    background-color: #e15a1d; \n    color: #fff;\n    border: 2px solid #fff;\n    padding: 2px;\n}\n"
        }}
      />



    </>
  );
}

export default NavBar;