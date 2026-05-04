/* All content data for the Dance Ready Project site.
   Shared across pages. Each page only renders the lists relevant to its mount points. */

window.DRP = (function(){

  var brands = ['Alvin Ailey','Pivot Dancer','Dance Inst. of Washington','Netflix — Bridgerton','Broadway Productions','Univ. of Maryland','Black Dance Change Makers','Freed of London','Healthy Dancer Summer','Kirov Ballet'];

  var pillarData = [
    {n:'01',t:'Assessment',d:'The Dance Ready Score™ acts as a GPS — pinpointing current fitness and mapping a clear route to peak performance.',detail:'Science-based · No licensure needed · Immediate results',img:'assets/images/pillar-assessment.jpg',bg:'linear-gradient(160deg,rgba(13,32,22,.65),rgba(26,48,32,.65))',page:'assessment.html'},
    {n:'02',t:'Conditioning',d:'Dansebridge Online — self-paced cross-training designed to build strength, prevent injury, and enhance performance.',detail:'30 min · 5×/week · 6 weeks · Check-in calls',img:'assets/images/pillar-conditioning.jpg',bg:'linear-gradient(160deg,rgba(18,16,14,.6),rgba(26,12,8,.6))',page:'dansebridge.html'},
    {n:'03',t:'Education',d:'Workshops, webinars, and content equipping dancers and educators with critical knowledge about dancer health.',detail:'Anatomy · Technique · Wellness · Performance science',img:'assets/images/pillar-education.jpg',bg:'linear-gradient(160deg,rgba(14,21,32,.6),rgba(24,95,165,.6))',page:'education.html'}
  ];

  var testis = [
    {name:'Katrina M.',role:'Contemporary Dancer',q:'In 30 minutes, I get my heart rate up and work muscles I didn\'t know I had. This class has become part of my routine!'},
    {name:'Valentina B.',role:'Ballet Dancer',q:'Lifting my legs is easier. My jumps have gotten better — I used to get stuck in the middle of my rond de jambe.'},
    {name:'Naima A.',role:'Pre-Professional',q:'My attitudes and arabesques have gotten a lot better, especially my attitudes — they were always on the not so good side!'},
    {name:'Giorgia P.',role:'Dance Student',q:'I really feel my body working and changing. I think I should keep going with this kind of work!'}
  ];

  var faqData = [
    {t:'What does the Dance Ready Score measure?',b:'The DRS assesses multiple dimensions of physical fitness specific to dance demands — including strength, flexibility, endurance, balance, and functional movement patterns. Results are benchmarked against evidence-based guidelines for dancers at each level.'},
    {t:'Do I need a healthcare professional to administer it?',b:'No. One of the key differentiators of the DRS is that it does not require professional licensure to administer. Dance teachers, studio directors, and company managers can all facilitate the assessment after a brief orientation.'},
    {t:'How long does the assessment take?',b:'A full Dance Ready Score assessment typically takes 45–90 minutes depending on group size. Individual assessments run approximately 30 minutes. Results and workshop debrief add another 45–60 minutes.'},
    {t:'Can the DRS be used with student dancers?',b:'Absolutely. The DRS has been used with dancers from age 10 through professional level. Age-appropriate benchmarks are used and the assessment protocol is adapted for youth populations.'}
  ];

  var evData = [
    {day:'22',mon:'Jan',type:'Free · Online',free:true,title:'DRS Info Session',time:'7:30 PM – 9:00 PM',loc:'Online — link sent on registration',desc:'Learn everything about the Dance Ready Score — what it measures, how it works, and how it can transform your dancers\' training.',cta:'Register Free'},
    {day:'7',mon:'Feb',type:'In Person · DC',free:false,title:'Meet & Greet',time:'5:30 PM – 7:30 PM',loc:'St. James Restaurant, 2017 14th St NW, Washington DC',desc:'Connect with the Dance Ready Project team and fellow dancers in an informal, welcoming setting. Great conversation guaranteed.',cta:'RSVP Now'},
    {day:'8',mon:'Feb',type:'In Person · DC',free:false,title:'DRS Day in DC',time:'1:00 PM – 4:00 PM',loc:'The Viva School, 1923 Vermont Ave NW Suite T002, Washington DC 20001',desc:'A full afternoon of Dance Ready Score assessments and workshops. Leave with your score, your results, and a clear roadmap.',cta:'Book Your Spot'}
  ];

  var featData = [
    {ico:'◎',t:'Individual Assessment',b:'Identify your goals, establish your baseline, and receive clear recommendations on where to focus your training for maximum results.',dk:false},
    {ico:'◈',t:'6 Weeks of Training',b:'Specially designed progressive program. 30 minutes · 5 days a week · 6 weeks of programming that primes exactly what dancers are missing.',dk:true},
    {ico:'◑',t:'Check-In Calls',b:'Check in to troubleshoot issues as you work and grow stronger. This isn\'t a mindless exercise program — you\'re supported throughout.',dk:true},
    {ico:'◉',t:'Community',b:'An encouraging community that keeps you accountable and connected throughout your journey — and beyond.',dk:false}
  ];

  var promiseData = [
    'Get over that lingering injury you\'ve been putting off',
    'Get your leg higher than it\'s been in three years',
    'Earn the attention of your choreographer',
    'Conquer that skill you\'ve always struggled with',
    'Return to — and surpass — your pre-injury fitness level'
  ];

  var courseData = [
    {t:'Technique Enhancement',sub:'Unleash your potential',body:'Evidence-based technique correction covering turnout, flexibility, alignment, and the biomechanics behind foundational dance movements.',list:['Technique correction principles','Ways to improve turnout safely','Best exercises to increase flexibility'],img:'assets/images/course-technique.jpg',bg:'linear-gradient(160deg,rgba(13,32,22,.65),rgba(26,48,32,.65))'},
    {t:'Wellness Workshops',sub:'Learn the inner workings of your body',body:'A holistic approach covering nutrition, mental performance, sleep science, and immune health — the full picture of dancer wellness.',list:['Nutrition for dancers','Mental health & performance','Sleep & immune health'],img:'assets/images/course-wellness.jpg',bg:'linear-gradient(160deg,rgba(26,12,8,.6),rgba(45,20,16,.6))'},
    {t:'Anatomy for Dancers',sub:'3D views of the body in motion',body:'In-depth review of the muscles, bones, joints, and connective structures involved in dance movement — with real clinical application.',list:['Muscles, bones & joints in depth','Structures used in dance movement','Biomechanics behind technique'],img:'assets/images/course-anatomy.jpg',bg:'linear-gradient(160deg,rgba(14,21,32,.6),rgba(24,95,165,.6))'}
  ];

  var affData = [
    {ini:'KT',name:'KTape MySkin Kinesiotape',desc:'Kinesiotape designed for athletes of all skin tones. Crafted to provide superior performance and visibility on diverse skin.',disc:'25% Off',code:'DRP25',why:'KTape MySkin was designed specifically to show up on darker skin tones — a long-overdue innovation in athletic tape. We use it constantly in clinic and on set.'},
    {ini:'ION',name:'ION Performance Products',desc:'All-natural performance body care crafted specifically for athletes. Clean ingredients, high performance — designed to support recovery.',disc:'25% Off',code:'DANCEREADY',why:'Clean, effective, and developed for people who push their bodies hard. We recommend ION to every dancer in our care for daily recovery support.'},
    {ini:'CX',name:'Crosspuncture® Therapy',desc:'Versatile therapy tool for trigger points, tense muscles, and sore joints. Used by practitioners and athletes for targeted relief.',disc:'Special Pricing',code:null,why:'A staple in our clinical toolkit. Crosspuncture® therapy delivers the targeted relief dancers need between sessions — portable and effective.'}
  ];

  var bioData = {
    sheyi:{
      name:'Dr. Sheyi Ojofeitimi',
      role:'Co-Founder · PT, DPT, OCS',
      img:'assets/images/founder-sheyi.jpg',
      creds:['Alvin Ailey Dance Foundation','Dance/USA Board of Trustees','ADAM Center Research Associate','Published Researcher'],
      sections:[
        {heading:'About',body:'Dr. Sheyi Ojofeitimi is a licensed physical therapist and the Director of Therapy Services at the Alvin Ailey Dance Foundation, where she has worked for over 15 years. Her evidence-based approach to dancer health has produced measurable, peer-reviewed results — including a 37% reduction in overuse injuries and a 33% reduction in time-loss injuries within the Alvin Ailey organisation.'},
        {heading:'Research & Publications',body:'Dr. Ojofeitimi is a senior research associate at the Analysis of Dance and Movement (ADAM) Center and co-author of Dance Injuries: Reducing Risk and Maximizing Performance, a landmark text in the field of dance medicine. Her research has been published in peer-reviewed journals and cited internationally.'},
        {heading:'Broadway & Performance',body:'Her clinical work extends beyond the studio — she has served as the physical therapist for major Broadway productions including Wicked, The Book of Mormon, and Free Style Love Supreme. Her understanding of the demands of live performance makes her uniquely positioned to bridge the gap between rehabilitation and artistic excellence.'},
        {heading:'Leadership & Advocacy',body:'As a member of the Dance/USA Board of Trustees, Dr. Ojofeitimi advocates for dancer health at the organisational level. She believes that systemic change — not just individual treatment — is what will truly transform the health outcomes of professional dancers in America and globally.'}
      ]
    },
    dee:{
      name:'Dr. Danelle Dickson',
      role:'Co-Founder · PT, DPT, OCS',
      img:'assets/images/founder-dee.jpg',
      creds:['Performance Plus Physical Therapy','IADMS Member','Dancing Around Elephants Podcast Host','APTA Magazine Feature 2022'],
      sections:[
        {heading:'About',body:'Dr. Danelle Dickson is a licensed physical therapist, board-certified Orthopedic Clinical Specialist, and Performing Arts specialist based in Washington, DC. She is the owner of Performance Plus Physical Therapy (3ptdc.com) and the creator of Dansebridge Online. With 42 years in dance and 17 years in clinical practice, she brings a rare dual perspective — as both a lifelong dancer and a specialist clinician.'},
        {heading:'Performing Arts Work',body:'Dr. Dickson has served as the on-site physical therapist for a remarkable range of productions and companies. Her credits include Netflix\'s Bridgerton, Alvin Ailey American Dance Theater, Tony Award-winning productions Jaja\'s African Hair Braiding and Angels in America, and the Kirov Ballet. She has also provided coverage for Arena Stage as their resident therapist in Washington, DC.'},
        {heading:'Education & Media',body:'She is the host of Dancing Around Elephants (DARE), a podcast dedicated to candid conversations about the performing arts, health, and the intersection of artistry and medicine. In 2022, she was featured in APTA Magazine for her innovation in clinical practice and her contribution to the field of performing arts physical therapy.'},
        {heading:'Teaching & Community',body:'As a co-founder of the Dance Ready Project alongside Dr. Ojofeitimi, Dr. Dickson is deeply committed to education — not just clinical intervention. She believes that dancers who understand their bodies are better equipped to make informed decisions about training, injury prevention, and career longevity. Her work with the DRP reflects that conviction at every level.'}
      ]
    }
  };

  var heroSlides = [
    {img:'assets/images/hero-1.jpg',label:'Performance'},
    {img:'assets/images/hero-2.jpg',label:'Training'},
    {img:'assets/images/hero-3.jpg',label:'Studio'},
    {img:'assets/images/hero-4.jpg',label:'Portrait'},
    {img:'assets/images/hero-5.jpg',label:'Duet'}
  ];

  return {
    brands: brands,
    pillarData: pillarData,
    testis: testis,
    faqData: faqData,
    evData: evData,
    featData: featData,
    promiseData: promiseData,
    courseData: courseData,
    affData: affData,
    bioData: bioData,
    heroSlides: heroSlides
  };
})();
