const pageParallax = document.getElementById("pageParallax");
const bannerParallax = document.getElementById("bannerParallax");
const reveals = document.querySelectorAll(".reveal");
const modal = document.getElementById("dynamicModal");
const closeModal = document.getElementById("closeModal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalCopy = document.getElementById("modalCopy");
const modalValue = document.getElementById("modalValue");
const pixBox = document.getElementById("pixBox");
const qrImage = document.getElementById("qrImage");
const pixKey = document.getElementById("pixKey");
const pixCopyCode = document.getElementById("pixCopyCode");
const pixNote = document.getElementById("pixNote");
const extraActions = document.getElementById("extraActions");
const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const copyPixBtn = document.getElementById("copyPixBtn");
const copyCodeBtn = document.getElementById("copyCodeBtn");

let currentSlide = 0;
let activeSlides = [];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 },
);

reveals.forEach((el) => revealObserver.observe(el));

const updateParallax = () => {
  const scrolled = window.scrollY;
  pageParallax.style.transform = `translate3d(0, ${scrolled * 0.08}px, 0)`;
  bannerParallax.style.transform = `scale(1.15) translate3d(0, ${scrolled * 0.12}px, 0)`;
};

updateParallax();
window.addEventListener("scroll", updateParallax, { passive: true });

const modalData = {
  contribuir: {
    tag: "Contribuição",
    title: "Contribuir com o casal",
    copy: "Uma ajuda para transformar o grande dia em lembranças especiais. Nesta janela você pode exibir o QR Code oficial, a chave Pix e o código copia e cola.",
    value: "Pix do casal",
    showPix: true,
    pixKey: "montanari.alpha@gmail.com",
    pixCode:
      "00020126330014BR.GOV.BCB.PIX0119montanari.alpha@gmail.com5204000053039865802BR5925Andre e Bruna6009ITAPETININGA62070503***6304A1B2",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=PIX%20Andre%20Bruna%20montanari.alpha%40gmail.com",
    note: "Troque este QR Code pela imagem final do Pix oficial.",
    slides: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
        caption: "Prévia da galeria do casal",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
        caption: "Espaço para fotos do casamento",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
        caption: "Troque por fotos oficiais depois",
      },
    ],
    actions: [],
  },
  presentear: {
    tag: "Presente",
    title: "Presentear agora",
    copy: "Para quem deseja colaborar diretamente com os sonhos do casal, esta janela pode reunir QR Code, Pix copia e cola e imagens inspiradoras do grande dia.",
    value: "Ajude com carinho",
    showPix: true,
    pixKey: "montanari.alpha@gmail.com",
    pixCode:
      "00020126330014BR.GOV.BCB.PIX0119montanari.alpha@gmail.com5204000053039865802BR5925Andre e Bruna6009ITAPETININGA62070503***6304C3D4",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=Presentear%20Andre%20Bruna%20montanari.alpha%40gmail.com",
    note: "Você pode alterar o texto, a chave Pix e o QR Code para a versão definitiva.",
    slides: [
      {
        src: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1400&q=80",
        caption: "Um presente para novas memórias",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
        caption: "Casamento, brunch e celebração",
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=80",
        caption: "Substitua pelas fotos do casal",
      },
    ],
    actions: [],
  },
  mensagem: {
    tag: "Contato",
    title: "Enviar mensagem ao casal",
    copy: "Para enviar uma mensagem carinhosa, tirar dúvidas ou combinar algum detalhe, use o e-mail abaixo. Você pode trocar depois por outro canal ou formulário.",
    value: "montanari.alpha@gmail.com",
    showPix: false,
    slides: [
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80",
        caption: "Canal para mensagens",
      },
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80",
        caption: "Recados e carinho para o casal",
      },
    ],
    actions: [
      {
        label: "Abrir e-mail",
        href: "mailto:montanari.alpha@gmail.com",
        className: "primary",
      },
      { label: "Copiar e-mail", action: "copy-email", className: "secondary" },
    ],
  },
  fotos: {
    tag: "Galeria",
    title: "Fotos do casamento",
    copy: "Esta modal já está pronta para funcionar como galeria/carrossel. Basta substituir as imagens de exemplo pelas fotos reais do ensaio, do casamento ou dos momentos do casal.",
    value: "Galeria editável",
    showPix: false,
    slides: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
        caption: "Foto principal do casal",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
        caption: "Cerimônia e emoção",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
        caption: "Viagens e memórias",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
        caption: "Celebração com estilo",
      },
    ],
    actions: [
      { label: "Voltar ao topo", href: "#top", className: "secondary" },
      {
        label: "Presentear o casal",
        action: "open-presentear",
        className: "primary",
      },
    ],
  },
};

