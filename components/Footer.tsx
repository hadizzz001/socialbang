'use client'
import { footerLinksAr, footerLinksEn } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useDrawerContext } from 'app/context/store'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react'
import { sendEmail } from '@/app/api/sendEmail/sendEmail'

const Footer = () => {
    const [isFoot1, setIsFoot1] = useState(true);
    const [isFoot2, setIsFoot2] = useState(true);
    const [isFoot3, setIsFoot3] = useState(true);


    const handleFoot = () => {
        var d2 = document.getElementById("footId1");
        setIsFoot1(!isFoot1);
        if (d2) {
            if (isFoot1) {
                d2.className += " open";
            }
            else {
                d2.classList.remove("open");
            }
        }
    };

    const handleFoot2 = () => {
        var d2 = document.getElementById("footId2");
        setIsFoot2(!isFoot2);
        if (d2) {
            if (isFoot2) {
                d2.className += " open";
            }
            else {
                d2.classList.remove("open");
            }
        }
    };

    const handleFoot3 = () => {
        var d2 = document.getElementById("footId3");
        setIsFoot3(!isFoot3);
        if (d2) {
            if (isFoot3) {
                d2.className += " open";
            }
            else {
                d2.classList.remove("open");
            }
        }
    };

    return (
        <footer
            data-roybell=""
            data-location="footer"
            id="SiteFooter"
            className="SiteFooter hide"
        >
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '.NewsletterSignupModalWrapper{z-index:9999999999999;display:none;position:fixed;top:0;right:0;bottom:0;left:0}.NewsletterSignupModalWrapper_Backdrop{opacity:0;transition:opacity .3s ease;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);z-index:1}.NewsletterSignupModal{opacity:0;transition:opacity .3s ease;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:346px;max-height:477px;min-height:477px;width:calc(100vw - 40px);height:calc(100vh - 40px);z-index:2;background-color:#f4f4f4}.NewsletterSignupModal img{object-fit:cover;width:100%;position:absolute;bottom:-1px}.NewsletterSignupModal_Close{position:absolute;z-index:2;top:15px;right:11px;width:20px;height:20px;background:none;border:none;cursor:pointer;outline:none}.NewsletterSignupModal_Close:before,.NewsletterSignupModal_Close:after{content:\'\';position:absolute;width:23px;height:1px;background:#231f20;top:50%;left:50%}.NewsletterSignupModal_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.NewsletterSignupModal_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.NewsletterSignupModal_Inner{padding:58px 18px 0 18px}.NewsletterSignupModal_Inner .NewsletterSignup_InputWrapper_Front{border:1px solid #ccc}.NewsletterSignupModal_Inner_Disclaimer a,.NewsletterSignupModal_Inner_Disclaimer a:hover,.NewsletterSignupModal_Inner_Disclaimer a:visited,.NewsletterSignupModal_Inner_Disclaimer a:focus{text-decoration:underline;color:#ea6a2b}@media (min-width: 1000px){.NewsletterSignupModal{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:800px;max-height:376px;min-height:auto;width:800px;height:376px;z-index:2}.NewsletterSignupModal_Inner_Preheading,.NewsletterSignupModal_Inner_Heading,.NewsletterSignupModal_Inner_Disclaimer{text-align:left}.NewsletterSignupModal img{max-height:550px;width:unset;height:112%;position:absolute;bottom:0}.NewsletterSignupModal_Inner{padding:0 70px 0 0;position:absolute;left:376px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}.NewsletterSignupModal_Inner_Disclaimer{text-align:left}}@media (min-width: 1280px){.NewsletterSignupModal{max-width:1040px;max-height:490px;width:1040px;height:490px}.NewsletterSignupModal_Inner{left:490px}.NewsletterSignupModal_Inner_Heading{line-height:3.5rem;font-size:2.75rem}}.NewsletterSignupModalWrapper.active{display:block}.NewsletterSignupModalWrapper.show .NewsletterSignupModalWrapper_Backdrop,.NewsletterSignupModalWrapper.show .NewsletterSignupModal{opacity:1}.pageHeaderMenuOverlay.pageHeaderMenuOverlays--newsletter.open{display:none !important}.NewsletterSignupModal_Component{position:relative;font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;max-width:100% !important}.NewsletterSignupModal_Component .klaviyo_helptext{font-family:"PT Serif", serif;padding-top:10px}.NewsletterSignupModal_Component .klaviyo_gdpr_text{font-family:"PT Serif", serif;font-size:14px;line-height:1.3}.NewsletterSignupModal_Component label{color:#222}.NewsletterSignupModal_Component .klaviyo_field_group{display:flex;transform-style:preserve-3d;backface-visibility:hidden;transition:transform .4s ease, background-color .4s ease;height:42px;border-radius:4px;margin:0;background-color:#fff;border:1px solid #FFF;padding:3px;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModal_Component .klaviyo_field_group .klaviyo_form_actions{text-align:left}.NewsletterSignupModal_Component input[type=checkbox]+label{display:inline;font-weight:normal;padding-left:5px}.NewsletterSignupModal_Component input[type=text],.NewsletterSignupModal_Component input[type=email]{font-family:Lato, sans-serif;font-size:12px;font-weight:700;border-radius:0px;border:none;outline:none;transition:background .1s ease}.NewsletterSignupModal_Component input[type=email]::placeholder{color:#b0b0b0;letter-spacing:0.5px}.NewsletterSignupModal_Component input[type=email]:focus+.klaviyo_form_actions .klaviyo_submit_button,.NewsletterSignupModal_Component input[type=email]:valid+.klaviyo_form_actions .klaviyo_submit_button{background:#ea6a2b}.NewsletterSignupModal_Component .klaviyo_submit_button{font-family:"Lato", sans-serif;font-size:12px;font-weight:700;background:#d7d7d7;text-align:center;padding:0 5px;min-width:64px;outline:none;border:0;border-radius:4px;color:#fff;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer}.NewsletterSignupModal_Component .klaviyo_messages{margin-top:5px;font-family:"Lato", sans-serif;font-size:12px;font-weight:normal}.NewsletterSignupModal_Component .klaviyo_messages .error_message{display:flex;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;color:#c43e22;letter-spacing:.5px;text-align:left;margin-top:10px}.NewsletterSignupModal_Component .klaviyo_messages .error_message:before{display:inline-block;content:"\\2191";font-size:10px;padding:0 5px}.NewsletterSignupModal_Component .klaviyo_messages .success_message{color:#ea6a2b;background-color:#fff;padding:9px;border-radius:3px;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;text-align:center;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4429/newsletter-sign-up-image-mobile.jpg?auto=format&fit=max")}@media (min-width: 1000px){.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4430/iphone-sign-up-image-desktop.jpg?auto=format&fit=max")}}\n'
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        ".NewsletterSignupFooter{display:block;background:#f4f4f4;padding:20px 15px}.NewsletterSignupFooter_Component{margin:20px auto;min-height:42px;max-width:454px}.NewsletterSignupFooter_Disclaimer{max-width:454px;margin:0 auto}.NewsletterSignupFooter_Disclaimer a,.NewsletterSignupFooter_Disclaimer a:hover,.NewsletterSignupFooter_Disclaimer a:visited,.NewsletterSignupFooter_Disclaimer a:active{color:#ea6a2b}@media (min-width: 1280px){.NewsletterSignupFooter_Heading{line-height:2.5rem;font-size:1.75rem}}\n"
                }}
            />
            <div className="NewsletterSignupFooter">
                <h2 className="NewsletterSignupFooter_Heading br_text-2xl-serif br_text-center ">
                    Get exclusive access to new products, deals &amp; surprise treats.
                </h2>
                <div className="NewsletterSignupFooter_Component">
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                            __html:
                                '\n      .NewsletterSignupFooter_Component {\n        position: relative;\n        font-family: "Lato", sans-serif;\n        -webkit-font-smoothing: antialiased;\n     text-align: center;      }\n\n      .NewsletterSignupFooter_Component .klaviyo_helptext {\n        font-family: "PT Serif", serif;\n        padding-top: 10px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_gdpr_text {\n        font-family: "PT Serif", serif;\n        font-size: 14px;\n        line-height: 1.3;\n      }\n\n      .NewsletterSignupFooter_Component label {\n        color:#222;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group {\n        display: inline-flex;\n        transform-style: preserve-3d;\n        backface-visibility: hidden;\n        transition: transform .4s ease, background-color .4s ease;\n        height: 42px;\n        border-radius: 4px;\n        margin: 0;\n        background-color: #fff;\n        border: 1px solid #FFF;\n        padding: 3px;\n        box-shadow: 0 17px 9px -15px rgb(0 0 0 / 50%);\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group .klaviyo_form_actions {\n        text-align:left;\n       }\n\n      .NewsletterSignupFooter_Component input[type=checkbox] + label {\n        display: inline;\n        font-weight:normal;\n        padding-left:5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=text], .NewsletterSignupFooter_Component input[type=email] {\n        font-family: Lato, sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        border-radius: 0px;\n        border: none;\n        outline: none;\n        transition: background .1s ease;\n width: 250px;      }\n\n      .NewsletterSignupFooter_Component input[type=email]::placeholder {\n        color: #b0b0b0;\n        letter-spacing: 0.5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=email]:focus + .klaviyo_form_actions .klaviyo_submit_button,\n      .NewsletterSignupFooter_Component input[type=email]:valid + .klaviyo_form_actions .klaviyo_submit_button {\n        background: #ea6a2b;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_submit_button {\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        background: #d7d7d7;\n        text-align: center;\n        padding: 0 5px;\n        min-width: 64px;\n        outline: none;\n        border: 0;\n        border-radius: 4px;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n        cursor: pointer;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages {\n        margin-top: 5px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: normal;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message {\n        display: flex;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        color: #c43e22;\n        letter-spacing: .5px;\n        text-align: left;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message:before {\n        display: inline-block;\n        content: "\\2191";\n        font-size: 10px;\n        padding: 0 5px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .success_message {\n        color: #ea6a2b;\n        background-color: #fff;\n        padding: 9px;\n        border-radius: 3px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        text-align: center;\n      }\n    '
                        }}
                    />
                    <form action={async formData => { await sendEmail(formData); }}
                    >

                        <div className="klaviyo_field_group">
                            <input
                                className="email-input"
                                type="email"
                                name="email"
                                id="k_id_email"
                                placeholder="Enter your email to register"
                                required
                            />
                            <div className="klaviyo_form_actions">
                                <button type="submit" className="klaviyo_submit_button" style={{ padding: "0.5em" }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className="NewsletterSignupFooter_Disclaimer br_text-xs-sans-spaced br_text-grey-400 br_text-center">
                    You are signing up to receive product updates and newsletters. By
                    signing up, you are consenting to our{" "}
                    <a
                        href="/customer-care/privacy-policy"
                        data-auto-id="true"
                        id="page-footer-customer-care-privacy-policy-1"
                    >
                        privacy policy
                    </a>{" "}
                    but you can opt out at any time.
                </p>
            </div>
            <section className="SiteFooter__wrapper" id="footer">
                <nav className="SiteFooterSitemap">
                    <div
                        data-roybell=""
                        data-location="footerSocial"
                        className="SiteFooterSitemap__social column"
                    >
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/socialtapnfc.au/"
                                    data-auto-id="true"
                                    id="page-footer-http-www-instagram-com-bellroy-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 44 44"
                                        height="20px"
                                    >
                                        <title>Instagram</title>
                                        <defs>
                                            <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
                                                <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
                                                <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
                                                <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill="url(#instagramGradient)"
                                            d="M21.3,14.4c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9c3.8,0,6.9-3.1,6.9-6.9c0,0,0,0,0,0
      C28.3,17.5,25.2,14.4,21.3,14.4C21.3,14.4,21.3,14.4,21.3,14.4z"
                                        />
                                        <path
                                            fill="url(#instagramGradient)"
                                            d="M43.9,12.9c0-1.8-0.4-3.6-1-5.3c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-2-3.9-2.5c-1.7-0.6-3.5-1-5.3-1
    C28.7,0,28,0,22,0s-6.7,0-9.1,0.1c-1.8,0-3.6,0.4-5.3,1C6.1,1.7,4.8,2.6,3.7,3.7c-1.1,1.1-2,2.4-2.5,3.9c-0.6,1.7-1,3.5-1,5.3
    C0,15.3,0,16,0,22s0,6.7,0.1,9.1c0,1.8,0.4,3.6,1,5.3c0.6,1.5,1.4,2.8,2.5,3.9c1.1,1.1,2.4,2,3.9,2.5c1.7,0.6,3.5,1,5.3,1
    C15.3,44,16,44,22,44s6.7,0,9.1-0.1c1.8,0,3.6-0.4,5.3-1c1.5-0.6,2.8-1.4,3.9-2.5c1.1-1.1,2-2.4,2.5-3.9c0.6-1.7,1-3.5,1-5.3
    C44,28.7,44,28,44,22S44,15.3,43.9,12.9z M21.3,32c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.7,10.7-10.7S32,15.4,32,21.3S27.2,32,21.3,32
    L21.3,32z M35.3,13.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C38.7,11.8,37.2,13.3,35.3,13.3
    C35.3,13.3,35.3,13.3,35.3,13.3z"
                                        />
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="#"
                                    data-auto-id="true"
                                    id="page-footer-https-www-facebook-com-bellroy-official-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 44 44"
                                        height="20px"
                                        style={{ marginRight: "-10px" }}
                                    >
                                        <title>Facebook</title>
                                        <path
                                            d="M14.3,44V23.9h6.5l1-7.8h-7.5v-5c0-2.3,0.6-3.8,3.7-3.8h4v-7C20.1,0.1,18.1,0,16.2,0c-5.8,0-9.7,3.7-9.7,10.3v5.8H0v7.8h6.5V44H14.3z"
                                            fill="#1877F2"
                                        />
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="#"
                                    data-auto-id="true"
                                    id="page-footer-https-www-tiktok-com-bellroy-official-1"
                                >
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width={20}
  height={20}
  viewBox="0 0 256 256"
  xmlSpace="preserve"
>
  <defs></defs>
  <g
    style={{
      stroke: "none",
      strokeWidth: 0,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10,
      fill: "none",
      fillRule: "nonzero",
      opacity: 1
    }}
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
  >
    <path
      d="M 36.203 35.438 v -3.51 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -15.047 0 -27.289 12.244 -27.289 27.291 c 0 9.23 4.613 17.401 11.65 22.342 c -4.712 -5.039 -7.332 -11.681 -7.328 -18.58 C 9.559 47.88 21.453 35.784 36.203 35.438"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,242,234)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
    <path
      d="M 36.847 75.175 c 6.714 0 12.19 -5.341 12.44 -11.997 l 0.023 -59.417 h 10.855 c -0.232 -1.241 -0.349 -2.5 -0.35 -3.762 H 44.989 l -0.025 59.419 c -0.247 6.654 -5.726 11.993 -12.438 11.993 c -2.015 0.001 -4 -0.49 -5.782 -1.431 C 29.079 73.238 32.839 75.171 36.847 75.175 M 80.441 23.93 v -3.302 c -3.989 0.004 -7.893 -1.157 -11.232 -3.339 c 2.928 3.371 6.869 5.701 11.234 6.641"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,242,234)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
    <path
      d="M 69.209 17.286 c -3.272 -3.744 -5.075 -8.549 -5.073 -13.522 h -3.972 C 61.203 9.318 64.472 14.205 69.209 17.286 M 32.526 46.486 c -6.88 0.008 -12.455 5.583 -12.463 12.463 c 0.004 4.632 2.576 8.88 6.679 11.032 c -1.533 -2.114 -2.358 -4.657 -2.358 -7.268 c 0.007 -6.88 5.582 -12.457 12.463 -12.465 c 1.284 0 2.515 0.212 3.677 0.577 V 35.689 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -0.216 0 -0.429 0.012 -0.643 0.016 v 11.626 C 35.014 46.685 33.774 46.49 32.526 46.486"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(255,0,79)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
    <path
      d="M 80.441 23.93 v 11.523 c -7.689 0 -14.81 -2.459 -20.627 -6.633 v 30.13 c 0 15.047 -12.24 27.289 -27.287 27.289 c -5.815 0 -11.207 -1.835 -15.639 -4.947 c 5.151 5.555 12.384 8.711 19.959 8.709 c 15.047 0 27.289 -12.242 27.289 -27.287 v -30.13 c 6.009 4.321 13.226 6.642 20.627 6.633 V 24.387 c -1.484 0 -2.927 -0.161 -4.323 -0.46"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(255,0,79)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
    <path
      d="M 59.813 58.949 v -30.13 c 6.009 4.322 13.226 6.642 20.627 6.633 V 23.93 c -4.364 -0.941 -8.305 -3.272 -11.232 -6.644 c -4.737 -3.081 -8.006 -7.968 -9.045 -13.522 H 49.309 l -0.023 59.417 c -0.249 6.654 -5.726 11.995 -12.44 11.995 c -4.007 -0.004 -7.768 -1.938 -10.102 -5.194 c -4.103 -2.151 -6.676 -6.399 -6.681 -11.032 c 0.008 -6.88 5.583 -12.455 12.463 -12.463 c 1.282 0 2.513 0.21 3.677 0.577 V 35.438 C 21.453 35.784 9.559 47.88 9.559 62.713 c 0 7.173 2.787 13.703 7.328 18.58 c 4.578 3.223 10.041 4.95 15.639 4.945 C 47.574 86.238 59.813 73.996 59.813 58.949"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(255,255,255)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
  </g>
