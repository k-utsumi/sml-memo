import { OBJECT_NAME } from '../constants'

export const requestOnUpgradeNeeded = (event: Event) => {
  const db: IDBDatabase = (<IDBRequest>event.target).result

  console.log('onupgradeneeded', { event, db })

  db.onerror = (_event) => {
    alert('データベースの読み込みに失敗しました')
  }

  const memos = db.createObjectStore(OBJECT_NAME, {
    keyPath: 'id',
    autoIncrement: true,
  })

  memos.createIndex('updated_at_index', 'updated_at')
  memos.createIndex('types_index', 'types')
}
