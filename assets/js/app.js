/**
 * VPKBIET IKS DIGITAL HERITAGE HUB - CORE APPLICATION
 * Curated & Developed by Viraj Pathak | VPKBIET IKS Cell
 */

// Fallback dataset in case of local file:// fetch restrictions
const DEFAULT_PROJECTS = [
  {
    "id": "dholavira-hydraulic-system",
    "title": {
      "en": "Dholavira Hydraulic Engineering: Modern Simulation of Ancient Stepwells & Reservoirs",
      "mr": "धोलावीरा जलअभियांत्रिकी: प्राचीन विहिरी आणि जलसाठ्यांचे आधुनिक सिम्युलेशन"
    },
    "type": "Water Heritage & Civil Engineering",
    "typeMr": "जल वारसा आणि सिव्हिल अभियांत्रिकी",
    "createdDate": "October 14, 2026",
    "academicYear": "2025-2026 (Semester VII)",
    "institution": "VPKBIET Baramati, Dept. of Civil Engineering & IKS Cell",
    "mentor": "Prof. S. R. Deshpande (Faculty Lead, VPKBIET IKS Cell)",
    "summary": {
      "en": "Hydrological CFD modeling of Harappan rock-cut reservoirs and cascade filtration systems from Dholavira, Gujarat, adapted for semi-arid drought mitigation in Maharashtra.",
      "mr": "धोलावीरा येथील प्राचीन हडप्पाकालीन पाषाण जलसाठे व गाळण प्रणालींचे हायड्रोलॉजिकल CFD मॉडेलिंग, दुष्काळी भागातील जलसंधारणासाठी उपयुक्त."
    },
    "info": {
      "abstract": "The Harappan metropolis of Dholavira (circa 2600–1900 BCE) engineered one of the most sophisticated water harvesting architectures of antiquity. Located on the arid island of Khadir Bet, between two seasonal storm-water channels (Manhar and Mansar), the engineers carved 16 immense cascading reservoirs out of bedrock with interconnecting bunds, stone sluices, and silt traps. This VPKBIET student research reconstructs the hydraulic gradient using ANSYS Fluent and GIS hydrological models to measure sedimentation velocity, water retention capacity, and microclimate moderation. Our prototypes demonstrate how ancient gravity-settling chambers can filter surface turbidity by up to 78% without electrical energy, offering an eco-friendly blueprint for water-stressed regions of rural Maharashtra.",
      "historicalContext": "Documented in archaeological excavations by Dr. R.S. Bisht (ASI), Dholavira utilized stone check-dams and siltation chambers connected to underground tunnels, keeping the city water-secure through multiple multi-year droughts.",
      "engineeringMethodology": "1. 3D photogrammetric recreation of the East & South Reservoirs.\n2. Computational Fluid Dynamics (CFD) particle trajectory analysis to simulate silt precipitation.\n3. Scaled physical sand-bed flume testing at VPKBIET Fluid Mechanics Laboratory.",
      "keyFindings": "The ancient cascade design slows water velocity from 1.8 m/s to 0.22 m/s, dropping 85% of suspended silt before water enters potable storage reservoirs. Low-cost implementation in drought-prone regions like Baramati could conserve up to 1.2 million liters per micro-watershed annually."
    },
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        "caption": "Dholavira Ancient Reservoir System & Rock-cut Stepped Bunds",
        "alt": "Ancient stone stepped reservoir engineering"
      },
      {
        "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        "caption": "Hydraulic Stepwell (Baoli) Geometric Water Level Access",
        "alt": "Intricate stepped well architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
        "caption": "VPKBIET Scaled Fluid Dynamics Prototype & Sedimentation Testing",
        "alt": "Engineering laboratory test rig and silt trap model"
      }
    ],
    "teamMembers": [
      {
        "name": "Viraj Pathak",
        "role": "Project Lead & CFD Modeler",
        "department": "Civil & Computational Engineering",
        "email": "virajpathak@vpkbiet.ac.in"
      },
      {
        "name": "Ananya Kulkarni",
        "role": "Hydrological Data Analyst",
        "department": "Civil Engineering",
        "email": "ananya.k@vpkbiet.ac.in"
      },
      {
        "name": "Rohan Deshmukh",
        "role": "GIS & Topographical Mapper",
        "department": "Civil Engineering",
        "email": "rohan.d@vpkbiet.ac.in"
      },
      {
        "name": "Sneha Joshi",
        "role": "Material & Water Quality Testing",
        "department": "Environmental Engineering",
        "email": "sneha.j@vpkbiet.ac.in"
      }
    ],
    "metrics": [
      { "label": "Storage Capacity Model", "value": "250,000 m³" },
      { "label": "Sediment Separation", "value": "78% Passive" },
      { "label": "Energy Consumption", "value": "0 kWh (Gravity)" },
      { "label": "Lab Validation", "value": "ANSYS Fluent 24.1" }
    ],
    "tags": ["Harappan Engineering", "Dholavira", "Stepwells", "Hydraulics", "Water Conservation", "ANSYS", "VPKBIET"],
    "badge": "Excellence Award Winner"
  },
  {
    "id": "vedic-cryptographic-multiplier",
    "title": {
      "en": "Urdhva-Tiryagbhyam: High-Speed Vedic Multiplier for Quantum-Resistant Cryptography",
      "mr": "ऊर्ध्वतिर्यग्भ्याम्: क्वांटम-प्रतिरोधी क्रिप्टोग्राफीसाठी हाय-स्पीड वैदिक गुणक"
    },
    "type": "Vedic Mathematics & VLSI Hardware",
    "typeMr": "वैदिक गणित आणि व्हीएलएसआय हार्डवेअर",
    "createdDate": "August 28, 2026",
    "academicYear": "2025-2026 (Semester VI)",
    "institution": "VPKBIET Baramati, Dept. of Electronics & Computer Engineering",
    "mentor": "Dr. A. P. Mane (Professor, VLSI & Embedded Systems)",
    "summary": {
      "en": "FPGA silicon implementation of the ancient Vedic sutra 'Urdhva-Tiryagbhyam' (Vertically and Crosswise) for ultra-low latency modular arithmetic in Elliptic Curve Cryptography.",
      "mr": "एलिप्सॉइड कर्व्ह क्रिप्टोग्राफीसाठी 'ऊर्ध्वतिर्यग्भ्याम्' सूत्रावर आधारित अल्ट्रा-लो लेटन्सी FPGA वैदिक मल्टिप्लायर चिप."
    },
    "info": {
      "abstract": "High-throughput public key cryptographic algorithms such as RSA-4096 and Post-Quantum Lattice Cryptography spend over 65% of their total execution cycles inside large-integer modular multiplication. Traditional hardware multipliers (Booth, Wallace Tree) incur high propagation delays and ripple-carry overheads. This project harnesses the ancient mathematical sutra 'Urdhva-Tiryagbhyam' (ऊर्ध्वतिर्यग्भ्याम्) derived from the Atharva Veda appendix to synthesize a 64-bit and 128-bit modular multiplier in Verilog HDL. By evaluating partial products concurrently in vertical and crosswise vectors, carry propagation is strictly confined to local bit slices. Synthesized on a Xilinx Artix-7 FPGA, our Vedic multiplier achieved a 32.4% reduction in path delay and 24.8% lower dynamic power dissipation compared to standard Wallace Tree multipliers.",
      "historicalContext": "Reconstructed systematically by Swami Bharati Krishna Tirtha (1884–1960), the 16 Vedic Sutras provide recursive, parallel algorithms that directly map onto modern distributed and parallel processing architectures.",
      "engineeringMethodology": "1. Algorithmic formulation of 4x4, 16x16, and 64x64 bit hierarchical Vedic multiplication blocks.\n2. Verilog HDL RTL coding with carry-select adder stages.\n3. Synthesis and behavioral timing simulation on Vivado 2026.2 and verification on FPGA boards at VPKBIET DSP/VLSI Lab.",
      "keyFindings": "Achieved 2.85 ns critical path latency for 64-bit multiplication at 350 MHz, with zero lookup-table overflow. Confirms ancient algorithmic intuition matches state-of-the-art parallel silicon design."
    },
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        "caption": "FPGA Silicon Board Testing of 128-bit Vedic Multiplier at VPKBIET",
        "alt": "Hardware circuit board with microprocessor"
      },
      {
        "url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
        "caption": "Sanskrit Palm-Leaf Mathematical Manuscript of Sulba Sutras",
        "alt": "Ancient Sanskrit mathematical palm leaf manuscripts"
      },
      {
        "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
        "caption": "Crosswise Parallel Product Generation Logic Diagram",
        "alt": "Mathematical formulas and algorithmic tree structure"
      }
    ],
    "teamMembers": [
      {
        "name": "Viraj Pathak",
        "role": "Algorithm Architect & Verilog Lead",
        "department": "Computer / VLSI Engineering",
        "email": "virajpathak@vpkbiet.ac.in"
      },
      {
        "name": "Aditya Patil",
        "role": "FPGA Hardware Synthesis",
        "department": "Electronics & Telecommunication",
        "email": "aditya.p@vpkbiet.ac.in"
      },
      {
        "name": "Neha Shinde",
        "role": "Cryptographic Verification & Benchmarks",
        "department": "Computer Engineering",
        "email": "neha.s@vpkbiet.ac.in"
      }
    ],
    "metrics": [
      { "label": "Propagation Delay", "value": "2.85 ns (-32%)" },
      { "label": "Power Efficiency", "value": "18.2 mW / GHz" },
      { "label": "Clock Frequency", "value": "350 MHz" },
      { "label": "Silicon Target", "value": "Xilinx Artix-7" }
    ],
    "tags": ["Vedic Maths", "Cryptography", "VLSI", "FPGA", "Urdhva Tiryagbhyam", "Hardware Acceleration", "VPKBIET"],
    "badge": "National Hackathon Finalist"
  },
  {
    "id": "delhi-iron-pillar-metallurgy",
    "title": {
      "en": "Ancient Indian Metallurgy: Corrosion Resistance & Misaka Phase in the Delhi Iron Pillar",
      "mr": "प्राचीन भारतीय धातुशास्त्र: दिल्लीतील लोहस्तंभाची गंज-प्रतिरोधक क्षमता व मिसाका फेज"
    },
    "type": "Metallurgy & Material Science",
    "typeMr": "धातुशास्त्र आणि पदार्थ विज्ञान",
    "createdDate": "September 19, 2026",
    "academicYear": "2025-2026 (Semester VII)",
    "institution": "VPKBIET Baramati, Dept. of Mechanical Engineering & Metallurgy",
    "mentor": "Dr. V. B. Gawande (Head, Materials Testing Lab)",
    "summary": {
      "en": "Spectroscopic recreation of the iron-phosphorus protective oxide film (Misawite / alpha-FeOOH) found on the 1,600-year-old rustless Delhi Iron Pillar for sustainable modern steel coating.",
      "mr": "१६०० वर्षे जुन्या दिल्लीच्या लोहस्तंभाच्या गंजरोधक फॉस्फरस-समृद्ध आवरणाचा अभ्यास व आधुनिक स्टीलसाठी पर्यावरणपूरक लेप."
    },
    "info": {
      "abstract": "Erected during the Gupta Empire reign of Chandragupta II Vikramaditya (c. 400 CE), the 7-meter high, 6-ton wrought iron pillar at Mehrauli, Delhi, has withstood over 1,600 years of monsoon weathering without catastrophic oxidation. Metallurgical analysis reveals that ancient Indian blacksmiths employed charcoal-based bloomery hearth smelting without limestone fluxes, leaving a remarkably high phosphorus content (0.25% vs modern <0.05%) in high-purity wrought iron. In this project, VPKBIET mechanical engineering students synthesised lab-scale wrought iron specimens under ancient charcoal-smelted conditions and accelerated electrochemical salt-spray tests. We proved that high phosphorus catalyzes the formation of an adherent, sub-micron passive film of crystalline delta-FeOOH (Misawaite) that blocks oxygen diffusion, self-healing under cyclical humidity.",
      "historicalContext": "Described in classical texts such as Rasaratnasamuccaya and Arthashastra, ancient Indian metallurgists pioneered crucible Wootz steel (the foundation of Damascus blades) and rust-resistant forge-welding.",
      "engineeringMethodology": "1. Metallographic polishing and SEM-EDX elemental mapping of forge-welded high-phosphorus iron coupons.\n2. ASTM B117 standard accelerated salt fog chamber exposure for 720 hours.\n3. Formulation of a bio-derived phosphorus-phosphate passive conversion primer for construction rebars.",
      "keyFindings": "Coated samples exhibited 4.3x higher polarization resistance than commercial mild steel, proving ancient metallurgical methods provide green alternatives to toxic chromium conversion coatings."
    },
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "caption": "The Rustless Delhi Iron Pillar at the Qutb Complex (c. 400 CE)",
        "alt": "Ancient Iron Pillar of Delhi standing outdoors"
      },
      {
        "url": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        "caption": "Scanning Electron Microscopy (SEM) Passive Film Analysis at VPKBIET",
        "alt": "Material science laboratory microscope and analysis"
      },
      {
        "url": "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
        "caption": "Traditional Forge-Welding & Bloomery Hearth Recreation",
        "alt": "Metal glowing with heat during forging"
      }
    ],
    "teamMembers": [
      {
        "name": "Tanmay Shinde",
        "role": "Metallurgy Testing Lead",
        "department": "Mechanical Engineering",
        "email": "tanmay.s@vpkbiet.ac.in"
      },
      {
        "name": "Pranav Ghadge",
        "role": "SEM & Chemical Analyst",
        "department": "Mechanical Engineering",
        "email": "pranav.g@vpkbiet.ac.in"
      },
      {
        "name": "Ritu Pawar",
        "role": "Electrochemical Corrosion Testing",
        "department": "Chemical & Materials Science",
        "email": "ritu.p@vpkbiet.ac.in"
      },
      {
        "name": "Viraj Pathak",
        "role": "IKS Research Lead & Computational Correlation",
        "department": "VPKBIET IKS Department",
        "email": "virajpathak@vpkbiet.ac.in"
      }
    ],
    "metrics": [
      { "label": "Corrosion Resistance", "value": "4.3x vs Mild Steel" },
      { "label": "Pillar Age Verified", "value": "1,600+ Years" },
      { "label": "Passive Film Thickness", "value": "50–100 nm" },
      { "label": "ASTM Fog Test", "value": "Passed 720 Hours" }
    ],
    "tags": ["Ancient Metallurgy", "Iron Pillar", "Corrosion Science", "Wootz Steel", "Materials Engineering", "VPKBIET"],
    "badge": "Best Research Paper Nominee"
  },
  {
    "id": "brihadeeswara-acoustic-resonance",
    "title": {
      "en": "Acoustic Resonance & Structural Harmony of the Thanjavur Brihadeeswara Temple",
      "mr": "तंजावूर बृहदीश्वर मंदिराचे ध्वनी अनुनाद आणि वास्तूशास्त्रीय सुसंवाद"
    },
    "type": "Architecture & Acoustic Engineering",
    "typeMr": "वास्तुकला आणि ध्वनी अभियांत्रिकी",
    "createdDate": "July 12, 2026",
    "academicYear": "2025-2026 (Semester V)",
    "institution": "VPKBIET Baramati, Dept. of Civil & Architectural Engineering",
    "mentor": "Prof. N. K. Khillare (Structural & Heritage Architecture)",
    "summary": {
      "en": "Laser vibrometry and 3D Ray-Tracing acoustic simulations analyzing Vedic musical pillar resonance and sanctum sanctorum low-frequency resonance frequencies.",
      "mr": "तंजावूर येथील चोलकालीन ग्रॅनाईट मंदिरातील ध्वनी अनुनाद, मंत्रोच्चार कंपने आणि संगीतमय खांबांचे 3D ध्वनी सिम्युलेशन."
    },
    "info": {
      "abstract": "Constructed by Emperor Rajaraja Chola I between 1003 and 1010 CE entirely from interlocking granite without mortar, the Brihadeeswara Temple in Thanjavur is an engineering wonder of load distribution and psychoacoustic design. The sanctum sanctorum (Garbhagriha) is enclosed by double-thickness granite walls that filter external urban vibrations, amplifying human vocal fundamentals during Vedic chanting specifically in the 110–136 Hz band (corresponding to the primordial Om / Shadja tonic). In this interdisciplinary project, VPKBIET student researchers gathered impulse response audio spectra and modeled the Vimana tower using ODEON room acoustics software. We discovered how sculptured granite pillared corridors produce focused modal frequencies while eliminating flutter echoes.",
      "historicalContext": "Engineered according to the Mayamata and Manasara Vastu Shastras, Chola temple architects harmonized sacred geometry (Manduka Mandala) with acoustic wave reflections.",
      "engineeringMethodology": "1. High-fidelity acoustic impulse capture using omnidirectional measurement microphones.\n2. 3D geometric finite-element ray-tracing modeling of the sanctum and pillared corridors.\n3. Modal vibration analysis of musical granite pillar columns.",
      "keyFindings": "Measured reverberation time (RT60) is held stable at 1.8 seconds across 100 Hz to 4 kHz without synthetic acoustic damping, providing an ideal template for modern eco-friendly auditorium and lecture hall design."
    },
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
        "caption": "The Majestic Vimana Tower of Brihadeeswara Temple, Thanjavur",
        "alt": "Brihadeeswara temple towering granite Vimana"
      },
      {
        "url": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
        "caption": "Musical Stone Pillars Resonating at Specific Octaves",
        "alt": "Intricately carved stone temple columns"
      },
      {
        "url": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
        "caption": "Acoustic Impulse Waveform & Frequency Spectrogram Analysis",
        "alt": "Audio sound wave frequency analysis on monitor"
      }
    ],
    "teamMembers": [
      {
        "name": "Sakshi Bhosale",
        "role": "Acoustic Engineer & Ray-Tracing Modeler",
        "department": "Civil & Architecture",
        "email": "sakshi.b@vpkbiet.ac.in"
      },
      {
        "name": "Omkar Jagtap",
        "role": "Signal Processing & Vibrometry",
        "department": "Electronics Engineering",
        "email": "omkar.j@vpkbiet.ac.in"
      },
      {
        "name": "Viraj Pathak",
        "role": "Heritage Systems Researcher",
        "department": "VPKBIET IKS Cell",
        "email": "virajpathak@vpkbiet.ac.in"
      }
    ],
    "metrics": [
      { "label": "Sanctum Resonance", "value": "112 Hz (Om Freq)" },
      { "label": "RT60 Reverberation", "value": "1.82 Seconds" },
      { "label": "Granite Mass", "value": "130,000 Tonnes" },
      { "label": "Structure Type", "value": "Mortar-free Interlocking" }
    ],
    "tags": ["Acoustics", "Temple Architecture", "Vastu Shastra", "Granite Geometry", "Brihadeeswara", "VPKBIET"],
    "badge": "IKS National Conference Selection"
  }
];

