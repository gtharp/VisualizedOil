(() => {
  "use strict";

  /* ============================================================
     Oil, Visualized — page script
     Organized as guarded init modules: each returns early if its
     markup isn't on the page, so tabs never depend on a concept's
     internals and concepts can be added or removed independently.
     ============================================================ */

  const $ = (id) => document.getElementById(id);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- TABS ---------- */
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];

  const selectTab = (tab) => {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    panels.forEach((p) =>
      p.setAttribute("data-active", String(p.id === tab.getAttribute("aria-controls")))
    );
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
  };

  /* Resolve a URL hash to a tab. Accepts either the tab's own id
     (#t-check) or its panel id (#p-check), so external links from
     glossary.html work either way. */
  const tabFromHash = (hash) => {
    const id = String(hash || "").replace(/^#/, "");
    if (!id) return null;
    return (
      tabs.find((t) => t.id === id) ||
      tabs.find((t) => t.getAttribute("aria-controls") === id) ||
      null
    );
  };

  const initTabs = () => {
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => selectTab(tab));
      tab.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        selectTab(next);
      });
    });

    /* footer / in-page links that jump to a specific tab */
    document.querySelectorAll("[data-goto-tab]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const t = $(link.getAttribute("data-goto-tab"));
        if (t) { e.preventDefault(); selectTab(t); }
      });
    });

    /* deep links from glossary.html (e.g. index.html#t-ppc) */
    const openFromHash = () => {
      const t = tabFromHash(location.hash);
      if (t) selectTab(t);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  };

  /* ---------- CONCEPT 01 · STUDIO: view + estate toggles ---------- */
  const initStudio = () => {
    const studio = $("studio");
    if (!studio) return;

    const setView = (view) => {
      studio.querySelectorAll(".viewseg button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.view === view))
      );
      studio.querySelectorAll("[data-view-svg]").forEach((svg) =>
        svg.setAttribute("data-show", String(svg.dataset.viewSvg === view))
      );
    };
    studio.querySelectorAll(".viewseg button").forEach((b) =>
      b.addEventListener("click", () => setView(b.dataset.view))
    );

    const sxSurface = $("sx-surface");
    const sxPlane = $("sx-plane");
    const sxMin = $("sx-minerals");
    const plSurface = $("pl-surface");
    const plMin = $("pl-minerals");

    const setEstate = (mode) => {
      studio.querySelectorAll(".estateseg button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.estate === mode))
      );

      // cross-section
      if (mode === "surface") {
        sxSurface.style.opacity = "1"; sxSurface.style.transform = "none";
        sxMin.style.opacity = ".18"; sxPlane.style.opacity = "0";
      } else if (mode === "mineral") {
        sxSurface.style.opacity = ".18"; sxSurface.style.transform = "none";
        sxMin.style.opacity = "1"; sxPlane.style.opacity = "0";
      } else { // both / severed
        sxSurface.style.opacity = "1"; sxSurface.style.transform = "translateY(-42px)";
        sxMin.style.opacity = "1"; sxPlane.style.opacity = "1";
      }

      // plan view
      const showSurface = mode === "surface" || mode === "both";
      const showMin = mode === "mineral" || mode === "both";
      plSurface.style.display = showSurface ? "" : "none";
      plSurface.setAttribute("data-show", String(showSurface));
      plMin.style.display = showMin ? "" : "none";
      plMin.setAttribute("data-show", String(showMin));
      plSurface.style.opacity = mode === "both" ? "0.45" : "1";
    };
    studio.querySelectorAll(".estateseg button").forEach((b) =>
      b.addEventListener("click", () => setEstate(b.dataset.estate))
    );

    /* tract inspection */
    const TRACTS = {
      w80: { title: "West 80 — mineral tract", carl: { f: "1/3", pct: 33.3, net: "26.67" }, susan: { f: "2/3", pct: 66.7, net: "53.33" } },
      e80: { title: "East 80 — mineral tract", carl: { f: "2/3", pct: 66.7, net: "53.33" }, susan: { f: "1/3", pct: 33.3, net: "26.67" } }
    };
    const spTitle = $("sp-title"), spHint = $("sp-hint"), spDetail = $("sp-detail");
    const obCval = $("ob-c-val"), obSval = $("ob-s-val");
    const obCbar = $("ob-c-bar"), obSbar = $("ob-s-bar");
    const obClbl = $("ob-c-lbl"), obSlbl = $("ob-s-lbl");

    const clearHL = () => {
      ["sx-w80", "sx-e80", "pl-w80", "pl-e80"].forEach((id) => {
        const r = $(id)?.querySelector("rect");
        if (r && r.dataset.prevStroke !== undefined) {
          if (id.startsWith("pl-")) { r.setAttribute("stroke", "#243A35"); r.setAttribute("stroke-width", "1.5"); }
          else { r.removeAttribute("stroke"); r.removeAttribute("stroke-width"); }
        }
      });
    };

    const inspect = (key) => {
      const d = TRACTS[key];
      if (!d) return;
      spTitle.textContent = d.title;
      spHint.textContent = "Each owner holds an undivided fractional interest in the whole 80 acres.";
      spDetail.hidden = false;
      obClbl.textContent = "Carl"; obSlbl.textContent = "Susan";
      obCval.textContent = `${d.carl.f} · ${d.carl.net} net ac`;
      obSval.textContent = `${d.susan.f} · ${d.susan.net} net ac`;
      obCbar.style.width = `${d.carl.pct}%`; obCbar.textContent = d.carl.f;
      obSbar.style.width = `${d.susan.pct}%`; obSbar.textContent = d.susan.f;
      clearHL();
      [`sx-${key}`, `pl-${key}`].forEach((id) => {
        const r = $(id)?.querySelector("rect");
        if (r) {
          r.dataset.prevStroke = r.getAttribute("stroke") ?? "";
          r.setAttribute("stroke", "#A23A2A");
          r.setAttribute("stroke-width", "4");
        }
      });
    };

    ["w80", "e80"].forEach((key) => {
      [`sx-${key}`, `pl-${key}`].forEach((id) => {
        const el = $(id);
        if (!el) return;
        el.addEventListener("click", () => inspect(key));
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inspect(key); }
        });
      });
    });

    setView("section");
    setEstate("mineral");
  };

  /* ---------- CONCEPT 02 · SEPARATE TRACTS TIMELINE ---------- */
  const initTimeline = () => {
    const back = $("tl-back");
    if (!back) return;
    const next = $("tl-next");
    const dots = [...document.querySelectorAll("#tl .tl-dot")];
    const badge = $("tl-badge"), title = $("tl-title"), cap = $("tl-cap");
    const divide = $("tl-divide"), wholeG = $("tl-whole");
    const wholeName = $("tl-whole-name"), wholeSub = $("tl-whole-sub");
    const wlabel = $("tl-wlabel"), elabel = $("tl-elabel");
    const w1 = $("tl-w1"), w2 = $("tl-w2"), e1 = $("tl-e1"), e2 = $("tl-e2");
    const wfill = $("tl-wfill"), efill = $("tl-efill"), count = $("tl-count");

    const NEUTRAL = "#E3E7DF", WEST = "#DCEAE4", EAST = "#EDE4D2";
    const STEPS = [
      { t: "The whole", whole: true, name: "Ada Reyes", sub: "160 ac \u00B7 one tract",
        cap: "One owner holds the entire 160-acre mineral estate. Because the same person owns every acre, it\u2019s a single tract." },
      { t: "A deed splits it", west: ["Ada Reyes", "keeps W 80"], east: ["A buyer", "buys E 80"],
        cap: "Ada sells the minerals under the east half to a buyer and keeps the west. The instant ownership differs across that line, one tract becomes two." },
      { t: "Heirs divide the shares", west: ["Two heirs", "\u00BD + \u00BD"], east: ["Buyer + partner", "\u00BD + \u00BD"],
        cap: "Years pass. The west half is inherited by two children equally; the buyer sells half his east interest to a partner. Each tract now has co-owners holding fractions \u2014 but they\u2019re still two separate tracts." },
      { t: "The patterns diverge", west: ["Susan \u2154", "Carl \u2153"], east: ["Carl \u2154", "Susan \u2153"],
        cap: "Another generation inherits in unequal shares. Today both halves are owned by Carl and Susan \u2014 but in different proportions on each. That difference is exactly the two-tract split from Concept 01." }
    ];

    let i = 0;
    const render = () => {
      const s = STEPS[i];
      title.textContent = s.t;
      cap.textContent = s.cap;
      badge.textContent = `Step ${i + 1} of ${STEPS.length}`;
      dots.forEach((d, k) => d.classList.toggle("on", k === i));
      back.disabled = i === 0;
      next.disabled = i === STEPS.length - 1;
      if (s.whole) {
        divide.setAttribute("opacity", "0");
        wholeG.setAttribute("opacity", "1");
        wlabel.setAttribute("opacity", "0"); elabel.setAttribute("opacity", "0");
        wfill.setAttribute("fill", NEUTRAL); efill.setAttribute("fill", NEUTRAL);
        wholeName.textContent = s.name; wholeSub.textContent = s.sub;
        count.textContent = "ONE TRACT";
      } else {
        divide.setAttribute("opacity", "1");
        wholeG.setAttribute("opacity", "0");
        wlabel.setAttribute("opacity", "1"); elabel.setAttribute("opacity", "1");
        wfill.setAttribute("fill", WEST); efill.setAttribute("fill", EAST);
        [w1.textContent, w2.textContent] = s.west;
        [e1.textContent, e2.textContent] = s.east;
        count.textContent = "TWO TRACTS";
      }
    };
    back.addEventListener("click", () => { if (i > 0) { i--; render(); } });
    next.addEventListener("click", () => { if (i < STEPS.length - 1) { i++; render(); } });
    render();
  };

  /* ---------- CONCEPT 05 · POOLING / DILUTION ---------- */
  const initDilution = () => {
    const slider = $("unit-acres");
    if (!slider) return;
    const BIG = 80, SMALL = 2;
    const out = $("unit-out"), state = $("dil-state");
    const segBig = $("seg-big"), segSmall = $("seg-small"), segOthers = $("seg-others");
    const bigNum = $("big-num"), smallNum = $("small-num");
    const bigDelta = $("big-delta"), smallDelta = $("small-delta");
    const readout = $("dil-readout"), scaleEnd = $("unitscale-end");

    const r1 = (n) => (Math.round(n * 10) / 10).toFixed(1);
    const r2 = (n) => (Math.round(n * 100) / 100).toFixed(2);

    const update = () => {
      const U = Number(slider.value);
      out.textContent = `${U} ac`;
      scaleEnd.textContent = `${U} ac unit`;
      const standalone = U <= BIG;

      const big = standalone ? 100 : (BIG / U) * 100;
      const small = standalone ? 0 : (SMALL / U) * 100;
      const others = standalone ? 0 : (Math.max(0, U - BIG - SMALL) / U) * 100;

      segBig.style.width = `${big}%`;
      segSmall.style.width = `${small}%`;
      segOthers.style.width = `${others}%`;
      segBig.textContent = big > 14 ? "Big owner" : "";
      segSmall.textContent = small > 9 ? "Small" : "";
      segOthers.textContent = others > 16 ? "Other tracts" : "";

      bigNum.textContent = standalone ? "100%" : `${r1(big)}%`;
      smallNum.textContent = standalone ? "0%" : `${r2(small)}%`;

      if (standalone) {
        bigDelta.textContent = "keeps the whole well";
        bigDelta.className = "m-delta";
        smallDelta.textContent = "left out · drainage risk";
        smallDelta.className = "m-delta warn";
        state.textContent = "Stand-alone · no pooling";
        readout.innerHTML = "Standing alone, the big owner\u2019s 80-acre tract <strong>is</strong> the whole unit, so they keep <strong>100%</strong> of the well. The small owner is shut out entirely \u2014 and exposed to drainage from the wells next door.";
      } else {
        bigDelta.textContent = `\u25BC ${r1(100 - big)} pts from 100% (diluted)`;
        bigDelta.className = "m-delta down";
        smallDelta.textContent = "\u25B2 from 0% \u2014 now included";
        smallDelta.className = "m-delta up";
        state.textContent = "Pooled unit";
        readout.innerHTML = `Pool ${U} acres into the unit and the well still sits on the big owner\u2019s land \u2014 but their share is cut to <strong>${r1(big)}%</strong>. The small owner, who could never drill alone, goes from nothing to <strong>${r2(small)}%</strong>.`;
      }
    };
    slider.addEventListener("input", update);
    update();
  };

  /* ---------- CONCEPT 09 · ALLOCATION / PSA PERMIT TOGGLE ---------- */
  const initAllocation = () => {
    const wrap = $("aw");
    if (!wrap) return;
    const state = $("aw-state"), readout = $("aw-readout");
    const unit = $("aw-unit"), lines = $("aw-lines");
    const groups = {
      pooled: [$("aw-m-pooled"), $("aw-b-pooled")],
      psa: [$("aw-m-psa"), $("aw-b-psa")],
      alloc: [$("aw-m-alloc"), $("aw-b-alloc")]
    };
    const MODES = {
      pooled: {
        label: "Pooled unit well",
        text: "The three tracts pool into one <strong>400-acre unit</strong>. The Railroad Commission treats the whole unit as a single lease \u2014 the interior lines vanish for spacing purposes \u2014 and production is shared by <strong>acreage</strong>: Tract A takes 160/400 = 40%, B takes 40%, C takes 20%. This is Concept 05."
      },
      psa: {
        label: "PSA well",
        text: "No unit exists and the lease lines stay. But at least <strong>65% of the mineral and working interest owners in every tract</strong> signed a production sharing agreement, so production splits by <strong>whatever formula the agreement sets</strong> \u2014 often lateral footage, sometimes acreage, sometimes a blend. The contract, not a rule, does the dividing."
      },
      alloc: {
        label: "Allocation well",
        text: "No unit, no agreement. The operator allocates production on its own \u2014 most commonly by <strong>productive footage</strong>: Tract A takes 3,000/10,000 = 30%, B takes 50%, C takes 20%. Notice B\u2019s share <em>rose</em> from 40% to 50% and A\u2019s fell \u2014 same well, same oil, different formula."
      }
    };

    const setMode = (mode) => {
      wrap.querySelectorAll(".permitseg button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.mode === mode))
      );
      Object.entries(groups).forEach(([key, els]) =>
        els.forEach((el) => el.setAttribute("opacity", key === mode ? "1" : "0"))
      );
      unit.setAttribute("opacity", mode === "pooled" ? "1" : "0");
      lines.setAttribute("opacity", mode === "pooled" ? "0.15" : "1");
      state.textContent = MODES[mode].label;
      readout.innerHTML = MODES[mode].text;
    };

    wrap.querySelectorAll(".permitseg button").forEach((b) =>
      b.addEventListener("click", () => setMode(b.dataset.mode))
    );
    setMode("pooled");
  };


  /* ---------- CONCEPT 10 · POST-PRODUCTION COSTS: VALUATION POINT ---------- */
  const initPPC = () => {
    const slider = $("vp-point");
    if (!slider) return;

    const out = $("vp-out"),
      state = $("vp-state"),
      marker = $("vp-marker"),
      baseEl = $("vp-base"),
      baseDelta = $("vp-basedelta"),
      royEl = $("vp-roy"),
      royDelta = $("vp-roydelta"),
      readout = $("vp-readout"),
      segs = [$("vp-s1"), $("vp-s2"), $("vp-s3")];

    const STOPS = [
      {
        short: "Wellhead",
        state: "All costs come out",
        left: "76.67%",
        on: 0,
        base: "$2.30",
        roy: "$0.46",
        costs: "$0.70",
        delta: "\u25BC 23% below the market number",
        text:
          "Your royalty is figured on the raw value of the gas <strong>at the wellhead \u2014 $2.30</strong>. Everything spent moving it to market happens downstream of the flag, so you carry your share of all <strong>$0.70</strong>. This is the Texas default, and the phrase that produces it is \u201Cmarket value at the well.\u201D On 10,000 Mcf in a month, the gap costs you about <strong>$1,400</strong>."
      },
      {
        short: "Post-gathering",
        state: "Most costs come out",
        left: "88.34%",
        on: 1,
        base: "$2.65",
        roy: "$0.53",
        costs: "$0.35",
        delta: "\u25BC 12% below the market number",
        text:
          "The lease measures value after the gas has been gathered and compressed. Those first fees are on the operator; processing and transportation still come out of your share. Gap on 10,000 Mcf: about <strong>$700</strong>."
      },
      {
        short: "Post-processing",
        state: "Some costs come out",
        left: "93.34%",
        on: 2,
        base: "$2.80",
        roy: "$0.56",
        costs: "$0.20",
        delta: "\u25BC 7% below the market number",
        text:
          "Value is measured once the gas is clean and processed. Only the long-haul transportation and marketing charges are left to share \u2014 about <strong>$400</strong> a month on 10,000 Mcf."
      },
      {
        short: "Point of sale",
        state: "No costs come out",
        left: "99.7%",
        on: 3,
        base: "$3.00",
        roy: "$0.60",
        costs: "$0.00",
        delta: "\u25B2 the full market value, nothing deducted",
        text:
          "The flag sits where the gas is actually sold. Your royalty is figured on the whole <strong>$3.00</strong> the operator receives, and no post-production cost touches it. Getting here takes deliberate wording \u2014 gross proceeds at the point of sale, plus an add-back for anything the purchaser nets out."
      }
    ];

    const update = () => {
      const i = Number(slider.value),
        d = STOPS[i];
      out.textContent = d.short;
      state.textContent = d.state;
      marker.style.left = d.left;
      baseEl.textContent = d.base;
      baseDelta.textContent = `per Mcf \u00B7 ${d.costs} of cost sits downstream`;
      royEl.textContent = d.roy;
      royDelta.textContent = d.delta;
      royDelta.className = `m-delta ${i === STOPS.length - 1 ? "up" : "down"}`;
      readout.innerHTML = d.text;
      segs.forEach((seg, k) => seg && seg.classList.toggle("off", k >= d.on));
    };

    slider.addEventListener("input", update);
    update();
  };

  /* ---------- boot ---------- */
  initTabs();
  initStudio();
  initTimeline();
  initDilution();
  initAllocation();
  initPPC();
})();
