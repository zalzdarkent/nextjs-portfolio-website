-- =============================================================================
-- FULL DATABASE SETUP SCRIPT FOR NEON POSTGRES (TABLES + SEED DATA)
-- Generated for Portfolio Website
-- =============================================================================

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "display_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hero_content" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "greeting" TEXT NOT NULL DEFAULT '',
    "name_label" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "btn_project" TEXT NOT NULL DEFAULT '',
    "btn_contact" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT '',
    "sticker_exp" TEXT NOT NULL DEFAULT '',
    "sticker_open" TEXT NOT NULL DEFAULT '',
    "available_text" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "hero_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about_content" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "btn_label" TEXT NOT NULL DEFAULT '',
    "cv_modal_title" TEXT NOT NULL DEFAULT '',
    "cv_modal_download" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "about_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "images" TEXT NOT NULL DEFAULT '[]',
    "github_url" TEXT NOT NULL DEFAULT '',
    "live_url" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_translations" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "short_desc" TEXT NOT NULL DEFAULT '',
    "long_desc" TEXT NOT NULL DEFAULT '',
    "features" TEXT NOT NULL DEFAULT '[]',

    CONSTRAINT "project_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_tags" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "project_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_tech" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "tech_name" TEXT NOT NULL,

    CONSTRAINT "project_tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tech_skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '',
    "icon_name" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tech_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT '',
    "place" TEXT NOT NULL DEFAULT '',
    "period" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "logo_path" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_items" (
    "id" SERIAL NOT NULL,
    "experience_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "experience_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_entries" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "place" TEXT NOT NULL DEFAULT '',
    "period" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "education_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_highlights" (
    "id" SERIAL NOT NULL,
    "education_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "education_highlights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_habits" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "k" TEXT NOT NULL DEFAULT '',
    "v" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "work_habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "snapshot_items" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "num" TEXT NOT NULL DEFAULT '',
    "label" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "snapshot_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competencies" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "k" TEXT NOT NULL DEFAULT '',
    "v" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "competencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_content" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description1" TEXT NOT NULL DEFAULT '',
    "description2" TEXT NOT NULL DEFAULT '',
    "form_name" TEXT NOT NULL DEFAULT '',
    "form_email" TEXT NOT NULL DEFAULT '',
    "form_message" TEXT NOT NULL DEFAULT '',
    "form_placeholder" TEXT NOT NULL DEFAULT '',
    "form_submit" TEXT NOT NULL DEFAULT '',
    "form_submitting" TEXT NOT NULL DEFAULT '',
    "toast" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "contact_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_links" (
    "id" SERIAL NOT NULL,
    "icon_name" TEXT NOT NULL DEFAULT '',
    "label" TEXT NOT NULL DEFAULT '',
    "href" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "contact_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marquee_items" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "marquee_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer_content" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "copy_text" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "footer_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site_settings" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "site_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "hero_content_locale_key" ON "hero_content"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "about_content_locale_key" ON "about_content"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "project_translations_project_id_locale_key" ON "project_translations"("project_id", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "contact_content_locale_key" ON "contact_content"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "footer_content_locale_key" ON "footer_content"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "site_settings_key_key" ON "site_settings"("key");

-- AddForeignKey
ALTER TABLE "project_translations" ADD CONSTRAINT "project_translations_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tags" ADD CONSTRAINT "project_tags_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tech" ADD CONSTRAINT "project_tech_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_items" ADD CONSTRAINT "experience_items_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education_highlights" ADD CONSTRAINT "education_highlights_education_id_fkey" FOREIGN KEY ("education_id") REFERENCES "education_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;



-- =============================================================================
-- CLEAN OLD DATA & SEED INITIAL DATA
-- =============================================================================

TRUNCATE TABLE "education_highlights", "education_entries", "experience_items", "experiences", 
               "project_tech", "project_tags", "project_translations", "projects", 
               "hero_content", "about_content", "tech_skills", "work_habits", 
               "snapshot_items", "competencies", "achievements", "contact_content", 
               "contact_links", "marquee_items", "footer_content", "site_settings", "users" CASCADE;

-- 1. Admin User (username: admin, password: admin123)
INSERT INTO "users" ("username", "password_hash", "display_name", "created_at", "updated_at")
VALUES ('admin', '$2b$10$8vN5OSqfNygsvuwIfHtZlubnr/voOeLpaJReIQLO77/rOToeJqYbC', 'Alif Fadillah Ummar', NOW(), NOW());

-- 2. Hero Content
INSERT INTO "hero_content" ("locale", "greeting", "name_label", "description", "btn_project", "btn_contact", "status", "sticker_exp", "sticker_open", "available_text")
VALUES 
('id', 'HALO!!', 'SAYA', 'Full Stack Developer dengan semangat membangun produk digital yang berdampak. Spesialis Laravel, React, Next.js, CodeIgniter, dan Node.js dengan 3+ tahun pengalaman nyata.', 'Lihat Proyek →', 'Hubungi Saya', 'Tersedia untuk Proyek', '3+ YRS EXP', 'OPEN TO WORK!', '✦ Available for'),
('en', 'HELLO!!', 'I''M', 'Full Stack Developer passionate about building impactful digital products. Specialist in Laravel, React, Next.js, CodeIgniter, and Node.js with 3+ years of real experience.', 'View Projects →', 'Contact Me', 'Available for Projects', '3+ YRS EXP', 'OPEN TO WORK!', '✦ Available for');

-- 3. About Content
INSERT INTO "about_content" ("locale", "title", "description", "btn_label", "cv_modal_title", "cv_modal_download")
VALUES
('id', 'TENTANG SAYA', 'Saya adalah seorang Full Stack Developer dengan pengalaman lebih dari 3 tahun dalam membangun aplikasi web yang inovatif dan efisien. Keahlian saya meliputi Laravel, React, Next.js, CodeIgniter, dan Node.js. Saya memiliki rekam jejak yang terbukti dalam mengembangkan solusi digital yang berdampak, bekerja sama dengan tim lintas fungsi untuk mencapai hasil yang luar biasa.', 'Lihat CV', 'CURRICULUM VITAE', '⬇ Unduh'),
('en', 'ABOUT ME', 'I am a Full Stack Developer with over 3 years of experience in building innovative and efficient web applications. My expertise includes Laravel, React, Next.js, CodeIgniter, and Node.js. I have a proven track record of developing impactful digital solutions, collaborating with cross-functional teams to achieve outstanding results.', 'View CV', 'CURRICULUM VITAE', '⬇ Download');

-- 4. Projects & Relations

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (1, '/projects/onlinetest.png', '[]', 'https://github.com/zalzdarkent/tes_online_unsika', 'https://onlinetest.unsika.ac.id', 1, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(1, 'id', 'Tes SEP-T UNSIKA', 'Platform tes SEP-T (Singaperbangsa English Proficiency Test) berbasis web untuk mahasiswa UNSIKA.', 'Sistem Tes Online UNSIKA adalah platform komprehensif yang dirancang khusus untuk mendukung proses evaluasi dan ujian di lingkungan Universitas Singaperbangsa Karawang. Dibangun dengan teknologi terdepan, sistem ini menawarkan pengalaman tes online yang aman, efisien, dan user-friendly.', '["Manajemen Kategori Tes & Penjadwalan Fleksibel","Sistem Soal Canggih (Pilihan Ganda, Esai, Skala Likert, & Rumus LaTeX)","Media Pendukung (Upload Audio & Gambar untuk Soal)","Keamanan Ujian (Anti-Cheating Deteksi Tab & Sesi Terkunci)","Sistem Auto-Save Jawaban & Timer Real-time","Dashboard Analytics & Scoring Otomatis untuk Soal Objektif","Panel Koreksi Manual Khusus Soal Esai"]'),
(1, 'en', 'UNSIKA SEP-T Test', 'Web-based SEP-T (Singaperbangsa English Proficiency Test) platform for UNSIKA students.', 'UNSIKA Online Test System is a comprehensive platform designed to support evaluation and examination processes at Universitas Singaperbangsa Karawang. Built with modern technology, offering a secure, efficient, and user-friendly online testing experience.', '["Test Category Management & Flexible Scheduling","Advanced Question System (Multiple Choice, Essay, Likert Scale, & LaTeX Formula)","Supporting Media (Audio & Image Upload for Questions)","Exam Security (Anti-Cheating Tab Detection & Locked Session)","Auto-Save Answer System & Real-time Timer","Analytics Dashboard & Auto-Scoring for Objective Questions","Manual Correction Panel for Essay Questions"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (1, 'web');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (1, 'fullstack');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'Laravel');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'React');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'Inertia.js');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'Tailwind CSS');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'Shadcn');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'MySQL');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (1, 'Docker');

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (2, '/projects/absen_aslab.png', '[]', 'https://github.com/zalzdarkent/tes_online_unsika', 'https://onlinetest.unsika.ac.id', 2, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(2, 'id', 'Absen Asisten Lab', 'Platform asisten laboratorium berbasis web untuk asisten laboratorium Fakultas Ilmu Komputer Universitas Singaperbangsa Karawang.', 'Sistem manajemen asisten lab yang di dalamnya terdapat beberapa fitur seperti manajemen data asisten lab, manajemen inventaris lab, manajemen jadwal piket asisten lab, serta fitur absensi piket asisten lab yang sudah terintegrasi dengan RFID untuk memudahkan proses absensi.', '["Manajemen Data Asisten Lab","Manajemen Inventaris Lab","Manajemen Jadwal Piket","Absensi Terintegrasi RFID","Notifikasi Pengingat Piket","Laporan Kehadiran Asisten Lab"]'),
(2, 'en', 'Lab Assistant Attendance', 'Web-based laboratory assistant platform for the Faculty of Computer Science at Universitas Singaperbangsa Karawang.', 'Lab assistant management system featuring assistant data management, lab inventory management, duty schedule management, and RFID-integrated attendance system to simplify the attendance process.', '["Lab Assistant Data Management","Lab Inventory Management","Duty Schedule Management","RFID-Integrated Attendance","Duty Reminder Notifications","Lab Assistant Attendance Reports"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (2, 'web');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (2, 'fullstack');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'Laravel');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'React');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'Inertia.js');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'Tailwind CSS');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'Shadcn');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'MySQL');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (2, 'Docker');

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (3, '/projects/deteksi-apd.png', '[]', 'https://github.com/zalzdarkent/tes_online_unsika', 'https://onlinetest.unsika.ac.id', 3, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(3, 'id', 'Deteksi APD Karyawan', 'Sistem deteksi APD karyawan berbasis AI untuk memastikan kepatuhan terhadap protokol keselamatan di tempat kerja.', 'Sistem deteksi APD karyawan berbasis AI yang dapat mengenali apakah karyawan memakai peralatan pelindung diri (APD) yang sesuai saat berada di area kerja. Sistem ini menggunakan teknologi computer vision untuk menganalisis gambar atau video secara real-time.', '["Deteksi APD Real-time via Computer Vision","Notifikasi Pelanggaran Keselamatan","Analisis Video & Gambar Otomatis","Integrasi dengan Sistem Keamanan","Laporan Kepatuhan APD"]'),
(3, 'en', 'Employee PPE Detection', 'AI-based employee PPE detection system to ensure compliance with workplace safety protocols.', 'AI-based PPE detection system that recognizes whether employees are wearing appropriate personal protective equipment (PPE) in work areas. Uses computer vision technology to analyze images or video in real-time.', '["Real-time PPE Detection via Computer Vision","Safety Violation Notifications","Automated Video & Image Analysis","Security System Integration","PPE Compliance Reports"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (3, 'ai');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (3, 'ml');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (3, 'Python');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (3, 'OpenCV');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (3, 'Yolo');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (3, 'Flask');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (3, 'ONNX');

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (4, '', '[]', '', '', 4, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(4, 'id', 'SpicyPlay Music Player', 'Aplikasi pemutar musik berbasis web dengan tampilan modern dan fitur sintesis suara interaktif.', 'SpicyPlay Music Player adalah aplikasi web pemutar musik interaktif yang dibangun dengan React dan Vite. Aplikasi ini menyediakan antarmuka modern untuk memutar musik serta dilengkapi dengan synth grovebox untuk eksplorasi suara kreatif. Dibangun dengan performa tinggi dan pengalaman pengguna yang responsif.', '["Pemutar Musik dengan Kontrol Putar, Jeda, & Volume","Synth Groovebox untuk Eksplorasi Suara Kreatif","Daftar Putar & Manajemen Antrean Musik","Tampilan Modern & Responsif dengan Tailwind CSS","Performa Cepat dengan Vite"]'),
(4, 'en', 'SpicyPlay Music Player', 'Web-based music player with a modern interface and interactive sound synthesis features.', 'SpicyPlay Music Player is an interactive web music player built with React and Vite. It features a modern interface for playing music along with a synth groovebox for creative sound exploration. Built for high performance and responsive user experience.', '["Music Player with Play, Pause & Volume Controls","Synth Groovebox for Creative Sound Exploration","Playlist & Music Queue Management","Modern & Responsive UI with Tailwind CSS","Fast Performance with Vite"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (4, 'web');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (4, 'fullstack');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (4, 'React');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (4, 'Vite');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (4, 'Tailwind CSS');

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (5, '', '[]', '', '', 5, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(5, 'id', 'Monitoring IP Address CCTV', 'Sistem monitoring IP Address CCTV berbasis web untuk mencegah duplikasi IP Address dan kesalahan data CCTV.', 'Sistem Monitoring IP Address CCTV adalah aplikasi berbasis web yang dibangun untuk mengelola dan memonitor IP Address CCTV di seluruh organisasi. Sistem ini membantu mencegah duplikasi IP, melacak status CCTV, dan memastikan manajemen data yang akurat. Dibangun dengan PHP dan SQLSRV untuk integrasi database yang handal.', '["Manajemen & Monitoring IP Address CCTV","Deteksi & Pencegahan Duplikasi IP Address","Pelacakan Status CCTV (Aktif/Tidak Aktif)","Pencarian & Filter berdasarkan Lokasi atau IP","Pelaporan Excel/PDF untuk Audit"]'),
(5, 'en', 'Monitoring IP Address CCTV', 'Web-based CCTV IP Address monitoring system to prevent IP duplication and data errors.', 'CCTV IP Address Monitoring System is a web-based application built to manage and monitor CCTV IP addresses across an organization. The system helps prevent IP duplication, tracks CCTV status, and ensures accurate data management. Built with PHP and SQLSRV for reliable database integration.', '["CCTV IP Address Management & Monitoring","Duplicate IP Address Detection & Prevention","CCTV Status Tracking (Active/Inactive)","Search & Filter by Location or IP","Excel/PDF Reporting for Audit"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (5, 'web');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (5, 'PHP');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (5, 'SQLSRV');

INSERT INTO "projects" ("id", "image", "images", "github_url", "live_url", "sort_order", "created_at")
VALUES (6, '', '[]', '', '', 6, NOW());

INSERT INTO "project_translations" ("project_id", "locale", "name", "short_desc", "long_desc", "features")
VALUES 
(6, 'id', 'Monitoring Mesin Grinding', 'Sistem monitoring mesin grinding berbasis Web-IoT.', 'Sistem Monitoring Mesin Grinding adalah aplikasi berbasis web yang dibangun untuk mengelola dan memonitor status mesin grinding di seluruh organisasi. Sistem ini membantu mencegah downtime peralatan, melacak kinerja mesin, dan memastikan manajemen data yang akurat. Dibangun dengan PHP dan SQLSRV untuk integrasi database yang handal.', '["Manajemen & Monitoring Status Mesin","Pelacakan & Analisis Kinerja","Peringatan & Notifikasi untuk Pemeliharaan","Pencarian & Filter berdasarkan Line dan rentang waktu"]'),
(6, 'en', 'Grinding Machine Monitoring', 'Web-IoT-based monitoring system for grinding machines.', 'The Grinding Machine Monitoring System is a web-based application built to manage and monitor the status of grinding machines across an organization. The system helps prevent equipment downtime, tracks machine performance, and ensures accurate data management. Built with PHP and SQLSRV for reliable database integration.', '["Machine Status Management & Monitoring","Performance Tracking & Analysis","Alerts & Notifications for Maintenance","Search & Filter by line or Location and range date"]');
INSERT INTO "project_tags" ("project_id", "tag") VALUES (6, 'web');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (6, 'PHP');
INSERT INTO "project_tech" ("project_id", "tech_name") VALUES (6, 'SQLSRV');
SELECT setval('projects_id_seq', 6);

-- 5. Tech Skills
INSERT INTO "tech_skills" ("name", "level", "color", "icon_name", "sort_order")
VALUES
('React', 'Intermediate', '#4fb7fd', 'FaReact', 1),
('Next.js', 'Intermediate', '', 'SiNextdotjs', 2),
('TypeScript', 'Intermediate', '#2ea8fa', 'SiTypescript', 3),
('Node.js', 'Intermediate', '#0fbf09', 'FaNodeJs', 4),
('PostgreSQL', 'Beginner', '#06469b', 'SiPostgresql', 5),
('Redis', 'Beginner', '#d50a0a', 'SiRedis', 6),
('Docker', 'Beginner', '#1b83c9', 'SiDocker', 7),
('Tailwind CSS', 'Intermediate', '#3aa3e9', 'SiTailwindcss', 8),
('Git', 'Intermediate', '#d51a1a', 'SiGit', 9),
('Laravel', 'Advanced', '#e31a1a', 'FaLaravel', 10),
('CodeIgniter', 'Intermediate', '#f12f2f', 'SiCodeigniter', 11),
('MySQL', 'Advanced', '#00758f', 'SiMysql', 12);

-- 6. Experiences

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (1, 'id', 'Google Developer Student Club (GDSC)', 'Chapter Kampus', 'Agustus 2023 - September 2024', 1, '/brands/gdsc.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (1, 'Berpartisipasi dalam program mentoring dan pengembangan komunitas.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (1, 'Membangun project dan mengikuti kegiatan berbasis teknologi.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (1, 'Melatih kemampuan kolaborasi dan komunikasi teknis.', 3);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (2, 'en', 'Google Developer Student Club (GDSC)', 'Campus Chapter', 'August 2023 - September 2024', 1, '/brands/gdsc.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (2, 'Participated in mentoring programs and community development.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (2, 'Built projects and joined technology-based activities.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (2, 'Trained collaboration and technical communication skills.', 3);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (3, 'id', 'Laboratorium Komputer', 'Universitas / Organisasi Kampus', 'Januari 2024 - Januari 2026', 2, '/brands/logo_aslab.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (3, 'Membimbing praktikum dan membantu operasional kegiatan lab.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (3, 'Menyusun materi dan alur pembelajaran yang terstruktur.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (3, 'Berkoordinasi dengan tim untuk memastikan kelancaran event.', 3);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (4, 'en', 'Computer Laboratory', 'University / Campus Organization', 'January 2024 - January 2026', 2, '/brands/logo_aslab.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (4, 'Guided lab practicum sessions and assisted lab operations.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (4, 'Prepared structured learning materials and workflows.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (4, 'Coordinated with the team to ensure smooth event execution.', 3);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (5, 'id', 'PT Century Batteries Indonesia', 'Magang', 'Maret 2025 - Juni 2025', 3, '/brands/cbi.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (5, 'Membangun sistem E-Checksheet Pre-Use untuk pemantauan terhadap mesin-mesin yang ada oleh departemen maintenance.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (5, 'Mengembangkan sistem dashboard Preventive Maintenance untuk departemen maintenance.', 2);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (6, 'en', 'PT Century Batteries Indonesia', 'Internship', 'March 2025 - June 2025', 3, '/brands/cbi.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (6, 'Built an E-Checksheet Pre-Use system for machine monitoring by the maintenance department.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (6, 'Developed a Preventive Maintenance dashboard system for the maintenance department.', 2);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (7, 'id', 'PT AT Indonesia', 'Magang', 'Januari 2026 - Sekarang', 4, '/brands/ati.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (7, 'Membangun sistem deteksi APD berbasis Camera Vision menggunakan Yolo.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (7, 'Mengoptimalkan proses data input dan pengolahan hasil deteksi.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (7, 'Menerapkan evaluasi sederhana untuk memastikan performa.', 3);

INSERT INTO "experiences" ("id", "locale", "role", "place", "period", "sort_order", "logo_path")
VALUES (8, 'en', 'PT AT Indonesia', 'Internship', 'January 2026 - Present', 4, '/brands/ati.png');
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (8, 'Built a Camera Vision-based PPE detection system using Yolo.', 1);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (8, 'Optimized data input processes and detection result handling.', 2);
INSERT INTO "experience_items" ("experience_id", "text", "sort_order") VALUES (8, 'Applied simple evaluations to ensure performance.', 3);
SELECT setval('experiences_id_seq', 8);

-- 7. Education

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (1, 'id', 'S1 Informatika', 'Universitas Singaperbangsa Karawang (UNSIKA)', '2022 - 2026', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (1, 'Fresh Graduate with cumlaude honor.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (1, 'Fokus pada pengembangan aplikasi web end-to-end dan struktur data.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (1, 'Membangun project berbasis teknologi modern dan mengutamakan kualitas kode.', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (1, 'Aktif dalam kegiatan kampus dan organisasi untuk memperluas pengalaman kolaborasi.', 4);

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (2, 'en', 'Bachelor of Informatics', 'Universitas Singaperbangsa Karawang (UNSIKA)', '2022 - 2026', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (2, 'Fresh Graduate with cumlaude honor.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (2, 'Focused on end-to-end web application development and data structures.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (2, 'Built projects using modern technology with emphasis on code quality.', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (2, 'Active in campus activities and organizations to broaden collaboration experience.', 4);

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (3, 'id', 'MSIB Studi Independen @ Vocasia', 'Fullstack Web MERN Development', '2024 - 2024', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (3, 'Mengembangkan soft skill public speaking dan time management.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (3, 'Memahami struktur ExpressJS untuk pengembangan backend.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (3, 'Belajar menangani race condition pada aplikasi concurrent.', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (3, 'Membangun project fullstack menggunakan stack MERN.', 4);

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (4, 'en', 'MSIB Independent Study @ Vocasia', 'Fullstack Web MERN Development', '2024 - 2024', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (4, 'Developed soft skills: public speaking and time management.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (4, 'Understood ExpressJS structure for backend development.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (4, 'Learned to handle race conditions in concurrent applications.', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (4, 'Built fullstack projects using MERN stack.', 4);

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (5, 'id', 'Praktik Industri / Magang', 'PT Century Batteries Indonesia & PT AT Indonesia', '2025 - Sekarang', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (5, 'Membangun sistem E-Checksheet Pre-Use dan dashboard Preventive Maintenance.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (5, 'Mengembangkan sistem deteksi APD berbasis Camera Vision menggunakan YOLO.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (5, 'Menerapkan evaluasi dan optimasi pipeline data agar hasil lebih stabil.', 3);

INSERT INTO "education_entries" ("id", "locale", "title", "place", "period", "sort_order")
VALUES (6, 'en', 'Industry Internship', 'PT Century Batteries Indonesia & PT AT Indonesia', '2025 - Present', 3);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (6, 'Built E-Checksheet Pre-Use system and Preventive Maintenance dashboard.', 1);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (6, 'Developed Camera Vision-based PPE detection system using YOLO.', 2);
INSERT INTO "education_highlights" ("education_id", "text", "sort_order") VALUES (6, 'Applied evaluation and data pipeline optimization for more stable results.', 3);
SELECT setval('education_entries_id_seq', 6);

-- 8. Work Habits
INSERT INTO "work_habits" ("locale", "k", "v", "sort_order")
VALUES
('id', 'Cepat adaptasi', 'Belajar teknologi baru + penerapan langsung', 1),
('id', 'Rapi & scalable', 'Struktur kode & alur pengerjaan yang jelas', 2),
('id', 'Kolaboratif', 'Komunikasi tim untuk mencapai target', 3),
('en', 'Fast adapter', 'Learn new technologies + direct implementation', 1),
('en', 'Clean & scalable', 'Clear code structure & workflow', 2),
('en', 'Collaborative', 'Team communication to achieve targets', 3);

-- 9. Snapshot Items
INSERT INTO "snapshot_items" ("locale", "num", "label", "sort_order")
VALUES
('id', '3+', 'Rangkaian peran', 1),
('id', '1+', 'Proyek industri', 2),
('id', 'Yolo', 'Deteksi APD', 3),
('id', 'Tim', 'Kolaborasi aktif', 4),
('en', '3+', 'Roles held', 1),
('en', '1+', 'Industry projects', 2),
('en', 'Yolo', 'PPE Detection', 3),
('en', 'Team', 'Active collaboration', 4);

-- 10. Competencies
INSERT INTO "competencies" ("locale", "k", "v", "sort_order")
VALUES
('id', 'Teknis', 'Web development, integrasi sistem, dan struktur kode', 1),
('id', 'Analitik', 'Proses data yang rapi untuk hasil yang bisa diukur', 2),
('id', 'Eksekusi', 'Membangun fitur end-to-end dengan target & timeline', 3),
('en', 'Technical', 'Web development, system integration, and code structure', 1),
('en', 'Analytical', 'Clean data processing for measurable results', 2),
('en', 'Execution', 'Building end-to-end features with targets & timelines', 3);

-- 11. Achievements
INSERT INTO "achievements" ("locale", "text", "sort_order")
VALUES
('id', 'Head of Technical Core Team @ GDSC', 1),
('id', 'Built E-Checksheet System', 2),
('id', 'Preventive Maintenance Dashboard', 3),
('id', 'PPE Detection using YOLO', 4),
('en', 'Head of Technical Core Team @ GDSC', 1),
('en', 'Built E-Checksheet System', 2),
('en', 'Preventive Maintenance Dashboard', 3),
('en', 'PPE Detection using YOLO', 4);

-- 12. Contact Content & Links
INSERT INTO "contact_content" ("locale", "title", "description1", "description2", "form_name", "form_email", "form_message", "form_placeholder", "form_submit", "form_submitting", "toast")
VALUES
('id', 'HUBUNGI SAYA', 'Punya ide proyek yang keren? Atau sekadar ingin ngobrol soal teknologi? Saya selalu terbuka untuk kolaborasi baru dan kesempatan menarik.', 'Biasanya saya membalas dalam 24 jam kerja.', 'Nama Lengkap', 'Email', 'Pesan', 'Ceritakan proyek impian kamu...', 'Kirim Pesan ✦', 'Mengirim...', '✦ Pesan berhasil dikirim!'),
('en', 'CONTACT ME', 'Got a cool project idea? Or just want to chat about tech? I''m always open to new collaborations and exciting opportunities.', 'I usually reply within 24 business hours.', 'Full Name', 'Email', 'Message', 'Tell me about your dream project...', 'Send Message ✦', 'Sending...', '✦ Message sent successfully!');

INSERT INTO "contact_links" ("icon_name", "label", "href", "sort_order")
VALUES
('SiGmail', 'arszalzdarker@email.com', 'mailto:arszalzdarker@email.com', 1),
('FaGithub', 'github.com/zalzdarkent', 'https://github.com/zalzdarkent', 2),
('FaLinkedin', 'linkedin.com/in/alif-fadillah-ummar-07001224b/', 'https://linkedin.com/in/alif-fadillah-ummar-07001224b/', 3);

-- 13. Marquee & Footer
INSERT INTO "marquee_items" ("text", "sort_order")
VALUES
('Full Stack Development', 1),
('UI/UX Design', 2),
('API Integration', 3),
('Database Design', 4),
('Performance Optimization', 5),
('Mobile Responsive', 6);

INSERT INTO "footer_content" ("locale", "copy_text")
VALUES
('id', '© 2026 Alif Fadillah Ummar. Dibangun dengan banyak ☕'),
('en', '© 2026 Alif Fadillah Ummar. Built with lots of ☕');
