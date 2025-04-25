import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Footer: FC = () => {
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

  return (
    <footer className="bg-secondary">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap md:pt-44 pt-16 md:pb-20 pb-6 border-b border-solid border-dark_border">
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
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">Главная</Link>
              </li>
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">О нас</Link>
              </li>
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">Наша команда</Link>
              </li>
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">Потеряшки</Link>
              </li>
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">Документации</Link>
              </li>
              <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                <Link href="/">Контакты</Link>
              </li>
            </ul>
          </div>
          <div>
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
            {/* <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="https://www.instagram.com/intellect_pro_school/"
                  className="group"
                >
                  <svg
                    width="26"
                    height="27"
                    fill="white"
                    viewBox="0 0 26 27"
                    className="group-hover:fill-ElectricAqua"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_instagram)">
                      <path d="M18.3333 1.83875H7.66667C4.27641 1.83875 1.5 4.61516 1.5 8.00542V18.6721C1.5 22.0623 4.27641 24.8387 7.66667 24.8387H18.3333C21.7236 24.8387 24.5 22.0623 24.5 18.6721V8.00542C24.5 4.61516 21.7236 1.83875 18.3333 1.83875ZM13 19.5054C9.69133 19.5054 7 16.8141 7 13.5054C7 10.1967 9.69133 7.50542 13 7.50542C16.3087 7.50542 19 10.1967 19 13.5054C19 16.8141 16.3087 19.5054 13 19.5054ZM19.1667 8.33875C18.0621 8.33875 17.1667 7.44332 17.1667 6.33875C17.1667 5.23418 18.0621 4.33875 19.1667 4.33875C20.2712 4.33875 21.1667 5.23418 21.1667 6.33875C21.1667 7.44332 20.2712 8.33875 19.1667 8.33875Z" />
                      <path d="M13 10.8387C11.6193 10.8387 10.5 11.958 10.5 13.3387C10.5 14.7195 11.6193 15.8387 13 15.8387C14.3807 15.8387 15.5 14.7195 15.5 13.3387C15.5 11.958 14.3807 10.8387 13 10.8387Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_instagram">
                        <rect
                          width="26"
                          height="26"
                          fill="white"
                          transform="translate(0 0.838745)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" className="group">
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="#fff"
                    className="group-hover:fill-ElectricAqua"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7_995)">
                      <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745V0.838745ZM18.9357 10.9748C18.9414 11.1027 18.9442 11.2312 18.9442 11.3604C18.9442 15.3033 15.9429 19.85 10.4544 19.8502H10.4546H10.4544C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.46469 12.2118 6.46469 12.1997 6.46509 12.1872C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_995">
                        <rect
                          width="26"
                          height="26"
                          fill="white"
                          transform="translate(0 0.838745)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" className="group">
                  <svg
                    width="26"
                    height="28"
                    viewBox="0 0 26 28"
                    fill="#fff"
                    className="group-hover:fill-ElectricAqua"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7_997)">
                      <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_997">
                        <rect width="26" height="27.6774" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
            </ul> */}
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
