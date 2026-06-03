import Link from "next/link";
import { Flame } from "lucide-react";

const footerLinks = {
  keşfet: [
    { name: "Dana Etleri", href: "/et-turu/dana" },
    { name: "Kuzu Etleri", href: "/et-turu/kuzu" },
    { name: "Tavuk Çeşitleri", href: "/et-turu/tavuk" },
    { name: "Büyükbaş/Küçükbaş", href: "/et-turu/buyukbas" },
  ],
  araçlar: [
    { name: "Pişirme Hesaplama", href: "/hesaplama" },
    { name: "Sos Önerileri", href: "/soslar" },
    { name: "Sıcaklık Rehberi", href: "/rehber/sicaklik" },
    { name: "Alışveriş Listesi", href: "/kullanici/alisveris" },
  ],
  bilgi: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Gizlilik Politikası", href: "/gizlilik" },
    { name: "Kullanım Şartları", href: "/sartlar" },
    { name: "İletişim", href: "/iletisim" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Flame className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold font-display">Etimen</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Profesyonel et pişirme rehberi. Doğru sıcaklık, doğru süre, mükemmel sonuç.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Etimen. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
