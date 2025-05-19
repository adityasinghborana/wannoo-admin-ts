/* eslint-disable @next/next/no-img-element */
'use client'

import { useCategoryController } from './CategoryController'
import Container from '@/components/layout/container'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react' // Or your preferred icon library
import { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import Column from '@/components/layout/column'
import ImageUploader from '@/components/thumbnail-uploader'

const Category = () => {
  const {
    categoryName,
    handleChange,
    handleSubmit,
    cancelEdit,
    isModalOpen,
    isSuccess,
    categoryList,
    openModalForEdit,
    openModalForDelete,
    handleDelete,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    closeModal,
    selectedId,
    isEdit,
    setIsEdit,
    handleImageSelect,
    fetchCategories
  } = useCategoryController()
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <Container>
      <h2 className='text-2xl text-black font-bold mb-6 text-center'>
        {selectedId ? 'Update Category' : 'Add Category'}
      </h2>
      <div className='flex flex-row gap-8'>
        {/* Left Side Form */}
        <Column className='w-1/3 justify-center'>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
            
            <div className='mb-4'>
              <label className='block text-gray-700 capitalize'>
                {isEdit ? 'Edit Category Name' : 'Add Category Name'}
              </label>
              <Input
                type='text'
                name='name'
                value={categoryName}
                onChange={handleChange}
                className='w-full text-field'
              />
            </div>
            <div>
              <ImageUploader onChange={handleImageSelect} />
            </div>
            {/* Submit Button */}
            <div className='flex'>
              <Button
                type='submit'
                className='bg-primary py-2 px-4 rounded hover:bg-blue-400 w-full'
              >
                {isEdit ? 'Update' : 'Submit'}
              </Button>
            </div>

            {isEdit && (
              <Button
                type='button'
                variant='outline'
                className='w-full text-gray-600 mt-2'
                onClick={cancelEdit}
              >
                Cancel Edit
              </Button>
            )}
          </form>
        </Column>

        {/* Right Side Category List */}
        <div className='w-2/3'>
          <h3 className='text-xl font-bold mb-4'>Category List</h3>
          <ScrollArea className='h-[700px] w-full rounded-md border p-4'>
            {categoryList.length > 0 ? (
              categoryList.map((category, index) => (
                <div
                  key={index}
                  className='p-2 border-b flex justify-between items-center'
                >
                  <div>
                    <p>
                      <strong>Name:</strong> {category.cityTourType}
                    </p>
                    <div className='mt-2'>
                      <strong>Image:</strong>
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}${category.image}`}
                        className='w-20 h-20 rounded-lg mt-1 object-cover'
                        alt='Category'
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      variant={'ghost'}
                      className='text-primary mr-3'
                      onClick={() => {
                        openModalForEdit(category)
                        setIsEdit(!isEdit)
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant={'outline'}
                      className='text-red-500'
                      onClick={() => openModalForDelete(category.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p>No categories found.</p>
            )}
          </ScrollArea>
        </div>
      </div>

      {/* Success/Error Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle
              className={isSuccess ? 'text-green-600' : 'text-red-600'}
            >
              {isSuccess ? 'Success' : 'Error'}
            </DialogTitle>
            <DialogDescription className='mt-2 flex items-center gap-2'>
              {isSuccess ? (
                <>
                  <IconCircleCheck className='h-5 w-5 text-green-500' />
                  Category saved successfully!
                </>
              ) : (
                <>
                  <IconCircleX className='h-5 w-5 text-red-500' />
                  Failed to save category.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-end mt-4'>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this category?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant='destructive' onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Category
