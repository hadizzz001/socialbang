"use server";
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");


    if (firstname != null) {
        resend.emails.send({
            from: "info@hadizproductions.com",
            to: "alihadimedlej001@gmail.com",
            subject: "New message from your website customer",
            text: "Name: " + firstname + " " + lastname + "\nEmail:" + email + "\nPhone:" + phone + "\n" + message,
        })
    } else {
        resend.emails.send({
            from: "info@hadizproductions.com",
            to: "alihadimedlej001@gmail.com",
            subject: "New subscriber from your website",
            text: "Email:" + email,
        })
    }
    redirect('/thank');

}

