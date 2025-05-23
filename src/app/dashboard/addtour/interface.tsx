import { z } from 'zod'

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string()
})

export const AddTourRequestSchema = z.object({
  countryid: z.number(),
  continent: z.string(),
  countryname: z.string(),
  cityid: z.number(),
  cityname: z.string(),
  tourname: z.string(),
  duration: z.string(),
  category: z.string(),
  citytourtype: z.string(),
  vendoruid: z.string(),
  tourdescription: z.string(),
   tourinclusion: z.string(),
   shortdescription: z.string(),
   importantinformation: z.string(),
   itenararydescription: z.string(),
   usefulinformation: z.string(),
  amount: z.string(),
  starttime: z.string(),
  googlemapurl: z.string().url(),
  // tourexclusion: z.string(),
  faqs: z.array(FaqSchema)
})

export type AddTourRequest = z.infer<typeof AddTourRequestSchema>