const renderCarousel = (slides) => {
  activeSlides = slides;
  currentSlide = 0;
  carouselTrack.innerHTML = slides
    .map(
      (slide) => `
        <div class="carousel-slide" data-caption="${slide.caption}">
          <img src="${slide.src}" alt="${slide.caption}">
        </div>
      `,
    )
    .join("");

  carouselDots.innerHTML = slides
    .map(
      (_, index) => `
        <button type="button" data-dot-index="${index}" aria-label="Ir para foto ${index + 1}"></button>
      `,
    )
    .join("");

  updateCarousel();
};

const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  [...carouselDots.children].forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
  });
};

const setModalActions = (actions, type) => {
  extraActions.innerHTML = "";
  actions.forEach((action) => {
    const element = document.createElement(action.href ? "a" : "button");
    if (action.href) {
      element.href = action.href;
    } else {
      element.type = "button";
      element.dataset.action = action.action;
    }
    element.className = `modal-btn ${action.className || ""}`;
    element.textContent = action.label;
    extraActions.appendChild(element);
  });

  extraActions
    .querySelectorAll('[data-action="copy-email"]')
    .forEach((button) => {
      button.addEventListener("click", async () => {
        await navigator.clipboard.writeText("montanari.alpha@gmail.com");
        button.textContent = "E-mail copiado";
        setTimeout(() => (button.textContent = "Copiar e-mail"), 1600);
      });
    });

  extraActions
    .querySelectorAll('[data-action="open-presentear"]')
    .forEach((button) => {
      button.addEventListener("click", () => openModal("presentear"));
    });
};

const openModal = (type) => {
  const data = modalData[type] || modalData.contribuir;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalCopy.textContent = data.copy;
  modalValue.textContent = data.value || "";
  pixBox.style.display = data.showPix ? "block" : "none";

  if (data.showPix) {
    qrImage.src = data.qr;
    pixKey.textContent = data.pixKey;
    pixCopyCode.textContent = data.pixCode;
    pixNote.textContent = data.note;
  }

  renderCarousel(data.slides || []);
  setModalActions(data.actions || [], type);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModalFn = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

document.querySelectorAll("[data-open-modal]").forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(trigger.dataset.openModal);
  });
});

closeModal.addEventListener("click", closeModalFn);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFn();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModalFn();
  if (
    e.key === "ArrowRight" &&
    modal.classList.contains("is-open") &&
    activeSlides.length > 1
  ) {
    currentSlide = (currentSlide + 1) % activeSlides.length;
    updateCarousel();
  }
  if (
    e.key === "ArrowLeft" &&
    modal.classList.contains("is-open") &&
    activeSlides.length > 1
  ) {
    currentSlide =
      (currentSlide - 1 + activeSlides.length) % activeSlides.length;
    updateCarousel();
  }
});

prevSlide.addEventListener("click", () => {
  if (!activeSlides.length) return;
  currentSlide = (currentSlide - 1 + activeSlides.length) % activeSlides.length;
  updateCarousel();
});

nextSlide.addEventListener("click", () => {
  if (!activeSlides.length) return;
  currentSlide = (currentSlide + 1) % activeSlides.length;
  updateCarousel();
});

carouselDots.addEventListener("click", (e) => {
  const button = e.target.closest("[data-dot-index]");
  if (!button) return;
  currentSlide = Number(button.dataset.dotIndex);
  updateCarousel();
});

copyPixBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixKey.textContent);
    copyPixBtn.textContent = "Chave copiada";
    setTimeout(() => (copyPixBtn.textContent = "Copiar chave Pix"), 1600);
  } catch (error) {
    copyPixBtn.textContent = "Copie manualmente";
    setTimeout(() => (copyPixBtn.textContent = "Copiar chave Pix"), 1600);
  }
});

copyCodeBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixCopyCode.textContent);
    copyCodeBtn.textContent = "Código copiado";
    setTimeout(() => (copyCodeBtn.textContent = "Copiar código Pix"), 1600);
  } catch (error) {
    copyCodeBtn.textContent = "Copie manualmente";
    setTimeout(() => (copyCodeBtn.textContent = "Copiar código Pix"), 1600);
  }
});
(function() {

  let index = 0;
  const slides = document.querySelectorAll(".casal-slide");
  const dotsContainer = document.querySelector(".casal-dots");

  if (!slides.length) return;

  // Criar dots
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".casal-dots span");

  function showSlide(i) {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");

    index = i;

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    let i = (index + 1) % slides.length;
    showSlide(i);
  }

  function prevSlide() {
    let i = (index - 1 + slides.length) % slides.length;
    showSlide(i);
  }

  document.querySelector(".casal-next").onclick = nextSlide;
  document.querySelector(".casal-prev").onclick = prevSlide;

  setInterval(nextSlide, 4000);

  showSlide(0);

})();