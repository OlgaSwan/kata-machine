const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
  if(!curr) return path

  walk(curr.left, path)
  walk(curr.right, path)
  path.push(curr.value)

  return path
}
export default function in_post_order(head: BinaryNode<number>): number[] {
  return walk(head, [])
}