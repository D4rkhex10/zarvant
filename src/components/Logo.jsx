import React from 'react';

const Logo = ({ width = 40, height = 40, color = 'var(--text-heading)', showText = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base dark navy triangle */}
        <path d="M50 10 L20 90 L80 90 Z" fill="#0b132b"/>
        
        {/* Blue wireframe lines */}
        <path d="M50 10 L50 90" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M20 90 L80 90" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M50 10 L20 90" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M50 10 L80 90" stroke="#3b82f6" strokeWidth="2"/>
        
        {/* Horizontal wireframe line */}
        <path d="M35 50 L65 50" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        
        {/* Vertices/Nodes */}
        <circle cx="50" cy="10" r="3" fill="#3b82f6"/>
        <circle cx="20" cy="90" r="3" fill="#3b82f6"/>
        <circle cx="80" cy="90" r="3" fill="#3b82f6"/>
        <circle cx="50" cy="90" r="3" fill="#3b82f6"/>
      </svg>
      
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
          <span style={{ 
            fontSize: '1.75rem', 
            fontWeight: 800, 
            letterSpacing: '-0.04em',
            color: color,
            marginBottom: '0.25rem'
          }}>
            Zervant
          </span>
          <div style={{ width: '2rem', height: '3px', backgroundColor: '#3b82f6', marginBottom: '0.25rem' }}></div>
          <span style={{ 
            fontSize: '0.55rem', 
            fontWeight: 700, 
            letterSpacing: '0.15em', 
            color: 'var(--text-muted)',
            textTransform: 'uppercase'
          }}>
            DATA INTELLIGENCE
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