// App State
const state = {
  lang: localStorage.getItem("iks-vpkbiet-lang") || "en",
  projects: [],
  selectedCategory: "all",
  searchQuery: "",
  activeProject: null,
  activePhotoIndex: 0,
  audioPlaying: false
};

// UI Translations
const TRANSLATIONS = {
  en: {
    collegeName: "Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology (VPKBIET)",
    iksDepartment: "Department of Indian Knowledge Systems (IKS)",
    exploreNav: "Explore Projects",
    institutionNav: "About IKS Cell",
    submitNav: "Submit Project",
    audioToggle: "Ambient Sound",
    searchPlaceholder: "Search student projects by keyword, domain or author (Press /)",
    allCategories: "All Domains",
    waterCategory: "Water & Hydraulics",
    mathCategory: "Vedic Maths & VLSI",
    metalCategory: "Metallurgy & Materials",
    archCategory: "Architecture & Acoustics",
    featuredCount: "Verified Student Projects",
    activeResearch: "Active Research Domains",
    collegeCell: "VPKBIET IKS Cell, Baramati",
    modalTabs: {
      overview: "Overview & Abstract",
      team: "Student Team & Mentor",
      qr: "Exhibition QR & Citation"
    },
    viewProjectBtn: "Explore Details →",
    downloadQRPNG: "Download QR Code PNG",
    printLabelBtn: "Print Exhibition Label",
    closeModal: "Close",
    projectUrlCopied: "Project Link copied to clipboard!",
    submitModalTitle: "Submit Student Project to VPKBIET IKS Archive",
    submitModalDesc: "Upload your research paper, model photos, team information, and findings.",
    footerDevBy: "Curated & Developed by",
    footerAuthor: "Viraj Pathak",
    footerDept: "VPKBIET Indian Knowledge System Department"
  },
  mr: {
    collegeName: "विद्या प्रतिष्ठानचे कमलनयन बजाज इन्स्टिट्यूट ऑफ इंजिनिअरिंग अँड टेक्नॉलॉजी (VPKBIET)",
    iksDepartment: "भारतीय ज्ञान प्रणाली विभाग (IKS Cell)",
    exploreNav: "प्रकल्प संग्रह",
    institutionNav: "IKS विभागाविषयी",
    submitNav: "प्रकल्प जोडा",
    audioToggle: "पारंपरिक संगीत",
    searchPlaceholder: "प्रकल्प, विषय किंवा विद्यार्थ्याचे नाव शोधा (/ दाबा)",
    allCategories: "सर्व विभाग",
    waterCategory: "जलव्यवस्थापन",
    mathCategory: "वैदिक गणित व VLSI",
    metalCategory: "धातुशास्त्र",
    archCategory: "वास्तुकला व ध्वनिशास्त्र",
    featuredCount: "प्रमाणित विद्यार्थी प्रकल्प",
    activeResearch: "सक्रिय संशोधन क्षेत्रे",
    collegeCell: "VPKBIET IKS सेल, बारामती",
    modalTabs: {
      overview: "प्रकल्पाविषयी व संशोधन",
      team: "विद्यार्थी संघ व मार्गदर्शक",
      qr: "प्रदर्शन QR व संदर्भ"
    },
    viewProjectBtn: "सविस्तर माहिती पाहा →",
    downloadQRPNG: "QR कोड PNG डाउनलोड करा",
    printLabelBtn: "प्रदर्शन लेबल प्रिंट करा",
    closeModal: "बंद करा",
    projectUrlCopied: "प्रकल्पाची लिंक कॉपी झाली!",
    submitModalTitle: "VPKBIET IKS संग्रहात नवा प्रकल्प सादर करा",
    submitModalDesc: "तुमचा शोधनिबंध, प्रतिकृतीचे फोटो आणि संघाची माहिती येथे प्रविष्ट करा.",
    footerDevBy: "संकल्पना व निर्मिती",
    footerAuthor: "विराज पाठक",
    footerDept: "VPKBIET भारतीय ज्ञान परंपरा विभाग"
  }
};

