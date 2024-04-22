'use server'

import { createClient } from '@supabase/supabase-js'

// Defining the expected structure of the form data
type RequestBody = {
  companyEmail: string
  companyName: string
  companyType: string
  locations: string[]
  adSpaceTypes: string[]
  ageRange: string[]
  genders: string[]
  industries: string[]
  campaignStart: Date
  campaignEnd: Date
}

type Answer = {
  value: any
}

type InputData = {
  answers: { [key: string]: Answer }
  companyType: string
}

// Helper function to parse dates from form inputs
const parseDate = (dateStr: string): Date => new Date(dateStr)

// Function to parse the raw form data into structured data
function parseData(input: InputData): RequestBody {
  return {
    companyEmail: input.answers.companyEmail01.value,
    companyName: input.answers.companyName01.value,
    companyType: input.companyType, // Assuming there's a field for companyType
    locations: input.answers.preferredLocations01.value.map(
      (item: any) => item.value
    ),
    adSpaceTypes: input.answers.adSpaceTypes01.value.map(
      (item: any) => item.value
    ),
    ageRange: input.answers.targetAgeRange01.value.map(
      (item: any) => item.value
    ),
    genders: input.answers.targetGender01.value.map((item: any) => item.value),
    industries: input.answers.targetIndustries01.value.map(
      (item: any) => item.value
    ),
    campaignStart: new Date(input.answers.campaignStartDate01.value),
    campaignEnd: new Date(input.answers.campaignEndDate01.value),
  }
}

// Function to handle the registration to the waitlist and database interaction
export async function registerWaitlist(input: InputData) {
  const requestData = parseData(input)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  try {
    const { data, error } = await supabase.from('waitlist').insert({
      email: requestData.companyEmail,
      company_name: requestData.companyName,
      company_type: requestData.companyType,
      locations: requestData.locations,
      ad_space_types: requestData.adSpaceTypes,
      age_range: requestData.ageRange,
      genders: requestData.genders,
      industries: requestData.industries,
      campaign_start: requestData.campaignStart,
      campaign_end: requestData.campaignEnd,
    })

    if (error) throw new Error('Failed to insert data into the database')

    return JSON.stringify({
      message: 'success',
      data: 'Inserted Successfully!',
    })
  } catch (error) {
    console.error('Database operation failed', error)
    throw new Error('Server Error')
  }
}
