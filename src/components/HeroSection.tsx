import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Wrench, Shield, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              Sparepart & Service{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Handphone
              </span>{' '}
              Terbaik
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Dapatkan sparepart original dan layanan service profesional untuk semua jenis handphone. 
              Garansi resmi dan teknisi berpengalaman.
            </motion.p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Wrench, text: 'Service Profesional' },
                { icon: Shield, text: 'Garansi Resmi' },
                { icon: Clock, text: 'Service Cepat' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* ...CTA Buttons removed... */}
          </motion.div>

          {/* Right Content - 3D Phone Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* 3D Phone Container */}
            <div className="relative w-80 h-96 mx-auto">
              {/* Phone Shadow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black/20 rounded-full blur-xl"
              />
              
              {/* Main Phone */}
              <motion.div
                animate={{
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, 5, -5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-48 h-80 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] shadow-2xl border border-gray-700"
              >
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-[1.5rem] overflow-hidden">
                  <motion.div
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
                  />
                  
                  {/* App Icons */}
                  <div className="absolute inset-4 grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                        className="aspect-square bg-white/20 rounded-lg backdrop-blur-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
              </motion.div>

              {/* Floating Components */}
              {[
                { icon: '🔧', delay: 0, position: 'top-0 left-0' },
                { icon: '⚡', delay: 1, position: 'top-0 right-0' },
                { icon: '🛡️', delay: 2, position: 'bottom-0 left-0' },
                { icon: '✨', delay: 3, position: 'bottom-0 right-0' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className={`absolute ${item.position} text-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}