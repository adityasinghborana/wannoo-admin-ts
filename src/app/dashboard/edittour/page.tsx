import { Suspense } from 'react'
import EditTourForm from './editTourForm'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <EditTourForm />
    </Suspense>
  )
}
