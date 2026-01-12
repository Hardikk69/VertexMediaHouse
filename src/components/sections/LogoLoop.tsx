import {
    CSSProperties,
    ReactNode,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
  } from 'react';
  import './LogoLoop.css';
  
  /* ------------------------------------------------------------------ */
  /* Config & Utils */
  /* ------------------------------------------------------------------ */
  
  const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
  };
  
  const toCssLength = (value?: string | number): string | undefined =>
    typeof value === 'number' ? `${value}px` : value ?? undefined;
  
  /* ------------------------------------------------------------------ */
  /* Types */
  /* ------------------------------------------------------------------ */
  
  type Direction = 'left' | 'right' | 'up' | 'down';
  
  type LogoNodeItem = {
    node: ReactNode;
    href?: string;
    ariaLabel?: string;
    title?: string;
  };
  
  type LogoImageItem = {
    src: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
    alt?: string;
    title?: string;
    href?: string;
  };
  
  type LogoItem = LogoNodeItem | LogoImageItem;
  
  interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: Direction;
    width?: string | number;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoItem, index: number | string) => ReactNode;
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
  }
  
  /* ------------------------------------------------------------------ */
  /* Hooks */
  /* ------------------------------------------------------------------ */
  
  const useResizeObserver = (
    callback: () => void,
    elements: React.RefObject<HTMLElement>[],
    dependencies: unknown[]
  ) => {
    useEffect(() => {
      if (!window.ResizeObserver) {
        const handleResize = () => callback();
        window.addEventListener('resize', handleResize);
        callback();
        return () => window.removeEventListener('resize', handleResize);
      }
  
      const observers = elements.map(ref => {
        if (!ref.current) return null;
        const observer = new ResizeObserver(callback);
        observer.observe(ref.current);
        return observer;
      });
  
      callback();
  
      return () => {
        observers.forEach(observer => observer?.disconnect());
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, ...dependencies]);
  };
  
  const useImageLoader = (
    seqRef: React.RefObject<HTMLElement>,
    onLoad: () => void,
    dependencies: unknown[]
  ) => {
    useEffect(() => {
      const images = seqRef.current?.querySelectorAll('img') ?? [];
  
      if (images.length === 0) {
        onLoad();
        return;
      }
  
      let remaining = images.length;
  
      const handleImageLoad = () => {
        remaining -= 1;
        if (remaining === 0) onLoad();
      };
  
      images.forEach(img => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad, { once: true });
          img.addEventListener('error', handleImageLoad, { once: true });
        }
      });
  
      return () => {
        images.forEach(img => {
          img.removeEventListener('load', handleImageLoad);
          img.removeEventListener('error', handleImageLoad);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onLoad, ...dependencies]);
  };
  
  const useAnimationLoop = (
    trackRef: React.RefObject<HTMLDivElement>,
    targetVelocity: number,
    seqWidth: number,
    seqHeight: number,
    isHovered: boolean,
    hoverSpeed: number | undefined,
    isVertical: boolean
  ) => {
    const rafRef = useRef<number | null>(null);
    const lastTimestampRef = useRef<number | null>(null);
    const offsetRef = useRef(0);
    const velocityRef = useRef(0);
  
    useEffect(() => {
      const track = trackRef.current;
      if (!track) return;
  
      const seqSize = isVertical ? seqHeight : seqWidth;
  
      const animate = (timestamp: number) => {
        if (lastTimestampRef.current === null) {
          lastTimestampRef.current = timestamp;
        }
  
        const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
        lastTimestampRef.current = timestamp;
  
        const target =
          isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
  
        const easing =
          1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
  
        velocityRef.current += (target - velocityRef.current) * easing;
  
        if (seqSize > 0) {
          offsetRef.current =
            ((offsetRef.current + velocityRef.current * deltaTime) %
              seqSize +
              seqSize) %
            seqSize;
  
          track.style.transform = isVertical
            ? `translate3d(0, ${-offsetRef.current}px, 0)`
            : `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
  
        rafRef.current = requestAnimationFrame(animate);
      };
  
      rafRef.current = requestAnimationFrame(animate);
  
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        lastTimestampRef.current = null;
      };
    }, [
      targetVelocity,
      seqWidth,
      seqHeight,
      isHovered,
      hoverSpeed,
      isVertical,
      trackRef
    ]);
  };
  
  /* ------------------------------------------------------------------ */
  /* Component */
  /* ------------------------------------------------------------------ */
  
  export const LogoLoop = memo<LogoLoopProps>(
    ({
      logos,
      speed = 120,
      direction = 'left',
      width = '100%',
      logoHeight = 28,
      gap = 32,
      pauseOnHover,
      hoverSpeed,
      fadeOut = false,
      fadeOutColor,
      scaleOnHover = false,
      renderItem,
      ariaLabel = 'Partner logos',
      className,
      style
    }) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const trackRef = useRef<HTMLDivElement>(null);
      const seqRef = useRef<HTMLUListElement>(null);
  
      const [seqWidth, setSeqWidth] = useState(0);
      const [seqHeight, setSeqHeight] = useState(0);
      const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
      const [isHovered, setIsHovered] = useState(false);
  
      const isVertical = direction === 'up' || direction === 'down';
  
      const effectiveHoverSpeed = useMemo<number | undefined>(() => {
        if (hoverSpeed !== undefined) return hoverSpeed;
        if (pauseOnHover === true) return 0;
        if (pauseOnHover === false) return undefined;
        return 0;
      }, [hoverSpeed, pauseOnHover]);
  
      const targetVelocity = useMemo(() => {
        const magnitude = Math.abs(speed);
        const dir =
          isVertical
            ? direction === 'up'
              ? 1
              : -1
            : direction === 'left'
            ? 1
            : -1;
        return magnitude * dir * (speed < 0 ? -1 : 1);
      }, [speed, direction, isVertical]);
  
      const updateDimensions = useCallback(() => {
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const rect = seqRef.current?.getBoundingClientRect();
        const w = rect?.width ?? 0;
        const h = rect?.height ?? 0;
  
        if (isVertical && h > 0) {
          setSeqHeight(Math.ceil(h));
          const viewport =
            containerRef.current?.clientHeight ?? h;
          setCopyCount(
            Math.max(
              ANIMATION_CONFIG.MIN_COPIES,
              Math.ceil(viewport / h) + ANIMATION_CONFIG.COPY_HEADROOM
            )
          );
        } else if (!isVertical && w > 0) {
          setSeqWidth(Math.ceil(w));
          setCopyCount(
            Math.max(
              ANIMATION_CONFIG.MIN_COPIES,
              Math.ceil(containerWidth / w) + ANIMATION_CONFIG.COPY_HEADROOM
            )
          );
        }
      }, [isVertical]);
  
      useResizeObserver(updateDimensions, [containerRef, seqRef], [
        logos,
        gap,
        logoHeight,
        isVertical
      ]);
  
      useImageLoader(seqRef, updateDimensions, [
        logos,
        gap,
        logoHeight,
        isVertical
      ]);
  
      useAnimationLoop(
        trackRef,
        targetVelocity,
        seqWidth,
        seqHeight,
        isHovered,
        effectiveHoverSpeed,
        isVertical
      );
  
      const rootClassName = [
        'logoloop',
        isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
        fadeOut && 'logoloop--fade',
        scaleOnHover && 'logoloop--scale-hover',
        className
      ]
        .filter(Boolean)
        .join(' ');
  
      return (
        <div
          ref={containerRef}
          className={rootClassName}
          style={{ width: toCssLength(width), ...style }}
          role="region"
          aria-label={ariaLabel}
        >
          <div
            ref={trackRef}
            className="logoloop__track"
            onMouseEnter={() =>
              effectiveHoverSpeed !== undefined && setIsHovered(true)
            }
            onMouseLeave={() =>
              effectiveHoverSpeed !== undefined && setIsHovered(false)
            }
          >
            {Array.from({ length: copyCount }).map((_, i) => (
              <ul
                key={i}
                ref={i === 0 ? seqRef : undefined}
                className="logoloop__list"
                aria-hidden={i > 0}
              >
                {logos.map((item, index) => (
                  <li key={`${i}-${index}`} className="logoloop__item">
                    {renderItem ? renderItem(item, index) : null}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      );
    }
  );
  
  LogoLoop.displayName = 'LogoLoop';
  
  export default LogoLoop;
  