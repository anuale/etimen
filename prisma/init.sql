-- Etimen Veritabanı Başlatma Scripti
-- Bu dosya Docker container ilk başlatıldığında çalışır

-- Prisma migration tablolarını oluştur (eğer yoksa)
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    id VARCHAR(36) PRIMARY KEY,
    checksum VARCHAR(64) NOT NULL,
    finished_at TIMESTAMPTZ,
    migration_name VARCHAR(255) NOT NULL,
    logs TEXT,
    rolled_back_at TIMESTAMPTZ,
    started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    applied_steps_count INTEGER NOT NULL DEFAULT 0
);

-- Seed verilerini yükle
INSERT INTO animal_types (id, name, slug, description, icon, "sortOrder", "isActive", "createdAt", "updatedAt") VALUES
  ('clx1a1b1c1d1e1f1g1h1i1j', 'Dana', 'dana', 'Sığır eti, en çok tüketilen kırmızı et türü.', '🐄', 1, true, NOW(), NOW()),
  ('clx1a1b1c1d1e1f1g1h1i1k', 'Kuzu', 'kuzu', 'Kuzu eti, yağlı ve sulu yapısıyla bilinir.', '🐑', 2, true, NOW(), NOW()),
  ('clx1a1b1c1d1e1f1g1h1i1l', 'Tavuk', 'tavuk', 'En çok tüketilen beyaz et.', '🍗', 3, true, NOW(), NOW()),
  ('clx1a1b1c1d1e1f1g1h1i1m', 'Büyükbaş', 'buyukbas', 'Sığır ve dana dışı büyükbaş hayvan etleri.', '🐂', 4, true, NOW(), NOW()),
  ('clx1a1b1c1d1e1f1g1h1i1n', 'Küçükbaş', 'kucukbas', 'Koyun ve keçi eti.', '🐐', 5, true, NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;

-- Pişirme yöntemlerini ekle
INSERT INTO cooking_methods (id, name, slug, description, icon, "tempRange", difficulty, "isActive", "createdAt", "updatedAt") VALUES
  ('clx2a2b2c2d2e2f2g2h2i2j', 'Izgara / Grill', 'grill', 'Dolaylı veya dolaysız ateş ile pişirme.', '🔥', '170-250°C', 'MEDIUM', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2k', 'Fırın / Roasting', 'oven', 'Sıcak hava ile均匀 pişirme.', '🌡️', '160-220°C', 'EASY', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2l', 'Sous Vide', 'sous-vide', 'Vakumda, düşük sıcaklıkta uzun pişirme.', '🫧', '45-85°C', 'HARD', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2m', 'Smoking', 'smoking', 'Düşük sıcaklıkta, duman ile uzun pişirme.', '💨', '107-135°C', 'EXPERT', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2n', 'Tava / Pan-Sear', 'pan', 'Yüksek ateşte tavada hızlı pişirme.', '🍳', '200-250°C', 'EASY', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2o', 'Braising', 'braising', 'Sıvı ile düşük sıcaklıkta yavaş pişirme.', '🫕', '150-170°C', 'MEDIUM', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2p', 'Deep Fry', 'deep-fry', 'Derin yağda kızartma.', '🍟', '175-190°C', 'MEDIUM', true, NOW(), NOW()),
  ('clx2a2b2c2d2e2f2g2h2i2q', 'Reverse Sear', 'reverse-sear', 'Sous vide sonrası yüksek ateşte mühürleme.', '✨', '45-250°C', 'EXPERT', true, NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;

-- Pişirme derecelerini ekle
INSERT INTO doneness_levels (id, name, slug, "tempMin", "tempMax", description, "colorDescription", "textureDescription", "sortOrder", "createdAt", "updatedAt") VALUES
  ('clx3a3b3c3d3e3f3g3h3i3j', 'Rare', 'rare', 49, 52, 'Dışarıdan kızartılmış, içerisi %75 kırmızı.', 'Parlak kırmızı merkez', 'Çok yumuşak, sulu', 1, NOW(), NOW()),
  ('clx3a3b3c3d3e3f3g3h3i3k', 'Medium Rare', 'medium-rare', 55, 57, 'En popüler pişirme derecesi.', 'Sıcak kırmızı-pembe merkez', 'Yumuşak, sulu', 2, NOW(), NOW()),
  ('clx3a3b3c3d3e3f3g3h3i3l', 'Medium', 'medium', 60, 63, 'Pembe merkez, daha sıkı doku.', 'Pembe merkez', 'Orta yumuşaklık', 3, NOW(), NOW()),
  ('clx3a3b3c3d3e3f3g3h3i3m', 'Medium Well', 'medium-well', 65, 68, 'Hafif pembe, ağırlıklı olarak gri.', 'Hafif pembe', 'Daha sıkı, daha az sulu', 4, NOW(), NOW()),
  ('clx3a3b3c3d3e3f3g3h3i3n', 'Well Done', 'well-done', 71, 77, 'Tamamen pişmiş, pembe yok.', 'Tamamen gri/kahverengi', 'Sıkı, kuru', 5, NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;

RAISE NOTICE 'Etimen veritabanı başarıyla başlatıldı!';
