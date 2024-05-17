"use server";

import type { Stripe } from "stripe";

import { headers } from "next/headers";

 
import { formatAmountForStripe } from "@/utils/stripe-helpers";
import { stripe } from "@/libs/stripe";
import { Decimal } from "@prisma/client/runtime/library";

export async function createCheckoutSession(
  data: FormData,
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode",
  ) as Stripe.Checkout.SessionCreateParams.UiMode;

  const origin: string = headers().get("origin") as string;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment", 
      submit_type: "donate",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "Custom amount donation",
            },
            unit_amount: 100* 100,
          },
        },
      ],
      ...(ui_mode === "hosted" && {
        success_url: "https://socialbang.netlify.app/done",
        cancel_url: "https://socialbang.netlify.app/checkout",
      }),
      ...(ui_mode === "embedded" && {
        return_url: "https://socialbang.netlify.app/done",
      }),
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(
  data: number,
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: data * 100,
      automatic_payment_methods: { enabled: true },
      currency: "usd",
    });

  return { client_secret: paymentIntent.client_secret as string };
}
