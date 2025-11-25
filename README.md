# 🌿 **Green Sight — a quiet-luxury plant shop with sunlight vibes**

Minimal, calm, and intentional.
A clean e-commerce experience for browsing plants, managing a cart, and completing a checkout — all with soft motion and zero clutter.

---

## **Demo**

Live:
Screens:

---

# **Features**

Features
🪴 Product catalog with clean card layout
🔍 Product detail with selectable options to select from
🛒 Cart system with localStorage persistence
🔁 Auto-restore cart state on reload
🧾 Full checkout flow with validated form (Zod + RHF)
📮 Address + user info form with inline errors
💳 Payment method selector (UI only)
📦 Order summary with live totals + shipping
🌤️ Quiet-luxury design language (soft, airy, minimal)
💅 Clean React + TypeScript + Tailwind + ShadCN
🧱 Feature-based architecture (2025 standard)


---

# **Stack**

• React 
• TypeScript 
• Tailwind CSS 
• ShadCN UI 
• React Router
• Zod 
• React Hook Form 
• Context API

---

# **Project Structure**

```
src/
  App.tsx
  main.tsx

  assets/
    main page/...
    products/...
    thumbnailgallery/...

  components/
    ui/                # ShadCN components

  context/
    CartContext.tsx

  lib/
    utils.ts

  types/
    types.tsx

  pages/
    Main/
      Main.tsx
      components/
        Header.tsx
        Hero.tsx
        Collections.tsx
        Journal.tsx
        NewArrivals.tsx
        InHomes.tsx
        Quality.tsx
        AboutSection.tsx
        Footer.tsx

    Products/
      Products.tsx
      FilterSheet.tsx

    Product/
      Product.tsx
      components/
        ProductLeft.tsx
        ProductRight.tsx
        Related.tsx
        Story.tsx
      hook/
        useProduct.tsx

    Cart/
      Cart.tsx

    Checkout/
      Checkout.tsx
      components/
        Form.tsx
        OrderSummary.tsx
      hook/
        useCheckout.tsx

    About/
      About.tsx

```

UI is split into focused, self-contained components;
Every UI block is clean, isolated, and declarative.

---

# **Checkout Flow**

The entire checkout logic is handled inside a **single custom hook**:

### `useCheckout.ts`

* Form state (React Hook Form)
* Zod validation
* Payment method state
* Submission handler
* Cart clearing on success
* Typed errors & handlers

---

# **State & Logic**

### **Cart**

* Context-based
* Typed items
* Live subtotal → shipping → total

### **Checkout**

* Controlled form + schema
* Errors shown inline
* Disabled submit state
* Fake async request for UX realism

---

# **Design Notes**

* Quiet, airy visual style (sunlight minimalism)
* Neutral palette, soft edges, natural spacing
* Tailwind with 2025 conventions (`gap-*`, minimal overrides)
* No layout shifting
* Pure, intentional UI hierarchy

---

# **Getting Started**

```
# install
npm install

# dev server
npm run dev

# production build
npm run build

# preview production build locally
npm run preview
```

---

# **Why this project exists**

Green Sight shows how I build real-world frontends:

* Clean and scalable architecture
* Strong TypeScript habits
* Real e-commerce features (cart → checkout → confirmation)
* Modern React patterns with custom hooks
* A polished interface that feels like a real product

This repo represents my coding style:
**simple, calm, structured, and production-conscious.**

---

