import React from 'react';
import { motion } from 'framer-motion';
import GanpatiJali from './GanpatiJali';

const InvocationHero = () => {
  return (
    <section style={{ padding: '44px 16px 28px', position: 'relative' }}>
      <div
        className="kankotri-paper gold-card-frame"
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(14px, 3.5vw, 40px)',
          borderRadius: '2px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />

        {/* Ganpati Jali Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '16px', position: 'relative', zIndex: 2 }}
        >
          <GanpatiJali width={120} variant="maroon" />
        </motion.div>

        {/* Sacred Invocations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2, marginBottom: '20px', textAlign: 'center' }}
        >
          {/* Kuldevi & Bhomiya Ji Invocations - One on left, one on right */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              margin: '0 auto 10px',
              padding: '0 2px',
              boxSizing: 'border-box'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(0.72rem, 2.2vw, 0.92rem)',
                color: 'var(--maroon-royal)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                textAlign: 'left'
              }}
            >
              ॥ श्री पाबुजी महाराज नमः ॥
            </span>
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(0.72rem, 2.2vw, 0.92rem)',
                color: 'var(--maroon-royal)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                textAlign: 'right'
              }}
            >
              ॥ श्री नागाणाराय नमः ॥
            </span>
          </div>

          {/* Pratham Pujya Ganesh Invocation */}
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.35rem, 4vw, 1.65rem)',
              color: 'var(--maroon-royal)',
              letterSpacing: '0.06em',
              margin: '4px auto 8px',
              textAlign: 'center',
              lineHeight: 1.2
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(0.95rem, 2.8vw, 1.08rem)',
              color: 'var(--maroon-deep)',
              lineHeight: 1.7,
              margin: '6px auto 0',
              textAlign: 'center'
            }}
          >
            राठौड़ां रै उपरै, बैठी पंख पसार ।<br />
            नागणेचियां रो आसरो अर चामुण्डा रखवार ॥
          </p>
        </motion.div>

        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>

        {/* Traditional Peela Chawal Invitation Letter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '1.14rem',
            color: 'var(--maroon-deep)',
            maxWidth: '680px',
            margin: '18px auto 28px',
            lineHeight: 1.85,
            position: 'relative',
            zIndex: 2,
            background: 'rgba(255, 250, 240, 0.5)',
            padding: '16px 20px',
            border: '1px dashed rgba(201, 168, 76, 0.7)'
          }}
        >
          <p style={{ fontFamily: 'var(--font-title)', fontSize: '1.18rem', color: 'var(--maroon-royal)', marginBottom: '6px' }}>
            श्रीमान् ओपमा लायक,
          </p>
          <p>
            <strong>श्री नागणेच्या मां</strong> एवं <strong>श्री पाबुजी महाराज</strong> की असीम अनुकम्पा से हमारे यहां आप राज ने औ पीला चावल हाजर करता घणी हरख होवे के
          </p>
          <p style={{ marginTop: '8px', fontWeight: 600, color: 'var(--maroon-royal)', fontSize: '1.16rem' }}>
            श्रीमती उचब कंवर एवं ठा.श्री नरपतसिंहजी राठौड़ अपने सुपौत्र
          </p>
        </motion.div>

        {/* ── वर एवं वधू विवरण ── */}
        <div
          style={{
            margin: '0 0 32px',
            padding: '30px 20px',
            background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.6) 0%, rgba(249, 238, 217, 0.5) 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.6)',
            position: 'relative',
            zIndex: 2,
            boxShadow: 'inset 0 0 20px rgba(180, 100, 20, 0.08)'
          }}
        >
          {/* वर */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.85rem, 5.2vw, 2.7rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.25
              }}
            >
              आयुष्मान कुशालसिंह
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              (सुपुत्र कुं. श्री महेन्द्रसिंहजी राठौड़)
            </p>
          </motion.div>

          {/* संग */}
          <div
            style={{
              margin: '20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to right, transparent, var(--maroon-royal))' }} />
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.8rem',
                color: 'var(--maroon-royal)'
              }}
            >
              संग
            </span>
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to left, transparent, var(--maroon-royal))' }} />
          </div>

          {/* वधू */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.85rem, 5.2vw, 2.7rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.25
              }}
            >
              आयुष्मति सन्जु कंवर
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              (सुपुत्री ठा. श्री नैनसिंहजी सांखला)
            </p>
          </motion.div>

          {/* का मंगल परिणय - दोनों नामों के नीचे */}
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.7rem, 4.8vw, 2.3rem)',
                color: 'var(--maroon-royal)',
                letterSpacing: '0.04em',
                margin: 0
              }}
            >
              का मंगल परिणय
            </h3>
          </div>
        </div>

        {/* ── लग्न मुहूर्त पट्टिका ── */}
        <div
          style={{
            padding: '22px 24px',
            background: 'linear-gradient(145deg, var(--maroon-royal) 0%, var(--maroon-deep) 100%)',
            border: '1.5px solid var(--gold-foil)',
            color: 'var(--cream-card)',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 6px 20px rgba(62, 0, 10, 0.4), inset 0 1px 0 rgba(240, 228, 184, 0.2)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.05rem',
              color: 'var(--gold-light)',
              marginBottom: '6px'
            }}
          >
            शुभ सावा मुहूर्त
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)',
              letterSpacing: '0.04em'
            }}
          >
            शुक्रवार, 11 दिसम्बर 2026
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.12rem',
              color: 'var(--gold-light)',
              marginTop: '6px',
              lineHeight: 1.6
            }}
          >
            वि.सं. 2083 मंगसर सुदी द्वितीय<br />
            <span style={{ fontSize: '0.98rem', opacity: 0.95 }}>
              की मांगलिक वेला पर आप सपरिवार पधारकर वर-वधू को शुभाशीर्वाद प्रदान करें। आपरे पधारया ही म्हारे कुटुम्ब री शोभा अणूती बढेला अर म्हारो कुटुम्बो आपरी अणूती उडीक राखेला सा।
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvocationHero;
