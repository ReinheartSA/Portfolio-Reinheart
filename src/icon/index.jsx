// Membaca semua file .svg di folder secara otomatis
const svgModules = import.meta.glob('./*.svg', { eager: true, as: 'url' });

export const Icons = Object.fromEntries(
  Object.entries(svgModules).map(([path, module]) => [
    // Menghapus './' dan '.svg' agar namanya bersih (misal: './github.svg' jadi 'github')
    path.replace('./', '').replace('.svg', ''), 
    module.default || module
  ])
);