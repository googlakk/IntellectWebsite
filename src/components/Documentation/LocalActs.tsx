const LocalActs = () => {
    return (
        <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="acts">
        <h3 className="text-2xl font-semibold mt-8 dark:text-white text-MidnightNavyText">
          Локальные нормативные акты
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Основные документы */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Основные документы
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/charter.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Устав школы ОФ "ИНТЕЛЛЕКТ ПРО СКУЛ"
                </a>
              </li>
              <li>
                <a href="/documents/license.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Лицензия на образовательную деятельность
                </a>
              </li>
              <li>
                <a href="/documents/registration.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Свидетельство о государственной регистрации
                </a>
              </li>
              <li>
                <a href="/documents/curriculum.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Учебный план по "Кут Билим"
                </a>
              </li>
            </ul>
          </div>
      
          {/* Организационные положения */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Организационные положения
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/ped_council.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о Педагогическом совете
                </a>
              </li>
              <li>
                <a href="/documents/method_union.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о школьном методическом объединении
                </a>
              </li>
              <li>
                <a href="/documents/method_theme.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о единой методической теме
                </a>
              </li>
              <li>
                <a href="/documents/method_council.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о методическом совете школы
                </a>
              </li>
              <li>
                <a href="/documents/director_meeting.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о совещании при директоре
                </a>
              </li>
            </ul>
          </div>
      
          {/* Учебный процесс */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Учебный процесс
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/attestation.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о ежемесячной аттестации учащихся
                </a>
              </li>
              <li>
                <a href="/documents/planning.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о составлении календарно-тематического планирования
                </a>
              </li>
              <li>
                <a href="/documents/electronic_journal.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о ведении электронного Журнала
                </a>
              </li>
              <li>
                <a href="/documents/student_files.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о ведении личных дел учащихся
                </a>
              </li>
              <li>
                <a href="/documents/project_activity.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о проектной деятельности учащихся
                </a>
              </li>
            </ul>
          </div>
      
          {/* Воспитательная работа */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Воспитательная работа
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/class_management.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о классном руководстве
                </a>
              </li>
              <li>
                <a href="/documents/parent_committee.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о родительском комитете
                </a>
              </li>
              <li>
                <a href="/documents/parent_meeting.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение об общешкольном родительском собрании
                </a>
              </li>
              <li>
                <a href="/documents/school_parents.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о взаимоотношениях школы и родителей
                </a>
              </li>
              <li>
                <a href="/documents/trust_mail.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📄</span>
                  Положение о почте доверия
                </a>
              </li>
            </ul>
          </div>
      
          {/* Чемпионаты и конкурсы */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Чемпионаты и конкурсы
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/spelling_bee.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🏆</span>
                  Положение о международном чемпионате по английскому языку
                </a>
              </li>
              <li>
                <a href="/documents/mental_arithmetic.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🏆</span>
                  Положение о чемпионате по ментальной арифметике
                </a>
              </li>
              <li>
                <a href="/documents/math_championship.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🏆</span>
                  Положение о чемпионате по математике
                </a>
              </li>
              <li>
                <a href="/documents/chess.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🏆</span>
                  Положение о чемпионате по шахматам
                </a>
              </li>
              <li>
                <a href="/documents/sport_stacking.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🏆</span>
                  WSSA Sport Stacking Rule Book
                </a>
              </li>
            </ul>
          </div>
      
          {/* Безопасность и правила */}
          <div className="p-6 rounded-md border border-border dark:border-dark_border">
            <h6 className="dark:text-white text-MidnightNavyText text-lg font-semibold mb-4">
              Безопасность и правила
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="/documents/safety.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🔒</span>
                  Положение об организации безопасности
                </a>
              </li>
              <li>
                <a href="/documents/fire_safety.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🔥</span>
                  Положение о пожарной безопасности
                </a>
              </li>
              <li>
                <a href="/documents/fire_brigade.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">🚒</span>
                  Положение о Добровольной Пожарной Дружине
                </a>
              </li>
              <li>
                <a href="/documents/duty_teacher.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">👩‍🏫</span>
                  Положение о дежурном учителе
                </a>
              </li>
              <li>
                <a href="/documents/student_rules.pdf" className="text-primary hover:underline flex items-start">
                  <span className="mr-2">📝</span>
                  Правила поведения учащихся
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default LocalActs