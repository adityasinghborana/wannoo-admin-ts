'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface ImageUploaderProps {
  buttonLabel?: string
  onChange: (file: File | null) => void
  accept?: string
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  buttonLabel = 'Upload Image',
  onChange,
  accept = 'image/*',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    onChange(file)
  }

  return (
    <div>
      <input
        type="file"
        id="image-upload"
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      <Button
        variant="outline"
        type="button"
        className="bg-primary text-primary-foreground py-2 px-4 rounded"
        onClick={() => document.getElementById('image-upload')?.click()}
      >
        {buttonLabel}
      </Button>
    </div>
  )
}

export default ImageUploader
