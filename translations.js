// 翻译内容配置
const translations = {
  zh: {
    title: "ToaY-CloudsMC 社区",
    subtitle: "KOOK、QQ 中转站<br>欢迎加入我们的 Discord 社区",
    welcome: "欢迎来到社区",
    desc1: "公告:<br>有贵人捐赠<br>感谢你的支持 ❤️",
    joinDiscord: "加入我们的 Discord",
    joinQQ: "加入 QQ 群聊",
    resourceNav: "📦 资源导航",
    resourceDesc: "在这里下载社区资源、整合包、客户端、插件等内容。",
    openResource: "打开资源下载站",
    followUs: "📺 关注我们",
    followDesc: "在我们的社交媒体频道上关注我们，<br>获取最新的更新和内容。",
    followYoutube: "关注 YouTube 频道",
    contactUs: "📞 联系我们",
    contactDesc: "如果你有问题、建议或者合作需求，<br>可以通过下面方式联系我。",
    qqContact: "QQ：3668667723",
    twitter: "X / Twitter",
    facebook: "Facebook",
    banAppeal: "⚖️ 封禁申诉",
    banDesc: "如果你被社区封禁，<br>请通过邮箱发送申诉信息。<br><br>我们会在 20~30 个工作日内处理你的申诉。<br><br>请在邮件中说明：<br>• 你的账号信息<br>• 被封禁原因（如果知道）<br>• 你的申诉理由",
    email: "rolsonpronk@gmail.com",
    copyright: "© 2026 ToaY-CloudsMC Community",
    announcementTitle: "📢 公告",
    announcementClose: "我知道了"
  },
  en: {
    title: "ToaY-CloudsMC Community",
    subtitle: "KOOK, QQ Hub<br>Welcome to join our Discord community",
    welcome: "Welcome to the Community",
    desc1: "Announcement:<br>PunchThank you<br>Thank you for your support ❤️",
    joinDiscord: "Join Our Discord",
    joinQQ: "Join QQ Group",
    resourceNav: "📦 Resources",
    resourceDesc: "Download community resources, modpacks, clients, plugins and more here.",
    openResource: "Open Resource Download",
    followUs: "📺 Follow Us",
    followDesc: "Follow us on our social media channels<br>to get the latest updates and content.",
    followYoutube: "Follow YouTube Channel",
    contactUs: "📞 Contact Us",
    contactDesc: "If you have questions, suggestions or collaboration needs,<br>you can contact us through the following methods.",
    qqContact: "QQ: 3668667723",
    twitter: "X / Twitter",
    facebook: "Facebook",
    banAppeal: "⚖️ Ban Appeal",
    banDesc: "If you have been banned from the community,<br>please send an appeal via email.<br><br>We will process your appeal within 20-30 business days.<br><br>Please specify in the email:<br>• Your account information<br>• Reason for ban (if known)<br>• Your appeal reason",
    email: "rolsonpronk@gmail.com",
    copyright: "© 2026 ToaY-CloudsMC Community",
    announcementTitle: "📢 Announcement",
    announcementClose: "Got it"
  },
  es: {
    title: "Comunidad ToaY-CloudsMC",
    subtitle: "Centro KOOK, QQ<br>Bienvenido a unirse a nuestra comunidad de Discord",
    welcome: "Bienvenido a la Comunidad",
    desc1: "Anuncio<br>Se añadió una ventana emergente de anuncios (Beta)<br>qq<br>¡Gracias por su apoyo ❤️",
    joinDiscord: "Únete a Nuestro Discord",
    joinQQ: "Únete al Grupo QQ",
    resourceNav: "📦 Recursos",
    resourceDesc: "Descargar recursos comunitarios, paquetes de mods, clientes, complementos y más aquí.",
    openResource: "Abrir Descarga de Recursos",
    followUs: "📺 Síguenos",
    followDesc: "Síguenos en nuestros canales de redes sociales<br>para obtener las últimas actualizaciones y contenido.",
    followYoutube: "Seguir Canal de YouTube",
    contactUs: "📞 Contáctenos",
    contactDesc: "Si tiene preguntas, sugerencias o necesidades de colaboración,<br>puede contactarnos a través de los siguientes métodos.",
    qqContact: "QQ: 3668667723",
    twitter: "X / Twitter",
    facebook: "Facebook",
    banAppeal: "⚖️ Apelación de Prohibición",
    banDesc: "Si ha sido prohibido de la comunidad,<br>envíe una apelación por correo electrónico.<br><br>Procesaremos su apelación en 20-30 días hábiles.<br><br>Por favor especifique en el correo electrónico:<br>• La información de su cuenta<br>• Motivo de la prohibición (si se conoce)<br>• Su motivo de apelación",
    email: "rolsonpronk@gmail.com",
    copyright: "© 2026 Comunidad ToaY-CloudsMC",
    announcementTitle: "📢 Anuncio",
    announcementClose: "Entendido"
  }
};

// 语言和主题管理类
class LocalizationManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'zh';
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    this.setLanguage(this.currentLanguage);
    this.setTheme(this.currentTheme);
    this.showAnnouncement();
  }

  showAnnouncement() {
    const modal = document.getElementById('announcementModal');
    if (modal) {
      // 稍微延迟一帧，确保 transition 生效
      requestAnimationFrame(() => {
        modal.classList.add('active');
      });
    }
  }

  closeAnnouncement() {
    const modal = document.getElementById('announcementModal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      this.updatePageContent();
      this.updateLanguageButtons();
    }
  }

  setTheme(theme) {
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.add('light-theme');
    } else {
      html.classList.remove('light-theme');
    }
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.updateThemeButton();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updatePageContent() {
    const trans = translations[this.currentLanguage];
    
    // 更新所有含有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (trans[key]) {
        if (element.tagName === 'IMG') {
          element.alt = trans[key];
        } else {
          element.innerHTML = trans[key];
        }
      }
    });
  }

  updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${this.currentLanguage}"]`)?.classList.add('active');
  }

  updateThemeButton() {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }
}

// 页面加载动画函数
function initPageLoadAnimation() {
  const loadingScreen = document.getElementById('loadingScreen');
  const progressBar = document.getElementById('progressBar');
  const container = document.querySelector('.container');
  const cards = document.querySelectorAll('.card');
  const controls = document.querySelector('.controls-container');
  
  if (!loadingScreen) return;

  let progress = 0;

  // 开始进度条动画
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 30;
      if (progressBar) {
        progressBar.style.width = progress + '%';
      }
    }
  }, 300);

  // 页面完全加载后
  window.addEventListener('load', () => {
    clearInterval(interval);
    progress = 100;
    if (progressBar) {
      progressBar.style.width = '100%';
    }

    // 延迟后隐藏加载屏并显示内容
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      
      setTimeout(() => {
        loadingScreen.style.display = 'none';

        // 显示主容器和控制按钮
        if (container) {
          container.classList.add('fade-in-up');
        }
        if (controls) {
          controls.classList.add('fade-in-down');
        }

        // 依次显示卡片
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('slide-in-up');
          }, index * 150);
        });
      }, 500);
    }, 800);
  });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
  // 初始化语言和主题
  window.localizationManager = new LocalizationManager();

  // 初始化加载动画
  initPageLoadAnimation();

  // 语言切换事件
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      window.localizationManager.setLanguage(e.target.getAttribute('data-lang'));
    });
  });

  // 主题切换事件
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      window.localizationManager.toggleTheme();
    });
  }
});