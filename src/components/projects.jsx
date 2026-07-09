import React from 'react';

function Projects() {
  // Data proyek simulasi
  const daftarProyek = [
    { id: 1, nama: "Website Pos-Cafe", deskripsi: "Dibuat dengan React & Supabase." }
  ];

  return (
    <section style={{ padding: '20px', background: '#ffdcb4' }}>
      <h2>Proyek Saya</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {daftarProyek.map((proyek) => (
          <div key={proyek.id} style={{ border: '1px solid #bebebe', padding: '15px', borderRadius: '8px' }}>
            <h3>{proyek.nama}</h3>
            <p>{proyek.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects