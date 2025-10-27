---
title: "Building My Own Site from the Ground Up (Part 2: Getting Things Running)"
tags: "My Digital Home"
description: Getting Eleventy up and running with WebC and DaisyUI — and bumping into my first few real challenges.
date: 2025-10-11T22:00:00+08:00
---

A quick recap — the tech stack I ended up using for this site is [Eleventy (11ty)](https://www.11ty.dev/) with the [WebC](https://webc-lang.org/) templating engine, and [DaisyUI](https://daisyui.com/) for styling.

Setting everything up was straightforward, much like any other modern web project. I used `pnpm` to initialize a new project, install the dependencies, and create the necessary folders and files.

Configuring Eleventy was smooth too, thanks to the clear documentation from both [Eleventy](https://www.11ty.dev/docs/config/) and [DaisyUI](https://daisyui.com/docs/install/11ty/?lang=en). Most of it worked right out of the box.

The real challenge came when I started experimenting with WebC.
Maybe it’s just me thinking too much in a React way, but getting used to how WebC handles templating took some time. I wanted to build a breadcrumb system for my blog posts (like this one) and tried using the built-in `eleventyNavigationBreadcrumb` filter from the navigation plugin — but I just couldn’t get it to behave the way I expected. Even Claude didn’t have much luck helping me debug it.

I suspect the issue was more about how I approached the problem rather than WebC itself. But oh well — no breadcrumbs for now.

On a brighter note, I finally got my own domain name! 🎉
Setting it up through Cloudflare was surprisingly simple, and with the help of a few GitHub Actions, everything now deploys automatically. That’s a topic I’ll probably dive into another time.

For now, I’m just happy to have the site running and slowly taking shape — one small win at a time.
