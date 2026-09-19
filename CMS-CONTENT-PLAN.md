# LCMM editable-content inventory

Planning draft: these are proposed editor sections, not implemented Studio schemas. The supplied Studio currently has only the tutorial Post type (title, slug, publication date, image and body).

## First phase: content staff publish regularly

| Editor section | Editable fields | Where it appears |
| --- | --- | --- |
| Updates & announcements | Title, date, author/byline, category, short summary, article text, cover/photo attachments, related link | Latest posts feed in the former homepage community-board position; individual article |
| Events | Event title, dates/time, location or online link, description, registration link, image, registration status | Homepage announcements and relevant ministry section; event detail |
| Testimonies & archive articles | Category (testimony, bioethics, missionary story, MSCE story), title, author, date, summary, full essay, photos, featured selection | Matching archive tab and optional homepage Stories of Faith preview |
| Prayer letters | Title, missionary/ministry name, date, location if useful, summary, letter text, photos and/or PDF | Prayer Letters tab and individual letter/PDF |
| Videos | Title, YouTube URL, speaker, date, category, description, optional thumbnail | Video Archive; selected introduction video if desired |
| Publications | Issue title/number, issue date, cover, description, PDF upload | Publication archive/download links (requested content area; final placement to confirm) |

An event can be announced in Latest posts by selecting the event, rather than typing its content again. Likewise, featuring a testimony or publication on the homepage should reference its existing entry. The current implementation still fetches only the tutorial Post type; combining other content types into the feed is future work.

## Second phase: occasional edits

| Editor section | Editable fields |
| --- | --- |
| Homepage settings | Slideshow images, captions, accessible image descriptions, image order, introduction video, featured stories and highlighted entries |
| Ministries and mission fields | Descriptions, locations, images, status, program/application links; reused across homepage and ministry page |
| Leadership | Name, role, portrait, short biography, display order |
| About LCMM | Mission, vision, history and invitation text |
| Contact and FAQs | Public email, phone, address, office hours, social/newsletter links, questions and answers |
| Support links | Donation, volunteer and registration destinations, short descriptions and button labels |

## Shared editing behavior

- Keep English and Traditional Chinese text together, with shared images/dates; define a visible fallback when one translation is absent.
- Use clear labels and only require fields necessary for that content type. A prayer letter can have text, a PDF, or both; require at least one usable format.
- Staff can add a draft, edit an existing entry, publish and unpublish. Publishing updates the same entry. The normal published site keeps displaying its published version during draft edits.
- Include image descriptions, optional captions, PDF replacement and a clear homepage-feature option where appropriate.
- Existing hardcoded archive content requires a one-time migration before staff can edit it in Studio.
- Layout, colors, fonts, language/theme behavior and navigation remain in website code for now.
- Contact submissions are a separate private collection workflow, not public CMS content.
- Member accounts, discussions and moderation remain a separate forum feature if LCMM still wants it. The homepage feed itself is now staff-published content.

## Homepage change completed

The connected Latest posts feed now appears once, at the old community board location beneath Stories of Faith. It uses a narrower stacked-card layout and links to full posts. The demo composer and reactions no longer render on the homepage. The unused CommunityBoard source remains available. Studio schemas and content were not changed in this step.
