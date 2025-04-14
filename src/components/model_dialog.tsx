import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React, { useEffect, useState } from 'react'
import { FileUpload } from './ui/file-upload'
import { Button } from './ui/button'

interface ModelDialogProps {
  label: string
  onUpload?: (files: File[]) => void
  
}

const Modeldialog: React.FC<ModelDialogProps> = ({ label, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (selectedFiles.length > 0) {
      console.log('Selected files:', selectedFiles)
    
    }
  }, [selectedFiles])

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <FileUpload
           onChange={async (files) => {
            setSelectedFiles(files)
            await onUpload?.(files) // <-- use files directly here
            setOpen(false)
          }}
        />
       
      </DialogContent>
    </Dialog>
  )
}

export default Modeldialog