</svg>






                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="#"
                                    data-auto-id="true"
                                    id="page-footer-https-www-youtube-com-channel-ucy6vodc_wyzj4rlslixgp1q-1"
                                >
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 48 48"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <title>Whatsapp</title>
                                            <defs> </defs>{" "}
                                            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                {" "}
                                                <g
                                                    id="Color-"
                                                    transform="translate(-700.000000, -360.000000)"
                                                    fill="#67C15E"
                                                >
                                                    {" "}
                                                    <path
                                                        d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                                                        id="Whatsapp"
                                                    >
                                                        {" "}
                                                    </path>{" "}
                                                </g>{" "}
                                            </g>{" "}
                                        </g>
                                    </svg>




                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="column collapsable-section" id='footId1' onClick={handleFoot}>
                        <h4 >
                            HELP
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/contact"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-contact-us-1"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/term"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-terms-conditions-1"
                                >
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-privacy-policy-2"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ship"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-privacy-policy-2"
                                >
                                    Shipping Information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/return"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-privacy-policy-2"
                                >
                                    Returns and Refunds
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="column collapsable-section" id='footId2' onClick={handleFoot2}>
                        <h4>
                            Shop Collections
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/product?id=658545e26a1e745f48b9f156"
                                    data-auto-id="true"
                                    id="page-footer-collection-new-releases-1"
                                >
                                    Business Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/product?id=65855d8e6834bc74637db118"
                                    data-auto-id="true"
                                    id="page-footer-collection-bestsellers-1"
                                >

                                    Google Review Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/product?id=6696707be53994f0bf8453ae"
                                    data-auto-id="true"
                                    id="page-footer-coming-soon-1"
                                >

                                    Social Media Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/product?id=658562fb6834bc74637db148"
                                    data-auto-id="true"
                                    id="page-footer-collection-slim-your-wallet-1"
                                >
                                    Review Stands
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="column collapsable-section" id='footId3' onClick={handleFoot3}>
                        <h4>
                            ABOUT
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/about"
                                    data-auto-id="true"
                                    id="page-footer-about-us-1"
                                >
                                    Our Story
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column ">  </div>
                </nav>
                <section className="SiteFooter__footNote">
                    <div className="SiteFooter__footNote__inner">
                        <div className="logo">

                            <a
                                href="https://greatplacetowork.com.au/gptwcertified/bellroy/"
                                data-auto-id="true"
                                id="page-footer-https-greatplacetowork-com-au-gptwcertified-bellroy-1"
                            >

                            </a>
                        </div>
                        <div className="text">
                            <div className="column">
                                <p className="question">
                                    Got a question?{" "}
                                    <span>
                                        Contact{" "}
                                        <a
                                            href="mailto:info@hadizproductions.com"
                                            data-auto-id="true"
                                            id="page-footer-mailto-support-bellroy-com-1"
                                        >
                                            info@hadizproductions.com
                                        </a>
                                    </span>
                                </p>
                            </div>
                            <div className="column">
                                <span className="copyright">
                                    All rights reserved © {(new Date().getFullYear())} Social Tap
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer