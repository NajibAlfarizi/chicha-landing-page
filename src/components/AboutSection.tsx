import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    { icon: Users, number: '5000+', label: 'Pelanggan Puas' },
    { icon: Award, number: 'Sudah', label: 'Berpengalaman' },
    { icon: CheckCircle, number: '98%', label: 'Tingkat Kepuasan' },
    { icon: TrendingUp, number: '24/7', label: 'Support' },
  ];

  const achievements = [
    'Teknisi Bersertifikat Resmi',
    'Partner Resmi Brand Ternama',
    'Menggunakan Tools Professional',
    'Garansi Service & Sparepart',
    'Proses Transparan',
    'Harga Kompetitif',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/10 to-background">
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
            👥 Tentang Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mengapa Memilih{' '}
            <span className="text-primary">ChiCha Mobile?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami adalah solusi terpercaya untuk semua kebutuhan handphone Anda 
            dengan pengalaman bertahun-tahun dan teknisi profesional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588515603068-adb330f26e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcmVwYWlyJTIwdG9vbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODcwMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Phone repair workshop"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">5000+ Handphone</p>
                  <p className="text-sm text-muted-foreground">Berhasil Diperbaiki</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Kepercayaan Anda, Prioritas Kami
              </h3>
              <p className="text-muted-foreground mb-6">
                Sejak didirikan pada tahun 2020, ChiCha Mobile telah melayani ribuan pelanggan 
                dengan komitmen memberikan layanan terbaik. Kami menggunakan teknologi terdepan 
                dan sparepart original untuk memastikan handphone Anda berfungsi optimal.
              </p>
            </div>

            {/* Achievements List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-6 rounded-xl border border-primary/10"
            >
              <h4 className="font-semibold mb-2 text-primary">Misi Kami</h4>
              <p className="text-sm text-muted-foreground">
                "Memberikan solusi handphone terbaik dengan layanan profesional, 
                harga terjangkau, dan kepuasan pelanggan sebagai prioritas utama."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-primary mb-1"
                    >
                      {stat.number}
                    </motion.div>
                    
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}