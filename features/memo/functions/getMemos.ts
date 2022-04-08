import { DB_NAME, OBJECT_NAME } from '../constants'
import type { Memo } from '../types'
import { requestOnError, requestOnUpgradeNeeded } from './'

/**
 * @example
 * getMemos().then((memos) => { console.log({ memos }) })
 * @see https://stackoverflow.com/a/52689099/9287284
 */
export const getMemos: (typeName?: string) => Promise<Memo[]> = async (
  typeName
) => {
  return new Promise(function (resolve, _reject) {
    const DBOpenRequest = window.indexedDB.open(DB_NAME)

    DBOpenRequest.onerror = requestOnError

    DBOpenRequest.onsuccess = (event) => {
      const db: IDBDatabase = (<IDBRequest>event.target).result
      const objectStore = db
        .transaction(OBJECT_NAME, 'readonly')
        .objectStore(OBJECT_NAME)

      if (typeName) {
        const index: IDBIndex = objectStore.index('types_index')
        index.get(typeName).onsuccess = (event) =>
          resolve((<IDBRequest>event.target).result)
      } else {
        const request = objectStore.getAll()
        request.onsuccess = () => resolve(request.result)
      }
    }

    DBOpenRequest.onupgradeneeded = requestOnUpgradeNeeded
  })
}
