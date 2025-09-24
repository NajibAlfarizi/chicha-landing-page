import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
// Update the path below to the actual location of your logo image file
import chichaLogo from '../assets/7dbba57bc588c6e511cc9b45866bf1ea4ff8457e.png';

export function Footer() {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  const services = [
    'Service iPhone',
    'Service Samsung',
    'Service Xiaomi',
    'Service Oppo',
    'Service Vivo',
    'Sparepart Original',
  ];

  const socialLinks = [
    { icon: MessageCircle, name: 'WhatsApp', color: 'hover:text-green-500', link: 'https://wa.me/6281234567890' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500', link: '#' },
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-500', link: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img 
                src={chichaLogo} 
                alt="ChiCha Mobile Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-semibold">ChiCha Mobile</span>
            </div>
            
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Solusi terpercaya untuk semua kebutuhan handphone Anda. 
              Melayani dengan dedikasi tinggi dengan teknisi 
              berpengalaman dan sparepart original.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-primary-foreground/10 rounded-lg ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    Jl. Abdul Muis no 19<br />
                    Pasar Baru Padang Panjang
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  +62 812-3456-7890
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-medium text-sm mb-2">Jam Operasional</h5>
              <div className="text-xs text-primary-foreground/80 space-y-1">
                <p>Senin - Minggu: 07:30 - 21:00 WIB</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 ChiCha Mobile. Semua hak cipta dilindungi.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
}