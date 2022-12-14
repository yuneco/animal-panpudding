export const disappear = async (el: Element) => {
  await el.animate(
    [
      {
        transform: `scale(1)`,
        filter: `blur(0px)`,
        opacity: 1,
      },
      {
        transform: `scale(1.3)`,
        filter: `blur(8px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
    }
  ).finished
}
