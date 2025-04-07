'use client';

import { useEffect, useRef, useState } from 'react';

type FormData = {
  fullName: string;
  childClass: string;
  phone: string;
};

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    childClass: '',
    phone: '+996 '
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Фиксация прокрутки фона
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Обработчик ввода телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const digits = value.replace(/\D/g, '').slice(0, 12); // Получаем только цифры
    
    // Если ввод начинается не с 996, добавляем код страны
    if (!digits.startsWith('996') && digits.length > 0) {
      const formatted = `+996 ${digits.slice(0, 9)}`;
      setFormData(prev => ({ ...prev, phone: formatted }));
      return;
    }
    
    // Форматируем номер с пробелами
    let formatted = '+996 ';
    if (digits.length > 3) formatted += `${digits.slice(3, 6)} `;
    if (digits.length > 6) formatted += `${digits.slice(6, 9)} `;
    if (digits.length > 9) formatted += digits.slice(9, 12);
    
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  // Запрет ввода нецифровых символов
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Разрешаем: backspace, delete, tab, escape, enter, стрелки
    if ([8, 9, 27, 13, 37, 38, 39, 40].includes(e.keyCode)) {
      return;
    }
    // Запрещаем все, кроме цифр
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем, что номер заполнен полностью (9 цифр после +996)
    const phoneDigits = formData.phone.replace(/\D/g, '').slice(3); // Убираем +996
    if (phoneDigits.length !== 9) {
      alert('Пожалуйста, введите полный номер телефона (9 цифр после +996)');
      phoneInputRef.current?.focus();
      return;
    }
    
    setIsSubmitted(true);
    console.log('Form data:', {
      ...formData,
      phone: formData.phone.replace(/\s/g, '') // Удаляем пробелы для сохранения
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ fullName: '', childClass: '', phone: '+996 ' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 text-center flex items-center justify-center p-4 bg-black/30">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Заявка отправлена!</h3>
              <p className="text-gray-600 text-lg">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                Запись в школу
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Заполните форму и мы вам перезвоним!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
                    ФИО родителя <span className=' text-red-600'>* </span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 text-lg text-center border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="childClass" className="block text-lg font-medium text-gray-700 mb-2">
                    Класс ребенка <span className=' text-red-600'>* </span>
                  </label>
                  <input
                    type="text"
                    id="childClass"
                    name="childClass"
                    value={formData.childClass}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 text-lg text-center border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    Телефон <span className=' text-red-600'>* </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    ref={phoneInputRef}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    placeholder="+996 555 123 456"
                    required
                    className="w-full px-5 py-3 text-lg border text-center border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Формат: +996 XXX XXX XXX</p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl text-lg transition-colors"
                  >
                    Отправить заявку
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;