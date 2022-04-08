import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { getMemos, updateMemo } from '../features/memo/functions'
import { MemoLayout } from '../features/memo/layouts'
import type { Memo } from '../features/memo/types'

const Home: NextPage = () => {
  const [value, setValue] = useState('')
  const [memos, setMemos] = useState<Memo[]>([])

  const hndleSaveMemo = () => {
    updateMemo(value)
  }

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    getMemos().then((memos) => {
      memos.sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1))
      const unarchiveMemos = memos.filter(
        (memo) => !memo.types?.some((type) => type === 'archive')
      )

      setMemos(unarchiveMemos)
    })
  }, [value])

  return (
    <MemoLayout
      hndleSaveClick={hndleSaveMemo}
      {...{ handleInputChange, memos, value }}
    >
      <Head>
        <title>SML Memo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </MemoLayout>
  )
}

export default Home