// Map Knowledge Hubs Data for Interactive Tooltips
const MAP_HUBS = {
  takshashila: {
    title: "Takshashila (c. 800 BCE)",
    desc: "Ancient world's foremost multidisciplinary university. Pioneered surgical tools (Sushruta) and political economy (Kautilya)."
  },
  nalanda: {
    title: "Nalanda Mahavihara (c. 427 CE)",
    desc: "Epicenter of logic, metaphysics, medicine and metallurgy with the world-renowned 9-million manuscript library Dharmaganja."
  },
  ujjain: {
    title: "Ujjain Prime Meridian (c. 500 CE)",
    desc: "The Greenwich of ancient astronomical calculation. Home of Varahamihira and Brahmagupta's mathematical zero laws."
  },
  baramati: {
    title: "VPKBIET Baramati (IKS Cell)",
    desc: "Vidyanagari, Maharashtra: Modern center of student-driven IKS engineering research, CFD simulations, and VLSI silicon prototyping."
  },
  dholavira: {
    title: "Dholavira & Lothal (c. 2600 BCE)",
    desc: "Harappan masterworks of coastal tidal docks, cascade silt-traps, and stepped bedrock reservoirs."
  },
  kashi: {
    title: "Kashi / Varanasi",
    desc: "Eternal seat of Sanskrit grammarians (Panini, Patanjali) and Ayurvedic medical conferences."
  },
  thanjavur: {
    title: "Thanjavur & Chola Architecture (1010 CE)",
    desc: "Mortarless interlocking granite towers, psychoacoustic mandapas, and lost-wax bronze metallurgy."
  },
  kerala: {
    title: "Kerala School of Astronomy (14th Century)",
    desc: "Madhava of Sangamagrama developed infinite series approximations for Pi and trigonometric sine 250 years before Newton."
  }
};

