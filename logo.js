// logo.js — Kol@ Agency
// Ce fichier injecte le logo SVG dans toutes les pages automatiquement

document.addEventListener('DOMContentLoaded', function () {

  // SVG du logo
  const logoSVG = `
    <svg viewBox="0 0 400 80" height="48" width="auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" fill="#0d2b22" stroke="#10b981" stroke-width="1.2"/>
      <path d="M 14 40 C 20 28, 27 28, 33 40 C 39 52, 46 52, 52 40 C 58 28, 65 28, 71 40"
            fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 14 47 C 20 35, 27 35, 33 47 C 39 59, 46 59, 52 47 C 58 35, 65 35, 71 47"
            fill="none" stroke="#6ee7b7" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
      <circle cx="14" cy="40" r="2.5" fill="#10b981"/>
      <circle cx="33" cy="40" r="2.5" fill="#10b981"/>
      <circle cx="52" cy="40" r="2.5" fill="#10b981"/>
      <circle cx="71" cy="40" r="2.5" fill="#10b981"/>
      <text x="88" y="50" font-family="Space Grotesk, sans-serif" font-size="34" font-weight="700" fill="#ffffff" letter-spacing="-1">Kol</text>
      <text x="160" y="50" font-family="Space Grotesk, sans-serif" font-size="34" font-weight="700" fill="#10b981">@</text>
      <text x="90" y="66" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="400" letter-spacing="6" fill="#a7f3d0">AGENCY</text>
    </svg>
  `;

  // Injecter dans tous les éléments avec la classe .logo-header
  document.querySelectorAll('.logo-header').forEach(el => {
    el.innerHTML = logoSVG;
  });

  // Injecter dans le footer (.logo-footer)
  document.querySelectorAll('.logo-footer').forEach(el => {
    el.innerHTML = `<span style="font-family:'Space Grotesk',sans-serif;font-size:1.6rem;font-weight:700;color:#fff;letter-spacing:-0.03em;">Kol<span style="color:#10b981;">@</span> Agency</span>`;
  });

});
