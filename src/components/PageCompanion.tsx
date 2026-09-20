import { useEffect, useRef, useState } from 'react';

type Mode = 'idle-walk' | 'scroll-run';

const CHAR_W = 160;
const CHAR_H = 72;
const WALK_STEP = 1.8;
const RUN_STEP = 14;
const IDLE_AFTER_MS = 1400;
const RUN_MARGIN = 20;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export default function PageCompanion() {
  const [mode, setMode] = useState<Mode>('idle-walk');
  const modeRef = useRef<Mode>('idle-walk');
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(performance.now());
  const scrollPctRef = useRef<number>(0);
  const nextWalkAtRef = useRef<number>(0);
  const posRef = useRef({ x: 70, y: 140 });
  const targetRef = useRef({ x: 280, y: 220 });
  const facingRef = useRef<1 | -1>(1);
  const charBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const small = () => window.innerWidth < 640;
    const viewportHeight = () => window.innerHeight;

    const updateScrollPct = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      scrollPctRef.current = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
      lastScrollRef.current = performance.now();
      if (modeRef.current !== 'scroll-run') {
        setMode('scroll-run');
        modeRef.current = 'scroll-run';
      }
    };

    updateScrollPct();

    const onScroll = () => updateScrollPct();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    const randomWalkTarget = () => {
      const viewport = viewportHeight();
      const margin = 16;
      const gutterL = small() ? 4 : 40;
      const gutterR = window.innerWidth - CHAR_W - (small() ? 4 : 40);
      const x = lerp(gutterL, gutterR, Math.random());
      const y = lerp(
        margin + 10,
        viewport - CHAR_H - margin - 12,
        Math.random(),
      );
      targetRef.current = { x, y };
    };

    randomWalkTarget();
    nextWalkAtRef.current = performance.now() + 3000 + Math.random() * 1500;

    const loop = () => {
      const now = performance.now();
      const viewport = viewportHeight();
      const w = window.innerWidth;
      const idleSince = now - lastScrollRef.current;

      if (idleSince > IDLE_AFTER_MS && modeRef.current === 'scroll-run') {
        setMode('idle-walk');
        modeRef.current = 'idle-walk';
        nextWalkAtRef.current = now + 1200;
      }

      if (modeRef.current === 'scroll-run') {
        const runX = small() ? 10 : RUN_MARGIN + 10;
        const runY = lerp(
          RUN_MARGIN + 80,
          viewport - CHAR_H - RUN_MARGIN - 10,
          scrollPctRef.current,
        );
        targetRef.current = {
          x: clamp(runX, 0, w - CHAR_W),
          y: clamp(runY, 0, viewport - CHAR_H),
        };
      } else {
        if (now >= nextWalkAtRef.current) {
          randomWalkTarget();
          nextWalkAtRef.current = now + 2600 + Math.random() * 1800;
        }
      }

      const pos = posRef.current;
      const tgt = targetRef.current;
      const isRun = modeRef.current === 'scroll-run';
      const step = isRun ? RUN_STEP : WALK_STEP;

      const dx = tgt.x - pos.x;
      const dy = tgt.y - pos.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 0.5) {
        const move = Math.min(step, dist);
        pos.x += (dx / dist) * move;
        pos.y += (dy / dist) * move;
        if (Math.abs(dx) > 0.2) {
          facingRef.current = dx > 0 ? 1 : -1;
        }
      }

      pos.x = clamp(pos.x, 4, w - CHAR_W - 4);
      pos.y = clamp(pos.y, 8, viewport - CHAR_H - 4);

      if (charBoxRef.current) {
        const f = facingRef.current;
        charBoxRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scaleX(${f})`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isRun = mode === 'scroll-run';

  return (
    <>
      <style>{`
        @keyframes car-bob-idle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-1.5px) rotate(-0.2deg); }
        }
        @keyframes car-bob-run {
          0%, 100% { transform: translateY(0) rotate(0deg) scaleY(1); }
          20%      { transform: translateY(-3px) rotate(0.3deg) scaleY(1.02); }
          55%      { transform: translateY(0.4px) rotate(-0.2deg) scaleY(0.985); }
        }
        @keyframes wheel-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes wheel-spin-fast {
          from { transform: rotate(0deg); }
          to   { transform: rotate(1080deg); }
        }
        @keyframes road-dash {
          from { transform: translateX(0); }
          to   { transform: translateX(-40px); }
        }
        @keyframes road-dash-fast {
          from { transform: translateX(0); }
          to   { transform: translateX(-96px); }
        }
        @keyframes speed-streak {
          0%   { opacity: 0; transform: translateX(6px) scaleX(0.6); }
          35%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-60px) scaleX(1.2); }
        }
        @keyframes headlight-glow {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 0.95; }
        }
        @keyframes exhaust-puff {
          0%   { opacity: 0.85; transform: translate(0, 0) scale(0.7); }
          60%  { opacity: 0.5; }
          100% { opacity: 0; transform: translate(-32px, -6px) scale(1.5); }
        }
        @keyframes road-smear {
          0%, 100% { opacity: 0.65; }
          50%      { opacity: 1; }
        }
        .car-shadow {
          filter: drop-shadow(0 8px 10px rgba(15, 23, 42, 0.32));
          will-change: transform;
        }
      `}</style>

      <div
        className="fixed pointer-events-none z-[60]"
        ref={charBoxRef}
        style={{
          width: CHAR_W,
          height: CHAR_H,
          top: 0,
          left: 0,
          transformOrigin: '50% 100%',
        }}
      >
        <div className="car-shadow" style={{ width: '100%', height: '100%' }}>
          <svg
            viewBox="0 0 320 150"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Black sedan companion car"
            style={{
              width: '100%',
              height: '100%',
              animation: isRun
                ? 'car-bob-run 0.28s ease-in-out infinite'
                : 'car-bob-idle 0.7s ease-in-out infinite',
              transformOrigin: '160px 120px',
              overflow: 'visible',
            }}
          >
            <defs>
              <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a3040" />
                <stop offset="45%" stopColor="#0f1320" />
                <stop offset="100%" stopColor="#02050d" />
              </linearGradient>
              <linearGradient id="car-side" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1b2233" />
                <stop offset="100%" stopColor="#060912" />
              </linearGradient>
              <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9fd6ff" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#3e6b95" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#14202f" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="tire" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a2a30" />
                <stop offset="100%" stopColor="#06060a" />
              </linearGradient>
              <linearGradient id="hl-cone" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#fff8c2" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#fff2a8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#fff2a8" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="160"
              cy="140"
              rx="110"
              ry="7"
              fill="url(#shadow)"
              opacity={isRun ? 0.45 : 0.55}
            />

            <g
              opacity="1"
              style={{ transform: `translateY(${isRun ? 0 : 0}px)` }}
            >
              <g transform="translate(30 122)">
                <rect
                  x="0"
                  y="0"
                  width="260"
                  height="10"
                  rx="5"
                  fill="#e5cf8a"
                  opacity={isRun ? 0.9 : 0.7}
                />
                <g
                  style={{
                    animation: isRun
                      ? 'road-dash-fast 0.38s linear infinite'
                      : 'road-dash 1.4s linear infinite',
                    transformOrigin: '0px 5px',
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <rect
                      key={i}
                      x={i * 40}
                      y="3"
                      width="22"
                      height="4"
                      rx="2"
                      fill={isRun ? '#ca8a04' : '#b0892a'}
                      opacity={isRun ? 0.9 : 0.75}
                      style={{
                        animation: isRun
                          ? `road-smear 0.22s ease-in-out ${i * 0.015}s infinite`
                          : 'none',
                      }}
                    />
                  ))}
                </g>
              </g>
            </g>

            {isRun && (
              <g opacity="0.95">
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1={48 - i * 2}
                    y1={70 + i * 11}
                    x2={-4 - i * 14}
                    y2={72 + i * 11}
                    stroke="#ca8a04"
                    strokeWidth={3 - i * 0.5}
                    strokeLinecap="round"
                    style={{
                      animation: `speed-streak ${0.38 + i * 0.06}s linear ${
                        i * 0.07
                      }s infinite`,
                      transformOrigin: '40px 72px',
                    }}
                    opacity={0.9 - i * 0.18}
                  />
                ))}
                {[0, 1, 2].map((i) => (
                  <line
                    key={`l2-${i}`}
                    x1={52 - i * 2}
                    y1={60 + i * 6}
                    x2={12 - i * 10}
                    y2={61 + i * 6}
                    stroke="#13182a"
                    strokeWidth={2.4 - i * 0.4}
                    strokeLinecap="round"
                    style={{
                      animation: `speed-streak ${0.32 + i * 0.05}s linear ${
                        0.03 + i * 0.08
                      }s infinite`,
                      transformOrigin: '50px 60px',
                    }}
                    opacity={0.75 - i * 0.2}
                  />
                ))}
              </g>
            )}

            {!isRun && (
              <g>
                {[0, 1].map((i) => (
                  <circle
                    key={`ex-${i}`}
                    cx={34}
                    cy={82}
                    r={4 + i * 2}
                    fill="#c7cad1"
                    style={{
                      animation: `exhaust-puff ${1.1 + i * 0.25}s ease-out ${
                        i * 0.35
                      }s infinite`,
                      transformOrigin: '34px 82px',
                      opacity: 0,
                    }}
                  />
                ))}
              </g>
            )}

            <g>
              <path
                d="M44 102
                   C 52 102 58 96 66 90
                   L 100 62
                   C 112 54 124 50 140 50
                   L 212 50
                   C 230 50 246 56 260 70
                   L 284 92
                   C 294 98 300 102 306 102
                   L 306 108
                   L 40 108
                   L 40 102
                   Z"
                fill="url(#car-body)"
                stroke="#050814"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              <path
                d="M48 102
                   L 48 84
                   C 48 78 54 74 62 74
                   L 282 74
                   C 294 74 300 80 300 86
                   L 300 102
                   Z"
                fill="url(#car-side)"
                opacity="0.85"
              />

              <path
                d="M104 88
                   L 104 78
                   C 106 72 116 66 136 64
                   L 172 64
                   L 178 86
                   Z"
                fill="url(#glass)"
                stroke="#050814"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <line
                x1="171"
                y1="64"
                x2="177"
                y2="86"
                stroke="#050814"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              <path
                d="M180 64
                   L 226 64
                   C 242 66 254 74 266 86
                   L 180 86
                   Z"
                fill="url(#glass)"
                stroke="#050814"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              <path
                d="M44 102
                   L 306 102
                   L 306 104
                   L 44 104
                   Z"
                fill="#ca8a04"
                opacity="0.55"
              />
              <path
                d="M52 86
                   L 296 86
                   L 294 88
                   L 54 88
                   Z"
                fill="#fffdf5"
                opacity="0.22"
              />

              <rect
                x="40"
                y="82"
                width="10"
                height="16"
                rx="2.5"
                fill="#ff5757"
                stroke="#050814"
                strokeWidth="2.5"
              />
              <rect
                x="41.5"
                y="83.5"
                width="7"
                height="6"
                rx="1.5"
                fill="#ffd4d4"
                opacity="0.8"
              />

              <g>
                <rect
                  x="298"
                  y="82"
                  width="12"
                  height="16"
                  rx="3"
                  fill="#fff8c2"
                  stroke="#050814"
                  strokeWidth="2.5"
                  style={{
                    transformOrigin: '304px 90px',
                    animation: 'headlight-glow 1.8s ease-in-out infinite',
                  }}
                />
                <path
                  d="M310 78
                     L 360 66
                     L 360 114
                     L 310 102
                     Z"
                  fill="url(#hl-cone)"
                  opacity={isRun ? 0.9 : 0.7}
                />
                {isRun && (
                  <path
                    d="M310 82
                       L 380 72
                       L 380 108
                       L 310 98
                       Z"
                    fill="url(#hl-cone)"
                    opacity="0.45"
                  />
                )}
              </g>

              <rect
                x="248"
                y="60"
                width="26"
                height="4"
                rx="2"
                fill="#050814"
                opacity="0.7"
              />

              <rect
                x="138"
                y="90"
                width="44"
                height="3"
                rx="1.5"
                fill="#ca8a04"
                opacity="0.75"
              />

              <g transform="translate(88 104)">
                <g
                  style={{
                    transformOrigin: '22px 22px',
                    animation: isRun
                      ? 'wheel-spin-fast 0.28s linear infinite'
                      : 'wheel-spin-slow 1.1s linear infinite',
                  }}
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="22"
                    fill="url(#tire)"
                    stroke="#050814"
                    strokeWidth="3"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="13"
                    fill="#cfd3db"
                    stroke="#050814"
                    strokeWidth="2"
                  />
                  <circle cx="22" cy="22" r="4" fill="#050814" />
                  {[0, 1, 2, 3, 4].map((i) => {
                    const a = (i * 72 * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1={22 + Math.cos(a) * 5.5}
                        y1={22 + Math.sin(a) * 5.5}
                        x2={22 + Math.cos(a) * 11.5}
                        y2={22 + Math.sin(a) * 11.5}
                        stroke="#050814"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              </g>

              <g transform="translate(210 104)">
                <g
                  style={{
                    transformOrigin: '22px 22px',
                    animation: isRun
                      ? 'wheel-spin-fast 0.28s linear infinite 0.14s'
                      : 'wheel-spin-slow 1.1s linear infinite 0.55s',
                  }}
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="22"
                    fill="url(#tire)"
                    stroke="#050814"
                    strokeWidth="3"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="13"
                    fill="#cfd3db"
                    stroke="#050814"
                    strokeWidth="2"
                  />
                  <circle cx="22" cy="22" r="4" fill="#050814" />
                  {[0, 1, 2, 3, 4].map((i) => {
                    const a = (i * 72 * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1={22 + Math.cos(a) * 5.5}
                        y1={22 + Math.sin(a) * 5.5}
                        x2={22 + Math.cos(a) * 11.5}
                        y2={22 + Math.sin(a) * 11.5}
                        stroke="#050814"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