/* ==========================================================================
   PARTICLE CANVAS ANIMATION (Celestial Golden Dust)
   ========================================================================== */

function initParticleCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 48 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.6,
    speedY: Math.random() * -0.4 - 0.1,
    speedX: (Math.random() - 0.5) * 0.2,
    alpha: Math.random() * 0.7 + 0.2,
    pulseSpeed: Math.random() * 0.02 + 0.005
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.008;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.1, Math.min(p.alpha, 0.8))})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#f38a1e";
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   WEB AUDIO API: PROCEDURAL HERITAGE TANPURA AMBIENCE
   (Lightweight, completely offline, zero audio file download required)
   ========================================================================== */

let audioCtx = null;
let masterGain = null;
let oscillators = [];

function toggleAmbientAudio() {
  const btn = document.getElementById("audio-toggle-btn");
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Warm Tanpura Drone Frequencies (Root C# = 138.59Hz, Fifth G# = 207.65Hz, Octave = 277.18Hz)
    const freqs = [138.59, 207.65, 277.18, 138.59 * 2];
    freqs.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.4, audioCtx.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(650, audioCtx.currentTime);

      oscGain.gain.setValueAtTime(0.08 / (idx + 1), audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      oscillators.push(osc);
    });
  }

  if (state.audioPlaying) {
    masterGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.4);
    state.audioPlaying = false;
    btn?.classList.remove("playing");
    btn.innerHTML = `<span aria-hidden="true">🎵</span> <span>${TRANSLATIONS[state.lang].audioToggle}</span>`;
    showToast("Ambient sound muted");
  } else {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    masterGain.gain.setTargetAtTime(0.2, audioCtx.currentTime, 0.8);
    state.audioPlaying = true;
    btn?.classList.add("playing");
    btn.innerHTML = `<span aria-hidden="true">🔊</span> <span>Playing (Tanpura)</span>`;
    showToast("Serene heritage drone active");
  }
}

