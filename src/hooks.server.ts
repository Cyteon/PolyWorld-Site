import mongoose from "mongoose";
import { RetryAfterRateLimiter } from "sveltekit-rate-limiter/server";
import type { Handle } from "@sveltejs/kit";

import { MONGODB_URI, LIMITER_COOKIE_NAME, LIMITER_COOKIE_SECRET } from "$env/static/private"

mongoose.connect(MONGODB_URI).then(() => { console.log("Connected to MongoDB") }).catch(console.error);

const limiters = {
    "/api/emails": {
        limiter: new RetryAfterRateLimiter({
            cookie: {
                name: LIMITER_COOKIE_NAME,
                secret: LIMITER_COOKIE_SECRET,
                rate: [[2, "h"], [4, "6h"], [8, "d"]],
                preflight: false,
              },
        }),
        methods: ["PUT"],
    },
};

export const handle: Handle = async ({ event, resolve }) => {
    let limiter = limiters[event.url.pathname]?.limiter;

    if (
        limiter &&
        limiters[event.url.pathname].methods.includes(event.request.method)
    ) {
        const status = await limiter.check(event);

        if (status.limited) {
            let response = Response.json(
                {
                    message: `You are being rate limited. Please try after ${status.retryAfter} seconds.`,
                },
                {
                    status: 429,
                    headers: { "Retry-After": status.retryAfter.toString() },
                },
            );
            
            return response;
        }
    }

    const response = await resolve(event);
    return response;
};