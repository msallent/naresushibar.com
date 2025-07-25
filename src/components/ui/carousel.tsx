"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
} from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  count: number;
  current: number;
  scrollTo: (index: number) => void;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  opts,
  setApi,
  plugins,
  children,
  ...props
}: ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel({ loop: true, ...opts }, [
    Autoplay({ delay: 3000 }),
    ...(plugins ?? []),
  ]);

  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      api?.plugins().autoplay.stop();
    },
    [api],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        count,
        current,
        scrollTo,
      }}
    >
      <div
        className="relative h-full"
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent(props: ComponentProps<"div">) {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="h-full overflow-hidden">
      <div className="-ml-4 flex h-full" {...props} />
    </div>
  );
}

function CarouselItem(props: ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="relative min-w-0 shrink-0 grow-0 basis-full pl-4"
      {...props}
    />
  );
}

function CarouselProgress(props: ComponentProps<"div">) {
  const { count, current, scrollTo } = useCarousel();

  return (
    <div
      role="progressbar"
      className="absolute inset-x-1/2 bottom-[5.14%] flex w-min -translate-x-1/2 justify-center gap-1.5 sm:gap-2 lg:gap-2.5"
      {...props}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`z-10 flex size-2 cursor-pointer rounded-full sm:size-2.5 lg:size-3 ${
            index === current - 1 ? "bg-white" : "bg-[#CCCDCE]"
          }`}
        />
      ))}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
};