/* ==========================================================================
   INDIA MAP INTERACTIVE KNOWLEDGE HUBS
   ========================================================================== */

function initMapInteractivity() {
  const hubs = document.querySelectorAll(".map-hub-group");
  const tooltip = document.getElementById("map-node-tooltip");
  const titleEl = document.getElementById("tooltip-hub-title");
  const descEl = document.getElementById("tooltip-hub-desc");

  hubs.forEach((hub) => {
    const hubKey = hub.dataset.hub;
    const data = MAP_HUBS[hubKey];
    if (!data) return;

    hub.addEventListener("mouseenter", () => {
      if (titleEl && descEl && tooltip) {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        tooltip.style.borderColor = "#fbeea4";
        tooltip.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
      }
    });

    hub.addEventListener("mouseleave", () => {
      if (tooltip) {
        tooltip.style.borderColor = "var(--border-gold)";
        tooltip.style.boxShadow = "var(--shadow-modal)";
      }
    });

    hub.addEventListener("click", () => {
      showToast(`Selected Knowledge Node: ${data.title}`);
    });
  });
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */

function getLocalized(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[state.lang] || obj.en || "";
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("projects-count-display");
  if (!grid) return;

  grid.innerHTML = "";
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = state.projects.filter((p) => {
    const titleMatch = getLocalized(p.title).toLowerCase().includes(query);
    const summaryMatch = getLocalized(p.summary).toLowerCase().includes(query);
    const typeMatch = (p.type + " " + (p.typeMr || "")).toLowerCase().includes(query);
    const tagMatch = (p.tags || []).some((t) => t.toLowerCase().includes(query));
    const teamMatch = (p.teamMembers || []).some((m) => m.name.toLowerCase().includes(query));

    const matchesSearch = !query || titleMatch || summaryMatch || typeMatch || tagMatch || teamMatch;

    let matchesCategory = true;
    if (state.selectedCategory !== "all") {
      matchesCategory = (p.type || "").toLowerCase().includes(state.selectedCategory.toLowerCase());
    }

    return matchesSearch && matchesCategory;
  });

  if (countEl) {
    countEl.textContent = String(filtered.length).padStart(2, "0");
  }

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open project details for ${getLocalized(p.title)}`);

    const mainPhoto = p.photos?.[0]?.url || "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80";
    const teamCount = p.teamMembers?.length || 1;
    const initialLetters = (p.teamMembers || []).slice(0, 3).map((m) => m.name.charAt(0));

    card.innerHTML = `
      <div class="card-image-box">
        <img src="${mainPhoto}" alt="${p.photos?.[0]?.alt || getLocalized(p.title)}" loading="lazy">
        <span class="card-type-badge">${state.lang === "mr" ? (p.typeMr || p.type) : p.type}</span>
        ${p.badge ? `<span class="card-award-badge">✦ ${p.badge}</span>` : ""}
      </div>
      <div class="card-content">
        <div class="card-date-row">
          <span>📅 ${p.createdDate}</span>
          <span>🏛️ VPKBIET</span>
        </div>
        <h3 class="card-title">${getLocalized(p.title)}</h3>
        <p class="card-summary">${getLocalized(p.summary)}</p>
        <div class="card-team-snippet">
          <div class="team-avatars-row">
            ${initialLetters.map((l) => `<div class="team-avatar-initial">${l}</div>`).join("")}
            <span class="team-count-text">${teamCount} Student Researchers</span>
          </div>
          <div class="card-action-btn">
            <span>${TRANSLATIONS[state.lang].viewProjectBtn}</span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProjectModal(p));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(p);
      }
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   PROJECT DETAIL MODAL & QR CODE GENERATION
   ========================================================================== */

