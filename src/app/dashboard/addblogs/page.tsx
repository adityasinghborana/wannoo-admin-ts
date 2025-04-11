'use client'

import { Button } from '@/components/ui/button'
import { createBlog, UploadBackgroundImage } from '@/services/api_helper'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ImageUploader from '@/components/thumbnail-uploader'
import AdvanceTextField from '@/components/advanced_text_field'
import Container from '@/components/container'


const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {}, [])

  //   const handleConfirm = async () => {
  //     const formData = new FormData();
  //     formData.append("image", selectedImage);
  //     const  imgData = await UploadBackgroundImage(formData);
  //     // Assuming you're storing image paths in a field named "imagepaths"
  //     setSelectedImage(imgData?.path);
  //     setIsModalOpen(false);
  //   };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageSelect = async (file: File | null) => {
    if (!file) return

    try {
      const formData = new FormData()
      formData.append('images', file)

      const response = await UploadBackgroundImage(formData)

      if (response?.files[0].path) {
        setSelectedImage(response?.files[0].path)
        console.log(response?.files[0].path) // Save path returned by the server
        toast.success('Image uploaded successfully')
      } else {
        toast.error('Failed to upload image')
      }
    } catch (error) {
      toast.error('Upload error')
      console.error('Image upload error:', error)
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataToPost = {
      title: title,
      imagepath: selectedImage, // Change 'selectedImage' to 'imagepath'
      content: content // Change 'body' to 'content'
    }

    try {
      createBlog(dataToPost).then(res => {
        if (res.result.clientVersion != null) {
          toast.error('Something Went Wrong')
        } else {
          toast.success('Blog Added Successfully')
        }
      })
      console.log('Blog added:', dataToPost)
    } catch (error) {
      toast.error('Something Went Wrong')
      console.error('Failed to add Blog:', error)
    }
  }

  return (
   <Container className=' border-0 '>
   

      <form
        onSubmit={handleSubmit}
   
      >
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
            Title
          </label>
          <input
            type='text'
            id='title'
            placeholder='Enter title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div>
          <div>
            <ImageUploader onChange={handleImageSelect} />
          </div>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='content'
            className='block text-gray-700 font-bold mb-2'
          >
            Content
          </label>

          <AdvanceTextField
            value={content}
            onChange={val => setContent(val)}
            placeholder='Write your blog post...'
          />
        </div>
        <div className='mt-6 py-10'>
        <Button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded'
        >
          Submit
        </Button>
        </div>
      </form>

   </Container>
  )
}

export default BlogEditor
