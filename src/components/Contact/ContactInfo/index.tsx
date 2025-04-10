import Link from "next/link";

const ContactsSection = () => {
  const socialLinks = [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "WhatsApp", url: "#", icon: "whatsapp" },
    { name: "YouTube", url: "#", icon: "youtube" },
  ];

  const contacts = [
    {
      title: "Intellect Pro School",
      address: "Улица Джунусалиева, 177/1, Бишкек",
      phone: "+996 555 600 600",
    },
    {
      title: "Intellect Junior",
      address: "Улица Бакаева, 119, Бишкек",
      phone: "+996 555 600 601",
    },
    {
      title: "Intellect College",
      address: "Улица Ибраимова, 103, БЦ VICTORY, Бишкек",
      phone: "+996 555 600 602",
    },
  ];

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case "instagram":
        return (
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        );
      case "facebook":
        return (
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        );
      case "whatsapp":
        return (
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.627 0-12.015 5.389-12.015 12.01 0 2.237.614 4.364 1.727 6.216l-1.157 4.226 4.31-1.128a11.98 11.98 0 005.519 1.355h.006c6.627 0 12.014-5.389 12.014-12.012 0-3.21-1.257-6.226-3.539-8.497" />
        );
      case "youtube":
        return (
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        );
      default:
        return null;
    }
  };

  return (
    <section className="dark:bg-darkmode py-12 md:py-20 mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-white mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Карта */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.6234560129844!2d74.58085428366387!3d42.84026295826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9f358cd8ce9%3A0xab5f1c1a8fad43d8!2sIntellect%20Pro%20School!5e0!3m2!1sru!2skg!4v1743483700285!5m2!1sru!2skg"
              loading="lazy"
            ></iframe>
          </div>

          {/* Контактная информация */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Наши контакты
            </h3>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    {contact.title}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary dark:text-blue-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">
                        {contact.address}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-primary dark:text-blue-400 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <Link
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                      >
                        {contact.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Социальные сети */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Мы в соцсетях
              </h4>
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
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
