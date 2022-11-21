/* This example requires Tailwind CSS v2.0+ */
// import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

const profitableObj = [
    {
        id:1,
        name: 'Отличный сервис',
        description: 'Мы мотивируем наших сотрудников на эффективное решение задач, ориентируясь на потребности клиента.',
        icon: '',
    },
    {
        id:2,
        name: 'Низкие цены',
        description: 'Отлаженные бизнес-процессы и высокая общая скорость работы позволяют нам держать цены на уровне, доступном каждому.',
        icon: '',
    },
    {
        id:3,
        name: 'Отсутсвие посредников',
        description: 'У нас уже есть устоявшиеся налаженные связи со многими дипломатическими посольствами и консульствами.',
        icon: '',
    },
    {
        id:4,
        name: 'Решение сложных задач',
        description: 'Мы готовы помочь, даже если вам уже отказывали в получении визы или необходимо срочное оформление в сжатые сроки.',
        icon: '',
    },
    {
        id:5,
        name: 'Высокая репутация',
        description: 'Востребованность нашей компании говорит сама за себя – нам доверяют и клиенты, и партнеры.',
        icon: '',
    },
  ]

  export default function Profitable2() {
    return (
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div className="absolute inset-0 bg-[#272765]/80 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">С нами выгодно и надежно</h1>
            {/* <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
              laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
            </p> */}
          </div>
        </div>
  
        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
          {profitableObj.map((link) => (
              <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-[#EE8323] rounded-xl shadow-lg transform -translate-y-1/2">
                    {/* <link.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                </div>
                {/* <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
  