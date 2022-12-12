// 配列からランダムに一つを選ぶ関数
export const randomChoice = <T>(array: readonly T[]): T => {
  const randomIndex: number = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
