export const appearWithLag = async (root: Element, targetSelector: string) => {
  const els = [...root.querySelectorAll(targetSelector)]
  await Promise.all(
    els.map(
      (el, index) =>
        el.animate(
          [
            {
              transform: `translateY(30px) scale(1.1)`,
              filter: `blur(4px)`,
              opacity: 0,
            },
            {
              transform: `translateY(0px) scale(1)`,
              filter: `blur(0px)`,
              opacity: 1,
            },
          ],
          {
            duration: 1400,
            delay: index * 400,
            fill: 'backwards',
            easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
          }
        ).finished
    )
  )
}
