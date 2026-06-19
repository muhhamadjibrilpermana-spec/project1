// 1. Inisialisasi Elemen DOM Berdasarkan Kode HTML Asli Anda
const card = document.getElementById('flipButton');
const targetInput = document.getElementById('targetNumber');
const methodSelect = document.getElementById('exploitMethod');
const textTombol = document.getElementById('textTombol');
const tombolMusik = document.getElementById('musicToggleBtn'); // Pendukung tombol musik baru

const log1 = document.getElementById('log1');
const log2 = document.getElementById('log2');
const log3 = document.getElementById('log3');
const terminalBox = document.getElementById('terminalBox');
const bgMusic = document.getElementById('hackerMusic');

// 2. State & Variabel Kontrol Sistem Prank Sesuai Kode Anda
let intervalHacker;
let progress = 0;
let urutanKlik = 0; 
let isProcessing = false;

const hackerLogs = [
    "Menghubungkan ke server proxy aman...",
    "Mencari celah port WhatsApp daemon...",
    "Injeksi payload enkripsi memori...",
    "Melewati validasi SSL pinning...",
    "Membuka enkripsi handshake token...",
    "Mengekstrak database database...",
    "Sinkronisasi data chat terenkripsi..."
];

// 3. Fungsi Eksekusi Utama yang Sempat Rusak (Kembali ke Fungsi Asli Anda)
function kontrolTahapanPrank() {
    if (isProcessing) return; 

    const target = targetInput.value.trim();
    if (target === "") {
        log1.style.color = "#ff3333";
        log1.innerHTML = "> !! VALIDATION ERROR !!";
        log2.style.color = "#ff3333";
        log2.innerHTML = "> REASON: TARGET_CANNOT_BE_BLANK";
        return;
    }

    urutanKlik++;

    if (urutanKlik === 1) {
        faseInjeksiAwal(target);
    } else if (urutanKlik === 2) {
        faseLoadingKeduaMurni();
    } else if (urutanKlik === 3) {
        faseZonkFlipped();
    }
}

// 4. Fase 1 Klik Pertama: Putar Musik & Naikkan Progress ke 100%
function faseInjeksiAwal(target) {
    isProcessing = true; 
    const method = methodSelect.options[methodSelect.selectedIndex].text;

    // Perbaikan putar musik: Otomatis sinkron dengan teks indikator ON/OFF (Volume Maksimal Full = 1)
    if (bgMusic) {
        bgMusic.volume = 1;
        bgMusic.play()
            .then(() => {
                if (tombolMusik) {
                    tombolMusik.innerHTML = "🎵 MUSIC: ON";
                    tombolMusik.style.color = "#00ff00";
                    tombolMusik.style.borderColor = "#00ff00";
                }
            })
            .catch(err => console.log("Audio otomatis ditahan browser:", err));
    }

    log1.style.color = "#00ff00";
    log1.innerHTML = `> INITIATING EXPLOIT TARGET: ${target}`;
    log2.style.color = "#ffaa00";
    log2.innerHTML = `> METHOD: [${method}]`;
    
    progress = 0;
    clearInterval(intervalHacker);
    intervalHacker = setInterval(() => {
        if (progress < 100) {
            progress += 10; 
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(intervalHacker);
                isProcessing = false; 
                
                log1.innerHTML = `> INFILTRATION STATUS: SUCCESSFUL (100%)`;
                log2.style.color = "#ffff00";
                log2.innerHTML = `> ACCESS_KEY_CONNECTED: [WA_LIVE_DECRYPTED]`;
                log3.style.color = "#ffff00";
                log3.innerHTML = `> Sesi database berhasil dikloning.<br>> Klik tombol untuk membuka log pesan chat.`;
                
                textTombol.style.color = "#ffff00";
                textTombol.innerHTML = "OPEN CHAT<br>LOG";
            } else {
                let currentLogIndex = Math.floor(progress / 15) % hackerLogs.length;
                log2.style.color = "#ffaa00";
                log2.innerHTML = `> Progress: ${progress}% Mengunduh data enkripsi...`;
                log3.style.color = "#888";
                log3.innerHTML = `> ${hackerLogs[currentLogIndex]}`;
            }
        }
    }, 60); 
}

// 5. Fase 2 Klik Kedua: Progress Data Menuju 99%
function faseLoadingKeduaMurni() {
    isProcessing = true; 

    log1.style.color = "#00ff00";
    log1.innerHTML = "> ACCESSING PORTAL: /local/sqlite/chats.db";
    log2.style.color = "#ffaa00";
    log2.innerHTML = "> DECRYPTING CACHED HISTORY... [ACTIVE]";
    
    progress = 0;
    clearInterval(intervalHacker);
    intervalHacker = setInterval(() => {
        if (progress < 99) {
            progress += 15; 
            if (progress >= 99) {
                progress = 99;
                clearInterval(intervalHacker); 
                isProcessing = false; 
                cetakIsiChatPalsuOtomatis(); 
            } else {
                log3.style.color = "#ffaa00";
                log3.innerHTML = `> Mengekstrak indeks tabel pesan...<br>> Progress: ${progress}% <span class="cursor">█</span>`;
            }
        }
    }, 50);
}

