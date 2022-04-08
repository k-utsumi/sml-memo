export type Memo = {
  id: number
  content: string
  createdAt: now
  updatedAt: now
  types?: MemoType[]
}

export type MemoTypeName = 'all' | MemoType
export type MemoType = 'favorits' | 'working' | 'archive'
