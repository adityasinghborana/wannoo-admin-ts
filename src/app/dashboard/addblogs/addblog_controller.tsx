'use client'

import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { createBlog, UploadBackgroundImage } from '@/services/api_helper'


export const AddblogController = () => {

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState('')
  

  
  
  
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
return {
  handleSubmit,
  title,
  setTitle,
  content,
  setContent,
  handleImageSelect,
  selectedImage}
}