// 6. Fungsi Print Chat Palsu Bawaan Anda (Menyambung kode Anda yang sempat terpotong)
function cetakIsiChatPalsuOtomatis() {
    log1.style.color = "#00ff00";
    log1.innerHTML = "> FETCHING UNREAD MESSAGES... [SUCCESS]";
    log2.style.color = "#00ffff";
    log2.innerHTML = "=== RECENT WHATSAPP CHAT DATABASE ===";
    
    const chatOpsi1 = 
        `<span style="color:#ffaa00;">[03/03/2020 - 03:15] Chat: Papa</span><br>` +
        ` Papa : "Udah dikirim belum duitnya?"<br>` +
        ` Target: "Belum pa, ini baru mau jalan ke depan"<br>` +
        ` Papa : "Transfer cepetan nak, keburu bank tutup jam 3"<br>` +
        ` Target: "Iya pa ini otw atm naik motor"<br>` +
        `----------------------------------------<br>` +
        `<span style="color:#ffaa00;">[03/03/2020 - 03:22] Chat: Adek</span><br>` +
        ` Adek  : "Kak, titip beliin seblak deket indomaret ya"<br>` +
        ` Target: "Uangnya mana? pake duit lu dulu ya"<br>` +
        ` Adek  : "Ih pelit banget nanti diganti mama di rumah"<br>` +
        ` Target: <span style="color:#00ff00;">📄 Sent File: IMG_2020_PALEMBANG.jpg</span><br>` +
        ` Adek  : "ap sih"<br>` +
        ` Target: "Yaudah iya bawel"<br>` +
        `----------------------------------------<br>` +
        `<span style="color:#ffaa00;">[03/03/2020 - 03:45] Grup: Alumni SMP Setia Negara</span><br>` +
        ` Budi  : "Woi alumni SMP Setia Negara kapan mau reuni?"<br>` +
        ` Riko  : "Wacana mulu dari tahun kemaren males gua ah"<br>` +
        ` Siska : "Kumpul di depan sekolah aja kek dulu pas cabut wkwk"<br>` +
        ` Target: "Gua ikut aja atur jadwalnya gess"<br>`;

    const chatOpsi2 = 
        `<span style="color:#ffaa00;">[03/03/2020 - 03:02] Chat: Bang Riko</span><br>` +
        ` Bang Riko : "Lu di mana? Kunci sekre kebawa di lu ya?"<br>` +
        ` Target    : "Eh iya bang lupa keasalan masuk kantong pas pulang"<br>` +
        ` Bang Riko : "Buruan balik ke sini, bocah-bocah gabisa masuk ketahan di luar"<br>` +
        ` Target    : "Iya bang otw puter balik motor nih gerimis gila"<br>` +
        `----------------------------------------<br>` +
        `<span style="color:#ffaa00;">[03/03/2020 - 03:30] Grup: Keluarga Sobri</span><br>` +
        ` Tante Ira : "Jangan lupa besok arisan di rumah om subur jam 1"<br>` +
        ` Ibu       : "Siap tante, ini kuenya lagi dibikin sama adek"<br>` +
        ` Target    : "Yah besok gua ada kelas pengganti masi bisa ijin ga ya"<br>` +
        ` Ibu       : "Ga boleh, hrus dateng semua ga enak ama om sobri nanti"<br>` +
        ` Target    : <span style="color:#00ff00;">📄 Sent File: IMG_2020_PALEMBANG.jpg</span><br>` +
        ` Ibu       : "ap sih malah ngirim foto random"<br>` +
        `----------------------------------------<br>` +
        `<span style="color:#ffaa00;">[03/03/2020 - 03:50] Chat: Adek</span><br>` +
        ` Adek  : "Kak, casan hp lu ketinggalan di kamar mandi nih"<br>` +
        ` Target: "Lah kok bisa, pantesan nyariin di tas kaga ada"<br>`;

    const logAcakTerpilih = Math.random() < 0.5 ? chatOpsi1 : chatOpsi2;

    log3.style.color = "#ffffff";
    log3.innerHTML = logAcakTerpilih + 
        `----------------------------------------<br>` +
        `<span style="color:#00ff00;">> [SYSTEM]: END OF CACHED DATA.</span><br>` +
        `<span style="color:#ffaa00; font-size:10px;">[NOTICE]: This framework is currently in BETA & EXPERIMENTAL version. Due to database handshake latency, the system may extract old cached backup history instead of live current data.</span>`;
    
    terminalBox.scrollTop = terminalBox.scrollHeight;

    textTombol.style.color = "#ff3333";
    textTombol.innerHTML = "TRY NEW<br>NUMBER";
}

// 7. Fase 3 Klik Ketiga: Stop Audio & Balik Tombol (.flipped)
function faseZonkFlipped() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    if (tombolMusik) {
        tombolMusik.innerHTML = "🎵 MUSIC: OFF";
        tombolMusik.style.color = "#888888";
        tombolMusik.style.borderColor = "#555555";
    }

    log1.style.color = "#ff3333";
    log1.innerHTML = "> !! CRITICAL EXPLOIT DETECTED !!";
    log2.style.color = "#ff3333";
    log2.innerHTML = "> SECURITY: HONEYPOT_TRAP_TRIGGERED";
    log3.style.color = "#ff3333";
    log3.innerHTML = "> MESSAGE: Lah kepo amat baca chat orang! Kena tipu lu wkwk 🖕";

    if (card) {
        card.classList.add('flipped');
    }
}

// 8. Logika Kontrol Sakelar Audio Manual ON/OFF
function toggleMusikAja() {
    if (!bgMusic || !tombolMusik) return;

    if (bgMusic.paused) {
        bgMusic.volume = 1; // Mengatur volume maksimal penuh saat dinyalakan lewat tombol
        bgMusic.play()
            .then(() => {
                tombolMusik.innerHTML = "🎵 MUSIC: ON";
                tombolMusik.style.color = "#00ff00";
                tombolMusik.style.borderColor = "#00ff00";
            })
            .catch(err => console.log("Gagal menyalakan audio:", err));
    } else {
        bgMusic.pause();
        tombolMusik.innerHTML = "🎵 MUSIC: OFF";
        tombolMusik.style.color = "#888888";
