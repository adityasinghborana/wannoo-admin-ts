import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import React, { useEffect, useState } from 'react'

import { FileUpload } from './ui/file-upload'
import { Button } from './ui/button'

interface ModelDialogProps {
    label: string
  }
const Modeldialog: React.FC<ModelDialogProps> = ({ label })=> {
    const [selectedFiles , setSelectedFiles] = useState<File[]>([])

    useEffect(() => {
        if (selectedFiles.length > 0) {
          console.log('Selected files:', selectedFiles)
        }
      }, [selectedFiles])
  return (
    <Dialog>
      <DialogTrigger>{label}</DialogTrigger>
      <DialogContent className='bg-white '>
        <FileUpload  onChange={(files) => {
            console.log(selectedFiles);
          setSelectedFiles(files)
        }
        } /> 
        <Button variant="default" className='bg-orange-500 text-white'> Upload </Button>
      </DialogContent>
    </Dialog>
  )
}

export default Modeldialog
