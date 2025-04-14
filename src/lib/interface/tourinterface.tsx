/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Tour {
    id: number
    tourId: number
    continent: string
    countryId: number
    countryName: string
    cityId: number
    cityName: string
    tourName: string
    duration: string
    imagePath: string
    cityTourTypeId: string
    cityTourType: string
    Alwaysavailable: boolean
    Startingdate: any
    Endingdate: any
    recommended: boolean
    isvisible: boolean
    isvisiblePopularTours: boolean
    isvisibleReccomendedTours: boolean
    isVendorTour: boolean
    vendorUid: string
  }