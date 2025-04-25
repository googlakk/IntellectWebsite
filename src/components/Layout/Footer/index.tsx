import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { HeaderItem } from '@/types/menu'

const Footer: FC = () => {
  const t = useTranslations('header')
  const locale = useLocale()
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/intellect_pro_school/',
      icon: 'instagram',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/p/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0-%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82-100070964040881/',
      icon: 'facebook',
    },
    { name: 'WhatsApp', url: ' https://wa.me/996705889889', icon: 'whatsapp' },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=8xX7T_tdvjw',
      icon: 'youtube',
    },
  ]

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'instagram':
        return (
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        )
      case 'facebook':
        return (
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        )
      case 'whatsapp':
        return (
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.627 0-12.015 5.389-12.015 12.01 0 2.237.614 4.364 1.727 6.216l-1.157 4.226 4.31-1.128a11.98 11.98 0 005.519 1.355h.006c6.627 0 12.014-5.389 12.014-12.012 0-3.21-1.257-6.226-3.539-8.497" />
        )
      case 'youtube':
        return (
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        )
      default:
        return null
    }
  }
  const headerData: HeaderItem[] = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: `/${locale}/aboutUs` },
    { label: t('junior'), href: `/${locale}/junior` },
    { label: t('team'), href: `/${locale}/teams` },
    {
      label: t('forParents'),
      href: `/${locale}/forParents`,
      submenu: [
        {
          label: t('lostThings'),
          href: 'https://drive.google.com/drive/folders/1S9O9NrE93LnYXzIJRCipvU5O8nK5X9Ir?usp=sharing',
        },
        {
          label: t('edupage'),
          href: 'https://intellectschool.edupage.org/',
        },
      ],
    },
    { label: t('results'), href: `/${locale}/results` },
    { label: t('blog'), href: `/${locale}/blog` },
    { label: t('docs'), href: `/${locale}/documentation` },
    { label: t('contact'), href: `/${locale}/contact` },
  ]

  return (
    <footer className="bg-secondary">
      <div className="container">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between flex-wrap md:pt-44 pt-16 pb-4  border-b border-solid border-dark_border">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo/logoInt.jpeg"
                  alt="logo"
                  width={70}
                  height={64}
                  style={{ width: '80px', height: 'auto' }}
                  quality={100}
                />
              </Link>
            </div>
            <div>
              <ul className="flex items-center flex-wrap md:gap-30 gap-3 md:py-0 py-5">
                {headerData.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-PaleCerulean  text-[14px] font-normal transition-all duration-0.4s hover:text-primary"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <SocialIcon icon={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8">
          <div className="col-span-5">
            <p className="text-base font-normal text-PaleCerulean">
              © All rights reserved. Made by{' '}
              <Link href="/" className="hover:text-white">
                Intellect
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
