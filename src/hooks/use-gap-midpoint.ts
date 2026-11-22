import { useEffect, useState } from "react";

/**
 * Measures the horizontal midpoint of the empty gap between two blocks inside a
 * host element and returns it as a px offset from the host's left edge.
 * Used to place the vertical divider exactly between the two columns.
 */
export function useGapMidpoint<T extends HTMLElement>(leftSel: string, rightSel: string) {
  const [node, setNode] = useState<T | null>(null);
  const [x, setX] = useState<number | null>(null);

  useEffect(() => {
    if (!node || typeof ResizeObserver === "undefined") return;
    const left = node.querySelector<HTMLElement>(leftSel);
    const right = node.querySelector<HTMLElement>(rightSel);
    if (!left || !right) return;

    const compute = () => {
      const host = node.getBoundingClientRect();
      const a = left.getBoundingClientRect();
      const b = right.getBoundingClientRect();
      setX((a.right + b.left) / 2 - host.left);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(node);
    ro.observe(left);
    ro.observe(right);
    return () => ro.disconnect();
  }, [node, leftSel, rightSel]);

  return { ref: setNode, x };
}
