import React from 'react';

const RajputiFooter = () => {
  const sellerPhone = '917976944626';
  const sellerMessage = encodeURIComponent(
    "नमस्ते! मैंने कुशालसिंह जी और सन्जु कंवर का डिजिटल विवाह निमंत्रण देखा। मुझे भी अपने यहाँ शादी/मांगलिक प्रसंग हेतु ऐसी ही सुंदर डिजिटल कन्कोत्री बनवानी है। कृपया जानकारी साझा करें।"
  );

  return (
    <>
      <footer
        style={{
          background: 'linear-gradient(180deg, var(--maroon-royal) 0%, var(--maroon-deep) 60%, #1E0005 100%)',
          borderTop: '2px solid var(--gold-foil)',
          padding: '44px 20px 40px',
          textAlign: 'center',
          color: 'var(--cream-card)'
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.5rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.08em',
              marginBottom: '8px'
            }}
          >
            ॥ शुभम् भवतु ॥
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
              color: '#FFF',
              letterSpacing: '0.02em',
              lineHeight: 1.3,
              margin: '8px 0'
            }}
          >
            आयुष्मान कुशालसिंह संग आयुष्मति सन्जु कंवर
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.15rem',
              color: 'var(--gold-light)',
              marginBottom: '16px'
            }}
          >
            11 दिसम्बर 2026 · ठिकाणा सालवा खुर्द (पीपाड़ रोड़), जोधपुर (राजस्थान)
          </p>

          {/* निहारती पलके (बाल मनुहार) */}
          <div
            style={{
              margin: '20px auto',
              padding: '14px 18px',
              border: '1px dashed rgba(201, 168, 76, 0.45)',
              background: 'rgba(255, 248, 235, 0.08)',
              borderRadius: '2px',
              maxWidth: '540px'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.02rem',
                color: 'var(--gold-light)',
                marginBottom: '6px'
              }}
            >
              ॥ निहारती पलके ॥
            </p>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '0.98rem',
                color: '#FFF',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}
            >
              "नन्हे-नन्हे पांव हमारे कैसे आएं बुलाने को, मेरे मामा की शादी में भुल न जाना आनु को । म्हारे मामोसा की शादी में जलुल-जलुल पधारजो सा"
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--gold-light)',
                marginTop: '4px'
              }}
            >
              — परमवीर, दिग्विजय, यशु, तक्षु, गर्विता, देव बन्ना
            </p>
          </div>

          <div
            style={{
              height: 1,
              background: 'linear-gradient(to right, transparent, var(--gold-foil), transparent)',
              maxWidth: '300px',
              margin: '0 auto 20px'
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.2rem',
              color: 'var(--gold-light)'
            }}
          >
            ॥ खम्मा घणी सा ॥
          </p>
        </div>
      </footer>

      {/* ── Clean Light Bottom Strip (matching reference image) ── */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFF4E3',
          borderTop: '1px solid #E8DFC8',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: '#6B5D4F',
            letterSpacing: '0.01em',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}
        >
          <span>ऐसी ही सुंदर डिजिटल कन्कोत्री बनवाएं •</span>
          <a
            href={`https://wa.me/${sellerPhone}?text=${sellerMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#15803D',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: '#22C55E'
            }}
          >
            व्हाट्सएप्प पर संपर्क करें
          </a>
        </p>
      </div>
    </>
  );
};

export default RajputiFooter;