function openProjectModal(project) {
  state.activeProject = project;
  state.activePhotoIndex = 0;
  window.location.hash = `project/${project.id}`;

  const modal = document.getElementById("project-detail-modal");
  if (!modal) return;

  // Title, type, date
  document.getElementById("modal-project-type").textContent = state.lang === "mr" ? (project.typeMr || project.type) : project.type;
  document.getElementById("modal-project-date").textContent = `📅 Created: ${project.createdDate} · ${project.academicYear || ""}`;
  document.getElementById("modal-project-title").textContent = getLocalized(project.title);

  // Photos & Gallery Carousel
  renderModalGallery(project);

  // Tab 1: Overview & Research Info
  const abstractEl = document.getElementById("modal-abstract-text");
  const historyEl = document.getElementById("modal-historical-text");
  const methodologyEl = document.getElementById("modal-methodology-text");
  const findingsEl = document.getElementById("modal-findings-text");

  if (abstractEl) abstractEl.textContent = project.info?.abstract || getLocalized(project.summary);
  if (historyEl) historyEl.textContent = project.info?.historicalContext || "Investigated as part of VPKBIET's heritage technology research program.";
  if (methodologyEl) methodologyEl.textContent = project.info?.engineeringMethodology || "Modern engineering simulation and prototyping.";
  if (findingsEl) findingsEl.textContent = project.info?.keyFindings || "Empirical validation completed at college laboratories.";

  // Key metrics
  const metricsContainer = document.getElementById("modal-metrics-grid");
  if (metricsContainer) {
    metricsContainer.innerHTML = (project.metrics || [])
      .map(
        (m) => `
      <div class="metric-card">
        <h4>${m.value}</h4>
        <span>${m.label}</span>
      </div>
    `
      )
      .join("");
  }

  // Tab 2: Team Members
  const teamContainer = document.getElementById("modal-team-grid");
  if (teamContainer) {
    teamContainer.innerHTML = (project.teamMembers || [])
      .map(
        (member) => `
      <div class="team-member-card">
        <div class="member-avatar">${member.name.charAt(0)}</div>
        <div class="member-info">
          <h4>${member.name}</h4>
          <p>${member.role}</p>
          <small>${member.department} · VPKBIET</small>
        </div>
      </div>
    `
      )
      .join("");

    if (project.mentor) {
      teamContainer.innerHTML += `
        <div class="team-member-card" style="border-color: var(--gold-primary); background: rgba(212, 175, 55, 0.08);">
          <div class="member-avatar" style="background: #fff; color: #000;">🏛️</div>
          <div class="member-info">
            <h4>${project.mentor}</h4>
            <p>Faculty Guide & Mentor</p>
            <small>${project.institution || "VPKBIET IKS Department"}</small>
          </div>
        </div>
      `;
    }
  }

  // Tab 3: QR Studio
  renderProjectQR(project);

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderModalGallery(project) {
  const mainImg = document.getElementById("modal-main-img");
  const captionEl = document.getElementById("modal-img-caption");
  const thumbsRow = document.getElementById("modal-gallery-thumbs");
  if (!mainImg || !thumbsRow) return;

  const photos = project.photos && project.photos.length > 0 ? project.photos : [
    { url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80", caption: "VPKBIET Heritage Research" }
  ];

  function updateActiveImage(idx) {
    state.activePhotoIndex = idx;
    mainImg.style.opacity = "0.2";
    setTimeout(() => {
      mainImg.src = photos[idx].url;
      mainImg.alt = photos[idx].alt || getLocalized(project.title);
      if (captionEl) captionEl.textContent = photos[idx].caption || "";
      mainImg.style.opacity = "1";
    }, 150);

    thumbsRow.querySelectorAll(".gallery-thumb-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === idx);
    });
  }

  thumbsRow.innerHTML = photos
    .map(
      (p, idx) => `
    <button class="gallery-thumb-btn ${idx === 0 ? "active" : ""}" type="button" aria-label="View photo ${idx + 1}">
      <img src="${p.url}" alt="${p.caption || ""}">
    </button>
  `
    )
    .join("");

  thumbsRow.querySelectorAll(".gallery-thumb-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => updateActiveImage(idx));
  });

  updateActiveImage(0);
}

