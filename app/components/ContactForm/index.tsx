'use client'

import './contactform.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { createObserver } from '../Observer'
import validator from 'validator'
import GSAP from 'gsap'

export default function ContactForm({
  data,
  modal,
  animated,
}: {
  data: Content.ContactFormSlice
  modal: Content.ContactFormDocumentData
  animated?: boolean
}) {
  // const animated = true
  const wrapper = useRef<HTMLDivElement>(null)
  const inputs = useRef<HTMLFormElement>(null)
  const successModal = useRef<HTMLDivElement>(null)
  const successImage = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  const username = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const phone = useRef<HTMLInputElement>(null)

  const timeline = GSAP.timeline()

  const sendEmail = (event: FormEvent) => {
    event.preventDefault()
    button.current!.disabled = true
    const emptyCheck = [username.current!, email.current!, phone.current!]

    emptyCheck.forEach((element) => {
      if (!element.value) {
        element.classList.add('error')
      }

      return
    })

    const data = {
      name: username.current!.value,
      email: email.current!.value,
      phone: phone.current!.value,
    }

    let errored = false

    if (!validator.isEmail(data.email)) {
      const isSet = inputs.current?.querySelector('.email')

      if (isSet) return

      email.current!.classList.add('error')
      email.current!.classList.add('email')
      const newDiv = document.createElement('p')
      newDiv.innerHTML = 'Please provide the correct email address'
      newDiv.classList.add('error__caption')
      inputs.current!.insertBefore(newDiv, phone.current!)

      errored = true
    } else {
      email.current!.classList.remove('error')
      const div = inputs.current?.querySelector('.error__caption')
      div ? div.remove() : null
    }

    if (!validator.isMobilePhone(data.phone)) {
      const isSet = inputs.current?.querySelector('.phone')

      if (isSet) return

      phone.current!.classList.add('error')
      phone.current!.classList.add('phone')

      const newDiv = document.createElement('p')
      newDiv.innerHTML =
        'Please provide the correct phone number +X XXX XXX XX XX'
      newDiv.classList.add('error__caption')
      inputs.current!.insertBefore(newDiv, button.current!)

      errored = true
    } else {
      phone.current!.classList.remove('error')
    }

    if (errored) {
      return (button.current!.disabled = false)
    }

    const apiEndpoint = '/api/email'
    // showModal()

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        showModal()
        button.current!.disabled = false
      })
      .catch((err) => {
        alert(err)
        button.current!.disabled = false
      })
  }

  const showModal = () => {
    const image = successModal.current?.querySelector(
      '.success__modal__image__wrapper'
    )!
    const title = successModal.current?.querySelector('.success__modal__title')!
    const description = successModal.current?.querySelector(
      '.success__modal__description'
    )!

    GSAP.to(successModal.current, {
      autoAlpha: 1,
    })

    GSAP.from(image, {
      scale: 0.75,
      autoAlpha: 0,
      duration: 0.75,
      ease: 'power3.out',
    })
  }

  const closeModal = () => {
    GSAP.to(successModal.current, {
      autoAlpha: 0,
      duration: 0.35,
    })
  }

  const animateIn = () => {
    const image = wrapper.current?.querySelectorAll(
      '.contactform__image__wrapper'
    )!
    const title = wrapper.current?.querySelector('.contactform__title')!
    const description = wrapper.current?.querySelector(
      '.contactform__description'
    )!
    const inputs = Array.from(
      wrapper.current?.querySelectorAll('.contactform__input__helper')!
    )
    const button = wrapper.current?.querySelector('.contactform__button')!

    timeline.from(image, {
      autoAlpha: 0,
      scale: 0.75,
      duration: 0.5,
    })

    timeline.from(
      [title, description],
      {
        autoAlpha: 0,
        duration: 0.5,
        stagger: {
          amount: 0.35,
        },
      },
      '<'
    )

    timeline.from(
      inputs,
      {
        autoAlpha: 0,
        xPercent: -10,
        duration: 0.5,
        stagger: {
          amount: 0.35,
        },
      },
      '>'
    )

    timeline.from(
      button,
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      '>'
    )
  }

  useEffect(() => {
    document.body.appendChild(successModal.current!)

    if (!animated) return
    createObserver({
      element: wrapper.current,
      animationIn: animateIn,
      rootMargin: '-15% 0% -15% 0%',
      threshold: 0.35,
      freeze: true,
    })
  }, [])

  return (
    <div className='contactform'>
      <div className='success__modal__wrapper' ref={successModal}>
        <div className='success__modal'>
          <figure className='success__modal__image__wrapper' ref={successImage}>
            <PrismicNextImage field={modal.image} alt='' priority />
          </figure>
          <div className='success__modal__title'>
            <PrismicRichText field={modal.title} />
          </div>
          <div className='success__modal__description'>
            <PrismicRichText field={modal.description} />
          </div>
          <button className='success__modal__button' onClick={closeModal}>
            {modal.button_caption}
          </button>
        </div>
        <div className='success__modal__background' onClick={closeModal}></div>
      </div>
      <div className='contactform__wrapper' ref={wrapper} id='form-anchor'>
        <figure
          className='contactform__image__wrapper'
          style={{ visibility: animated ? 'hidden' : 'visible' }}
        >
          <PrismicNextImage
            className='contactform__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
        <div className='contactform__content__wrapper'>
          <div
            className='contactform__title'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='contactform__description'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            <PrismicRichText field={data.primary.description} />
          </div>
          <form className='contactform__inputs__wrapper' ref={inputs}>
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.name_helper_text!}
              style={{ visibility: animated ? 'hidden' : 'visible' }}
              ref={username}
              required
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.email_helper_text!}
              style={{ visibility: animated ? 'hidden' : 'visible' }}
              ref={email}
              required
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.phone_helper_text!}
              style={{ visibility: animated ? 'hidden' : 'visible' }}
              ref={phone}
              required
            />
            <button
              className='contactform__button'
              style={{ visibility: animated ? 'hidden' : 'visible' }}
              onClick={sendEmail}
              type='submit'
              ref={button}
              // disabled
            >
              {data.primary.button_caption}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
