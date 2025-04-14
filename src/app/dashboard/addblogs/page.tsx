'use client'

import { Button } from '@/components/ui/button'
import ImageUploader from '@/components/thumbnail-uploader'
import AdvanceTextField from '@/components/advanced_text_field'
import Container from '@/components/layout/container'
import {AddblogController} from './addblog_controller'


const BlogEditor: React.FC = () => {
  const {handleSubmit,title, setTitle, content, setContent, handleImageSelect} = AddblogController()

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


