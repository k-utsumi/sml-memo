import { MemoTypeName } from './types'

export const DB_NAME = 'SML Memo DB'
export const OBJECT_NAME = 'memos'

export const TEXTS = {
  dbRequestError: 'データベースの読み込みに失敗しました',
}

export const MEMO_TYPE_NAMES: MemoTypeName[] = [
  'all',
  'favorits',
  'working',
  'archive',
]
