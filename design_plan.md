
# Design Plan for Lyft Website

## Color Palette

Based on the research and user's request for warm, welcoming, and high-end feel, we will use a primary palette of warm earth tones, complemented by calm accents.

**Primary Warm Earth Tones:**
*   **Soft Coral/Peach:** Evokes warmth, friendliness, and approachability. (e.g., #FFDAB9 - Peach Puff, #FFC0CB - Pink)
*   **Cream/Off-white:** Provides a clean, sophisticated background and sense of spaciousness. (e.g., #F5F5DC - Beige, #FFFDD0 - Cream)

**Calm Accents:**
*   **Muted Teal/Turquoise:** Adds a touch of serenity, trust, and professionalism, creating a harmonious contrast with the warm tones. (e.g., #40E0D0 - Turquoise, #008080 - Teal)

**Color Theory Application:**
*   **Warm vs. Cool:** The primary warm tones will dominate to create the desired inviting atmosphere, while the cool accents will be used sparingly for emphasis and to provide visual balance.
*   **Tonal Value:** A range of tonal values within each color family will be used to ensure legibility and visual hierarchy. Lighter shades for backgrounds, mid-tones for content, and darker tones for text and important elements.
*   **Saturation:** Muted and desaturated versions of the chosen colors will be preferred to maintain a high-end, sophisticated feel, avoiding overly vibrant or aggressive hues.

## Typography

To convey a warm, welcoming, and professional tone, we will use a combination of sans-serif fonts.

*   **Headlines and prominent text:** Inter (or a similar clean, modern sans-serif) for its legibility and friendly yet professional appearance.
*   **Body text:** Lato (or a similar highly readable sans-serif) for its excellent readability across various screen sizes and its slightly rounded, approachable character.

## UI/UX Features Outline

*   **Floating Button/Icon:** A single, consistent floating button/icon per page for primary actions. This button will expand to reveal 1-6 related options upon interaction. Animations will be subtle and non-distracting.
*   **Icons:** All icons will be clear, intuitive, and accessible (SVG format with ARIA labels for screen readers).
*   **Subtle Motion:** Floating icons and elements will have light, sine-wave-like motion to convey community, support, and independence without being overwhelming.
*   **Hover Effects:** Buttons and job cards will have subtle hover effects to provide visual feedback and enhance interactivity.

## Architecture Outline

### Landing/Home Page
*   **Headline:** Friendly, mission-focused introduction.
*   **Sections:** "Who We Are" and "What We Offer" sections, each with relevant icons and 1-2 sentences of descriptive text.
*   **Call to Action (CTA):** Floating button for contacting or viewing jobs.

### Services Page
*   **Layout:** Clean layout listing key services with descriptive icons and text.
*   **Downloadable PDF:** Option for users to download a PDF version of the services list.

### Job Board Page
*   **Interface:** Minimal interface with job cards displaying title, location, hours/week, and rate.
*   **Action:** 


“Apply” button on each job card.
*   **Admin View:** Floating action button for posting new jobs (visible only to administrators).

## Backend Outline

*   **API:** Lightweight API (Flask) to manage job postings (CRUD operations).
*   **Admin/Edit Documentation:** Simple documentation for admin users to manage job postings.

## Delivery & Hosting Outline

*   **Files:** Complete, downloadable files ready for GitHub Pages (HTML/CSS/JS + backend).
*   **README:** Comprehensive README with setup instructions for both local and GitHub deployment.

## Footer & Metadata Outline

*   **Footer:** Company name, EIN, insured status, CA Secretary of State info, developer credit.
*   **Metadata:** Proper meta tags for SEO and social sharing.

## Animations & Motion Outline

*   **Floating Elements:** Floating icons/elements with subtle sine-wave animation.
*   **Hover Effects:** Hover effects on buttons and job cards.

## Tone & Style

*   Simple, clean, easy to update; scalable for future page expansion.

