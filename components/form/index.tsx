'use client'

import { Form } from '@quillforms/renderer-core'
import '@quillforms/renderer-core/build-style/style.css'
import { registerCoreBlocks } from '@quillforms/react-renderer-utils'
import { registerWaitlist } from '@/app/actions'
import { useState } from 'react'
import { motion } from 'framer-motion'

registerCoreBlocks()

export default function QuillForm() {
  const [companyType, setCompanyType] = useState(null)

  const formBlocksAdvertiser = [
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
          { label: 'Fashion', value: 'fashion' },
          { label: 'Business', value: 'business' },
          { label: 'Finance', value: 'finance' },
          { label: 'Education', value: 'education' },
          { label: 'Construction', value: 'construction' },
          { label: 'Agriculture', value: 'agriculture' },
          { label: 'Fishing', value: 'fishing' },
          { label: 'Manufacturing', value: 'manufacturing' },
          { label: 'Transportation', value: 'transportation' },
        ],
      },
    },
    {
      id: 'registrationConfirmation',
      name: 'statement',
      attributes: {
        label:
          'You have successfully registered! Kindly wait for our email confirmation.',
      },
    },
  ]

  const formBlocksProvider = [
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
      id: 'adSpaceLocations01',
      name: 'multiple-choice',
      attributes: {
        label: 'Locations of Available Ad Spaces',
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
      id: 'providedAdSpaceTypes01',
      name: 'multiple-choice',
      attributes: {
        label: 'Types of Ad Spaces Provided',
        required: true,
        multiple: true,
        choices: [
          { label: 'Wall Poster', value: 'wall_poster' },
          { label: 'LED Board', value: 'led_board' },
        ],
      },
    },
    {
      id: 'registrationConfirmation',
      name: 'statement',
      attributes: {
        label:
          'You have successfully registered! Kindly wait for our email confirmation.',
      },
    },
  ]

  return (
    <div className="bg-black h-screen">
      {!companyType ? (
        <div id="forms__section1" className="forms__section__styles">
          <h1 className="forms__heading__styles">Hello, tell us about you!</h1>
          <div className="w-full flex flex-col gap-4">
            <button
              className="forms__button__styles hover:bg-gradient-to-br hover:from-purple-main hover:to-pink-main transition-colors"
              onClick={() => setCompanyType('advertiser')}
            >
              I am a Business Owner
            </button>
            <button
              className="forms__button__styles hover:bg-gradient-to-br hover:from-purple-main hover:to-pink-main transition-colors"
              onClick={() => setCompanyType('provider')}
            >
              I am an Ad Space Provider
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className="h-screen w-screen"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Form
            formId={1}
            formObj={{
              blocks:
                companyType === 'advertiser'
                  ? formBlocksAdvertiser
                  : formBlocksProvider,
            }}
            onSubmit={async (data, { completeForm, setIsSubmitting }) => {
              setIsSubmitting(true)
              try {
                // @ts-ignore
                await registerWaitlist({ ...data, companyType })
              } catch (e) {
                console.error(e)
              } finally {
                setIsSubmitting(false)
                completeForm()
              }
            }}
            applyLogic={false}
          />
        </motion.div>
      )}
    </div>
  )
}
