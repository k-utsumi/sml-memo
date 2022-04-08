import { DB_NAME, OBJECT_NAME } from '../constants'
import { requestOnError, requestOnUpgradeNeeded } from './'

export const updateMemo = (content: string) => {
  const DBOpenRequest = window.indexedDB.open(DB_NAME)

  DBOpenRequest.onerror = requestOnError

  DBOpenRequest.onsuccess = (event) => {
    const db: IDBDatabase = (<IDBRequest>event.target).result
    const objectStore = db
      .transaction(OBJECT_NAME, 'readwrite')
      .objectStore(OBJECT_NAME)

    const now = Date.now()

    objectStore.put({
      content,
      created_at: now,
      updated_at: now,
    })
  }

  DBOpenRequest.onupgradeneeded = requestOnUpgradeNeeded
}
