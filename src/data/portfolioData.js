export const portfolioData = {
  personal: {
    name: "Aufariq Rajabi Fristyan",
    brandName: "AVRIXXX",
    title: "Computer Science Student | Full Stack Developer | Backend Enthusiast",
    subtitle: "Building structured digital solutions with Laravel, React, PHP, MySQL, and intelligent data systems.",
    email: "aufariq123@gmail.com",
    phone: "085766778097",
    github: "https://github.com/Aufariqrf",
    linkedin: "https://www.linkedin.com/in/Aufariqrf",
    cvLink: "#download-cv",
    location: "Palembang, Sumatera Selatan, Indonesia",
    status: "Available for Web & Backend Development",
    avatar: "/profile.jpg",
    certifications: ["Junior Web Developer (BNSP Certified)"],
    patents: ["Aplikasi Predict-G"]
  },

  certificationsList: [
    {
      id: "bnsp-junior-web-developer",
      title: "Sertifikat Kompetensi — Pengembang Web Pratama",
      titleEn: "Certificate of Competence — Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      lsp: "LSP Teknologi Digital (Professional Certification Body of Digital Technology)",
      certNo: "62090 2513 3 0183329 2026",
      regNo: "Reg. TIK 1565 68018 2026",
      recipient: "Aufariq Rajabi Fristyan",
      area: "Pengembangan Website / Web Development",
      qualification: "Pengembang Web Pratama / Junior Web Developer",
      validity: "3 (tiga) Tahun / 3 (three) Years",
      issueDate: "04 Juni 2026",
      location: "Yogyakarta",
      director: "Ir. Gunawan Ramli, M.Kom.",
      image: "/certificates/bnsp-junior-web-developer.jpg",
      badgeText: "BNSP Verified",
      featured: true
    }
  ],

  patentsList: [
    {
      id: "predict-g",
      title: "Aplikasi Predict-G",
      type: "Hak Cipta / Kekayaan Intelektual (HAKI)",
      authority: "Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham RI",
      database: "Pangkalan Data Kekayaan Intelektual (PDKI)",
      pdkiUrl: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      description: "Aplikasi berbasis Machine Learning / Prediktif terdaftar resmi dalam Pangkalan Data Kekayaan Intelektual Kemenkumham Republik Indonesia."
    }
  ],

  about: {
    roles: [
      "Computer Science Student",
      "Full Stack Developer",
      "Backend Enthusiast",
      "Data & AI Explorer"
    ],
    bio: "Saya adalah mahasiswa Teknik Informatika (Computer Science) di Universitas Indo Global Mandiri yang berfokus pada pengembangan aplikasi web Full Stack dan arsitektur backend. Berpengalaman dalam merancang Sistem Informasi Manajemen Laporan di Kepolisian Negara Republik Indonesia (Subdit V Siber Polda Sumsel) serta membangun aplikasi web yang aman, terstruktur, dan responsif.",
    highlights: [
      {
        title: "Web & Backend Development",
        desc: "Mengembangkan sistem informasi terstruktur dengan PHP Native, Laravel, MySQL, dan RESTful API."
      },
      {
        title: "Role-Based Access Control",
        desc: "Merancang manajemen pengguna, otentikasi ketat, dan hirarki hak akses administrasi."
      },
      {
        title: "Document & Workflow Automation",
        desc: "Pengelolaan template dokumen, pencarian riwayat data, dan ekspor berkas administratif."
      },
      {
        title: "Predictive & Intelligent Apps",
        desc: "Pengembangan kecerdasan buatan & paten aplikasi prediksi (Aplikasi Predict-G)."
      }
    ],
    stats: [
      { label: "Pengalaman Kerja", value: "Polda Sumsel", suffix: "" },
      { label: "Sertifikasi", value: "Junior Web Dev", suffix: "" },
      { label: "Paten Terdaftar", value: "Predict-G", suffix: "" },
    ]
  },

  skills: {
    frontend: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS / Tailwind CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "UIX & Web Design", level: "Advanced" }
    ],
    backend: [
      { name: "PHP Native", level: "Advanced" },
      { name: "Laravel", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" }
    ],
    database: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" }
    ],
    dataAi: [
      { name: "Python", level: "Advanced" },
      { name: "Pandas & Scikit-learn", level: "Intermediate" },
      { name: "Predictive Analytics (Predict-G)", level: "Advanced" }
    ],
    tools: [
      { name: "VS Code", level: "Advanced" },
      { name: "XAMPP", level: "Advanced" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Vite", level: "Intermediate" }
    ]
  },

  projects: [
    {
      id: "sttp-system",
      title: "Sistem Informasi Manajemen STTP - Polda Sumsel",
      shortDescription: "Sistem Informasi Manajemen Laporan Surat Tanda Terima Pelaporan (STTP) Berbasis Web untuk Subdit V Siber Direktorat Reserse Kriminal Khusus Polda Sumatera Selatan.",
      image: "/projects/sttp.png",
      technologies: ["PHP Native", "MySQL", "HTML", "Tailwind CSS", "JavaScript", "XAMPP"],
      github: "https://github.com/Aufariqrf/sttp-polda-sumsel",
      liveDemo: null,
      featured: true,
      category: "Kepolisian Negara Republik Indonesia"
    },
    {
      id: "predict-g",
      title: "Aplikasi Predict-G (Registered Copyright / Hak Cipta)",
      shortDescription: "Aplikasi berbasis Machine Learning / Prediktif terdaftar Hak Ciptanya secara resmi pada Pangkalan Data Kekayaan Intelektual (PDKI) Kemenkumham RI.",
      image: "/projects/oil.png",
      technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      github: "https://github.com/Aufariqrf/predict-g",
      liveDemo: null,
      pdkiUrl: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      featured: true,
      category: "Hak Cipta / HAKI Terdaftar"
    },
    {
      id: "dems",
      title: "Digital Evidence Management System",
      shortDescription: "Sistem untuk mengelola dan mendokumentasikan bukti digital secara terstruktur dengan fitur manajemen data, enkripsi hash, dan kontrol akses pengguna.",
      image: "/projects/dems.png",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "SHA-256 Hashing"],
      github: "https://github.com/Aufariqrf/digital-evidence-management",
      liveDemo: null,
      featured: false,
      category: "Backend & Web Security"
    },
    {
      id: "phishing-detection",
      title: "Phishing URL Detection System",
      shortDescription: "Aplikasi berbasis Machine Learning untuk mendeteksi dan mengklasifikasikan URL yang berpotensi phishing.",
      image: "/projects/phishing.png",
      technologies: ["Python", "Scikit-learn", "Flask", "Pandas"],
      github: "https://github.com/Aufariqrf/phishing-url-detection",
      liveDemo: null,
      featured: false,
      category: "Machine Learning & Cybersecurity"
    }
  ],

  featuredCaseStudy: {
    id: "sttp-system",
    title: "Sistem Informasi Manajemen Laporan STTP",
    subtitle: "Subdit V Siber Ditreskrimsus Polda Sumsel",
    overview: "Aplikasi internal yang dikembangkan untuk membantu proses pengelolaan dan administrasi laporan Surat Tanda Terima Pelaporan (STTP) pada Subdit V Siber Direktorat Reserse Kriminal Khusus Polda Sumatera Selatan. Memastikan alur pengarsipan berkas kepolisian yang cepat, terstruktur, dan transparan.",
    image: "/projects/sttp.png",
    keyFeatures: [
      "Pengelolaan pengguna dan hak akses hirarki berdasarkan role admin & investigator",
      "Pengelolaan template berkas STTP resmi kepolisian",
      "Form input, validasi, dan pengelolaan data STTP secara realtime",
      "Riwayat pencarian data laporan STTP cepat & terstruktur",
      "Pengelolaan dokumen dan data pendukung berkas pelaporan",
      "Dashboard administrasi & antarmuka responsif ramah pengguna"
    ],
    technologies: ["PHP Native", "MySQL", "HTML5", "Tailwind CSS", "JavaScript", "XAMPP"],
    metrics: [
      { label: "Periode Kerja", value: "3 Bulan" },
      { label: "Instansi Target", value: "Polda Sumsel" },
      { label: "Tipe Aplikasi", value: "Sistem Internal" }
    ],
    github: "https://github.com/Aufariqrf/sttp-polda-sumsel",
    liveDemo: null
  },

  education: [
    {
      degree: "Sarjana (S.Kom.), Teknik Informatika (Computer Science)",
      institution: "Universitas Indo Global Mandiri",
      period: "Oktober 2022 — Oktober 2026",
      description: "Program studi Teknik Informatika dengan keahlian utama pada Pemrograman Web, Arsitektur Backend, Basis Data Relasional, serta Pengembangan Sistem Informasi & Kecerdasan Buatan.",
      achievements: [
        "Sertifikasi Kompetensi: Junior Web Developer",
        "Pendaftaran Paten: Aplikasi Predict-G"
      ]
    }
  ],

  experience: [
    {
      role: "Pengembang Web (Web Developer)",
      organization: "Kepolisian Negara Republik Indonesia — Subdit V Siber Ditreskrimsus Polda Sumsel",
      period: "Maret 2025 — Mei 2025 (3 Bulan)",
      description: "Membuat Sistem Informasi Manajemen Laporan Surat Tanda Terima Pelaporan (STTP) Berbasis Web untuk membantu administrasi dan pengarsipan data pelaporan pada Subdit V Siber Polda Sumsel.",
      bullets: [
        "Pengelolaan pengguna dan hak akses berbasis role.",
        "Pengelolaan template STTP & form input data pelaporan.",
        "Pencarian riwayat data, pengelolaan dokumen pendukung, dan dashboard administrasi responsif.",
        "Teknologi: PHP Native, MySQL, HTML, Tailwind CSS, JavaScript, XAMPP, Visual Studio Code."
      ]
    }
  ]
};
