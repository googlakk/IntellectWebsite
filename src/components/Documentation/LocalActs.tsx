import { useTranslations } from 'next-intl'

const LocalActs = () => {
  const t = useTranslations('Documentation')
  const documents = [
    {
      title: t('documents.license'),
      type: 'pdf',
      icon: '📄',
      url: 'https://drive.google.com/file/d/1qLYtyLwleA2uca2hBkY9UTExWbcqgf70/view?usp=sharing',
    },
    {
      title: t('documents.registration'),
      type: 'pdf',
      icon: '📄',
      url: 'https://drive.google.com/file/d/1JxA43dpbOTT_3AEPMOR2NBydfHQLJlXC/view?usp=sharing',
    },
    {
      title: t('documents.parentRules'),
      type: 'pdf',
      icon: '📝',
      url: 'https://drive.google.com/file/d/1H6a5bCdDJdsQ-9Sb5_wCpD2yTzQpe071/view?usp=sharing',
    },
    {
      title: t('documents.studentRules'),
      type: 'pdf',
      icon: '📚',
      url: 'https://drive.google.com/file/d/1TdjxkTQ3-KshnBvzNVtvMGzfO5eShbPL/view?usp=sharing',
    },
  ]

  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="acts">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-border dark:border-dark_border hover:shadow-md transition-shadow duration-300 dark:bg-dark_card_bg"
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{doc.icon}</span>
              <div>
                <a
                  href={doc.url}
                  className="text-primary hover:underline font-medium block mb-1"
                >
                  {doc.title}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {doc.type.toUpperCase()} • {Math.floor(Math.random() * 2) + 1}{' '}
                  MB
                </span>
                <div className="mt-3">
                  <a
                    href={doc.url}
                    className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('documents.downloadText')}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocalActs
