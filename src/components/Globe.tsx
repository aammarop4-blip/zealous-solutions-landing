import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionPos = useRef<number | null>(null);
  const rotationOffset = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [212 / 255, 175 / 255, 55 / 255], // Gold
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [35.6762, 139.6503], size: 0.1 },
        { location: [28.6139, 77.209], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.03 },
      ],
      onRender: (state: any) => {
        // Basic auto-rotation
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + rotationOffset.current;
      },
    } as any);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - rotationOffset.current;
          canvasRef.current?.style.setProperty('cursor', 'grabbing');
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current?.style.setProperty('cursor', 'grab');
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current?.style.setProperty('cursor', 'grab');
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = (e.clientX - pointerInteracting.current) / 100;
            rotationOffset.current = delta;
          }
        }}
        style={{
          width: 1200,
          height: 1200,
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
};
