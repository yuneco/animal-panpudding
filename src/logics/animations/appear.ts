export const appear = async (el: Element) => {
  await el.animate(
    [
      {
        transform: `translateY(30px)`,
      },
      {
        transform: `translateY(-10px)`,
      },
      {
        transform: `translateY(0px)`,
      },
    ],
    {
      duration: 500,
      easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
    }
  ).finished
}
