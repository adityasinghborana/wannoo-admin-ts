'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Container from '@/components/layout/container'
import Row from '@/components/layout/row'
import Column from '@/components/layout/column'
import ImageUploader from '@/components/thumbnail-uploader'
import Addtourcontroller from './addtourcontroller'
import { toast } from 'react-toastify'
import { ScrollArea } from '@/components/ui/scroll-area'
import Modeldialog from '@/components/model_dialog'
import Image from 'next/image'
import AdvanceTextField from '@/components/advanced_text_field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { useEffect } from 'react'
import { AddTourRequest, AddTourRequestSchema } from './interface'
import { AddTour } from '@/services/api_helper'
export default function AddTourForm () {
  const {
    selectedImage,
    handleImageSelect,
    handleUpload,
    selectedImages,
    continents,
    getContinents,
    getCountries,
    countries,
    cities,
    getCities,
    getUid
  } = Addtourcontroller()
  useEffect(() => {
    const uid = getUid()
    setValue('vendoruid', uid)

    getContinents()
  }, [])
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<AddTourRequest>({
    resolver: zodResolver(AddTourRequestSchema),
    defaultValues: {
      faqs: [{ question: '', answer: '' }]
    }
  })

  const { fields: faqFields, append: appendFaq } = useFieldArray({
    control,
    name: 'faqs'
  })

  const onSubmit: SubmitHandler<AddTourRequest> = async data => {
    if (!selectedImage) {
      toast.error('Please upload an image before submitting.')
      return
    }
    if (!selectedImages) {
      toast.error('Please upload an images before submitting.')
      return
    }
    const finalData = {
      imagepath: selectedImage,
      imagepaths: selectedImages,
      ...data
    }

    // TODO add addTour api
    try{
      const response = await AddTour(finalData);
      console.log('Add tour api ',response);
    }catch(error){
      console.error('add tour api  error',error);
    }
  }

  const onError = (errors: unknown) => {
    console.error('❌ Validation Errors:', errors)
  }

  const excludedFields = new Set([
    'faqs',
    'imagepath',
    'tourdescription',
    'tourinclusion', 
    'importantinformation', //TODO: Make feild for this
    'itenararydescription', //TODO: Make feild for this
    'usefulinformation', //TODO: Make feild for this
    'vendoruid',
    'countryid',
    'cityid',
    'shortdescription'
  ])

  return (
    <div className='w-full mx-auto px-6  '>
      <Row>
        <ScrollArea className='h-screen  w-full'>
          <Container className='w-full h-[95%] my-6'>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className='space-y-4'
            >
              {Object.entries(AddTourRequestSchema.shape).map(([key]) => {
                if (excludedFields.has(key)) return null

                //SECTION - Continents

                if (key === 'continent') {
                  return (
                    <div key={key}>
                      <Label htmlFor={key}>{key}</Label>
                      <Select
                        onValueChange={value => {
                          setValue('continent', value)
                          getCountries(value)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select Continent' />
                        </SelectTrigger>
                        {continents.length > 0 ? (
                          <SelectContent>
                            {continents.map(c => (
                              <SelectItem key={c.id} value={c.name}>
                                {c.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        ) : (
                          <p className='text-sm text-gray-500'>
                            Loading continents...
                          </p>
                        )}
                      </Select>
                    </div>
                  )
                }

                //SECTION - countries

                if (key === 'countryname') {
                  return (
                    countries.length > 0 && (
                      <div key={key}>
                        <Label htmlFor={key}>{key}</Label>
                        <Select
                          onValueChange={value => {
                            setValue('countryname', value)
                            getCities(value)
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select Country' />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map(c => (
                              <SelectItem key={c.CountryId} value={c.name}>
                                {c.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )
                  )
                }

                //SECTION - Cities
                if (key === 'cityname') {
                  return (
                    cities.length > 0 && (
                      <div key={key}>
                        <Label htmlFor={key}>{key}</Label>
                        <Select
                          onValueChange={value => {
                            const selectedCity = cities.find(
                              c => c.CityName === value
                            )
                            if (selectedCity) {
                              setValue('cityname', selectedCity.CityName) // or value
                              setValue('countryid', selectedCity.countryId)
                              setValue('cityid', selectedCity.id)
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select City' />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map(c => (
                              <SelectItem key={c.id} value={c.CityName}>
                                {c.CityName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )
                  )
                }

                return (
                  <div key={key}>
                    <Label htmlFor={key}>{key}</Label>
                    <Input
                      type={
                        key.includes('id') || key === 'amount'
                          ? 'number'
                          : 'text'
                      }
                      {...register(key as keyof AddTourRequest)}
                    />
                    {errors[key as keyof AddTourRequest] && (
                      <p className='text-red-500 text-sm'>
                        {errors[
                          key as keyof AddTourRequest
                        ]?.message?.toString()}
                      </p>
                    )}
                  </div>
                )
              })}
              <div className='my-16'>
                <Label>Tour Description</Label>
                <AdvanceTextField
                  value={watch('tourdescription')}
                  onChange={value => setValue('tourdescription', value)}
                  placeholder='Enter tour description'
                />
                {errors.tourdescription && (
                  <p className='text-red-500 text-sm'>
                    {errors.tourdescription.message?.toString()}
                  </p>
                )}
              </div>

              <div className='my-16'>
                <Label>Tour Inclusion</Label>
                <AdvanceTextField
                  value={watch('tourinclusion')}
                  onChange={value => setValue('tourinclusion', value)}
                  placeholder='Enter tour inclusion'
                />
                {errors.tourinclusion && (
                  <p className='text-red-500 text-sm'>
                    {errors.tourinclusion.message?.toString()}
                  </p>
                )}
              </div>

              <div className='my-16'>
                <Label>Short Description</Label>
                <AdvanceTextField
                  value={watch('shortdescription')}
                  onChange={value => setValue('shortdescription', value)}
                  placeholder='Enter short description'
                />
                {errors.shortdescription && (
                  <p className='text-red-500 text-sm'>
                    {errors.shortdescription.message?.toString()}
                  </p>
                )}
              </div>
              <div className='my-16'>
                <Label>importantinformation</Label>
                <AdvanceTextField
                  value={watch('importantinformation')}
                  onChange={value => setValue('importantinformation', value)}
                  placeholder='Enter short description'
                />
                {errors.importantinformation && (
                  <p className='text-red-500 text-sm'>
                    {errors.importantinformation.message?.toString()}
                  </p>
                )}
              </div>
              <div className='my-16'>
                <Label>itenararydescription</Label>
                <AdvanceTextField
                  value={watch('itenararydescription')}
                  onChange={value => setValue('itenararydescription', value)}
                  placeholder='Enter short description'
                />
                {errors.itenararydescription && (
                  <p className='text-red-500 text-sm'>
                    {errors.itenararydescription.message?.toString()}
                  </p>
                )}
              </div>
              <div className='my-16'>
                <Label>usefulinformation</Label>
                <AdvanceTextField
                  value={watch('usefulinformation')}
                  onChange={value => setValue('usefulinformation', value)}
                  placeholder='Enter short description'
                />
                {errors.usefulinformation && (
                  <p className='text-red-500 text-sm'>
                    {errors.usefulinformation.message?.toString()}
                  </p>
                )}
              </div>


              {/* // SECTION - Faqs*/}
              <div className='my-28'>
                <Label>FAQs</Label>
                {faqFields.map((field, index) => (
                  <div key={field.id} className='mb-4'>
                    <Input
                      placeholder='Question'
                      {...register(`faqs.${index}.question` as const)}
                      className='mb-2'
                    />
                    <Input
                      placeholder='Answer'
                      {...register(`faqs.${index}.answer` as const)}
                    />
                  </div>
                ))}
                <Button
                  type='button'
                  onClick={() => appendFaq({ question: '', answer: '' })}
                  variant='outline'
                >
                  + Add FAQ
                </Button>
              </div>

              <Button type='submit'>Submit</Button>
            </form>
          </Container>
        </ScrollArea>
        <Column className='px-4 w-1/3 my-6'>
          <Container>
            <Label>Tour Images</Label>

            {selectedImages.length > 0 ? (
              <div className='mt-4 flex flex-wrap gap-4'>
                {selectedImages.map((image, index) => (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_URL}${image}`}
                    alt={`Selected ${index + 1}`}
                    width={50}
                    height={50}
                    className='rounded-md'
                  />
                ))}
              </div>
            ) : (
              <Modeldialog
                onUpload={handleUpload}
                label={'Select or upload image '}
              />
            )}
          </Container>
          <Container className='mt-4'>
            <Label>Thumbnail</Label>
            {selectedImage && (
              <Image
                alt='Selected Image'
                objectFit='cover'
                src={`${process.env.NEXT_PUBLIC_URL}${selectedImage}`}
                width={250}
                height={150}
                className='mt-4 rounded-md'
              />
            )}
            <div className='mt-4'>
              <ImageUploader onChange={handleImageSelect} />
            </div>
          </Container>
        </Column>
      </Row>
    </div>
  )
}
