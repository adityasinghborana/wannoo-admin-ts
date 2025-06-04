'use client'
export const dynamic = 'force-dynamic';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Container from '@/components/layout/container'
import Row from '@/components/layout/row'
import Column from '@/components/layout/column'
import ImageUploader from '@/components/thumbnail-uploader'
import Edittourcontroller, { TourDetail } from './edittourcontroller'
import { toast } from 'react-toastify'
import { ScrollArea } from '@/components/ui/scroll-area'
import Modeldialog from '@/components/model_dialog'
import Image from 'next/image'
import AdvanceTextField from '@/components/advanced_text_field'
import { useEffect, useState } from 'react'
import { EditTourRequest, EditTourRequestSchema } from './editinterface'
import { useSearchParams } from 'next/navigation'

export default function AddTourForm () {
  const {
    selectedImage,
    handleImageSelect,
    handleUpload,
    selectedImages,
    setSelectedImage,
    setSelectedImages,
    getTourDetail,
    getUid
  } = Edittourcontroller()
  const [tourId, setTourId] = useState<number >(0)
  const searchParams = useSearchParams()
  const [tourDetail, setTourDetail] = useState<TourDetail| null>(null)
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<EditTourRequest>({
    resolver: zodResolver(EditTourRequestSchema),
    defaultValues: {
      faqs: [{ question: '', answer: '' }]
    }
  })

  console.log('Tour Detail:', tourDetail);

useEffect(() => {
    const query = searchParams.get('tourId')

    if (query ) {
        console.log(query );
      const queryInt = parseInt(query )
      setTourId(queryInt)

      const uid = getUid()
      setValue('vendoruid', uid)

      
    }
  }, [searchParams, setValue, getUid])
  useEffect(() => {
    if (tourId !== null) {
      getTourDetail( tourId ).then((res) => {
        if(res){
          setTourDetail(res);
          setSelectedImages(res.tourImages?.map((img) => img.imagePath) || []);
          setSelectedImage(res.imagePath || null);
          setValue('tourname', res.tourName || '');
          setValue('tourdescription', res.tourDescription || '');
          setValue('tourinclusion', res.tourInclusion || '');
          setValue('shortdescription', res.tourShortDescription || '');
          setValue('importantinformation', res.importantInformation || '');
          setValue('itenararydescription', res.itenararyDescription || '');
          setValue('usefulinformation', res.usefulInformation || '');
          setValue('faqs', res.faqs || [{ question: '', answer: '' }]);
          setValue('countryid', res.countryId || 0);
          setValue('cityid', res.cityid || 0);
          setValue('continent', res.continent || '');
          setValue('countryname', res.countryname || '');
          setValue('cityname', res.cityname || '');
          setValue('duration', res.duration || '');
          setValue('citytourtypeid', res.cityTourTypeId || '');
          setValue('citytourtype', res.cityTourType || '');
          setValue('amount', res.amount || '');
          setValue('starttime', res.startTime || '');
          setValue('googlemapurl', res.googleMapUrl || '');
        }
      });
    }
  }, [tourId, setValue]);
  

  const { fields: faqFields, append: appendFaq } = useFieldArray({
    control,
    name: 'faqs'
  })

  const onSubmit: SubmitHandler<EditTourRequest> = data => {
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

    console.log('✅ Submitted Data:', finalData)
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
    'shortdescription',
    'countryname',
    'cityname',
    'continent'
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
                {Object.entries(EditTourRequestSchema.shape).map(([key]) => {
                  if (excludedFields.has(key)) return null
  
  
                  return (
                    <div key={key}>
                      <Label htmlFor={key}>{key}</Label>
                      <Input
                        type={
                          key.includes('id') || key === 'amount'
                            ? 'number'
                            : 'text'
                        }
                        {...register(key as keyof EditTourRequest)}
                      />
                      {errors[key as keyof EditTourRequest] && (
                        <p className='text-red-500 text-sm'>
                          {errors[
                            key as keyof EditTourRequest
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
                      width={100}
                      height={100}
                      className='rounded-md'
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mb-2">No images yet.</p>
              )}

              {/* Always show uploader */}
              <Modeldialog onUpload={handleUpload} label="Upload more images" />
            </Container>
            {/* Thumbnail */}
              <Container className='mt-4'>
                <Label>Thumbnail</Label>
                {selectedImage && (
                  <Image
                    alt='Selected Thumbnail'
                    src={`${process.env.NEXT_PUBLIC_URL}${selectedImage}`}
                    width={250}
                    height={150}
                    className='mt-4 rounded-md object-cover'
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