import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Send
} from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Toko',
      info: 'Jl. Abdul Muis no 19 Pasar Baru Padang Panjang',
      subInfo: 'Lokasi strategis mudah dijangkau'
    },
    {
      icon: Phone,
      info: 'Senin - Minggu: 07:30 - 21:00 WIB',
      subInfo: 'Layanan 24/7 untuk konsultasi'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      info: 'Senin - Minggu: 07:30 - 21:00 WIB'
    }
  ];

  const socialMedia = [
    { icon: MessageCircle, name: 'WhatsApp', color: 'bg-green-500', link: 'https://wa.me/6281234567890' },
    { icon: Instagram, name: 'Instagram', color: 'bg-pink-500', link: '#' },
    { icon: Facebook, name: 'Facebook', color: 'bg-blue-500', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            📞 Hubungi Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mari Diskusikan{' '}
            <span className="text-primary">Kebutuhan Handphone</span> Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim kami siap membantu Anda dengan konsultasi gratis. 
            Hubungi kami melalui berbagai channel yang tersedia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{contact.title}</h4>
                          <p className="text-foreground mb-1">{contact.info}</p>
                          <p className="text-sm text-muted-foreground">{contact.subInfo}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Hubungi Cepat</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {socialMedia.map((social, index) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(social.link, '_blank')}
                    className={`${social.color} text-white p-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border-2 border-primary/10"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Lokasi Strategis</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Mudah dijangkau dengan transportasi umum dan parkir yang luas
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Lihat di Google Maps
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-2">Butuh Bantuan Segera?</h3>
              <p className="mb-6 opacity-90">
                Tim support kami tersedia 24/7 untuk membantu masalah urgent handphone Anda
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Emergency Line
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}