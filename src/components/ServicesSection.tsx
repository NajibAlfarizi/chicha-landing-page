import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Smartphone, 
  Cpu, 
  Battery, 
  Camera, 
  Speaker, 
  Wifi,
  Shield,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'Service Handphone',
      description: 'Perbaikan semua jenis kerusakan handphone dengan teknisi berpengalaman',
      features: ['Diagnosa Gratis', 'Garansi 30 Hari', 'Service Cepat'],
      price: 'Mulai 50rb',
      image: 'https://images.unsplash.com/photo-1603114595741-e60bf9486e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHJlcGFpciUyMHNlcnZpY2UlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTg3MDAzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Cpu,
      title: 'Sparepart Original',
      description: 'Menyediakan sparepart original untuk semua merk handphone terpopuler',
      features: ['Kualitas Original', 'Harga Kompetitif', 'Stok Lengkap'],
      price: 'Harga Bersaing',
      image: 'https://images.unsplash.com/photo-1591558379566-4843b7ddb062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHBhcnRzJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NTg3MDAzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  const components = [
    { icon: Battery, name: 'Baterai', popular: true },
    { icon: Camera, name: 'Kamera', popular: false },
    { icon: Speaker, name: 'Speaker', popular: true },
    { icon: Wifi, name: 'Charger', popular: true },
    { icon: Shield, name: 'Tempered Glass', popular: false },
    { icon: Smartphone, name: 'LCD/Touchscreen', popular: true },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/10">
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
            🛠️ Layanan Terbaik
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Layanan & Sparepart{' '}
            <span className="text-primary">Handphone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan layanan service profesional dan sparepart original 
            untuk semua kebutuhan handphone Anda
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-primary rounded-xl">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-green-500 hover:bg-green-500">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* ...Button Pelajari Lebih Lanjut dihapus... */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Components Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Sparepart Tersedia
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  {component.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-xs">
                      Popular
                    </Badge>
                  )}
                  
                  <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <component.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h4 className="font-medium text-sm">{component.name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Service Cepat',
                description: 'Pengerjaan maksimal 24 jam untuk kebanyakan kasus'
              },
              {
                icon: Shield,
                title: 'Garansi Resmi',
                description: 'Semua service dan sparepart bergaransi resmi'
              },
              {
                icon: Star,
                title: 'Teknisi Ahli',
                description: 'Dikerjakan oleh teknisi berpengalaman dan bersertifikat'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}