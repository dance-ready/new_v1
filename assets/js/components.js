/* Shared interactive components for the Dance Ready Project site.
   Each component guards on element existence so this file can load on every page.
   All HTML strings are built from hardcoded constants in data.js — no user input. */

(function(){
  var DRP = window.DRP || {};

  // Escape helpers — used everywhere we interpolate strings into markup
  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  // Append a fragment built from an HTML string. Uses Range.createContextualFragment
  // (a standard DOM API) so we never touch element.innerHTML directly.
  function appendHTML(parent, htmlStr){
    var range = document.createRange();
    range.selectNodeContents(parent);
    var frag = range.createContextualFragment(htmlStr);
    parent.appendChild(frag);
  }
  function setHTML(parent, htmlStr){
    while(parent.firstChild) parent.removeChild(parent.firstChild);
    appendHTML(parent, htmlStr);
  }

  /* ── MOBILE NAV ── */
  var navToggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nl');
  if(navToggle && navList){
    navToggle.addEventListener('click', function(){
      navList.classList.toggle('show');
    });
  }

  /* ── HERO SLIDESHOW ── */
  (function(){
    var stage = document.getElementById('hero-slides');
    var dotsEl = document.getElementById('hero-dots');
    if(!stage || !DRP.heroSlides) return;
    DRP.heroSlides.forEach(function(s, i){
      var slide = document.createElement('div');
      slide.className = 'hslide' + (i===0 ? ' on' : '');
      var img = document.createElement('img');
      img.src = s.img;
      img.alt = s.label || '';
      img.loading = i === 0 ? 'eager' : 'lazy';
      if(s.pos) img.style.objectPosition = s.pos;
      img.onerror = function(){ this.style.display = 'none'; };
      slide.appendChild(img);
      stage.appendChild(slide);
    });
    var slides = stage.querySelectorAll('.hslide');
    var dots = [];
    if(dotsEl){
      slides.forEach(function(_, i){
        var d = document.createElement('button');
        d.className = 'hdot' + (i===0 ? ' on' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (i+1));
        d.onclick = function(){ goSlide(i); };
        dotsEl.appendChild(d);
        dots.push(d);
      });
    }
    var cur = 0;
    function goSlide(n){
      if(n === cur) return;
      slides[cur].classList.remove('on');
      if(dots[cur]) dots[cur].classList.remove('on');
      cur = n;
      slides[cur].classList.add('on');
      if(dots[cur]) dots[cur].classList.add('on');
    }
    setInterval(function(){ goSlide((cur+1) % slides.length); }, 4500);
  })();

  /* ── STAT COUNTER ── */
  function count(el, target, suffix, dur){
    if(!el) return;
    var s = Date.now();
    function tick(){
      var p = Math.min((Date.now()-s)/dur, 1);
      var v = Math.round((1-Math.pow(1-p,3))*target);
      el.textContent = v + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  document.querySelectorAll('.sn[data-target]').forEach(function(el){
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = parseInt(el.getAttribute('data-dur'), 10) || 1200;
    setTimeout(function(){ count(el, target, suffix, dur); }, 400);
  });

  /* ── BRANDS MARQUEE ── */
  (function(){
    var mq = document.getElementById('mq');
    if(!mq || !DRP.brands) return;
    DRP.brands.concat(DRP.brands).forEach(function(b){
      var s = document.createElement('span');
      s.className = 'mq-item';
      s.textContent = b;
      mq.appendChild(s);
    });
  })();

  /* ── PILLARS ── */
  (function(){
    var ph = document.getElementById('pillars-home');
    if(!ph || !DRP.pillarData) return;
    DRP.pillarData.forEach(function(p){
      var bg = "background:" + p.bg + ", url('" + p.img + "');background-size:cover;background-position:center;width:100%;height:100%;display:flex;align-items:center;justify-content:center";
      appendHTML(ph,
        '<div class="pillar">' +
          '<div class="pillar-img">' +
            '<div class="pillar-img-bg" style="' + esc(bg) + '"></div>' +
            '<div class="pillar-num">' + esc(p.n) + '</div>' +
            '<div class="pillar-detail"><span class="pillar-detail-text">' + esc(p.detail) + '</span></div>' +
          '</div>' +
          '<div class="pillar-body">' +
            '<div class="ct" style="font-family:\'Cormorant Garamond\',serif;font-size:21px;font-weight:400;margin-bottom:8px;color:var(--ink)">' + esc(p.t) + '</div>' +
            '<p class="lead" style="font-size:13px;margin-bottom:12px">' + esc(p.d) + '</p>' +
            '<a href="' + esc(p.page) + '" class="bu">Explore ' + esc(p.t) + ' →</a>' +
          '</div>' +
        '</div>'
      );
    });
  })();

  /* ── TESTIMONIALS ── */
  (function(){
    var ttabs = document.getElementById('testi-tabs');
    var tquotes = document.getElementById('testi-quotes');
    var tdots = document.getElementById('tq-dots');
    if(!ttabs || !tquotes || !DRP.testis) return;
    var at = 0;
    function render(){
      setHTML(ttabs, '');
      setHTML(tquotes, '');
      if(tdots) setHTML(tdots, '');
      DRP.testis.forEach(function(t, i){
        appendHTML(ttabs,
          '<div class="testi-tab' + (i===at ? ' on' : '') + '" data-testi="' + i + '">' +
            '<p>' + esc(t.name) + '</p><span>' + esc(t.role) + '</span>' +
          '</div>'
        );
        var off = i===at ? '' : (i<at ? ' off-l' : ' off-r');
        appendHTML(tquotes,
          '<div class="tq' + off + '">' +
            '<div class="tq-mark">"</div>' +
            '<p class="tq-text">' + esc(t.q) + '</p>' +
            '<p class="tq-cite">— ' + esc(t.name) + ', <span style="font-weight:400;opacity:.7">' + esc(t.role) + '</span></p>' +
          '</div>'
        );
        if(tdots){
          var w = i===at ? '22px' : '6px';
          var bg = i===at ? 'var(--ember)' : 'rgba(28,28,26,.18)';
          appendHTML(tdots,
            '<button class="tq-dot" data-testi="' + i + '" aria-label="Show testimonial ' + (i+1) + '" style="width:' + w + ';background:' + bg + '"></button>'
          );
        }
      });
      ttabs.querySelectorAll('[data-testi]').forEach(function(el){
        el.addEventListener('click', function(){ at = parseInt(el.getAttribute('data-testi'), 10); render(); });
      });
      if(tdots){
        tdots.querySelectorAll('[data-testi]').forEach(function(el){
          el.addEventListener('click', function(){ at = parseInt(el.getAttribute('data-testi'), 10); render(); });
        });
      }
    }
    render();
  })();

  /* ── FAQ ACCORDION ── */
  (function(){
    var faqEl = document.getElementById('faq');
    if(!faqEl || !DRP.faqData) return;
    var openFaq = -1;
    DRP.faqData.forEach(function(f, i){
      appendHTML(faqEl,
        '<div class="acc-item" id="fq-' + i + '">' +
          '<button class="acc-btn" data-faq="' + i + '">' +
            '<span class="acc-num">0' + (i+1) + '</span>' +
            '<span class="acc-label">' + esc(f.t) + '</span>' +
            '<span class="acc-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>' +
          '</button>' +
          '<div class="acc-content" id="fqc-' + i + '"><div class="acc-inner">' + esc(f.b) + '</div></div>' +
        '</div>'
      );
    });
    function toggleFaq(i){
      var wasOpen = (openFaq === i);
      if(openFaq >= 0){
        var oldItem = document.getElementById('fq-'+openFaq);
        var oldC = document.getElementById('fqc-'+openFaq);
        if(oldItem) oldItem.classList.remove('open');
        if(oldC){ oldC.style.maxHeight = '0'; oldC.classList.remove('open'); }
      }
      openFaq = wasOpen ? -1 : i;
      if(!wasOpen){
        var item = document.getElementById('fq-'+i);
        var c = document.getElementById('fqc-'+i);
        if(item) item.classList.add('open');
        if(c){ c.classList.add('open'); c.style.maxHeight = c.scrollHeight + 'px'; }
      }
    }
    faqEl.addEventListener('click', function(e){
      var btn = e.target.closest('.acc-btn');
      if(!btn) return;
      toggleFaq(parseInt(btn.getAttribute('data-faq'), 10));
    });
    toggleFaq(0);
  })();

  /* ── EVENTS ACCORDION ── */
  (function(){
    var evEl = document.getElementById('events-list');
    if(!evEl || !DRP.evData) return;
    var openEv = -1;
    DRP.evData.forEach(function(ev, i){
      var freeBadge = ev.free ? ' &nbsp;<span class="ev-free-tag">FREE</span>' : '';
      appendHTML(evEl,
        '<div class="ev-item" id="ev-' + i + '">' +
          '<div class="ev-head" data-ev="' + i + '">' +
            '<div class="ev-date"><div class="ev-day">' + esc(ev.day) + '</div><div class="ev-mon">' + esc(ev.mon) + '</div></div>' +
            '<div class="ev-info">' +
              '<div class="ev-type">' + esc(ev.type) + freeBadge + '</div>' +
              '<div class="ev-title">' + esc(ev.title) + '</div>' +
              '<div class="ev-meta">' + esc(ev.time) + ' · ' + esc(ev.loc.split(',')[0]) + '</div>' +
            '</div>' +
            '<div class="ev-toggle"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>' +
          '</div>' +
          '<div class="ev-body" id="evb-' + i + '"><div class="ev-body-inner">' +
            '<div><p style="font-size:14px;color:var(--stone);line-height:1.78;margin-bottom:14px">' + esc(ev.desc) + '</p><button class="bp" style="font-size:12px">' + esc(ev.cta) + '</button></div>' +
            '<div style="background:var(--cream);border:1px solid var(--bd);padding:16px"><p style="font-family:\'Cormorant Garamond\',serif;font-size:17px;font-weight:300;margin-bottom:6px;color:var(--ink)">' + esc(ev.title) + '</p><p style="font-size:12px;color:var(--stone);line-height:1.6">📅 ' + esc(ev.time) + '<br>📍 ' + esc(ev.loc) + '</p></div>' +
          '</div></div>' +
        '</div>'
      );
    });
    function toggleEv(i){
      var wasOpen = (openEv === i);
      if(openEv >= 0){
        var oI = document.getElementById('ev-'+openEv);
        var oB = document.getElementById('evb-'+openEv);
        if(oI) oI.classList.remove('open');
        if(oB){ oB.classList.remove('open'); oB.style.maxHeight = '0'; }
      }
      openEv = wasOpen ? -1 : i;
      if(!wasOpen){
        var nI = document.getElementById('ev-'+i);
        var nB = document.getElementById('evb-'+i);
        if(nI) nI.classList.add('open');
        if(nB){ nB.classList.add('open'); nB.style.maxHeight = nB.scrollHeight + 'px'; }
      }
    }
    evEl.addEventListener('click', function(e){
      var head = e.target.closest('.ev-head');
      if(!head) return;
      toggleEv(parseInt(head.getAttribute('data-ev'), 10));
    });
    toggleEv(0);
  })();

  /* ── FEATURES (DANSEBRIDGE) ── */
  (function(){
    var featEl = document.getElementById('features');
    if(!featEl || !DRP.featData) return;
    var openFeat = 0;
    DRP.featData.forEach(function(f, i){
      var cls = 'feat-item' + (i===0 ? ' on' + (f.dk ? ' dk-bg' : '') : '');
      appendHTML(featEl,
        '<div class="' + cls + '" id="fi-' + i + '">' +
          '<div class="feat-head" data-feat="' + i + '">' +
            '<span class="feat-ico">' + esc(f.ico) + '</span>' +
            '<span class="feat-title">' + esc(f.t) + '</span>' +
            '<span class="feat-arrow">▶</span>' +
          '</div>' +
          '<div class="feat-body' + (i===0 ? ' open' : '') + '" id="fb-' + i + '">' +
            '<p class="feat-text">' + esc(f.b) + '</p>' +
          '</div>' +
        '</div>'
      );
    });
    function toggleFeat(i){
      if(openFeat === i) return;
      var oldI = document.getElementById('fi-'+openFeat);
      var oldB = document.getElementById('fb-'+openFeat);
      if(oldI) oldI.className = 'feat-item';
      if(oldB) oldB.className = 'feat-body';
      openFeat = i;
      var nd = DRP.featData[i];
      var nI = document.getElementById('fi-'+i);
      if(nI) nI.className = 'feat-item on' + (nd.dk ? ' dk-bg' : '');
      var nB = document.getElementById('fb-'+i);
      if(nB) nB.className = 'feat-body open';
    }
    featEl.addEventListener('click', function(e){
      var head = e.target.closest('.feat-head');
      if(!head) return;
      toggleFeat(parseInt(head.getAttribute('data-feat'), 10));
    });
  })();

  /* ── PROMISES ── */
  (function(){
    var prEl = document.getElementById('promises');
    if(!prEl || !DRP.promiseData) return;
    DRP.promiseData.forEach(function(p){
      var d = document.createElement('div');
      d.className = 'pi';
      d.textContent = p;
      prEl.appendChild(d);
    });
  })();

  /* ── COURSES ── */
  (function(){
    var cEl = document.getElementById('courses');
    if(!cEl || !DRP.courseData) return;
    DRP.courseData.forEach(function(c){
      var bg = "background:" + c.bg + ", url('" + c.img + "');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;height:160px";
      var listItems = c.list.map(function(li){
        return '<li style="padding:3px 0;display:flex;gap:7px"><span style="color:var(--ember);flex-shrink:0">—</span>' + esc(li) + '</li>';
      }).join('');
      appendHTML(cEl,
        '<div class="course">' +
          '<div class="course-img">' +
            '<div class="course-img-inner" style="' + esc(bg) + '"></div>' +
            '<div class="course-hover"><div class="course-hover-text">' + esc(c.list.join(' · ')) + '</div></div>' +
          '</div>' +
          '<div class="course-body">' +
            '<span style="font-size:9px;background:var(--cream);border:1px solid var(--bd);color:var(--stone);padding:2px 8px;letter-spacing:.1em;text-transform:uppercase">Coming Soon</span>' +
            '<div style="font-family:\'Cormorant Garamond\',serif;font-size:19px;font-weight:300;margin:8px 0 4px;color:var(--ink)">' + esc(c.t) + '</div>' +
            '<p style="font-size:11px;color:var(--ember);font-style:italic;margin-bottom:8px">' + esc(c.sub) + '</p>' +
            '<div class="course-list"><ul style="list-style:none;font-size:12px;color:var(--stone);padding:0">' + listItems + '</ul></div>' +
            '<button class="bu" style="margin-top:10px">Notify Me →</button>' +
          '</div>' +
        '</div>'
      );
    });
  })();

  /* ── AFFILIATES ── */
  (function(){
    var affEl = document.getElementById('aff-list');
    if(!affEl || !DRP.affData) return;
    var openAff = -1;
    DRP.affData.forEach(function(a, i){
      var codeHtml = a.code
        ? '<div><p style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--stone);margin-bottom:6px">Your discount code</p><div class="copy-btn" data-code="' + esc(a.code) + '" data-aff="' + i + '">' + esc(a.code) + ' <svg width="13" height="13" viewBox="0 0 15 15" fill="none"><rect x="4" y="4" width="9" height="9" rx="1" stroke="#5C5B57" stroke-width="1.2"/><path d="M3 10V3a1 1 0 0 1 1-1h7" stroke="#5C5B57" stroke-width="1.2" stroke-linecap="round"/></svg></div><p class="copy-ok" id="co-' + i + '"></p></div>'
        : '';
      appendHTML(affEl,
        '<div class="aff-item" id="af-' + i + '">' +
          '<div class="aff-head" data-aff="' + i + '">' +
            '<div class="aff-logo">' + esc(a.ini) + '</div>' +
            '<div class="aff-info"><div class="aff-name">' + esc(a.name) + '</div><p class="aff-desc">' + esc(a.desc) + '</p></div>' +
            '<span class="aff-badge">' + esc(a.disc) + '</span>' +
            '<div class="ev-toggle"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>' +
          '</div>' +
          '<div class="aff-body" id="afb-' + i + '"><div class="aff-inner">' +
            '<div><p style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--ember);margin-bottom:6px">Why we love it</p><p style="font-size:13px;color:var(--stone);line-height:1.78;font-style:italic;margin-bottom:14px">' + esc(a.why) + '</p><button class="bp" style="font-size:12px">Shop Now →</button></div>' +
            codeHtml +
          '</div></div>' +
        '</div>'
      );
    });
    function toggleAff(i){
      var wasOpen = (openAff === i);
      if(openAff >= 0){
        var oI = document.getElementById('af-'+openAff);
        var oB = document.getElementById('afb-'+openAff);
        if(oI) oI.classList.remove('open');
        if(oB){ oB.classList.remove('open'); oB.style.maxHeight = '0'; }
      }
      openAff = wasOpen ? -1 : i;
      if(!wasOpen){
        var nI = document.getElementById('af-'+i);
        var nB = document.getElementById('afb-'+i);
        if(nI) nI.classList.add('open');
        if(nB){ nB.classList.add('open'); nB.style.maxHeight = nB.scrollHeight + 'px'; }
      }
    }
    affEl.addEventListener('click', function(e){
      var copy = e.target.closest('.copy-btn');
      if(copy){
        e.stopPropagation();
        var code = copy.getAttribute('data-code');
        var idx = copy.getAttribute('data-aff');
        if(navigator.clipboard) navigator.clipboard.writeText(code).catch(function(){});
        var ok = document.getElementById('co-'+idx);
        if(ok){ ok.textContent = '✓ Copied to clipboard!'; setTimeout(function(){ ok.textContent = ''; }, 2500); }
        return;
      }
      var head = e.target.closest('.aff-head');
      if(!head) return;
      toggleAff(parseInt(head.getAttribute('data-aff'), 10));
    });
  })();

  /* ── BIO MODAL (About page) ── */
  (function(){
    var modal = document.getElementById('bio-modal');
    if(!modal || !DRP.bioData) return;
    var bioContent = document.getElementById('bio-content');
    function openBio(key){
      var f = DRP.bioData[key];
      if(!f || !bioContent) return;
      var creds = f.creds.map(function(c){
        return '<span style="font-size:10px;background:var(--cream);border:1px solid var(--bd);padding:2px 8px;color:var(--stone)">' + esc(c) + '</span>';
      }).join('');
      var sections = f.sections.map(function(s){
        return '<div style="margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid var(--bd)">' +
          '<div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--ember);margin-bottom:10px;font-family:\'DM Sans\',sans-serif">' + esc(s.heading) + '</div>' +
          '<p style="font-size:14px;color:var(--stone);line-height:1.85;font-family:\'DM Sans\',sans-serif">' + esc(s.body) + '</p>' +
        '</div>';
      }).join('');
      var html =
        '<div style="display:grid;grid-template-columns:180px 1fr;gap:28px;margin-bottom:28px;align-items:start">' +
          '<div style="overflow:hidden;border:1px solid var(--bd)">' +
            '<img src="' + esc(f.img) + '" alt="' + esc(f.name) + '" style="width:100%;display:block;object-fit:cover;object-position:center 10%" onerror="this.style.display=\'none\'">' +
          '</div>' +
          '<div>' +
            '<div style="font-family:\'Cormorant Garamond\',serif;font-size:28px;font-weight:300;color:var(--ink);margin-bottom:5px">' + esc(f.name) + '</div>' +
            '<div style="font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--ember);margin-bottom:16px">' + esc(f.role) + '</div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:5px">' + creds + '</div>' +
          '</div>' +
        '</div>' + sections;
      setHTML(bioContent, html);
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeBio(){
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
    document.addEventListener('click', function(e){
      var trig = e.target.closest('[data-bio]');
      if(trig){
        e.preventDefault();
        openBio(trig.getAttribute('data-bio'));
      }
    });
    modal.addEventListener('click', function(e){
      if(e.target === modal) closeBio();
    });
    var closeBtn = modal.querySelector('[data-close-bio]');
    if(closeBtn) closeBtn.addEventListener('click', closeBio);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && modal.classList.contains('open')) closeBio();
    });
  })();

})();
