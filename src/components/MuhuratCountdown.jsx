import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_TARGET = new Date('2026-12-11T14:15:00');

const MuhuratCountdown = ({ targetDate = DEFAULT_TARGET }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: 'दिन', val: timeLeft.days },
    { label: 'घंटे', val: timeLeft.hours },
    { label: 'मिनट', val: timeLeft.minutes },
    { label: 'सेकंड', val: timeLeft.seconds }
  ];

  return (
    <section style={{ padding: '16px 16px 36px' }}>
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.75) 0%, rgba(249, 238, 217, 0.65) 100%)',
          border: '1.5px solid var(--gold-foil)',
          padding: '20px clamp(10px, 3vw, 20px) 18px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(62, 0, 10, 0.15)'
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            color: 'var(--maroon-royal)',
            marginBottom: '16px'
          }}
        >
          शुभ लग्न की प्रतीक्षा
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(6px, 2vw, 12px)',
            maxWidth: '460px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{
                padding: 'clamp(8px, 2vw, 12px) clamp(2px, 1vw, 6px)',
                background: 'linear-gradient(145deg, var(--maroon-royal) 0%, var(--maroon-deep) 100%)',
                border: '1px solid var(--gold-foil)',
                borderRadius: '3px',
                boxShadow: '0 4px 12px rgba(62, 0, 10, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 0
              }}
            >
              <motion.span
                key={u.val}
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.35rem, 4.6vw, 1.95rem)',
                  color: 'var(--gold-light)',
                  lineHeight: 1
                }}
              >
                {String(u.val).padStart(2, '0')}
              </motion.span>
              <p
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(0.78rem, 2.4vw, 0.95rem)',
                  color: 'var(--gold-light)',
                  marginTop: '6px',
                  whiteSpace: 'nowrap'
                }}
              >
                {u.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuhuratCountdown;
