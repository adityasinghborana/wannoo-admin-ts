import { useState } from 'react'

export function useAsyncState<T>() {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const execute = async (fn: () => Promise<T>) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fn()
      setData(result)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    setData,
    loading,
    error,
    execute,
  }
}