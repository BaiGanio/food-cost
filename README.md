# food-cost
`
food-cost/
│
├── index.html
│
├── /assets
│   ├── /css
│   │   ├── base.css
│   │   ├── theme-light.css
│   │   ├── theme-dark.css
│   │   └── components.css
│   │
│   ├── /js
│   │   ├── app.js
│   │   ├── router.js
│   │   ├── storage.js
│   │   └── ui.js
│   │
│   ├── /img
│   │   └── (icons, logo, placeholders)
│   │
│   └── /data
│       └── sample.json (optional)
│
└── /components
    ├── header.html
    ├── footer.html
    ├── home.html
    ├── calculator.html
    ├── settings.html
`

1. Skeleton SPA
Create index.html

Add Bootstrap CDN

Add <div id="app"></div>

Add router + basic navigation

2. Theme System
Create CSS variable sets

Implement theme toggle

Persist theme in localStorage

3. Routing + Components
Build router.js

Load components dynamically

Test navigation without reload

4. Core Feature: Cost Calculator
Ingredient list

Quantity × price logic

Table rendering

Save to localStorage

5. Mobile Polish
Responsive spacing

Touch-friendly UI

Test on small screens

6. Visual Polish
Cards, shadows, transitions

Dark mode contrast tuning