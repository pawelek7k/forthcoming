"use client";

import { type Container, type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        color: {
          value: ["#000", "#fda4af", "#f43f5e", "#be123c"],
        },
        move: {
          enable: true,
          outModes: "out",
          speed: { min: 1, max: 3 },
          path: {
            enable: true,
            options: {
              waveLength: { min: 3, max: 7 },
              waveHeight: { min: 1, max: 5 },
            },
            generator: "zigZagPathGenerator",
          },
          trail: {
            enable: true,
            length: 20,
            fill: {
              color: "#000",
            },
          },
        },
        number: {
          value: 80,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
        },
      },
      background: {
        color: "transparent",
      },
    }),
    []
  );

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
    </>
  );
};
