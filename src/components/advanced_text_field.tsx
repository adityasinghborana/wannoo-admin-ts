'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import 'react-quill-new/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false
})

type AdvanceTextFieldProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const AdvanceTextField: React.FC<AdvanceTextFieldProps> = ({
  value,
  onChange,
  placeholder = 'Write something awesome...',
  className = ''
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align'
  ]

  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        ['link', 'image', 'video'],
        [{ align: [] }],
        ['clean']
      ]
    }
  }

  if (!mounted) return null

  return (
    <ReactQuill
      className={`h-[200px] w-full py-2 px-3 text-ba ${className}`}
      theme='snow'
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
    />
  )
}

export default AdvanceTextField
