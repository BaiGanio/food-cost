# 🌍 food‑cost  
### Calculating the true cost of sustaining a human being

**food‑cost** is an open‑source project that models the real cost of feeding a single person — not only in money, but in energy, resources, waste, and systemic inefficiencies across the global food chain.

The project combines nutritional science, economic data, agricultural statistics, and environmental metrics to answer a deceptively simple question:

> **How much does it actually cost to sustain one human per day?**

---

## 🚀 Purpose

Modern food systems are massive, complex, and inefficient. We produce more than enough food globally, yet waste a staggering portion of it. Meanwhile, the energy required to grow, transport, store, and prepare food is often invisible.

**food‑cost** aims to make these hidden flows visible.

The project calculates:

- Baseline human energy needs  
- Monetary cost of meeting those needs  
- Energy cost of producing those calories  
- Overproduction vs. actual consumption  
- Food waste at every stage  
- Environmental and resource externalities  

The result is a transparent, modular model that reveals the **true cost per person**.

---

## 📊 What the model includes

### 1. Human Requirements
- Daily caloric needs  
- Macro/micro nutrient baselines  
- Energy equivalence (kcal → joules → watts)

### 2. Food Production Data
- Global and regional production volumes  
- Agricultural energy inputs  
- Land and water usage  
- Supply chain losses  

### 3. Food Waste & Overconsumption
- Household waste  
- Retail waste  
- Distribution losses  
- Overproduction margins  

### 4. Economic Costs
- Average food prices  
- Cost per calorie  
- Cost per nutrient  
- Regional price variations  

### 5. Environmental Costs
- CO₂ emissions  
- Water footprint  
- Land footprint  
- Fertilizer and fuel usage  

---

## 🌐 Data Sources (Free & Public)

The project relies on open datasets such as:

- FAO (Food and Agriculture Organization of the UN)  
- USDA (United States Department of Agriculture)  
- Eurostat  
- Our World in Data  
- World Bank  
- UNEP (United Nations Environment Programme)  
- National statistical agencies  

The architecture is designed so new data sources can be plugged in easily.

---

## 🧩 Architecture (High‑Level)


The system is modular, allowing contributors to add:

- new datasets  
- new calculators  
- new visualizations  
- new regional models  

without breaking the core.

---

## 🧮 Core Calculations

The model computes:

- Ideal consumption  
- Actual consumption  
- Overconsumption factor  
- Waste factor  
- Energy cost per calorie  
- Monetary cost per calorie  
- Environmental cost per calorie  
- Final “true cost per person per day”

The output can be aggregated:

- per person  
- per household  
- per region  
- per country  
- globally  

---

## 🛣️ Roadmap

### Phase 1 — Foundations
- Define core formulas  
- Integrate baseline datasets  
- Build minimal calculation engine  

### Phase 2 — Expansion
- Add regional models  
- Add waste & overproduction layers  
- Add environmental metrics  

### Phase 3 — Visualization
- Charts, dashboards, and API endpoints  
- Interactive “true cost per person” explorer  

### Phase 4 — Insights
- Comparative reports  
- Policy simulations  
- Optimization scenarios  

---

## 🤝 Contributing

Contributions are welcome — from data sourcing to modeling, visualization, or documentation.  
The goal is to build a transparent, community‑driven tool that anyone can use.

---

## 📜 License

MIT License (or your preferred open‑source license).

