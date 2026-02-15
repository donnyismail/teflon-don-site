# AI Automation Blueprint -- Teflon Don LLC

**Architect:** AI Systems Division, Teflon Don LLC
**Version:** 1.0
**Date:** February 2026
**Scope:** End-to-end automation for teflondon.com operations and sellable AI services

---

## Table of Contents

1. [Website Chatbot System](#1-website-chatbot-system)
2. [Automated Lead Follow-Up System](#2-automated-lead-follow-up-system)
3. [Client Onboarding Automation](#3-client-onboarding-automation)
4. [AI Services to Sell to Clients](#4-ai-services-to-sell-to-clients)
5. [Tech Stack Recommendations](#5-tech-stack-recommendations)

---

## 1. Website Chatbot System

### 1.1 Platform Recommendation: Crisp (Winner)

| Platform | Monthly Cost | AI Capable | Custom Branding | Code Access | Verdict |
|----------|-------------|------------|-----------------|-------------|---------|
| Tidio | $29/mo (Communicator) | Yes (Lyro AI, extra $39/mo) | Partial | Limited | Overkill UI, expensive AI add-on |
| Crisp | $25/mo (Pro) | Yes (built-in AI) | Full | Full JS SDK | **Best value. Clean. Full control.** |
| Custom (Node.js + Claude API) | ~$5-15/mo API costs | Full control | Total | 100% yours | Best long-term, highest upfront effort |

**Recommendation:** Start with Crisp for the Teflon Don site (fast to deploy, professional). Build custom chatbots for clients as a premium service (higher margins).

**Why Crisp wins for Teflon Don:**
- $25/month gets chatbot + live chat + email integration
- JavaScript SDK allows full conversation flow customization
- MagicReply AI can be trained on your FAQ content
- Matches the dark theme of the site with full CSS override
- Webhook support for SMS notifications to Donny
- No Crisp branding on Pro plan

### 1.2 Chatbot Conversation Flow

```
CONVERSATION FLOW DIAGRAM
==========================

[Visitor lands on teflondon.com]
         |
         v
  +------------------+
  |  TRIGGER: 8 sec  |
  |  on page, OR     |
  |  scroll to 40%,  |
  |  OR click chat   |
  +------------------+
         |
         v
  +------------------+
  | GREETING         |
  | "Hey -- I'm the  |
  | Teflon Don bot.  |
  | Donny built me   |
  | to make sure you |
  | get answers fast.|
  | What brings you  |
  | here today?"     |
  +------------------+
         |
         v
  +------+------+------+------+
  |      |      |      |      |
  v      v      v      v      v
[Need a] [Fix/  [SEO/  [AI/   [Just
website] redo   Google] Auto]  looking]
         site]
  |      |      |      |      |
  v      v      v      v      v
  +--[QUALIFY]--+      |      |
  |                    |      |
  v                    v      v
[BUDGET      [QUALIFY    [FAQ
 QUESTIONS]   AI LEAD]    MODE]
  |             |          |
  v             v          v
[HOT LEAD   [HOT LEAD  [Answer +
 CAPTURE]    CAPTURE]   soft CTA]
  |             |
  v             v
[BOOK CALL / COLLECT INFO]
         |
         v
[SMS NOTIFICATION TO DONNY]
[AUTO-REPLY EMAIL TO LEAD]
```

### 1.3 Complete Conversation Script

```
=============================================================
CHATBOT SCRIPT -- TEFLON DON WEBSITE
=============================================================

-------------------------------------------------------------
TRIGGER CONDITIONS
-------------------------------------------------------------
- Visitor on any page for 8+ seconds
- Visitor scrolls past 40% of page
- Visitor clicks the chat icon
- Visitor is on /contact or #contact section for 3+ seconds
- Returning visitor (cookie detected)

-------------------------------------------------------------
GREETING (First-time visitor)
-------------------------------------------------------------

BOT: "Hey -- I'm the Teflon Don bot. Donny built me so you
     get answers without waiting around. What brings you
     here today?"

     [I need a website]
     [My current site needs help]
     [I want to rank on Google]
     [I'm interested in AI/automation]
     [Just browsing -- got questions]

-------------------------------------------------------------
GREETING (Returning visitor)
-------------------------------------------------------------

BOT: "Welcome back. Still thinking it over, or ready to
     get that audit started?"

     [Let's do the free audit]
     [I have more questions]
     [Just browsing]

=============================================================
BRANCH 1: "I need a website"
=============================================================

BOT: "Good -- you're in the right place. Quick question so I
     can point you the right direction: what kind of business
     do you run?"

     [Contractor / Home Services]
     [Restaurant / Food]
     [Salon / Beauty]
     [Other local business]
     [Online / E-commerce]

(User selects any option)

BOT: "Got it. [BUSINESS TYPE] businesses are exactly who Donny
     builds for. Do you currently have any website at all, even
     a bad one?"

     [No website at all]
     [Yes, but it's outdated/broken]
     [Yes, but it doesn't get leads]

--- If "No website at all" ---

BOT: "That means every customer Googling what you do is finding
     your competitor instead. The Launch Pad package ($499)
     gets you a custom site live in 7 days. One-time cost.

     Want to know more about pricing, or should I get Donny
     to reach out for a free audit?"

     [Tell me about pricing]
     [Get Donny to reach out]
     [Book a call]

--- If "Yes, but outdated/broken" or "doesn't get leads" ---

BOT: "That's fixable. Donny does a free audit where he pulls
     up your site, checks your Google ranking, and tells you
     exactly what's costing you customers. No charge, no pitch.

     Want me to set that up?"

     [Yes, set up the free audit]
     [Tell me about pricing first]
     [I have more questions]

=============================================================
BRANCH 2: "My current site needs help"
=============================================================

BOT: "What's the main problem?"

     [It looks outdated]
     [It's slow / broken on mobile]
     [Nobody can find it on Google]
     [It doesn't convert visitors to calls]
     [All of the above]

(User selects any option)

BOT: "Classic. That's literally what Teflon Don fixes. The
     free audit takes 5 minutes and Donny will show you
     exactly where you're leaking money.

     What's your website URL so he can pull it up?"

(User types URL)

BOT: "Perfect. I'll pass [URL] to Donny. He'll audit it and
     send you a breakdown within 24 hours.

     What's the best way to reach you?"

     [I'll drop my email]
     [Text me -- here's my number]
     [Book a call instead]

=============================================================
BRANCH 3: "I want to rank on Google"
=============================================================

BOT: "Smart. 97% of customers Google before they buy locally.
     Quick question: do you have a Google Business Profile
     set up?"

     [Yes]
     [No / Not sure]
     [What's that?]

--- If "No" or "What's that?" ---

BOT: "That's the box that shows up when someone Googles a local
     business -- map, reviews, phone number, hours. If you don't
     have one, you're invisible on Google Maps.

     Donny sets that up as part of the Revenue Machine package
     ($999) along with a full SEO campaign. Or he can audit
     your current situation for free first.

     What sounds right?"

     [Tell me about the $999 package]
     [Start with the free audit]
     [I have questions about SEO]

=============================================================
BRANCH 4: "I'm interested in AI/automation"
=============================================================

BOT: "Nice -- that's where things get interesting. What kind
     of business are you running? I'll tell you what automation
     would actually make you money."

     [Contractor / Home Services]
     [Restaurant / Food]
     [Salon / Beauty / Med Spa]
     [Professional Services]
     [Other]

(User selects any option)

BOT: "For [BUSINESS TYPE], here's what Donny typically builds:

     - Chatbot that answers customer questions 24/7
     - Automated follow-up when someone fills out your form
     - Review request system (sends texts after service)
     - Smart scheduling that books appointments without you

     This falls under the Market Leader package ($2,499) which
     includes the full AI automation suite, or it can be added
     to any existing site.

     Want the details, or should I connect you with Donny?"

     [Break down the pricing]
     [Connect me with Donny]
     [How does the chatbot work?]

=============================================================
BRANCH 5: "Just browsing -- got questions"
=============================================================

BOT: "No problem. Ask me anything. Here are the ones I get
     the most:"

     [How much does a website cost?]
     [How long does it take?]
     [Do I own my website?]
     [What's the guarantee?]
     [What's included in each package?]
     [How is this so cheap?]

=============================================================
FAQ AUTO-RESPONSES
=============================================================

--- "How much does a website cost?" ---

BOT: "Flat rates, no surprises:

     Launch Pad: $499 (one-time)
     - Custom website, mobile-first, SEO baked in
     - Year 1 hosting free, $15/mo after

     Revenue Machine: $999 (one-time)  [MOST POPULAR]
     - Everything above + Google Business Profile + SEO
       campaign + AI chatbot + booking system
     - Year 1 free, $25/mo after

     Market Leader: $2,499 (one-time)
     - Everything above + full AI automation + lead
       follow-up + content strategy + social media
     - Year 1 free, $50/mo after

     One customer from your new site covers the cost.
     Everything after that is profit."

     [Which one is right for me?]
     [Get the free audit]
     [Talk to Donny]

--- "How long does it take?" ---

BOT: "Free mockup within 48 hours. Full site live in 5-7
     business days. That's not a sales pitch -- that's the
     actual timeline because one person doing the work is
     faster than an agency playing telephone."

--- "Do I own my website?" ---

BOT: "100%. Code, design, domain, content -- all yours.
     No lock-in. No hostage situation. If you want to leave
     tomorrow, you take everything with you. That's the deal."

--- "What's the guarantee?" ---

BOT: "The audit is free. The mockup is free. You see exactly
     what you're getting before you spend a dollar. Don't
     love it? Walk away. Nothing owed. Donny takes on the
     risk because he's that confident in the work."

--- "How is this so cheap?" ---

BOT: "No office. No account managers. No designers handing
     off to developers handing off to QA. One person does
     all the work. You pay for the work, not the overhead
     of a 15-person agency. That's why they charge $10K
     and Donny charges $499."

=============================================================
LEAD CAPTURE SEQUENCE (All branches converge here)
=============================================================

--- Option A: "Get Donny to reach out" / "Connect me" ---

BOT: "Perfect. I just need a couple things so Donny can
     reach you:

     What's your name?"

(User types name)

BOT: "And the best way to reach you? Email or phone?"

(User provides contact)

BOT: "Last one -- what's your business name and what do
     you do? (So Donny can look you up before he calls.)"

(User provides business info)

BOT: "Done. Donny will reach out within a few hours --
     usually same day. If it's urgent, you can always
     text him directly: (518) 698-9870.

     Anything else I can help with?"

>>> SYSTEM: Send SMS to Donny's phone
>>> SYSTEM: Send auto-reply email to lead
>>> SYSTEM: Log lead in CRM / spreadsheet

--- Option B: "Book a call" ---

BOT: "Here's Donny's calendar. Pick any open slot and
     you'll get a confirmation with a Zoom/phone link:

     [CALENDLY EMBED / LINK]

     Can't find a time that works? Text him at
     (518) 698-9870 and he'll make it work."

--- Option C: "Tell me about pricing" ---

BOT: (Displays pricing FAQ, then):

     "Want me to connect you with Donny, or do you want
     to book a call to talk through which package fits?"

     [Connect me with Donny]
     [Book a call]
     [I need to think about it]

--- If "I need to think about it" ---

BOT: "No pressure. If you want, drop your email and I'll
     send you a quick summary of everything we talked about.
     No spam, no drip campaigns. Just the info."

     [Sure, here's my email]
     [No thanks, I'll come back]

=============================================================
NOTIFICATION TO DONNY (Hot Lead Trigger)
=============================================================

Triggers SMS when ANY of these happen:
- Lead provides contact info
- Lead books a call
- Lead asks about pricing AND provides business type
- Lead says "urgent" or "ASAP" or "today"

SMS Format:
"NEW LEAD -- Teflon Don Bot
Name: [NAME]
Business: [BUSINESS]
Contact: [EMAIL/PHONE]
Interested in: [SERVICE]
Budget signal: [TIER DISCUSSED]
Hot level: [HIGH/MEDIUM/LOW]
Time: [TIMESTAMP]"
```

### 1.4 Installation Code for Crisp

Add this snippet right before the closing `</body>` tag in `index.html`:

```html
<!-- Crisp Chat -->
<script type="text/javascript">
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "YOUR-CRISP-WEBSITE-ID";
  (function(){
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();

  // Custom styling to match Teflon Don dark theme
  window.$crisp.push(["config", "color:theme", "orange"]);
  window.$crisp.push(["config", "position:reverse", true]);

  // Auto-trigger after 8 seconds
  window.$crisp.push(["on", "session:loaded", function(){
    setTimeout(function(){
      window.$crisp.push(["do", "message:show", ["text",
        "Hey -- I'm the Teflon Don bot. Donny built me so you get answers without waiting around. What brings you here today?"
      ]]);
    }, 8000);
  }]);
</script>
```

### 1.5 Custom CSS Override for Crisp (Dark Theme Match)

```css
/* Add to Crisp dashboard > Settings > Chat Box > Custom CSS */
.crisp-client .cc-1brb6 .cc-1redy {
  background: #0E0E14 !important;
  border-color: rgba(255,255,255,0.06) !important;
}
.crisp-client .cc-1brb6 .cc-kegzk {
  background: linear-gradient(135deg, #FF4D00, #FF7A33) !important;
}
.crisp-client .cc-1brb6 .cc-1m2mf {
  font-family: 'Inter', sans-serif !important;
}
```

### 1.6 Webhook for SMS Notification (Crisp to Twilio)

Set up in Crisp Dashboard > Settings > Integrations > Webhooks:

**Webhook URL:** `https://your-server.com/api/crisp-lead-notify`

```javascript
// Node.js webhook handler: /api/crisp-lead-notify
const express = require('express');
const twilio = require('twilio');

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH = process.env.TWILIO_AUTH;
const TWILIO_FROM = process.env.TWILIO_FROM;    // Your Twilio number
const DONNY_PHONE = '+15186989870';

const client = twilio(TWILIO_SID, TWILIO_AUTH);

app.post('/api/crisp-lead-notify', async (req, res) => {
  const event = req.body;

  // Only fire on new conversations or when user provides contact info
  if (event.event === 'message:send' && event.data.type === 'text') {
    const content = event.data.content;
    const sessionId = event.data.session_id;

    // Check if message contains contact info patterns
    const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(content);
    const hasPhone = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(content);

    if (hasEmail || hasPhone) {
      const smsBody = [
        'NEW LEAD -- Teflon Don Bot',
        `Contact: ${content}`,
        `Session: ${sessionId}`,
        `Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`,
        '',
        'Check Crisp dashboard for full conversation.'
      ].join('\n');

      try {
        await client.messages.create({
          body: smsBody,
          from: TWILIO_FROM,
          to: DONNY_PHONE
        });
        console.log('SMS sent to Donny');
      } catch (err) {
        console.error('SMS failed:', err);
      }
    }
  }

  res.status(200).send('OK');
});
```

---

## 2. Automated Lead Follow-Up System

### 2.1 System Architecture

```
LEAD FOLLOW-UP PIPELINE
========================

[Contact Form Submitted on teflondon.com]
         |
         v
[Webhook fires to Make.com / n8n]
         |
    +----+----+
    |         |
    v         v
[Instant    [SMS to
 auto-reply  Donny]
 email]
    |
    v
[Wait 24 hours]
    |
    v
[Check: Did Donny reply manually?]
    |          |
   YES         NO
    |          |
    v          v
  [STOP]   [Follow-up #1 email]
              |
              v
           [Wait 48 hours (Day 3)]
              |
              v
           [Check: Any reply?]
              |          |
             YES         NO
              |          |
              v          v
            [STOP]   [Follow-up #2 email]
                        |
                        v
                     [Wait 96 hours (Day 7)]
                        |
                        v
                     [Check: Any reply?]
                        |          |
                       YES         NO
                        |          |
                        v          v
                      [STOP]   [Final follow-up email]
                                  |
                                  v
                               [Mark as COLD in CRM]
                               [Add to monthly newsletter]
```

### 2.2 Form Submission Handler (Replace Current mailto: Approach)

The current site uses a `mailto:` link which loses leads. Replace with a real backend:

```javascript
// Replace the handleSubmit function in index.html with:

async function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.sub-btn');
  btn.textContent = 'SENDING...';
  btn.disabled = true;

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    business: e.target.business.value,
    service: e.target.service.value,
    message: e.target.message.value,
    timestamp: new Date().toISOString(),
    source: 'website_contact_form'
  };

  try {
    // Option A: Send to Make.com webhook
    const response = await fetch('https://hook.us1.make.com/YOUR_WEBHOOK_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      btn.textContent = 'SENT -- DONNY WILL BE IN TOUCH';
      btn.style.background = '#22c55e';
      e.target.reset();
    } else {
      throw new Error('Submit failed');
    }
  } catch (err) {
    // Fallback to mailto if webhook fails
    const s = encodeURIComponent('Inquiry from ' + formData.name + ' -- Teflon Don');
    const b = encodeURIComponent(
      'Name: ' + formData.name +
      '\nEmail: ' + formData.email +
      '\nBusiness: ' + formData.business +
      '\nService: ' + formData.service +
      '\nMessage: ' + formData.message
    );
    window.location.href = 'mailto:dismail93@gmail.com?subject=' + s + '&body=' + b;
    btn.textContent = 'OPENING EMAIL...';
  }

  setTimeout(() => {
    btn.textContent = 'SEND IT';
    btn.style.background = '';
    btn.disabled = false;
  }, 5000);
}
```

### 2.3 Email Templates

#### INSTANT AUTO-REPLY (Sends within 30 seconds of form submission)

```
Subject: Got it, [FIRST_NAME] -- Donny here

---

Hey [FIRST_NAME],

This is Donny from Teflon Don. I got your message and I'm
on it.

Here's what happens next:

1. I'm going to pull up your business and take a look
   at your current online presence (or lack of one --
   no judgment, that's what I'm here to fix).

2. Within 24 hours, I'll get back to you with a straight
   answer on what I'd do and what it costs. No fluff.

3. If it makes sense, I'll put together a free mockup of
   your new site so you can see exactly what you'd get
   before spending a dime.

If you need something faster, text me: (518) 698-9870
I'm one guy, not a call center, so you'll actually get me.

Talk soon,
Donny
Teflon Don LLC
teflondon.com
(518) 698-9870

P.S. -- The audit and mockup are both free. If you don't
love what I come back with, you owe nothing. That's the deal.
```

#### FOLLOW-UP #1 -- 24 Hours, No Response

```
Subject: Quick follow-up on your [SERVICE_TYPE] project

---

Hey [FIRST_NAME],

Following up on your inquiry yesterday. I took a quick
look at [BUSINESS_NAME] and I have some thoughts.

[IF THEY PROVIDED A WEBSITE URL]:
I pulled up your site and spotted a few things that are
probably costing you customers right now. I'd rather show
you than tell you -- takes about 5 minutes on a call.

[IF NO WEBSITE]:
Right now, when someone in Houston Googles what you do,
your competitors are getting that call instead of you.
The fix is straightforward and I can walk you through it
in 5 minutes.

Here's my calendar if you want to grab a quick slot:
[CALENDLY LINK]

Or just reply to this email. Either way works.

-- Donny
(518) 698-9870
```

#### FOLLOW-UP #2 -- Day 3, No Response

```
Subject: Still interested, [FIRST_NAME]?

---

Hey [FIRST_NAME],

Not trying to blow up your inbox -- just wanted to make
sure my last email didn't end up in spam.

You reached out about [SERVICE_TYPE] for [BUSINESS_NAME]
a few days ago. If you're still thinking about it, here's
what I'd suggest:

Let me do the free audit. Takes me 10 minutes. I'll send
you a breakdown of where your business stands online,
what your competitors are doing, and exactly what I'd fix.

No commitment. No follow-up sales calls. Just the info.

Want me to run it?

-- Donny
```

#### FOLLOW-UP #3 (FINAL) -- Day 7, No Response

```
Subject: Last one from me, [FIRST_NAME]

---

Hey [FIRST_NAME],

This is my last follow-up -- I don't chase people.

If the timing isn't right, no hard feelings. Your
competitors aren't slowing down though, so when you're
ready to fix your online presence, I'm here:

- Text me: (518) 698-9870
- Email: dismail93@gmail.com
- Book a call: [CALENDLY LINK]

The free audit offer doesn't expire.

-- Donny
Teflon Don LLC
```

### 2.4 Make.com Workflow Configuration

```
MAKE.COM SCENARIO: "Teflon Don Lead Pipeline"
==============================================

MODULE 1: Webhook (Trigger)
  Type: Custom Webhook
  URL: https://hook.us1.make.com/YOUR_WEBHOOK_ID
  Incoming data: { name, email, business, service, message, timestamp }

MODULE 2: Google Sheets -- Add Row (Immediate)
  Spreadsheet: "Teflon Don Leads"
  Sheet: "All Leads"
  Row data:
    A: {{timestamp}}
    B: {{name}}
    C: {{email}}
    D: {{business}}
    E: {{service}}
    F: {{message}}
    G: "NEW"          (status column)
    H: ""             (Donny's notes)
    I: {{timestamp}}  (last_contact)

MODULE 3: Gmail -- Send Email (Instant Auto-Reply)
  To: {{email}}
  From: dismail93@gmail.com
  Subject: "Got it, {{first_name}} -- Donny here"
  Body: [AUTO-REPLY TEMPLATE FROM SECTION 2.3]

MODULE 4: Twilio -- Send SMS (Instant Notification to Donny)
  To: +15186989870
  Body:
    "NEW LEAD from website:
     Name: {{name}}
     Biz: {{business}}
     Wants: {{service}}
     Email: {{email}}
     Msg: {{message}}"

MODULE 5: Sleep -- Wait 24 hours

MODULE 6: Google Sheets -- Search Row
  Search: email = {{email}}, status column
  Check if status has changed from "NEW" to "CONTACTED"

MODULE 7: Router
  Path A: Status = "CONTACTED" --> STOP (Donny already replied)
  Path B: Status = "NEW" --> Continue to Follow-up #1

MODULE 8 (Path B): Gmail -- Send Follow-Up #1
  Subject: "Quick follow-up on your {{service}} project"
  Body: [FOLLOW-UP #1 TEMPLATE]

MODULE 9: Google Sheets -- Update Row
  Status: "FOLLOW_UP_1"
  last_contact: {{now}}

MODULE 10: Sleep -- Wait 48 hours (Day 3 total)

MODULE 11: Google Sheets -- Search Row (Check status again)

MODULE 12: Router
  Path A: Status changed --> STOP
  Path B: Still "FOLLOW_UP_1" --> Continue

MODULE 13 (Path B): Gmail -- Send Follow-Up #2
  Body: [FOLLOW-UP #2 TEMPLATE]

MODULE 14: Google Sheets -- Update Row
  Status: "FOLLOW_UP_2"

MODULE 15: Sleep -- Wait 96 hours (Day 7 total)

MODULE 16: Google Sheets -- Check status

MODULE 17: Router
  Path A: Status changed --> STOP
  Path B: Still "FOLLOW_UP_2" --> Continue

MODULE 18 (Path B): Gmail -- Send Final Follow-Up
  Body: [FOLLOW-UP #3 TEMPLATE]

MODULE 19: Google Sheets -- Update Row
  Status: "COLD"
```

### 2.5 Alternative: Node.js Self-Hosted Version (Zero Recurring Cost)

For full ownership and no Make.com subscription:

```javascript
// server.js -- Teflon Don Lead Pipeline
// Run on any $5/mo VPS or on the same server as the website

const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { google } = require('googleapis');
const cron = require('node-cron');

const app = express();
app.use(express.json());

// ---- CONFIG ----
const CONFIG = {
  gmail: {
    user: 'dismail93@gmail.com',
    appPassword: process.env.GMAIL_APP_PASSWORD
  },
  twilio: {
    sid: process.env.TWILIO_SID,
    auth: process.env.TWILIO_AUTH,
    from: process.env.TWILIO_FROM
  },
  donnyPhone: '+15186989870',
  followUpDelays: {
    first: 24 * 60 * 60 * 1000,      // 24 hours
    second: 3 * 24 * 60 * 60 * 1000,  // 3 days
    final: 7 * 24 * 60 * 60 * 1000    // 7 days
  }
};

// ---- IN-MEMORY LEAD STORE (use SQLite/Postgres in production) ----
const leads = new Map();

// ---- EMAIL TRANSPORT ----
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: CONFIG.gmail.user,
    pass: CONFIG.gmail.appPassword
  }
});

// ---- TWILIO CLIENT ----
const twilioClient = twilio(CONFIG.twilio.sid, CONFIG.twilio.auth);

// ---- ENDPOINT: New Lead ----
app.post('/api/lead', async (req, res) => {
  const { name, email, business, service, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  const lead = {
    id: Date.now().toString(36),
    name,
    email,
    business: business || 'Not provided',
    service: service || 'Not specified',
    message: message || '',
    status: 'NEW',
    createdAt: new Date(),
    lastContact: new Date(),
    followUpsSent: 0,
    donnyReplied: false
  };

  leads.set(lead.id, lead);

  // 1. Send instant auto-reply
  try {
    const firstName = name.split(' ')[0];
    await transporter.sendMail({
      from: `"Donny - Teflon Don" <${CONFIG.gmail.user}>`,
      to: email,
      subject: `Got it, ${firstName} -- Donny here`,
      text: generateAutoReply(firstName),
      html: generateAutoReplyHTML(firstName)
    });
    console.log(`Auto-reply sent to ${email}`);
  } catch (err) {
    console.error('Auto-reply failed:', err);
  }

  // 2. SMS to Donny
  try {
    await twilioClient.messages.create({
      body: `NEW LEAD\nName: ${name}\nBiz: ${business}\nWants: ${service}\nEmail: ${email}\nMsg: ${message}`,
      from: CONFIG.twilio.from,
      to: CONFIG.donnyPhone
    });
    console.log('SMS sent to Donny');
  } catch (err) {
    console.error('SMS failed:', err);
  }

  res.json({ success: true, message: 'Lead captured' });
});

// ---- ENDPOINT: Mark lead as contacted (Donny uses this) ----
app.post('/api/lead/:id/contacted', (req, res) => {
  const lead = leads.get(req.params.id);
  if (lead) {
    lead.donnyReplied = true;
    lead.status = 'CONTACTED';
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Lead not found' });
  }
});

// ---- FOLLOW-UP CRON (runs every hour) ----
cron.schedule('0 * * * *', async () => {
  const now = Date.now();

  for (const [id, lead] of leads) {
    if (lead.donnyReplied || lead.status === 'COLD') continue;

    const age = now - lead.createdAt.getTime();
    const firstName = lead.name.split(' ')[0];

    // Follow-up #1: 24 hours
    if (lead.followUpsSent === 0 && age >= CONFIG.followUpDelays.first) {
      await sendFollowUp(lead, 1, {
        subject: `Quick follow-up on your ${lead.service} project`,
        text: generateFollowUp1(firstName, lead.business, lead.service)
      });
      lead.followUpsSent = 1;
      lead.status = 'FOLLOW_UP_1';
    }

    // Follow-up #2: 3 days
    if (lead.followUpsSent === 1 && age >= CONFIG.followUpDelays.second) {
      await sendFollowUp(lead, 2, {
        subject: `Still interested, ${firstName}?`,
        text: generateFollowUp2(firstName, lead.business, lead.service)
      });
      lead.followUpsSent = 2;
      lead.status = 'FOLLOW_UP_2';
    }

    // Follow-up #3 (Final): 7 days
    if (lead.followUpsSent === 2 && age >= CONFIG.followUpDelays.final) {
      await sendFollowUp(lead, 3, {
        subject: `Last one from me, ${firstName}`,
        text: generateFinalFollowUp(firstName)
      });
      lead.followUpsSent = 3;
      lead.status = 'COLD';
    }
  }
});

async function sendFollowUp(lead, num, emailData) {
  try {
    await transporter.sendMail({
      from: `"Donny - Teflon Don" <${CONFIG.gmail.user}>`,
      to: lead.email,
      subject: emailData.subject,
      text: emailData.text
    });
    lead.lastContact = new Date();
    console.log(`Follow-up #${num} sent to ${lead.email}`);
  } catch (err) {
    console.error(`Follow-up #${num} failed for ${lead.email}:`, err);
  }
}

// ---- EMAIL GENERATORS ----
function generateAutoReply(firstName) {
  return `Hey ${firstName},

This is Donny from Teflon Don. I got your message and I'm on it.

Here's what happens next:

1. I'm going to pull up your business and take a look at your current online presence (or lack of one -- no judgment, that's what I'm here to fix).

2. Within 24 hours, I'll get back to you with a straight answer on what I'd do and what it costs. No fluff.

3. If it makes sense, I'll put together a free mockup of your new site so you can see exactly what you'd get before spending a dime.

If you need something faster, text me: (518) 698-9870
I'm one guy, not a call center, so you'll actually get me.

Talk soon,
Donny
Teflon Don LLC
teflondon.com
(518) 698-9870

P.S. -- The audit and mockup are both free. If you don't love what I come back with, you owe nothing. That's the deal.`;
}

function generateAutoReplyHTML(firstName) {
  return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; color: #1a1a1a; line-height: 1.7;">
  <p>Hey ${firstName},</p>
  <p>This is Donny from Teflon Don. I got your message and I'm on it.</p>
  <p><strong>Here's what happens next:</strong></p>
  <ol>
    <li>I'm going to pull up your business and take a look at your current online presence (or lack of one -- no judgment, that's what I'm here to fix).</li>
    <li>Within 24 hours, I'll get back to you with a straight answer on what I'd do and what it costs. No fluff.</li>
    <li>If it makes sense, I'll put together a free mockup of your new site so you can see exactly what you'd get before spending a dime.</li>
  </ol>
  <p>If you need something faster, text me: <strong>(518) 698-9870</strong><br>
  I'm one guy, not a call center, so you'll actually get me.</p>
  <p>Talk soon,<br>
  <strong>Donny</strong><br>
  <span style="color: #666;">Teflon Don LLC</span><br>
  <a href="https://teflondon.com" style="color: #FF4D00;">teflondon.com</a><br>
  <span style="color: #666;">(518) 698-9870</span></p>
  <p style="color: #888; font-size: 0.9em;"><em>P.S. -- The audit and mockup are both free. If you don't love what I come back with, you owe nothing. That's the deal.</em></p>
</div>`;
}

function generateFollowUp1(firstName, business, service) {
  return `Hey ${firstName},

Following up on your inquiry yesterday. I took a quick look at ${business} and I have some thoughts.

Right now, when someone in Houston Googles what you do, your competitors are getting that call instead of you. The fix is straightforward and I can walk you through it in 5 minutes.

Or just reply to this email. Either way works.

-- Donny
(518) 698-9870`;
}

function generateFollowUp2(firstName, business, service) {
  return `Hey ${firstName},

Not trying to blow up your inbox -- just wanted to make sure my last email didn't end up in spam.

You reached out about ${service} for ${business} a few days ago. If you're still thinking about it, here's what I'd suggest:

Let me do the free audit. Takes me 10 minutes. I'll send you a breakdown of where your business stands online, what your competitors are doing, and exactly what I'd fix.

No commitment. No follow-up sales calls. Just the info.

Want me to run it?

-- Donny`;
}

function generateFinalFollowUp(firstName) {
  return `Hey ${firstName},

This is my last follow-up -- I don't chase people.

If the timing isn't right, no hard feelings. Your competitors aren't slowing down though, so when you're ready to fix your online presence, I'm here:

- Text me: (518) 698-9870
- Email: dismail93@gmail.com

The free audit offer doesn't expire.

-- Donny
Teflon Don LLC`;
}

// ---- STATUS DASHBOARD (simple) ----
app.get('/api/leads', (req, res) => {
  const allLeads = Array.from(leads.values()).sort(
    (a, b) => b.createdAt - a.createdAt
  );
  res.json(allLeads);
});

app.listen(3000, () => console.log('Teflon Don Lead Pipeline running on :3000'));
```

### 2.6 Google Sheet Structure for Lead Tracking

```
Sheet Name: "Teflon Don Leads"

Column A: Date/Time
Column B: Name
Column C: Email
Column D: Business Name
Column E: Service Requested
Column F: Message
Column G: Status [NEW | CONTACTED | FOLLOW_UP_1 | FOLLOW_UP_2 | COLD | WON | LOST]
Column H: Donny's Notes
Column I: Last Contact Date
Column J: Lead Value (estimated deal size)
Column K: Source [website_form | chatbot | referral | cold_outreach]

Color coding (conditional formatting):
- NEW = Yellow
- CONTACTED = Blue
- FOLLOW_UP_1 = Orange
- FOLLOW_UP_2 = Red
- COLD = Gray
- WON = Green
- LOST = Dark Gray
```

---

## 3. Client Onboarding Automation

### 3.1 Onboarding Pipeline

```
CLIENT ONBOARDING FLOW
=======================

[Deal Closes -- Payment Received]
         |
         v
[TRIGGER: Donny marks "WON" in lead sheet]
         |
    +----+----+----+
    |         |         |
    v         v         v
[Welcome   [Client    [Project
 Email]    Question-   Created in
           naire       Trello/Notion]
           Sent]
    |         |         |
    v         v         v
[Calendar  [Wait for  [Checklist
 invite:   response]   auto-
 kickoff              populated]
 call]
              |
              v
         [Questionnaire
          completed]
              |
              v
         [Auto-populate
          project brief]
              |
              v
[KICKOFF CALL -- Day 1-2]
         |
         v
[Mockup Phase -- Day 2-3]
         |
    +----+----+
    |         |
    v         v
[Client    [Revision
 approves]  requested]
    |         |
    v         v
[Build     [Revise,
 Phase]     resubmit]
    |
    v
[Day 5-6: Review link sent to client]
         |
         v
[Day 6-7: Final revisions + launch]
         |
         v
[LAUNCH -- Go Live]
         |
    +----+----+
    |         |
    v         v
[Launch    [Post-launch
 email to   checklist:
 client]    analytics,
            search console,
            GMB setup]
```

### 3.2 Welcome Email Template

```
Subject: Let's build this thing, [FIRST_NAME]. Here's what happens now.

---

Hey [FIRST_NAME],

Welcome to Teflon Don. You made the right call and I'm
going to prove it this week.

Here's your timeline:

DAY 1-2: I send you a short questionnaire (check your
email in about 60 seconds). Fill it out and I have
everything I need to start.

DAY 2-3: I build your mockup. You'll get a link to
see exactly what your site will look like.

DAY 3-4: You review it. Love it? Green light and I
build the real thing. Want changes? That's what the
revision rounds are for.

DAY 5-7: Your site goes live. Real URL. Real traffic.
Actually works.

What I need from you:
- Fill out the questionnaire (incoming)
- Send me any photos you want on the site
- Send your logo if you have one (no logo? I'll handle it)
- Respond to my messages within 24 hours so we stay on track

What you DON'T need to worry about:
- Domain setup (I handle it)
- Hosting (I handle it)
- SSL/security (I handle it)
- Google Business Profile (I handle it)
- Anything technical (that's my job)

If you have questions at any point, text me: (518) 698-9870

Let's get this done.

-- Donny
Teflon Don LLC
```

### 3.3 Client Questionnaire

Build this as a Tally.so form (free, clean, no branding) or Google Form. Send the link in a separate email 60 seconds after the welcome email.

```
TEFLON DON -- CLIENT QUESTIONNAIRE
====================================

SECTION 1: YOUR BUSINESS
--------------------------
1. Business name (exactly as you want it displayed):
   [text field]

2. What does your business do? (Describe it like you're
   telling a friend -- I'll write the polished version):
   [long text]

3. What city/cities do you serve?
   [text field]

4. What makes you different from competitors? Why should
   someone pick YOU?
   [long text]

5. Who is your ideal customer? (Homeowners? Restaurant
   owners? Women 25-45? Be specific):
   [long text]

6. List your top 3 services or products:
   Service 1: [text]
   Service 2: [text]
   Service 3: [text]

7. Price ranges for your services (or "contact for quote"):
   [text field]

SECTION 2: YOUR BRAND
-----------------------
8. Do you have a logo?
   [ ] Yes (upload below)
   [ ] No -- please create something simple
   [ ] No -- I'll get one made separately

9. Logo upload:
   [file upload]

10. Brand colors (if you have preferences):
    Primary color: [text or color picker]
    Secondary color: [text or color picker]
    [ ] No preference -- surprise me

11. What's the vibe you want? (Pick all that apply):
    [ ] Professional / Corporate
    [ ] Modern / Clean
    [ ] Bold / Aggressive
    [ ] Warm / Friendly
    [ ] Luxury / High-end
    [ ] Fun / Casual
    [ ] Industrial / Tough
    Other: [text]

12. List 2-3 websites you like the look of (any industry):
    Site 1: [url]
    Site 2: [url]
    Site 3: [url]

SECTION 3: YOUR CONTENT
-------------------------
13. Do you have professional photos of your work/products?
    [ ] Yes (upload below or send separately)
    [ ] No -- use stock photos for now
    [ ] I'll take some this week

14. Photo uploads:
    [file upload, multiple]

15. Do you have any existing content you want on the site?
    (About page text, testimonials, etc.)
    [long text]

16. Customer testimonials or reviews (paste them here):
    [long text]

17. Do you have a Google Business Profile?
    [ ] Yes
    [ ] No
    [ ] Not sure

18. Social media links (any that exist):
    Facebook: [url]
    Instagram: [url]
    TikTok: [url]
    Yelp: [url]
    Other: [url]

SECTION 4: YOUR WEBSITE NEEDS
-------------------------------
19. Pages you want on your site (check all that apply):
    [ ] Home
    [ ] About
    [ ] Services
    [ ] Gallery / Portfolio
    [ ] Pricing
    [ ] Contact
    [ ] Blog
    [ ] Booking / Scheduling
    [ ] Testimonials
    [ ] FAQ
    Other: [text]

20. Must-have features:
    [ ] Click-to-call button
    [ ] Contact form
    [ ] Google Maps
    [ ] Online booking/scheduling
    [ ] Photo gallery
    [ ] Video embed
    [ ] Social media feed
    [ ] Live chat / chatbot
    [ ] Email newsletter signup
    Other: [text]

21. Do you have a domain name already?
    [ ] Yes: [text field for domain]
    [ ] No -- I need one
    [ ] Not sure

22. Current website URL (if any):
    [text field]

SECTION 5: COMPETITORS
------------------------
23. List 2-3 competitors (business names or websites):
    Competitor 1: [text]
    Competitor 2: [text]
    Competitor 3: [text]

24. What do they do better than you online?
    [long text]

25. What do you do better than them in real life?
    [long text]

SECTION 6: GOALS
-----------------
26. What's the #1 thing you want your website to do?
    [ ] Get phone calls
    [ ] Get form submissions / leads
    [ ] Book appointments online
    [ ] Sell products online
    [ ] Build credibility / trust
    [ ] All of the above

27. Anything else I should know?
    [long text]
```

### 3.4 Project Kickoff Checklist (Auto-generated in Trello/Notion)

When a deal closes, auto-create this board:

```
TRELLO BOARD: "[CLIENT NAME] -- Teflon Don Build"
===================================================

LIST: INTAKE
  [ ] Payment received
  [ ] Welcome email sent
  [ ] Questionnaire sent
  [ ] Questionnaire completed
  [ ] All assets received (logo, photos, content)
  [ ] Domain confirmed / purchased
  [ ] Hosting provisioned

LIST: DESIGN
  [ ] Competitor sites reviewed
  [ ] Wireframe sketched
  [ ] Color palette finalized
  [ ] Homepage mockup complete
  [ ] Inner page mockups complete
  [ ] Client review scheduled
  [ ] Client approved mockup
  [ ] Revision round 1 (if needed)
  [ ] Revision round 2 (if needed)
  [ ] Final design approved

LIST: BUILD
  [ ] HTML/CSS structure
  [ ] Mobile responsiveness
  [ ] Contact form functional
  [ ] Click-to-call working
  [ ] Google Maps embedded
  [ ] Photos optimized and placed
  [ ] Copy written and placed
  [ ] Internal links working
  [ ] SSL certificate active
  [ ] Speed test passed (< 2 seconds)

LIST: SEO (if included)
  [ ] Meta titles written
  [ ] Meta descriptions written
  [ ] H1/H2 structure correct
  [ ] Image alt tags
  [ ] Schema markup (LocalBusiness)
  [ ] Google Search Console connected
  [ ] Google Analytics installed
  [ ] Google Business Profile setup/optimized
  [ ] Sitemap generated and submitted
  [ ] Local keywords targeted

LIST: AI/AUTOMATION (if included)
  [ ] Chatbot configured
  [ ] Chatbot script loaded
  [ ] Auto-reply emails set up
  [ ] SMS notifications configured
  [ ] Booking system integrated
  [ ] Follow-up sequences active
  [ ] Review request system active

LIST: LAUNCH
  [ ] Client final review link sent
  [ ] Client approved for launch
  [ ] DNS pointed to live server
  [ ] Site is live on real domain
  [ ] All pages tested on mobile
  [ ] All forms tested
  [ ] Speed test final check
  [ ] Client notified of launch
  [ ] Post-launch email sent

LIST: POST-LAUNCH
  [ ] 48-hour check: everything working
  [ ] 1-week check: analytics review
  [ ] 1-month check: SEO baseline
  [ ] Client satisfaction check-in
```

### 3.5 Automated Timeline Update Emails

These fire automatically based on Trello card movements or time-based triggers:

```
--- DAY 1: Kickoff ---
Subject: We're live, [FIRST_NAME]. Your project just started.

"Hey [FIRST_NAME], your project is officially underway.
I've reviewed your questionnaire and I'm starting on the
design. You'll see your first mockup within 48 hours.
No action needed from you right now."

--- DAY 2-3: Mockup Ready ---
Subject: Your mockup is ready -- take a look

"Hey [FIRST_NAME], here's your site mockup:
[PREVIEW LINK]

Take a look and tell me what you think. Love it? I start
building tomorrow. Want changes? That's what revision
rounds are for. Reply to this email or text me."

--- DAY 5-6: Review Build ---
Subject: Almost there -- your site is ready for review

"Hey [FIRST_NAME], your site is built and I need you to
look it over:
[STAGING LINK]

Click every page. Test it on your phone. Try the contact
form. Let me know if anything needs adjusting. Once you
give the green light, we go live."

--- DAY 7: Launch ---
Subject: You're LIVE. [DOMAIN] is officially on the internet.

"Hey [FIRST_NAME], it's done. Your site is live:
[LIVE URL]

Here's what's working right now:
- Your site loads in under 2 seconds
- It looks great on desktop and mobile
- Contact form is active (I tested it)
- Click-to-call is working
- SSL is active (the padlock in the browser)
- Google can see you

What happens next:
- Google starts indexing your site (takes 1-2 weeks)
- [IF SEO PACKAGE] I'm running your SEO campaign now
- [IF AI PACKAGE] Your chatbot and automations are live
- I check in at the 1-week and 1-month marks

Go share your new URL with everyone you know.

-- Donny"
```

---

## 4. AI Services to Sell to Clients

### 4.1 Service Menu with Pricing

```
AI SERVICES -- TEFLON DON LLC
================================

SERVICE 1: CHATBOT INSTALLATION
---------------------------------
What it is:
  AI chatbot on the client's website that answers
  customer questions 24/7, qualifies leads, and
  collects contact info.

What to charge:
  Setup: $300-500 (one-time)
  Monthly: $50-100/month (maintenance + AI costs)

Your cost:
  Crisp Pro: $25/month
  -OR-
  Custom build: $5-15/month (API costs)

Your margin: 60-80%

How to build it:
  Option A (Fast): Crisp Pro with custom bot script
  - Set up Crisp account under client's email
  - Load custom conversation flow for their industry
  - Train AI on their FAQ/services
  - Install on their site (one script tag)
  - Time: 2-3 hours

  Option B (Premium): Custom Node.js + Claude API
  - Build custom chat widget
  - Claude API for intelligent responses
  - Train on client's specific data
  - Full customization of look/feel
  - Time: 8-12 hours

Selling script:
  "Right now, when someone visits your site at 10pm and
  has a question, what happens? Nothing. They leave and
  call your competitor in the morning. A chatbot catches
  that person, answers their question, and gets their
  number so you can call them first thing. It pays for
  itself the first week."

-----------------------------------------------

SERVICE 2: AUTOMATED REVIEW REQUEST SYSTEM
--------------------------------------------
What it is:
  After a client completes a job/appointment, their
  customer automatically gets a text or email asking
  for a Google review. Includes a direct link that
  opens Google Reviews with one tap.

What to charge:
  Setup: $200-300 (one-time)
  Monthly: $30-50/month

Your cost:
  Twilio SMS: ~$0.0079/message
  Email: Free (Gmail/Resend)
  Automation: Make.com ($9/mo) or self-hosted (free)

Your margin: 85-90%

How to build it:
  1. Client completes a job
  2. Client texts a keyword to a Twilio number
     (e.g., texts "DONE John Smith 8325551234")
  3. System waits 2 hours (let customer get settled)
  4. Sends SMS to customer:
     "Hey [NAME], thanks for choosing [BUSINESS].
     If we did a good job, a quick Google review would
     mean the world to us: [DIRECT GOOGLE REVIEW LINK]"
  5. If no review in 24 hours, sends one follow-up
  6. Logs all requests and completions

Implementation:

```javascript
// review-request.js -- Automated Review System
const twilio = require('twilio');
const cron = require('node-cron');

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

// Google review direct link format:
// https://search.google.com/local/writereview?placeid=PLACE_ID

const REVIEW_LINK = 'https://search.google.com/local/writereview?placeid=CLIENT_PLACE_ID';

const pendingReviews = [];

// Endpoint: Client triggers review request
app.post('/api/review-request', async (req, res) => {
  const { customerName, customerPhone, businessName } = req.body;

  // Schedule for 2 hours from now
  const sendAt = new Date(Date.now() + 2 * 60 * 60 * 1000);

  pendingReviews.push({
    customerName,
    customerPhone,
    businessName,
    sendAt,
    sent: false,
    followUpSent: false
  });

  res.json({ success: true, scheduledFor: sendAt });
});

// Cron: Check every 15 minutes for pending review requests
cron.schedule('*/15 * * * *', async () => {
  const now = Date.now();

  for (const review of pendingReviews) {
    if (!review.sent && now >= review.sendAt.getTime()) {
      await client.messages.create({
        body: `Hey ${review.customerName}, thanks for choosing ${review.businessName}! If we did a good job, a quick Google review would mean the world: ${REVIEW_LINK}`,
        from: process.env.TWILIO_FROM,
        to: review.customerPhone
      });
      review.sent = true;
      review.sentAt = new Date();
    }

    // Follow-up after 24 hours if not reviewed
    if (review.sent && !review.followUpSent) {
      const hoursSinceSent = (now - review.sentAt.getTime()) / (1000 * 60 * 60);
      if (hoursSinceSent >= 24) {
        await client.messages.create({
          body: `Hi ${review.customerName}, just a friendly reminder -- if you have 30 seconds, your review really helps: ${REVIEW_LINK} Thanks again!`,
          from: process.env.TWILIO_FROM,
          to: review.customerPhone
        });
        review.followUpSent = true;
      }
    }
  }
});
```

Selling script:
  "You've got happy customers walking out the door every day
  and none of them are leaving you Google reviews. Reviews
  are the #1 thing that moves you up in Google Maps. This
  system sends them a text 2 hours after their appointment
  with a one-tap link. You don't have to remember anything."

-----------------------------------------------

SERVICE 3: AI-POWERED APPOINTMENT SCHEDULING
-----------------------------------------------
What it is:
  Online booking system embedded on client's website.
  Customers pick a service, choose a time, and book
  instantly. Client gets notified. Customer gets
  confirmation + reminder.

What to charge:
  Setup: $200-400 (one-time)
  Monthly: $30-50/month

Your cost:
  Calendly Pro: $12/month
  Cal.com (self-hosted): Free
  Twilio (reminders): ~$5/month

Your margin: 75-85%

How to build it:
  Option A (Fast): Calendly or Cal.com embed
  - Set up account with client's availability
  - Create service types with durations
  - Embed booking widget on their site
  - Connect email confirmations
  - Add SMS reminders via Twilio
  - Time: 1-2 hours

  Option B (Premium): Custom booking system
  - Build custom UI matching client's site
  - Google Calendar API for availability
  - Twilio for SMS confirmations + reminders
  - Automated no-show follow-up
  - Time: 10-15 hours

Reminder sequence:
  - Instant: Email confirmation with details
  - 24 hours before: SMS reminder
  - 1 hour before: SMS reminder
  - No-show: "We missed you" email with rebooking link

-----------------------------------------------

SERVICE 4: AUTOMATED SOCIAL MEDIA POSTING
--------------------------------------------
What it is:
  AI generates and schedules social media posts for the
  client's business. Posts go out on a consistent schedule
  without the client touching anything.

What to charge:
  Setup: $200-300 (one-time)
  Monthly: $100-200/month (content generation + management)

Your cost:
  Claude API: ~$5-10/month for content generation
  Buffer/Publer: $6-12/month for scheduling
  Canva (templates): $13/month or use free tier

Your margin: 65-75%

How to build it:
  1. Create content templates for client's industry
  2. Use Claude API to generate posts weekly
  3. Schedule through Buffer/Publer API
  4. Client approves batches or fully automates

```javascript
// social-content-generator.js
const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic();

async function generateWeeklyPosts(businessInfo) {
  const prompt = `You are a social media manager for a ${businessInfo.type}
called "${businessInfo.name}" in ${businessInfo.city}.

Generate 7 social media posts (one per day) for this week.

Mix of:
- 2 educational/tip posts
- 2 promotional posts about their services
- 1 behind-the-scenes/personal post
- 1 customer testimonial/review highlight
- 1 engagement post (question or poll)

Their services: ${businessInfo.services.join(', ')}
Their tone: ${businessInfo.tone}
Their target audience: ${businessInfo.audience}

For each post provide:
1. Platform (Instagram/Facebook)
2. Caption (with relevant hashtags)
3. Image suggestion (describe what photo/graphic to use)
4. Best posting time

Keep captions under 150 words. Sound human, not corporate.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }]
  });

  return message.content[0].text;
}
```

Selling script:
  "How often are you posting on social media? Once a week?
  Once a month? Your competitors are posting every day.
  I set up AI that generates posts for your business
  automatically -- tips, promos, behind-the-scenes content.
  You approve them once a week and they go out on schedule.
  You look active and professional without touching your phone."

-----------------------------------------------

SERVICE 5: AI EMAIL MARKETING SEQUENCES
------------------------------------------
What it is:
  Automated email sequences that nurture leads,
  re-engage past customers, and drive repeat business.

What to charge:
  Setup: $300-500 (one-time for full sequence build)
  Monthly: $50-100/month (management + optimization)

Your cost:
  Resend/Mailgun: $0-20/month
  Claude API: ~$3-5/month for content
  -OR-
  Mailchimp: Free up to 500 contacts

Your margin: 70-80%

Sequences to build for clients:

SEQUENCE A: New Lead Nurture (5 emails over 14 days)
  Email 1 (Instant): Welcome + what to expect
  Email 2 (Day 2): Social proof / testimonials
  Email 3 (Day 5): Educational content / tips
  Email 4 (Day 9): Case study / before-after
  Email 5 (Day 14): Special offer / CTA

SEQUENCE B: Post-Service Follow-Up (3 emails over 7 days)
  Email 1 (Day 1): Thank you + review request
  Email 2 (Day 3): Maintenance tips related to service
  Email 3 (Day 7): Referral program / discount for friends

SEQUENCE C: Re-Engagement (for inactive customers)
  Email 1: "We miss you" + special offer
  Email 2 (Day 5): "What changed?" + survey
  Email 3 (Day 10): Final offer + urgency

SEQUENCE D: Seasonal Campaigns
  Monthly themed emails relevant to the business
  (e.g., "Spring AC tune-up" for HVAC, "Holiday party
  booking" for restaurants)

Selling script:
  "You've got a list of past customers who already trust you.
  Are you emailing them? Probably not. That's free money on
  the table. I build an automated sequence that keeps you
  in their inbox -- follow-ups, seasonal offers, referral
  asks. Set it up once, runs forever."
```

### 4.2 Service Pricing Quick Reference

| Service | Setup Fee | Monthly | Your Cost/Mo | Margin | Build Time |
|---------|-----------|---------|-------------|--------|------------|
| Chatbot Installation | $300-500 | $50-100 | $5-25 | 75% | 2-12 hrs |
| Review Request System | $200-300 | $30-50 | $5-10 | 85% | 3-5 hrs |
| Appointment Scheduling | $200-400 | $30-50 | $12-17 | 75% | 1-15 hrs |
| Social Media Automation | $200-300 | $100-200 | $25-35 | 75% | 4-6 hrs |
| Email Marketing Sequences | $300-500 | $50-100 | $5-20 | 80% | 6-10 hrs |
| **Full AI Stack (all 5)** | **$1,200-1,800** | **$250-400** | **$50-100** | **78%** | **20-30 hrs** |

### 4.3 Bundled Packages for Clients

```
TEFLON DON -- AI ADD-ON PACKAGES
===================================

STARTER AI -- $300 setup + $50/month
  - Chatbot on website (FAQ + lead capture)
  - Automated review requests via SMS
  Best for: Any business that just got a new website

GROWTH AI -- $700 setup + $150/month
  - Everything in Starter AI
  - Online appointment booking
  - Automated email follow-up (3-email sequence)
  - SMS appointment reminders
  Best for: Salons, med spas, contractors, consultants

FULL AUTOPILOT -- $1,500 setup + $300/month
  - Everything in Growth AI
  - AI social media content (7 posts/week)
  - Full email marketing (5-sequence system)
  - Custom workflow automation
  - Monthly reporting
  Best for: Businesses serious about dominating their market
```

---

## 5. Tech Stack Recommendations

### 5.1 AI APIs Comparison

| API | Best For | Cost | Speed | Quality | Recommendation |
|-----|----------|------|-------|---------|----------------|
| **Claude (Anthropic)** | Content generation, chatbot conversations, complex reasoning | $3/M input, $15/M output (Sonnet) | Fast | Highest for writing | **Primary API for all content + chatbot** |
| **OpenAI GPT-4o** | General purpose, code generation | $2.50/M input, $10/M output | Fastest | Very good | Backup / specific use cases |
| **OpenAI GPT-4o-mini** | High-volume, low-cost tasks (classification, tagging) | $0.15/M input, $0.60/M output | Very fast | Good enough for simple tasks | **Use for high-volume tasks to save money** |
| **Google Gemini** | Multimodal (image + text), large context | Free tier available, then $0.50-1.25/M | Fast | Good | Free tier useful for prototyping |

**Recommended setup for Teflon Don:**
- Claude Sonnet for chatbot conversations and content generation (best writing quality)
- GPT-4o-mini for high-volume classification tasks like lead scoring (cheapest)
- Budget: $15-30/month for all API costs at current client volume

### 5.2 Chatbot Platforms Comparison

```
CHATBOT PLATFORM COMPARISON
==============================

CRISP (Recommended for Teflon Don site)
  Cost: $25/month (Pro)
  AI: Built-in MagicReply + custom bot
  Pros: Clean UI, full JS SDK, webhooks, no-code bot builder
  Cons: AI is basic (fine for FAQ, not deep conversations)
  Best for: Service business websites
  Setup time: 1-2 hours

TIDIO
  Cost: $29/month + $39/month for AI (Lyro)
  AI: Lyro AI assistant (GPT-powered)
  Pros: Visual bot builder, Shopify integration
  Cons: Expensive with AI add-on, cluttered UI
  Best for: E-commerce
  Setup time: 1-3 hours

BOTPRESS (Open Source)
  Cost: Free (self-hosted) or $0-495/month (cloud)
  AI: Full LLM integration (Claude, GPT, etc.)
  Pros: Most powerful, visual flow builder, any LLM
  Cons: Steeper learning curve, requires hosting
  Best for: Complex chatbots with multiple integrations
  Setup time: 4-8 hours

VOICEFLOW
  Cost: $0-625/month
  AI: Full LLM support
  Pros: Best visual builder, great for non-technical
  Cons: Expensive at scale, overkill for simple bots
  Best for: Enterprise-grade conversation design
  Setup time: 3-6 hours

CUSTOM (Node.js + Claude API + WebSocket)
  Cost: $5-15/month (API costs only)
  AI: Full Claude/GPT integration
  Pros: 100% control, no monthly platform fees, own everything
  Cons: Requires development time, self-maintained
  Best for: Teflon Don's premium offering to clients
  Setup time: 15-25 hours (first build), 3-5 hours (template reuse)

RECOMMENDATION MATRIX:
  For Teflon Don website: Crisp ($25/mo)
  For client chatbots (budget): Crisp or Tidio
  For client chatbots (premium): Custom build
  For complex multi-step bots: Botpress (cloud)
```

### 5.3 Automation Platforms Comparison

```
AUTOMATION PLATFORM COMPARISON
=================================

ZAPIER
  Cost: Free (5 zaps) / $19.99/mo (20 zaps) / $49/mo (unlimited)
  Pros: Largest app library (7000+), easiest to use, most reliable
  Cons: Most expensive, per-task pricing adds up, limited logic
  Best for: Simple 2-3 step automations, non-technical users
  Learning curve: Very easy (1-2 hours)

MAKE.COM (formerly Integromat)
  Cost: Free (1000 ops) / $9/mo (10K ops) / $16/mo (40K ops)
  Pros: Visual builder, complex logic, much cheaper than Zapier,
        HTTP/JSON support, router/filter modules
  Cons: Slightly steeper learning curve, smaller app library
  Best for: Multi-step workflows with conditional logic
  Learning curve: Easy-moderate (2-4 hours)
  >>> RECOMMENDED FOR TEFLON DON <<<

N8N (Open Source)
  Cost: Free (self-hosted) / $20/mo (cloud)
  Pros: Self-hosted = no per-operation limits, full code access,
        400+ integrations, can run custom JavaScript
  Cons: Requires VPS for self-hosting, less polished UI
  Best for: High-volume automations, developers, cost-conscious
  Learning curve: Moderate (4-8 hours)

CUSTOM (Node.js)
  Cost: $5-10/mo (VPS) + API costs
  Pros: Total control, no operation limits, no vendor lock-in,
        can do anything
  Cons: Must build and maintain everything, no visual builder
  Best for: Complex custom logic, high volume, when platforms
           can't do what you need
  Learning curve: Requires Node.js knowledge

RECOMMENDATION BY USE CASE:
  Teflon Don lead pipeline: Make.com ($9/mo)
  Client automations (simple): Make.com
  Client automations (high volume): n8n self-hosted
  Complex/custom integrations: Node.js
  Quick one-off automations: Zapier free tier
```

### 5.4 Complete Cost Analysis

```
TEFLON DON -- MONTHLY TOOL COSTS
===================================

SCENARIO A: MINIMUM VIABLE (Just the essentials)
-------------------------------------------------
Crisp (chatbot/live chat):          $25/month
Make.com (automation):              $9/month
Twilio (SMS):                       $5/month
Claude API (content gen):           $10/month
Google Workspace (email):           $7/month
                                    -----------
TOTAL:                              $56/month

Revenue needed to break even:       1 client/month at any tier

SCENARIO B: FULL STACK (Running client AI services)
-----------------------------------------------------
Crisp (chatbot/live chat):          $25/month
Make.com Pro (automation):          $16/month
Twilio (SMS, high volume):          $15/month
Claude API (chatbots + content):    $25/month
Google Workspace (email):           $7/month
Cal.com Cloud (scheduling):         $12/month
Buffer (social scheduling):        $6/month
Resend (email marketing):          $0/month (free tier, 3K/month)
VPS (Node.js hosting):             $5/month (Hetzner/DigitalOcean)
                                    -----------
TOTAL:                              $111/month

Revenue from 3 AI clients at $150/mo: $450/month
NET PROFIT:                           $339/month (+ setup fees)

SCENARIO C: SCALE MODE (10+ clients on AI services)
------------------------------------------------------
n8n self-hosted (automation):       $0 (on VPS)
Twilio (SMS, high volume):          $30/month
Claude API (high usage):            $50/month
VPS (2GB, runs everything):         $10/month
Google Workspace:                   $7/month
Buffer Business:                    $12/month
Cal.com Cloud:                      $12/month
Resend (email marketing):          $20/month
                                    -----------
TOTAL:                              $141/month

Revenue from 10 AI clients at $150/mo: $1,500/month
NET PROFIT:                             $1,359/month (+ setup fees)
```

### 5.5 Recommended Implementation Roadmap

```
PHASE 1: THIS WEEK (Days 1-3)
================================
[ ] Sign up for Crisp Pro ($25/month)
[ ] Install chatbot on teflondon.com (Section 1.4)
[ ] Load conversation script (Section 1.3)
[ ] Replace mailto: form with webhook handler (Section 2.2)
[ ] Sign up for Make.com free tier
[ ] Build lead capture webhook in Make.com (Section 2.4)
[ ] Set up Google Sheet for lead tracking (Section 2.6)
Cost: $25 + $0 = $25

PHASE 2: THIS WEEK (Days 4-7)
================================
[ ] Sign up for Twilio ($20 credit free)
[ ] Configure SMS notifications to Donny
[ ] Build auto-reply email in Make.com (Section 2.3)
[ ] Build follow-up email sequence (Section 2.3)
[ ] Test entire lead pipeline end-to-end
[ ] Set up Calendly free tier for call booking
Cost: $0 (Twilio free credit)

PHASE 3: WEEK 2
================================
[ ] Build client onboarding questionnaire on Tally.so (Section 3.3)
[ ] Create Trello board template for projects (Section 3.4)
[ ] Write onboarding email templates (Section 3.2)
[ ] Build automated timeline update emails (Section 3.5)
[ ] Set up Make.com scenario for onboarding automation
Cost: $9 (Make.com upgrade if needed)

PHASE 4: WEEK 3-4
================================
[ ] Build first client chatbot template (reusable)
[ ] Build review request system template (Section 4)
[ ] Package AI services with pricing (Section 4.3)
[ ] Add AI services to website pricing section
[ ] Test all systems with a real or simulated client
Cost: $10-15 (Claude API for testing)

PHASE 5: ONGOING
================================
[ ] First paying AI services client
[ ] Refine chatbot scripts based on real conversations
[ ] Build out email marketing sequence templates
[ ] Add social media automation offering
[ ] Scale to n8n self-hosted when volume justifies it
```

---

## Appendix A: Quick Reference -- Accounts to Create

| Service | URL | Plan | Monthly Cost |
|---------|-----|------|-------------|
| Crisp | crisp.chat | Pro | $25 |
| Make.com | make.com | Free, then Core | $0-9 |
| Twilio | twilio.com | Pay-as-you-go | $5-15 |
| Anthropic (Claude API) | console.anthropic.com | Pay-as-you-go | $10-25 |
| Google Workspace | workspace.google.com | Business Starter | $7 |
| Calendly | calendly.com | Free | $0 |
| Tally.so | tally.so | Free | $0 |
| Trello | trello.com | Free | $0 |
| Buffer | buffer.com | Essentials | $6 |
| Resend | resend.com | Free tier | $0 |

## Appendix B: Environment Variables Template

```bash
# .env -- Teflon Don Automation Stack

# Twilio
TWILIO_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_FROM=+1XXXXXXXXXX

# Gmail
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# Claude API (Anthropic)
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx

# Make.com
MAKE_WEBHOOK_URL=https://hook.us1.make.com/xxxxxxxxxxxxxxxxxx

# Crisp
CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CRISP_TOKEN_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CRISP_TOKEN_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Calendly
CALENDLY_URL=https://calendly.com/teflondon/audit

# Google Sheets
GOOGLE_SHEET_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Appendix C: File Structure for Self-Hosted Stack

```
teflon-don-automation/
  .env
  package.json
  server.js                    (Main Express server)
  routes/
    lead-capture.js            (Form webhook handler)
    chatbot-webhook.js         (Crisp webhook handler)
    review-request.js          (Review system API)
    onboarding.js              (Client onboarding triggers)
  services/
    email.js                   (Email sending via Gmail/Resend)
    sms.js                     (Twilio SMS wrapper)
    ai.js                      (Claude API wrapper)
    sheets.js                  (Google Sheets integration)
    scheduler.js               (Cron jobs for follow-ups)
  templates/
    emails/
      auto-reply.html
      follow-up-1.html
      follow-up-2.html
      follow-up-3.html
      welcome-client.html
      mockup-ready.html
      review-ready.html
      launch-day.html
    chatbot/
      contractor-flow.json
      restaurant-flow.json
      salon-flow.json
      generic-flow.json
  client-configs/
    example-client.json        (Per-client chatbot/automation config)
  README.md
```

---

*This blueprint is a living document. Update it as tools change, prices shift, and new services get added. Every system described here can be built by one person in under 30 days. The goal is not to build everything at once -- it is to ship Phase 1 this week and start capturing leads that are currently falling through the cracks.*
