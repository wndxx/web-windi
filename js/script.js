// Formulir kontak dan preview pesan
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewMessage = document.getElementById('preview-message');
const previewSection = document.getElementById('preview');

// Sembunyikan section preview secara default
previewSection.style.display = 'none';

// Menangani event submit pada form
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Update preview dengan input dari pengguna
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewPhone.textContent = phoneInput.value;
    previewMessage.textContent = messageInput.value;

    // Tampilkan section preview
    previewSection.style.display = 'block';
});

// Slideshow gambar pada bagian headquarters
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

// Fungsi untuk menampilkan slide yang sesuai
function showSlide(n) {
    // Pastikan index slide tetap dalam rentang yang valid
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Sembunyikan semua slide dan hapus kelas 'active' dari semua dot
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Tampilkan slide dan dot yang sesuai dengan index saat ini
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);

// Ubah slide setiap 5 detik
setInterval(nextSlide, 5000);

// Event listener untuk dot (mengganti slide sesuai dengan dot yang diklik)
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        slideIndex = parseInt(dot.dataset.index); // Konversi dataset index ke integer
        showSlide(slideIndex);
    });
});
const paragraphs = document.querySelectorAll('.paragraph');

let currentIndex = 0;

function showParagraph(index) {
  paragraphs.forEach((paragraph) => {
    paragraph.classList.remove('active');
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  paragraphs[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = dot.getAttribute('data-index');
    showParagraph(index);
  });
});

// Fungsi untuk berganti paragraf otomatis (opsional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % paragraphs.length;
  showParagraph(currentIndex);
}, 5000); // Berganti paragraf setiap 5 detik

// Ambil elemen-elemen yang diperlukan
const nameModal = document.getElementById('nameModal');
const nameForm = document.getElementById('nameForm');
const userNameInput = document.getElementById('userName');
const greeting = document.getElementById('greeting');

// Tampilkan modal ketika halaman dimuat
window.onload = function() {
    nameModal.style.display = 'flex'; // Tampilkan modal dengan display flex untuk centering
};

// Event listener untuk submit form
nameForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Cegah refresh halaman

    // Ambil nama yang diinput pengguna
    const userName = userNameInput.value;

    // Ubah teks greeting di header
    greeting.textContent = `Hi, ${userName}. Welcome To My Website!`;

    // Sembunyikan modal setelah nama diinput
    nameModal.style.display = 'none';
});

