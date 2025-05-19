/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent } from 'react'
import {
  AddTourTypes,
  DeleteTourTypes,
  GetAllTourTypes,
  UpdateTourTypes,
  UploadBackgroundImage
} from '@/services/api_helper'
import { toast } from 'react-toastify'

export const useCategoryController = () => {
  const [categoryName, setCategoryName] = useState('')
  const [imagepath, setImagePath] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

 const handleImageSelect = async (file: File | null) => {
       if (!file) return
   
       try {
         const formData = new FormData()
         formData.append('images', file)
   
         const response = await UploadBackgroundImage(formData)
   
         if (response?.files[0].path) {
           setImagePath(response?.files[0].path)
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

  const fetchCategories = async () => {
    const data = await GetAllTourTypes()
    setCategoryList(data)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (selectedId) {
        await UpdateTourTypes(selectedId, {
          name: categoryName,
          image: imagepath
        })
      } else {
        await AddTourTypes({
          name: categoryName,
          image: imagepath
        })
      }

      setIsSuccess(true)
      fetchCategories()
      closeModal()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSuccess(false)
    } finally {
      setIsModalOpen(true)
    }
  }
  const cancelEdit = () => {
    setSelectedId(null)
    setCategoryName('')
    setImagePath('')
    setIsEdit(false)
  }

  const handleDelete = async () => {
    try {
      await DeleteTourTypes(deleteId as string)
      fetchCategories()
    } catch (error) {
      console.error("Error deleting category", error)
    } finally {
      setIsDeleteModalOpen(false)
    }
  }

  const openModalForEdit = (category: any) => {
    setSelectedId(category.id)
    setCategoryName(category.cityTourType)
    setImagePath(category.image)
  
  }

  const openModalForDelete = (id: string) => {
    setDeleteId(id)
    setIsDeleteModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCategoryName('')
    setImagePath('')
    setSelectedId(null)
  }

  return {
    categoryName,
    setCategoryName,
    imagepath,
    setImagePath,
    isModalOpen,
    setIsModalOpen,
    isSuccess,
    setIsSuccess,
    categoryList,
    handleChange,
    handleSubmit,
    openModalForEdit,
    openModalForDelete,
    handleDelete,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    closeModal,
    fetchCategories,
    handleImageSelect,
    setIsEdit,
    isEdit,
    cancelEdit,selectedId,
  }
}