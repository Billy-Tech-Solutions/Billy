'use client'

import { Form } from '@quillforms/renderer-core'
import '@quillforms/renderer-core/build-style/style.css'
import { registerCoreBlocks } from '@quillforms/react-renderer-utils'
import { registerWaitlist } from '@/app/actions'

registerCoreBlocks()

export default function QuillForm() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Form
        formId={1}
        formObj={{
          blocks: [
            {
              id: 'companyType01',
              name: 'dropdown',
              attributes: {
                label: 'Are you an advertiser or an ad space provider?',
                choices: [
                  { label: 'Advertiser', value: 'advertiser' },
                  { label: 'Ad Space Provider', value: 'provider' },
                ],
                required: true,
              },
            },
            {
              id: 'companyEmail01',
              name: 'email',
              attributes: {
                label: 'What is your company email?',
                required: true,
              },
            },
            {
              id: 'companyName01',
              name: 'short-text',
              attributes: {
                label: 'What is your company name?',
                required: true,
              },
            },
            {
              id: 'campaignStartDate01',
              name: 'date',
              attributes: {
                label: 'When does your campaign start?',
                required: true,
              },
            },
            {
              id: 'campaignEndDate01',
              name: 'date',
              attributes: {
                label: 'When does your campaign end?',
                required: true,
              },
            },
            {
              id: 'preferredLocations01',
              name: 'multiple-choice',
              attributes: {
                label: 'Preferred Locations for Your Campaign',
                required: true,
                multiple: true,
                choices: [
                  { label: 'Metro Manila', value: 'metro_manila' },
                  { label: 'Bulacan', value: 'bulacan' },
                  { label: 'NLEX', value: 'nlex' },
                  { label: 'SLEX', value: 'slex' },
                ],
              },
            },
            {
              id: 'adSpaceTypes01',
              name: 'multiple-choice',
              attributes: {
                label: 'Preferred Ad Space Types',
                required: true,
                multiple: true,
                choices: [
                  { label: 'Wall Poster', value: 'wall_poster' },
                  { label: 'LED Board', value: 'led_board' },
                ],
              },
            },
            {
              id: 'targetAgeRange01',
              name: 'multiple-choice',
              attributes: {
                label: 'Target Age Range',
                required: true,
                multiple: true,
                choices: [
                  { label: 'Below 18', value: 'below_18' },
                  { label: '18 - 24', value: '18_24' },
                  { label: '25 - 34', value: '25_34' },
                  { label: '35 - 44', value: '35_44' },
                  { label: '45 - 54', value: '45_54' },
                  { label: '55 - 64', value: '55_64' },
                  { label: '65 and over', value: '65_over' },
                ],
              },
            },
            {
              id: 'targetGender01',
              name: 'multiple-choice',
              attributes: {
                label: 'Target Gender',
                required: true,
                multiple: true,
                choices: [
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  { label: 'No Specific Preference', value: 'no_preference' },
                ],
              },
            },
            {
              id: 'targetIndustries01',
              name: 'multiple-choice',
              attributes: {
                label: 'Target Industries',
                required: true,
                multiple: true,
                choices: [
                  { label: 'Healthcare', value: 'healthcare' },
                  { label: 'Entertainment', value: 'entertainment' },
                  { label: 'Retail', value: 'retail' },
                  { label: 'Technology', value: 'technology' },
                  // Add more industries as needed
                ],
              },
            },
            // Add additional questions or conditional groups as necessary
            {
              id: 'registrationConfirmation',
              name: 'statement',
              attributes: {
                label:
                  'You have successfully registered! Kindly wait for our email confirmation.',
              },
            },
          ],
        }}
        onSubmit={async (data, { completeForm, setIsSubmitting }) => {
          setIsSubmitting(true)
          try {
            // @ts-ignore
            await registerWaitlist(data)
          } catch (e) {
            console.error(e)
          } finally {
            setIsSubmitting(false)
            completeForm()
          }
        }}
      />
    </div>
  )
}
