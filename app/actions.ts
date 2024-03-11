'use server'

import { Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

type RequestBody = {
  companyEmail: string
  companyName: string
  companyType: string
  locations: {
    location: string
    selected: boolean
  }[]
  adSpaceTypes: {
    name: string
    selected: boolean
  }[]
  ageRange: {
    range: string
    selected: boolean
  }[]
  genders: {
    gender: string
    selected: boolean
  }[]
  industries: {
    name: string
    selected: boolean
  }[]
  campaignStart: Date
  campaignEnd: Date
}

type SelectableItem = {
  selected: boolean
}

function getSelectedItems<T extends SelectableItem>(items: T[]): T[] {
  return items.filter((item) => item.selected)
}

export async function registerWaitlist(request: RequestBody) {
  console.log(request)

  try {
    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const {
      companyEmail: email,
      companyType: company_type,
      companyName: company_name,
      // locations,
      // adSpaceTypes: ad_space_types,
      // ageRange: age_range,
      // genders,
      // industries,
      campaignStart: campaign_start,
      campaignEnd: campaign_end,
    } = request

    const locations = getSelectedItems(request.locations)
    const ad_space_types = getSelectedItems(request.adSpaceTypes)
    const age_range = getSelectedItems(request.ageRange)
    const genders = getSelectedItems(request.genders)
    const industries = getSelectedItems(request.industries)

    const { data, error } = await supabase.from('waitlist').insert({
      email,
      company_type,
      company_name,
      locations,
      ad_space_types,
      age_range,
      genders,
      industries,
      campaign_start,
      campaign_end,
    })

    if (error) {
      console.log('db error')
      // return NextResponse.json(
      //   {
      //     status: 500,
      //     message: 'Server Error!',
      //     data: 'Something went wrong with DB',
      //   },
      //   { status: 500 }
      // )
      throw error
    }
    // return NextResponse.json(
    //   {
    //     status: 200,
    //     message: 'success',
    //     data: 'Inserted Successfully!',
    //   },
    //   { status: 200 }
    // )
    return JSON.stringify({
      message: 'success',
      data: 'Inserted Successfully!',
    })
  } catch (e) {
    console.log(e)
    // return NextResponse.json(
    //   {
    //     status: 500,
    //     message: 'Server Error!',
    //     data: e,
    //   },
    //   { status: 500 }
    // )
    throw e
  }
}
