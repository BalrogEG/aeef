/**
 * Generate AEEF branded social card (OG image) for link previews.
 * Outputs: static/img/aeef-social-card.png (1200x630)
 */
import { writeFileSync, readFileSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a365d"/>
      <stop offset="50%" stop-color="#2b6cb0"/>
      <stop offset="100%" stop-color="#319795"/>
    </linearGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#63b3ed"/>
      <stop offset="100%" stop-color="#319795"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.04">
    ${Array.from({length: 30}, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${HEIGHT}" stroke="white" stroke-width="1"/>`).join('\n    ')}
    ${Array.from({length: 16}, (_, i) => `<line x1="0" y1="${i * 40}" x2="${WIDTH}" y2="${i * 40}" stroke="white" stroke-width="1"/>`).join('\n    ')}
  </g>

  <!-- Decorative geometric elements -->
  <g opacity="0.06">
    <path d="M900 50 L1050 350 L750 350 Z" fill="none" stroke="white" stroke-width="2"/>
    <path d="M950 100 L1050 300 L850 300 Z" fill="none" stroke="white" stroke-width="1.5"/>
    <circle cx="1100" cy="500" r="120" fill="none" stroke="white" stroke-width="1.5"/>
    <circle cx="1100" cy="500" r="80" fill="none" stroke="white" stroke-width="1"/>
  </g>

  <!-- Logo mark (enlarged version of logo.svg) -->
  <g transform="translate(80, 180)">
    <rect width="100" height="100" rx="20" fill="rgba(255,255,255,0.1)"/>
    <path d="M20 70 L50 20 L80 70 Z" fill="none" stroke="#63b3ed" stroke-width="5" stroke-linejoin="round"/>
    <line x1="28" y1="55" x2="72" y2="55" stroke="#319795" stroke-width="4"/>
    <line x1="32" y1="65" x2="68" y2="65" stroke="#319795" stroke-width="4" opacity="0.6"/>
    <circle cx="50" cy="37" r="6" fill="#63b3ed"/>
  </g>

  <!-- Title -->
  <text x="200" y="232" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="72" font-weight="800" fill="white" letter-spacing="-1">AEEF</text>

  <!-- Subtitle line 1 -->
  <text x="82" y="330" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="600" fill="white" opacity="0.95">Enterprise Standards for</text>

  <!-- Subtitle line 2 -->
  <text x="82" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="600" fill="white" opacity="0.95">AI-Accelerated Engineering</text>

  <!-- Divider line -->
  <line x1="82" y1="420" x2="500" y2="420" stroke="url(#logoGrad)" stroke-width="3" opacity="0.8"/>

  <!-- Five Pillars tagline -->
  <text x="82" y="470" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" fill="white" opacity="0.7">Five Pillars &#x2022; Maturity Model &#x2022; KPI Framework &#x2022; Production Standards</text>

  <!-- Pillar indicator dots -->
  <g transform="translate(82, 510)">
    <circle cx="0" cy="0" r="8" fill="#63b3ed"/>
    <circle cx="28" cy="0" r="8" fill="#63b3ed" opacity="0.85"/>
    <circle cx="56" cy="0" r="8" fill="#319795"/>
    <circle cx="84" cy="0" r="8" fill="#319795" opacity="0.85"/>
    <circle cx="112" cy="0" r="8" fill="#38a169"/>
  </g>

  <!-- URL -->
  <text x="82" y="580" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" fill="white" opacity="0.5">aeef.codemeld.io</text>

  <!-- Open Source badge -->
  <g transform="translate(920, 540)">
    <rect width="200" height="40" rx="20" fill="rgba(255,255,255,0.12)"/>
    <text x="100" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="white" opacity="0.8" text-anchor="middle">Open Source Framework</text>
  </g>
</svg>`;

writeFileSync('/home/standards/static/img/aeef-social-card.svg', svg);
console.log('SVG written');

// Convert to PNG
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: WIDTH },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();
writeFileSync('/home/standards/static/img/aeef-social-card.png', pngBuffer);
console.log(`PNG social card written (${pngBuffer.length} bytes)`);
