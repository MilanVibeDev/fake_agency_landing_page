Agency info: 

Agency Name: NovaForge Creative
Tagline (Hero headline):
We Forge Digital Breakthroughs That Turn Brands Into Icons
Subheadline:
Full-service creative agency specializing in bold branding, high-impact digital campaigns, web experiences, and performance marketing. Based in Austin, Texas.
Hero Section Suggestion

Background: Dynamic abstract video/gradient with subtle motion (tech-meets-creativity vibe)
Main CTA button: "Start Your Project" or "Get a Free Strategy Call"
Secondary text: "Trusted by innovative brands since 2018 • 40+ launched campaigns • 300%+ average ROI for clients"

About Us / Who We Are
NovaForge Creative is a boutique agency of strategists, designers, developers, and growth hackers obsessed with creating work that doesn't just look good—it performs.
We help ambitious companies in tech, e-commerce, consumer goods, and SaaS break through the noise with strategy-first creativity and data-driven execution.

Location: Austin, Texas (with remote team members across the US)
Team size: 18 full-time creatives & strategists
Founded: 2018
Core values: Boldness • Precision • Results • Collaboration

Services We Offer

Brand Strategy & Identity — Naming, positioning, visual systems, brand guidelines
Web & App Design/Development — Custom websites, Webflow & Framer builds, Shopify/Headless e-commerce
Digital Advertising — Meta Ads, Google Ads, TikTok, LinkedIn, programmatic, creative testing & scaling
Content & Social Media — Strategy, content production, community management, influencer partnerships
Motion & Video Production — Explainer videos, social reels, brand films, 3D animation
Performance Creative — Conversion-focused ad creatives, A/B testing, CRO

Our Partners & Technologies
We proudly partner with industry-leading platforms:

Webflow Partner
Shopify Plus Partner
Google Partner
Meta Business Partner
Figma Organization
Adobe Creative Cloud Enterprise
Klaviyo & Attentive (email/SMS)
Amplitude & Mixpanel (analytics)

(You can display these as clean grayscale logos in a horizontal scroll or grid)
Showcases / Selected Work (Portfolio Highlights)
Here are 4–5 fictional but plausible case studies:

TechNova AI (SaaS AI platform)
Rebrand + full website redesign + launch campaign
Result: 4.2× increase in demo signups, 180% MoM growth in qualified leads

VibeThread Apparel (Sustainable streetwear brand)
Brand identity + Shopify store + Meta/TikTok ad scaling
Result: From $80K to $1.4M monthly revenue in 14 months

Pulse Fitness (Fitness tech wearable)
Product launch video series + performance creative suite
Result: 2.8M impressions, 47% CTR above industry average

EcoBloom Home (Sustainable home goods DTC)
Full funnel rebuild: branding, site, email flows, paid social
Result: 320% ROAS, reduced CAC by 58%

Forge Robotics (Industrial automation startup)
B2B positioning + LinkedIn content engine + website
Result: 5× increase in inbound SQLs


(For a real page, each would link to a detailed case study with before/after metrics, images/mockups, and quotes)
Testimonials / What Clients Say
(Use these with fake photos/names/companies and 5-star icons)
"NovaForge didn't just deliver a website—they gave us a brand that finally felt like us. The results speak for themselves: best quarter in company history."
Sarah Chen
Founder & CEO, TechNova AI
★★★★★
"Their creative team understands performance marketing better than most media buyers we've worked with. The ad creatives they produced converted 3× better than anything in-house."
Marcus Rivera
Head of Growth, VibeThread Apparel
★★★★★
"Working with NovaForge felt like having an extension of our team. Professional, responsive, and genuinely invested in our success."
Lauren Brooks
Marketing Director, Pulse Fitness
★★★★★
"They turned our vague ideas into a cohesive, high-converting brand experience. Worth every penny."
James Patel
Co-founder, EcoBloom Home
★★★★★
Why Choose NovaForge?

Strategy before pixels — every project starts with deep brand & audience understanding
No cookie-cutter templates — 100% custom work
Transparent reporting — monthly growth dashboards + clear KPIs
Fast execution — most websites launch in 8–12 weeks
Results-obsessed — we tie our success to your numbers

Call to Action Sections (repeat 2–3 times)
Ready to build something legendary?
Book a free 30-minute discovery call. No pressure, just real talk about your goals.
Primary CTA button: Schedule a Free Strategy Call
Secondary: View Our Work or See Pricing
Footer

NovaForge Creative
Austin, Texas | hello@novaforge.co | (512) 555-0199
Quick links: Services • Work • About • Contact • Blog
Social icons: Instagram, LinkedIn, Behance, TikTok, YouTube
© 2026 NovaForge Creative. All rights reserved.

This content is ready to plug into HTML/CSS/Webflow/Framer/etc. Feel free to tweak numbers, add more fake projects, or ask me to expand any section (like writing full case study blurbs or pricing tiers)!

###

Create a landing page for that agency.  Website should have hover, scroll and click animations with a modern design.

Tech:
- React JS
- Vanilla CSS
- Javascript
- Vite
- JSX


Here are some prompts from 21st.dev to add to thsi website:
1. Background: You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
background-beams.tsx
"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
      "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
      "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
      "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
      "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
      "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
      "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
      "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
      "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
      "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
      "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
      "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
      "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
      "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
      "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
      "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
      "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
      "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
      "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
      "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
      "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
      "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
      "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
      "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
      "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
      "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
      "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
      "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
    ]
    return (
      <div
        className={cn(
          "absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className,
        )}
      >
        <svg
          className=" z-0 h-full w-full pointer-events-none absolute "
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419"
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="32.5%" stopColor="#6344F5"></stop>
                <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  },
)

BackgroundBeams.displayName = "BackgroundBeams"


demo.tsx
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <Input
          type="email"
          placeholder="hi@manuarora.in"
          className="w-full mt-4 relative z-10"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { BackgroundBeamsDemo };
```

Copy-paste these files for dependencies:
```tsx
shadcn/input
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

Install NPM dependencies:
```bash
framer-motion
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
 ###
 2. Companies worked with: You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
logos3.tsx
// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-64">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };


demo.tsx
import { Logos3 } from "@/components/blocks/logos3"

const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://www.shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };

```

Copy-paste these files for dependencies:
```tsx
shadcn/carousel
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```
```tsx
shadcn/card
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

Install NPM dependencies:
```bash
embla-carousel-auto-scroll, lucide-react, embla-carousel-react, @radix-ui/react-slot, class-variance-authority
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
### 
3. Testimonials: You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
testimonial-cards.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
};

demo.tsx
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    testimonial: "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square"
  },
  {
    id: 2,
    testimonial: "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.", 
    author: "Adrian Y. - Product Marketing @ Meta"
  },
  {
    id: 3,
    testimonial: "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
    author: "Devin R. - Growth Marketing Lead @ OpenAI"
  }
];

function ShuffleCards() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50 min-h-screen h-full w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards }
```

Install NPM dependencies:
```bash
framer-motion
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
