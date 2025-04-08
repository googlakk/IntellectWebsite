const LocalActs = () => {
    return (
      <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="acts">
        <h3 className="text-2xl font-semibold mt-8 dark:text-white text-MidnightNavyText">
          Основные документы
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Основные документы */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <ul className="space-y-3">
              <li>
                <a
                  href="/documents/charter.pdf"
                  className="text-primary hover:underline flex items-start"
                >
                  <span className="mr-2">📄</span>
                  Устав школы ОФ "ИНТЕЛЛЕКТ ПРО СКУЛ"
                </a>
              </li>
              <li>
                <a
                  href="/documents/license.pdf"
                  className="text-primary hover:underline flex items-start"
                >
                  <span className="mr-2">📄</span>
                  Лицензия на образовательную деятельность
                </a>
              </li>
              <li>
                <a
                  href="/documents/registration.pdf"
                  className="text-primary hover:underline flex items-start"
                >
                  <span className="mr-2">📄</span>
                  Свидетельство о государственной регистрации
                </a>
              </li>
              <li>
                <a
                  href="/documents/student_rules.pdf"
                  className="text-primary hover:underline flex items-start"
                >
                  <span className="mr-2">📝</span>
                  Правила поведения учащихся
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default LocalActs