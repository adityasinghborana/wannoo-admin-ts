import { create } from 'zustand'

type ApiStatus = {
  loading: boolean
  success: boolean
  error: string | null
  setLoading: (loading: boolean) => void
  setSuccess: (success: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

export const useApiStatus = create<ApiStatus>((set) => ({
  loading: false,
  success: false,
  error: null,
  setLoading: (loading) => set({ loading }),
  setSuccess: (success) => set({ success }),
  setError: (error) => set({ error }),
  reset: () => set({ loading: false, success: false, error: null }),
}))
