/**
 * 指定の画像をロードし、完了したらロード済みのimg要素を返します。失敗した場合はエラーを投げます。F
 * @param src 画像パスまたはデータURI
 * @returns ロード済みのimg要素
 */
export const createImage = async (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onabort = image.onerror = reject
    image.onload = () => resolve(image)
  })
}
