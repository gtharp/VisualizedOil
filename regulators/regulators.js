(() => {
  "use strict";

  /* ============================================================
     Oil, Visualized — regulators section script
     Two guarded modules: the tile map (click a state, go to its
     page) and the API number decoder. Each returns early if its
     markup isn't present, so the same file is safe to load on
     both the hub and the ten state pages.
     ============================================================ */

  const $ = (id) => document.getElementById(id);

  /* ---------- TILE MAP ---------- */
  const initMap = () => {
    const map = $("tilemap");
    if (!map) return;

    const go = (el) => {
      const href = el.getAttribute("data-href");
      if (href) window.location.href = href;
    };

    map.querySelectorAll(".tile.pick").forEach((t) => {
      t.addEventListener("click", () => go(t));
      t.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go(t);
        }
      });
    });
  };

  /* ---------- API NUMBER DECODER ----------
     County codes below are the ones published by each state's
     assigning authority; in every state shown they line up with
     the federal FIPS county code. Kern County, California is the
     documented exception that proves the rule: it exhausted its
     99,999 well numbers under code 029 and was given a second
     county code, 030.                                          */
  const STATES = [
    { c: "04", n: "California", label: "county", co: [["029", "Kern"], ["030", "Kern — second block"], ["111", "Ventura"]] },
    { c: "05", n: "Colorado", label: "county", co: [["123", "Weld"], ["045", "Garfield"], ["001", "Adams"], ["067", "La Plata"]] },
    { c: "17", n: "Louisiana", label: "parish", co: [["031", "DeSoto"], ["081", "Red River"], ["015", "Bossier"], ["017", "Caddo"]] },
    { c: "30", n: "New Mexico", label: "county", co: [["025", "Lea"], ["015", "Eddy"], ["045", "San Juan"], ["005", "Chaves"]] },
    { c: "33", n: "North Dakota", label: "county", co: [["053", "McKenzie"], ["105", "Williams"], ["061", "Mountrail"], ["025", "Dunn"]] },
    { c: "34", n: "Ohio", label: "county", co: [["013", "Belmont"], ["111", "Monroe"], ["019", "Carroll"], ["067", "Harrison"]] },
    { c: "35", n: "Oklahoma", label: "county", co: [["073", "Kingfisher"], ["017", "Canadian"], ["051", "Grady"], ["011", "Blaine"]] },
    { c: "37", n: "Pennsylvania", label: "county", co: [["125", "Washington"], ["059", "Greene"], ["115", "Susquehanna"], ["015", "Bradford"]] },
    { c: "42", n: "Texas", label: "county", co: [["301", "Loving"], ["389", "Reeves"], ["329", "Midland"], ["317", "Martin"], ["255", "Karnes"]] },
    { c: "47", n: "West Virginia", label: "county", co: [["017", "Doddridge"], ["051", "Marshall"], ["103", "Wetzel"], ["033", "Harrison"]] },
    { c: "49", n: "Wyoming", label: "county", co: [["005", "Campbell"], ["009", "Converse"], ["035", "Sublette"], ["021", "Laramie"]] }
  ];

  /* The four documented wellbore / event combinations. */
  const EVENTS = [
    { st: "00", ev: "00", k: "original", t: "the original wellbore, on its original completion" },
    { st: "00", ev: "01", k: "plugback", t: "the original wellbore, plugged back and recompleted once" },
    { st: "01", ev: "00", k: "sidetrack", t: "the first sidetrack drilled off the original hole" },
    { st: "01", ev: "01", k: "both", t: "the first recompletion of that first sidetrack" }
  ];

  /* The anchor: a real, public, permitted well — the horseshoe
     lateral drawn in the diagram gallery. */
  const ANCHOR = { state: "42", county: "301", well: "34156" };
  const ANCHOR_NAME = "NEELIE 1-85 LOV 4H";

  const initApi = () => {
    const root = $("apidecoder");
    if (!root) return;

    let si = STATES.findIndex((s) => s.c === ANCHOR.state);
    let ci = STATES[si].co.findIndex((c) => c[0] === ANCHOR.county);
    let ei = 0;

    const el = {
      state: $("api-state"),
      county: $("api-county"),
      well: $("api-well"),
      stk: $("api-stk"),
      evt: $("api-evt"),
      capState: $("cap-state"),
      capCounty: $("cap-county"),
      read: $("api-read")
    };

    const wrap = (i, len, d) => (i + d + len) % len;

    const render = () => {
      const s = STATES[si];
      const co = s.co[ci];
      const e = EVENTS[ei];

      el.state.textContent = s.c;
      el.county.textContent = co[0];
      el.well.textContent = ANCHOR.well;
      el.stk.textContent = e.st;
      el.evt.textContent = e.ev;

      el.capState.textContent = s.n;
      el.capCounty.textContent = co[1] + (s.label === "parish" ? " Parish" : " Co.");

      /* dim the trailing pair when it carries no information */
      root.querySelector('[data-seg="stk"]').classList.toggle("dim", e.st === "00");
      root.querySelector('[data-seg="evt"]').classList.toggle("dim", e.ev === "00");

      root.querySelectorAll("[data-evt]").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.getAttribute("data-evt") === e.k))
      );

      const place = co[1] + (s.label === "parish" ? " Parish" : " County") + ", " + s.n;
      const isAnchor = s.c === ANCHOR.state && co[0] === ANCHOR.county;

      el.read.innerHTML = isAnchor
        ? "The <b>34,156th</b> well assigned a number in <b>" + place + "</b> — " + e.t + "." +
          '<span class="who">This one is real: ' + ANCHOR_NAME +
          ", the horseshoe well in the diagram gallery</span>"
        : "Read as: the <b>34,156th</b> well assigned a number in <b>" + place + "</b> — " + e.t + "." +
          '<span class="who">Illustrative — only the state and ' + s.label +
          " codes change as you step through</span>";
    };

    root.querySelectorAll("[data-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [seg, dir] = btn.getAttribute("data-step").split(":");
        const d = Number(dir);
        if (seg === "state") {
          si = wrap(si, STATES.length, d);
          ci = 0;
        } else {
          ci = wrap(ci, STATES[si].co.length, d);
        }
        render();
      });
    });

    root.querySelectorAll("[data-evt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        ei = EVENTS.findIndex((x) => x.k === btn.getAttribute("data-evt"));
        render();
      });
    });

    const reset = $("api-reset");
    if (reset) {
      reset.addEventListener("click", () => {
        si = STATES.findIndex((s) => s.c === ANCHOR.state);
        ci = STATES[si].co.findIndex((c) => c[0] === ANCHOR.county);
        ei = 0;
        render();
      });
    }

    render();
  };

  /* ---------- boot ---------- */
  initMap();
  initApi();
})();
