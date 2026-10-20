export const portfolioData = {
  personal: {
    name: "Aufariq Rajabi Fristyan",
    brandName: "AVRIXX",
    title: "Lulusan Teknik Informatika | Web Developer",
    subtitle: "Web developer yang berfokus pada website responsif, UI/UX, dan pengalaman pengguna dengan HTML, CSS, JavaScript, Bootstrap, React, dan Laravel.",
    email: "Aufariq123@gmail.com",
    phone: "+62 857-0492-5946",
    github: "https://github.com/ASSILIGHTE",
    linkedin: "https://www.linkedin.com/in/aufariqrf",
    website: "https://avrixx.xyz",
    cvLink: "#download-cv",
    location: "Palembang, Indonesia",
    status: "Terbuka untuk peluang Web Development",
    avatar: "/profile.jpg",
    certifications: ["Junior Web Developer - LSP Teknologi Digital"],
    patents: ["Predict-G - DJKI No. 000852775"]
  },

  certificationsList: [
    {
      id: "bnsp-junior-web-developer",
      title: "Junior Web Developer",
      titleEn: "Junior Web Developer",
      issuer: "LSP Teknologi Digital",
      lsp: "LSP Teknologi Digital",
      certNo: "-",
      regNo: "-",
      recipient: "Aufariq Rajabi Fristyan",
      area: "Pengembangan Website / Web Development",
      qualification: "Junior Web Developer",
      validity: "Juni 2026 - Juni 2029",
      issueDate: "Juni 2026",
      location: "Indonesia",
      director: "-",
      image: "/certificates/bnsp-junior-web-developer.jpg",
      badgeText: "LSP Certified",
      featured: true
    }
  ],

  patentsList: [
    {
      id: "predict-g",
      title: "Predict-G",
      type: "Hak Cipta / Kekayaan Intelektual",
      authority: "Direktorat Jenderal Kekayaan Intelektual (DJKI)",
      registrationNo: "000852775",
      description: "Aplikasi web untuk memprediksi rata-rata gaji bersih bulanan menggunakan PHP, ekstrapolasi linear Newton, dan spline kubik Hermite."
    }
  ],

  about: {
    roles: [
      "Lulusan Teknik Informatika",
      "Web Developer",
      "Frontend Developer",
      "Freelance Developer"
    ],
    bio: "Lulusan S1 Teknik Informatika Universitas Indo Global Mandiri dengan pengalaman magang sebagai Frontend Web Developer di Polda Sumatera Selatan serta menjalankan usaha freelance pengembangan website melalui AVRIXX STUDIO. Berpengalaman dalam pengembangan website responsif, perancangan UI/UX, aplikasi web, dan penelitian machine learning.",
    highlights: [
      {
        title: "Responsive Web Development",
        desc: "Membangun antarmuka responsif menggunakan HTML, CSS, JavaScript, Bootstrap, React, dan Laravel Blade."
      },
      {
        title: "UI/UX Design",
        desc: "Merancang antarmuka dengan fokus pada desain, animasi, kemudahan penggunaan, dan pengalaman pengguna."
      },
      {
        title: "Project Delivery",
        desc: "Mengelola kebutuhan pelanggan, pengembangan, pengujian, hingga publikasi website secara mandiri."
      },
      {
        title: "Machine Learning Research",
        desc: "Melakukan preprocessing, feature engineering, normalisasi, serta evaluasi model SVM dan Random Forest."
      }
    ],
    stats: [
      { label: "Pengalaman Magang", value: "Polda Sumsel", suffix: "" },
      { label: "Usaha Freelance", value: "AVRIXX STUDIO", suffix: "" },
      { label: "Proyek Utama", value: "3", suffix: "" }
    ]
  },

  skills: {
    frontend: [
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React.js", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "UI/UX Design", level: "Advanced" }
    ],
    backend: [
      { name: "Laravel", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" }
    ],
    database: [
      { name: "MySQL", level: "Intermediate" }
    ],
    dataAi: [
      { name: "Python", level: "Intermediate" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Data Analysis", level: "Intermediate" }
    ],
    tools: [
      { name: "Git / GitHub", level: "Intermediate" },
      { name: "Black Box Testing", level: "Intermediate" },
      { name: "Laravel Blade", level: "Intermediate" }
    ]
  },

  projects: [
    {
      id: "sttp-system",
      title: "Frontend Sistem Informasi STTP Berbasis Web",
      shortDescription: "Prototipe frontend STTP untuk Subdit V Siber Polda Sumsel yang mencakup dashboard administrasi, formulir pelaporan, dan antarmuka responsif.",
      image: "/projects/sttp.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel Blade"],
      github: "https://github.com/ASSILIGHTE",
      liveDemo: null,
      featured: true,
      category: "Polda Sumatera Selatan"
    },
    {
      id: "oil-production-research",
      title: "Penelitian Prediksi Produksi Minyak Mentah",
      shortDescription: "Perbandingan model Support Vector Machine dan Random Forest melalui preprocessing, feature engineering, normalisasi, serta evaluasi MAE/RMSE. Random Forest memperoleh MAE 0,0302 dan RMSE 0,0566 pada data uji 20%.",
      image: "/projects/oil.png",
      technologies: ["Python", "Machine Learning", "SVM", "Random Forest", "Data Analysis"],
      github: "https://github.com/ASSILIGHTE",
      liveDemo: null,
      featured: true,
      category: "Machine Learning Research"
    },
    {
      id: "predict-g",
      title: "Predict-G - Aplikasi Prediksi Gaji",
      shortDescription: "Aplikasi prediksi rata-rata gaji bersih bulanan menggunakan PHP, metode ekstrapolasi linear Newton, dan spline kubik Hermite; tercatat di DJKI No. 000852775.",
      image: "/projects/dems.png",
      technologies: ["PHP", "Newton Linear Extrapolation", "Cubic Hermite Spline"],
      github: "https://github.com/ASSILIGHTE",
      liveDemo: null,
      featured: true,
      category: "Hak Cipta / DJKI No. 000852775"
    }
  ],

  featuredCaseStudy: {
    id: "sttp-system",
    title: "Frontend Sistem Informasi STTP",
    subtitle: "Subdit V Siber Polda Sumatera Selatan",
    overview: "Prototipe frontend Sistem Informasi Surat Tanda Terima Pelaporan (STTP) berbasis web untuk mendukung administrasi pelaporan di Polda Sumatera Selatan.",
    image: "/projects/sttp.png",
    keyFeatures: [
      "Dashboard administrasi untuk kebutuhan pelaporan",
      "Formulir pelaporan berbasis web",
      "Antarmuka responsif dan mudah digunakan",
      "Pengujian fungsi antarmuka dan kemudahan penggunaan"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Laravel Blade"],
    metrics: [
      { label: "Periode", value: "Mar-Mei 2025" },
      { label: "Instansi", value: "Polda Sumsel" },
      { label: "Peran", value: "Frontend Developer" }
    ],
    github: "https://github.com/ASSILIGHTE",
    liveDemo: null
  },

  education: [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Indo Global Mandiri",
      period: "2022 - 2026",
      description: "Lulusan S1 Teknik Informatika dengan fokus pada pengembangan website, UI/UX, dan penelitian machine learning.",
      achievements: [
        "Penelitian prediksi produksi minyak mentah",
        "Pencipta Predict-G yang tercatat di DJKI No. 000852775"
      ]
    }
  ],

  experience: [
    {
      role: "Magang - Frontend Web Developer",
      organization: "Polda Sumatera Selatan (Polda Sumsel) | Palembang",
      period: "Maret 2025 - Mei 2025",
      description: "Mengembangkan antarmuka Sistem Informasi Surat Tanda Terima Pelaporan (STTP) berbasis web untuk administrasi pelaporan.",
      bullets: [
        "Membangun dashboard dan formulir responsif menggunakan HTML, CSS, JavaScript, Bootstrap, dan Laravel Blade.",
        "Menguji fungsi antarmuka dan kemudahan penggunaan."
      ]
    },
    {
      role: "Freelance Web Developer & Founder",
      organization: "AVRIXX STUDIO",
      period: "Freelance",
      description: "Mengembangkan website digital interaktif dan responsif sesuai kebutuhan pelanggan.",
      bullets: [
        "Merancang UI/UX dengan fokus pada desain, animasi, dan pengalaman pengguna.",
        "Mengelola proyek dari komunikasi kebutuhan pelanggan, pengembangan, hingga publikasi website."
      ]
    }
  ],

  training: [
    {
      title: "Merancang dan Mengembangkan Strategi Promosi Digital UMKM bagi Spesialis Pemasaran",
      issuer: "Skill Academy by Ruangguru",
      period: "November 2022"
    }
  ],

  languages: ["Bahasa Indonesia (aktif)", "Bahasa Inggris (pasif)"],
  softSkills: ["Pemecahan masalah", "Berpikir logis", "Kerja sama tim", "Adaptabilitas", "Ketelitian", "Tanggung jawab"]
};