function renderProjectQR(project) {
  const qrContainer = document.getElementById("modal-qrcode-canvas");
  if (!qrContainer) return;
  qrContainer.innerHTML = "";

  const projectUrl = `${window.location.origin}${window.location.pathname}#project/${project.id}`;

  if (typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: projectUrl,
      width: 190,
      height: 190,
      colorDark: "#0b1512",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    qrContainer.innerHTML = `<p style="color:#000; font-size: 0.8rem; padding: 20px;">[QR code ready: ${project.id}]</p>`;
  }

  // Setup Download & Print Handlers
  const dlBtn = document.getElementById("modal-download-qr-btn");
  const printBtn = document.getElementById("modal-print-qr-btn");
  const copyBtn = document.getElementById("modal-copy-link-btn");

  if (dlBtn) {
    dlBtn.onclick = () => {
      const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
      if (img) {
        const src = img.src || (img.toDataURL ? img.toDataURL("image/png") : null);
        if (src) {
          const a = document.createElement("a");
          a.href = src;
          a.download = `VPKBIET-IKS-${project.id}-QR.png`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          showToast("QR code downloaded successfully!");
        }
      }
    };
  }

  if (printBtn) {
    printBtn.onclick = () => {
      window.print();
    };
  }

  if (copyBtn) {
    copyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(projectUrl);
        showToast(TRANSLATIONS[state.lang].projectUrlCopied);
      } catch (err) {
        prompt("Copy project URL:", projectUrl);
      }
    };
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-detail-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "auto";
  state.activeProject = null;
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

