'use client';

import { useEffect, useState } from 'react';

export default function LogoGallery() {
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/logo')
            .then(res => res.json())
            .then(data => setLogos(data.logos || []));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            {logos.map((src, idx) => (
                <img key={idx} src={src} alt={`Logo ${idx}`} className="h-32 w-auto object-contain" />
            ))}
        </div>
    );
}
