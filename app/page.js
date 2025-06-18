export default function HomePage() {
  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem',
      background: 'linear-gradient(to right, #fce7f3, #f3e8ff)',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      {/* Left Content */}
      <div style={{ flex: 1, maxWidth: '40%' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Download Apk <br /> C-WASH
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
          Mencari tempat cuci mobil di Palembang
        </p>
        <a
  href="https://drive.google.com/uc?export=download&id=1aJsFh1cAxQ-uMc0fV1WHGYPu2efsFPOg"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: '#1f6b5c',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '1rem',
    textDecoration: 'none', // Menghilangkan garis bawah
    display: 'inline-block' // Agar padding berfungsi dengan benar
  }}
>
  Download C Wash
</a>
        
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
          <div style={{
            border: '2px solid #ccc',
            padding: '1rem',
            borderRadius: '50%',
            marginRight: '1rem',
            fontWeight: 'bold'
          }}>
            
          </div>
        </div>
      </div>

      {/* Right Content - Phone Mockups */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <img src="images/cwash-logo.png" alt="Phone 1" style={{ height: '500px', objectFit: 'contain' }} />
        <img src="images/cwash-logo.png" alt="Phone 2" style={{ height: '500px', objectFit: 'contain' }} />
      </div>
    </main>
  );
}
