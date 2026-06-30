import { useEffect, useRef } from "react";
import { useDepletingResourceStore } from "../state/DepletingResourceStore";

const useResourceDepletion = () => {
  const lastTickTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);

  const deplete = useDepletingResourceStore((state) => state.depletionTick);
  const isGeneratorRunning = useDepletingResourceStore(
    (state) => state.generatorRunning,
  );

  const stopDepletion = () => {
    if (!frameId.current) return;

    lastTickTime.current = null;
    cancelAnimationFrame(frameId.current);
    frameId.current = null;
  };

  useEffect(() => {
    const tick = (timestamp: DOMHighResTimeStamp) => {
      if (lastTickTime.current === null) lastTickTime.current = timestamp;
      const delta = timestamp - lastTickTime.current!;
      if (delta >= 1000) {
        deplete(delta);
        lastTickTime.current = timestamp;
      }
      frameId.current = requestAnimationFrame(tick);
    };

    if (isGeneratorRunning) {
      frameId.current = requestAnimationFrame(tick);
    } else {
      stopDepletion();
    }

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [deplete, isGeneratorRunning]);
};

export default useResourceDepletion;
