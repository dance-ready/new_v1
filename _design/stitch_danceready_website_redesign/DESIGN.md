# The Design System: Editorial Excellence & Kinetic Precision

This document outlines the visual framework for the design system—a bespoke design language tailored for the intersection of high-performance sports science and the fluid artistry of dance. 

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Lab"
The design language is built on the concept of **The Kinetic Lab**. It rejects the generic "SaaS dashboard" aesthetic in favor of a high-end editorial experience. We combine the rigid, data-driven structure of performance science with the organic, asymmetrical beauty of professional dance.

To achieve this, the design system utilizes:
*   **Intentional Asymmetry:** Breaking the 12-column grid with overlapping elements and offset typography.
*   **Tonal Depth:** Moving away from flat interfaces toward a layered, tactile environment.
*   **High-Contrast Storytelling:** Using the warmth of terracotta against the cold precision of deep charcoals to guide the user's eye.

---

## 2. Colors: Tonal Atmosphere

Our palette is designed to feel authoritative yet energetic. We move beyond simple "brand colors" to a functional system of light and shadow.

### The Palette
*   **Primary (#994700):** Our "Terracotta" accent. Used for high-priority actions and energy.
*   **Secondary (#535F75):** "Deep Charcoal." Provides the grounding of professional science.
*   **Surface Hierarchy:** We utilize the `surface-container` tiers to build depth without clutter.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. 
*   **The Method:** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background.
*   **The Intent:** This creates a seamless, fluid transition between content blocks, mimicking the movement of a dancer across a stage.

### Glassmorphism & Signature Textures
To add "soul" to the interface, main CTAs and hero sections should utilize subtle linear gradients transitioning from `primary` to `primary-container`. For floating UI elements (like navigation bars or hovering info cards), apply a **Glassmorphism effect**:
*   **Fill:** `surface-variant` at 60% opacity.
*   **Backdrop Blur:** 20px to 40px.
*   **Stroke:** See "The Ghost Border" in Section 4.

---

## 3. Typography: Editorial Authority

The typography scale is designed to feel like a premium print journal.

*   **Display & Headlines (Noto Serif):** Our serif choice provides an "Artistic Excellence" feel. Use `display-lg` for hero statements with tight letter spacing (-2%) to create a sophisticated, high-fashion look.
*   **Body & Titles (Manrope):** Our sans-serif choice represents "Performance Science." It is geometric, modern, and highly legible. Use `body-lg` for most descriptive text to maintain a premium feel.
*   **Labels (Inter):** Reserved for technical data, small caps, or UI metadata.

**The Hierarchy Rule:** Never pair a large serif with a large sans-serif of equal weight. If the headline is a bold Serif, the sub-headline must be a lighter, more spaced-out Sans-Serif to ensure clear visual "breathing room."

---

## 4. Elevation & Depth: Tonal Layering

We reject traditional shadows in favor of a "physical stacking" philosophy.

### The Layering Principle
Treat the UI as a series of stacked sheets of fine paper.
*   **Base:** `surface`
*   **Sectioning:** `surface-container-low`
*   **Interactive Cards:** `surface-container-lowest` (This creates a soft, natural "lift" as it is brighter than the background).

### Ambient Shadows
When a floating effect is required (e.g., a modal or a primary program card), shadows must be:
*   **Blur:** 40px - 60px.
*   **Opacity:** 4% - 8%.
*   **Color:** A tinted version of `on-surface` (never pure black).

### The "Ghost Border" Fallback
If a border is absolutely necessary for accessibility, use the **Ghost Border**:
*   **Token:** `outline-variant`
*   **Opacity:** 15% maximum.
*   **Weight:** 1px.

---

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Solid `primary` or a gradient from `primary` to `primary-container`. Text is `on-primary`. 
    *   *Styling:* Roundedness `md` (0.375rem). No shadow; use a subtle scale-up on hover (1.02x).
*   **Secondary:** Ghost style. No fill, `outline` at 20% opacity. Text is `primary`.
*   **Tertiary:** No border, no fill. Text is `secondary` with an underline that appears only on hover.

### Program Cards
Cards are the heart of the "Performance Science" experience.
*   **Structure:** No dividers. Use `surface-container-highest` for the header area and `surface-container-lowest` for the body.
*   **Spacing:** Use generous internal padding (at least `2rem`).
*   **Imagery:** Use a slight grayscale filter on images, which transitions to full color on hover to signify "readiness."

### Input Fields
*   **State:** Default fields should use `surface-container-low` with no border.
*   **Focus:** Transition the background to `surface-container-lowest` and add a 2px `primary` bottom-border only. This maintains a clean, minimalist look while providing clear feedback.

### The "Performance Gauge" (Custom Component)
For displaying athlete data or program progress, use a thin, high-contrast linear gauge.
*   **Track:** `outline-variant` at 10% opacity.
*   **Indicator:** `primary` (Terracotta) for active progress.

---

## 6. Do’s and Don'ts

### Do
*   **Do** use asymmetrical layouts where text overlaps image containers slightly to create movement.
*   **Do** use `display-lg` typography for impact, but surround it with significant whitespace (`surface`).
*   **Do** use tonal shifts to separate content rather than lines.

### Don't
*   **Don't** use 100% opaque borders or dividers.
*   **Don't** use pure black (#000000) for text; always use `on-surface` (#0f1c2f) for a softer, high-end feel.
*   **Don't** use "standard" drop shadows with high opacity; they look dated and "cheap."
*   **Don't** clutter the screen. If an element isn't adding to the "Science" or "Art," remove it.

---

**Director's Final Note:**
This design system is about the tension between the clinical and the beautiful. Keep the layouts breathable, the type bold, and the surfaces layered. Every pixel should feel like it was placed with the same intention as a choreographer’s movement.