// Araçlar veritabanı
const tools = [
    {
      id: 1,
      title: "VKİ Hesaplama",
      description: "Vücut Kitle İndeksinizi hesaplayın",
      category: "Sağlık",
      image: "assets/images/vki.jpg",
      link: "vki.html"
    },
    {
      id: 2,
      title: "Kredi Hesaplama",
      description: "Kredi taksitlerini hesaplayın",
      category: "Finans",
      image: "assets/images/kredi.jpg",
      link: "kredi.html"
    },
    {
      id: 3,
      title: "Kalori Hesaplama",
      description: "Günlük kalori ihtiyacınızı hesaplayın",
      category: "Sağlık",
      image: "assets/images/kalori.jpg",
      link: "kalori.html"
    },
    {
      id: 4,
      title: "Yağ Oranı Hesaplama",
      description: "Vücut yağ oranınızı hesaplayın",
      category: "Sağlık",
      image: "assets/images/yag.jpg",
      link: "yag.html"
    },
    {
      id: 5,
      title: "Faiz Hesaplama",
      description: "Mevduat faiz getirisini hesaplayın",
      category: "Finans",
      image: "assets/images/faiz.jpg",
      link: "faiz.html"
    },
    {
      id: 6,
      title: "BMI Hesaplama",
      description: "Body Mass Index hesaplayın",
      category: "Sağlık",
      image: "assets/images/bmi.jpg",
      link: "bmi.html"
    },
    {
      id: 7,
      title: "Hamilelik Hesaplama",
      description: "Doğum tarihi tahmini yapın",
      category: "Sağlık",
      image: "assets/images/hamilelik.jpg",
      link: "hamilelik.html"
    },
    {
      id: 8,
      title: "KDV Hesaplama",
      description: "KDV dahil ve hariç hesaplamalar",
      category: "Finans",
      image: "assets/images/kdv.jpg",
      link: "kdv.html"
    },
    {
      id: 9,
      title: "Yüzde Hesaplama",
      description: "Yüzde artış ve azalış hesaplamaları",
      category: "Matematik",
      image: "assets/images/yuzde.jpg",
      link: "yuzde.html"
    },
    {
      id: 10,
      title: "Zam Hesaplama",
      description: "Maaş zam hesaplamaları",
      category: "Finans",
      image: "assets/images/zam.jpg",
      link: "zam.html"
    }
    ,
    {
      id: 11,
      title: "İndirim Hesaplama",
      description: "İndirim hesaplamaları",
      category: "Finans",
      image: "assets/images/indirim.jpg",
      link: "indirim.html"
    }
     ,
    {
      id: 12,
      title: "Yaş Hesaplama",
      description: "Yaş hesaplamaları",
      category: "Matematik",
      image: "assets/images/yas.jpg",
      link: "yas.html"
    }
     ,
    {
      id: 13,
      title: "Yakıt Hesaplama",
      description: "Yakıt hesaplamaları",
      category: "Finans",
      image: "assets/images/yakit.jpg",
      link: "yakit.html"
    }
     ,
    {
      id: 14,
      title: "Tarih Hesaplama",
      description: "Tarih hesaplamaları",
      category: "Matematik",
      image: "assets/images/tarih.jpg",
      link: "tarih.html"
    }
     ,
    {
      id: 15,
      title: "Saat Hesaplama",
      description: "Saat hesaplamaları",
      category: "Matematik",
      image: "assets/images/saat.jpg",
      link: "saat.html"
    }
     ,
    {
      id: 16,
      title: "Not Hesaplama",
      description: "Not Otalaması hesaplamaları",
      category: "Matematik",
      image: "assets/images/not.jpg",
      link: "not.html"
    }
     ,
    {
      id: 17,
      title: "Maaş Hesaplama",
      description: "Maaş hesaplamaları",
      category: "Finans",
      image: "assets/images/maas.jpg",
      link: "maas.html"
    }
     ,
    {
      id: 18,
      title: "Döviz Hesaplama",
      description: "Döviz hesaplamaları",
      category: "Finans",
      image: "assets/images/doviz.jpg",
      link: "doviz.html"
    }
     ,
    {
      id: 19,
      title: "Çevre Hesaplama",
      description: "Çevre hesaplamaları",
      category: "Matematik",
      image: "assets/images/cevre.jpg",
      link: "cevre.html"
    }
     ,
    {
      id: 20,
      title: "Alan Hesaplama",
      description: "Alan hesaplamaları",
      category: "Matematik",
      image: "assets/images/alan.jpg",
      link: "alan.html"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    setupThemeToggle();
    setupCategoryButtons();
    setupSearch();
    loadTools();
  });
  
  // Tema ayarları
  function applySavedTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
  }
  
  function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
  
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
  
  function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
  
  // Kategori filtreleme
  function setupCategoryButtons() {
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterTools(button.textContent);
      });
    });
  }
  
  // Araçları yükle
  function loadTools(filter = 'Tümü') {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;
  
    const filtered = filter === 'Tümü' ? tools : tools.filter(tool => tool.category === filter);
    toolsGrid.innerHTML = '';
  
    if (filtered.length === 0) {
      toolsGrid.innerHTML = '<p class="no-results">Sonuç bulunamadı</p>';
      return;
    }
  
    filtered.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <img src="${tool.image}" alt="${tool.title}">
        <div class="tool-info">
          <h3>${tool.title}</h3>
          <p>${tool.description}</p>
          <a href="${tool.link}">Hesapla</a>
        </div>
      `;
      toolsGrid.appendChild(card);
    });
  }
  
  // Arama
  function setupSearch() {
    const input = document.querySelector('.search-box input');
    const button = document.querySelector('.search-box button');
    if (!input || !button) return;
  
    button.addEventListener('click', performSearch);
    input.addEventListener('keypress', e => {
      if (e.key === 'Enter') performSearch();
    });
  }
  
  function performSearch() {
    const searchTerm = document.querySelector('.search-box input').value.toLowerCase().trim();
    if (!searchTerm) {
      loadTools();
      return;
    }
  
    const matched = tools.filter(tool =>
      tool.title.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm)
    );
  
    const toolsGrid = document.querySelector('.tools-grid');
    toolsGrid.innerHTML = '';
  
    if (matched.length === 0) {
      toolsGrid.innerHTML = '<p class="no-results">Sonuç bulunamadı</p>';
      return;
    }
  
    matched.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <img src="${tool.image}" alt="${tool.title}">
        <div class="tool-info">
          <h3>${tool.title}</h3>
          <p>${tool.description}</p>
          <a href="${tool.link}">Hesapla</a>
        </div>
      `;
      toolsGrid.appendChild(card);
    });
  }
  