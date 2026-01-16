import { useLayoutEffect, useRef, useCallback } from "react";
import "./ScrollStack.css";
import Lenis from "lenis";

/* =====================================================
   ITEM COMPONENT
===================================================== */
export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: {
  children: React.ReactNode;
  itemClassName?: string;
}) => {
  return (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
      {children}
    </div>
  );
};

/* =====================================================
   MAIN COMPONENT
===================================================== */
type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
};

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, any>>(new Map());
  const isUpdatingRef = useRef(false);

  const initialOffsetsRef = useRef<number[]>([]);
  const initialEndOffsetRef = useRef(0);

  /* =====================================================
     HELPERS
  ===================================================== */
  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      const min = Math.min(start, end);
      const max = Math.max(start, end);
      if (scrollTop < min) return start < end ? 0 : 1;
      if (scrollTop > max) return start < end ? 1 : 0;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return Number(value);
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current!;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  /* =====================================================
     TRANSFORM UPDATER
  ===================================================== */
  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    const endElementOffset = initialEndOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      const cardTop = initialOffsetsRef.current[i];

      const triggerStart =
        cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const pinStart =
        cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd =
        endElementOffset - containerHeight + stackPositionPx;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount
        ? i * rotationAmount * scaleProgress
        : 0;

      let translateY = 0;
      const clampedScroll = Math.min(Math.max(scrollTop, pinStart), pinEnd);

      if (scrollTop >= pinStart) {
        translateY =
          clampedScroll -
          cardTop +
          stackPositionPx +
          itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY =
          pinEnd -
          cardTop +
          stackPositionPx +
          itemStackDistance * i;
      }

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.transform = transform;
      card.style.zIndex = String(i + 1);

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    calculateProgress,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  /* =====================================================
     LENIS SETUP
  ===================================================== */
  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
      wrapper: useWindowScroll ? undefined : scrollerRef.current!,
      content: useWindowScroll
        ? undefined
        : scrollerRef.current!.querySelector(
          ".scroll-stack-inner"
        )!,
    });

    lenis.on("scroll", updateCardTransforms);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
  }, [updateCardTransforms, useWindowScroll]);

  /* =====================================================
     LAYOUT EFFECT
  ===================================================== */
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll<HTMLElement>(".scroll-stack-card")
        : scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
    );

    cardsRef.current = cards;

    // initialOffsetsRef.current = cards.map(card => {
    //   const rect = card.getBoundingClientRect();
    //   return rect.top + window.scrollY;
    // });

    initialOffsetsRef.current = cards.map(card => {
      const rect = card.getBoundingClientRect();

      if (useWindowScroll) {
        return rect.top + window.scrollY;
      }

      const scrollerRect = scroller.getBoundingClientRect();
      return rect.top - scrollerRect.top + scroller.scrollTop;
    });

    cards.forEach((card, i) => {
      // if (i < cards.length - 1) {
      //   card.style.marginBottom = `${itemDistance}px`;
      // }
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translate3d(0,0,0)";
      card.style.zIndex = String(i + 1);
    });

    const endElement = scroller.querySelector<HTMLElement>(
      ".scroll-stack-end"
    );
    if (endElement) {
      endElement.style.height = `${cards.length * itemStackDistance + 50
        }px`;

      const rect = endElement.getBoundingClientRect();
      initialEndOffsetRef.current = rect.top + window.scrollY;
    }

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lenisRef.current?.destroy();
      cardsRef.current = [];
      initialOffsetsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
    };
  }, [
    itemDistance,
    itemStackDistance,
    setupLenis,
    updateCardTransforms,
    useWindowScroll,
  ]);

  /* =====================================================
     RENDER
  ===================================================== */
  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-container relative w-full overflow-y-auto ${className}`.trim()}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end w-full" />
      </div>
    </div>
  );
};

export default ScrollStack;
