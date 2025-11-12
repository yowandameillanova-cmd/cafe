// Tunggu hingga seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fungsionalitas Navbar Fixed dan Scroll
    
    // Ambil elemen navbar berdasarkan class-nya
    const navbar = document.querySelector('.navbar');
    
    // Tentukan tinggi area di mana navbar akan mulai fixed dan diberi shadow
    // Kita bisa gunakan tinggi navbar itu sendiri, atau nilai tertentu.
    const scrollTrigger = 50; 

    // Fungsi untuk mengubah style navbar saat scroll
    function handleScroll() {
        // Cek posisi scroll vertikal (jarak dari atas)
        if (window.scrollY > scrollTrigger) {
            // Jika sudah melewati batas, tambahkan class 'scrolled'
            // Anda perlu mendefinisikan class .scrolled ini di file style.css jika ingin menambahkan efek bayangan!
            navbar.classList.add('scrolled');
        } else {
            // Jika masih di atas atau sama dengan batas, hapus class 'scrolled'
            navbar.classList.remove('scrolled');
        }
    }

    // Pasang event listener ke jendela (window) untuk mendengarkan setiap kali terjadi scrolling
    window.addEventListener('scroll', handleScroll);


    // 2. Fungsionalitas Navigasi Smooth Scroll (Opsional, tapi bagus)
    
    // Ambil semua link navigasi
    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Pastikan link memiliki href yang menuju ke ID (seperti #menu, #tentang)
            if (this.hash !== "") {
                // Mencegah aksi default link (yang biasanya langsung melompat)
                e.preventDefault();

                // Ambil ID target dari atribut href (misal: "#menu")
                const hash = this.hash;

                // Scroll ke elemen target dengan efek halus (smooth)
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Catatan: Jika Anda menambahkan tombol toggle menu hamburger di HTML/CSS,
    // Anda akan memerlukan kode JS tambahan di sini untuk membuka dan menutup menu di mode mobile.

});
