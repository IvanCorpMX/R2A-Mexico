import React from 'react';

export const BrandLogo = ({ brand, className = "" }: { brand: string, className?: string, key?: string | number }) => {
  const filename = brand.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') + '.png';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={`/images/logos/${filename}`} 
        alt={brand}
        className="h-full w-auto object-contain max-h-full logo-silhouette"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="hidden text-sm font-bold text-white/80">{brand}</span>
    </div>
  );
};