/* ==========================================================================
   SUBMISSION MODAL (STUDENTS UPLOADING NEW PROJECTS)
   ========================================================================== */

function initSubmissionModal() {
  const openBtn = document.getElementById("open-submit-modal-btn");
  const modal = document.getElementById("project-submit-modal");
  const closeBtn = document.getElementById("close-submit-modal-btn");
  const form = document.getElementById("student-submit-form");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("submit-title")?.value || "";
      const type = document.getElementById("submit-type")?.value || "Engineering";
      const members = document.getElementById("submit-members")?.value || "";
      const abstract = document.getElementById("submit-abstract")?.value || "";

      const newProject = {
        id: "vpkbiet-" + Date.now().toString(36),
        title: { en: title, mr: title },
        type: type,
        typeMr: type,
        createdDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        academicYear: "2026-2027",
        institution: "VPKBIET Baramati, IKS Department",
        mentor: "Prof. S. R. Deshpande / IKS Committee",
        summary: {
          en: abstract.slice(0, 180) + "...",
          mr: abstract.slice(0, 180) + "..."
        },
        info: {
          abstract: abstract,
          historicalContext: "Documented student research project at VPKBIET Baramati.",
          engineeringMethodology: "Under review by VPKBIET faculty panel.",
          keyFindings: "Submitted for upcoming IKS conference exhibition."
        },
        photos: [
          {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            caption: title
          }
        ],
        teamMembers: members.split(",").map((name) => ({
          name: name.trim(),
          role: "Student Researcher",
          department: "Engineering",
          email: `${name.trim().toLowerCase().replace(/\s+/g, ".")}@vpkbiet.ac.in`
        })),
        metrics: [
          { label: "Review Status", "value": "Under Evaluation" },
          { label: "Submission Date", "value": "2026" }
        ],
        tags: [type, "Student Project", "VPKBIET"]
      };

      state.projects.unshift(newProject);
      renderProjects();
      form.reset();
      modal?.classList.remove("active");
      document.body.style.overflow = "auto";

      showToast("Project successfully submitted to VPKBIET IKS registry!");
      openProjectModal(newProject);
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */

function showToast(message) {
  const existing = document.querySelector(".iks-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "iks-toast";
  toast.innerHTML = `<span style="color:var(--gold-primary)">✺</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* ==========================================================================
   LANGUAGE SWITCH (ENGLISH / MARATHI)
   ========================================================================== */

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("iks-vpkbiet-lang", lang);
  document.documentElement.lang = lang;

  const btn = document.getElementById("lang-toggle-btn");
  if (btn) btn.textContent = lang === "en" ? "मराठी" : "English";

  renderProjects();
  if (state.activeProject) {
    openProjectModal(state.activeProject);
  }
  showToast(`Language set to ${lang === "en" ? "English" : "मराठी"}`);
}

/* ==========================================================================
   ROUTING & HASH NAVIGATION
   ========================================================================== */

function handleRouting() {
  const hash = window.location.hash;
  if (hash.startsWith("#project/")) {
    const id = hash.replace("#project/", "");
    const found = state.projects.find((p) => p.id === id);
    if (found) {
      openProjectModal(found);
    }
  } else if (!hash) {
    const modal = document.getElementById("project-detail-modal");
    if (modal && modal.classList.contains("active")) {
      closeProjectModal();
    }
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

async function init() {
  initParticleCanvas();
  initMapInteractivity();
  initSubmissionModal();

  // Load Projects from data/projects.json with fallback
  try {
    const res = await fetch("./data/projects.json");
    if (res.ok) {
      state.projects = await res.json();
    } else {
      state.projects = DEFAULT_PROJECTS;
    }
  } catch (e) {
    console.warn("Using offline bundled dataset:", e);
    state.projects = DEFAULT_PROJECTS;
  }

  // Audio Toggle
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (audioBtn) {
    audioBtn.addEventListener("click", toggleAmbientAudio);
  }

  // Language Toggle
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(state.lang === "en" ? "mr" : "en");
    });
  }

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderProjects();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === "Escape") {
        closeProjectModal();
      }
    });
  }

  // Category Filter Pills
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      state.selectedCategory = pill.dataset.category || "all";
      renderProjects();
    });
  });

  // Modal Close & Click Outside
  const modalCloseBtn = document.getElementById("close-modal-btn");
  const modal = document.getElementById("project-detail-modal");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Modal Tabs Navigation
  const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
  modalTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalTabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const targetTab = btn.dataset.tab;
      document.querySelectorAll(".modal-tab-pane").forEach((pane) => {
        pane.classList.toggle("active", pane.id === `tab-${targetTab}`);
      });
    });
  });

  // Render initial project cards
  renderProjects();

  // Listen for hash changes
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

document.addEventListener("DOMContentLoaded", init);
