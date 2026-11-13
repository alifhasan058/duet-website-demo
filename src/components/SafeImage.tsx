import { useState } from 'react';
import { Stethoscope } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Duet Primary Care',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal-50 via-slate-50 to-slate-100 text-[#0F2040] p-6 ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-[#0D9488]">
          <Stethoscope className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="text-sm font-medium text-slate-600 text-center">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
