import React from "react";

const Biography: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto py-10 px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Shayx Muhammad Sodiq Muhammad Yusuf Hayotlari
      </h1>
      <p className="text-center italic text-gray-700">
        Bismillahir Rahmanir Rahim.
      </p>
      <p className="text-center text-gray-600 mb-6">
        Alloh taolaga bitmas-tuganmas hamdu sanolar bo‘lsin. Payg‘ambarimizga
        mukammal va batamom salovat va salomlar bo‘lsin.
      </p>

      {/* First Image */}
      <img
        src="/news5.png"
        alt="Shayx Muhammad Sodiq Muhammad Yusuf"
        className="w-full rounded-lg mb-6"
      />

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Boshqa dunyo, Alloh azza va jallaning kofirlarga va Ummati Muhammadga
        atagan ne’matlarining guvohiga aylanar ekanmiz, ulardan ibratlanamiz,
        imonimizni toza saqlashga harakat qilamiz. Ulamolar to‘g‘ri
        yo‘ldan yurishimizga yo‘l ko‘rsatib kelganlar. Darhaqiqat,
        Rasulullohning sunnat yo‘lidan yurish mukofatlidir. Boshqalarning esa
        bid’atchilikka yo‘l qo‘ymasligi lozim.
      </p>

      {/* Quranic Verse */}
      <div className="text-center text-2xl text-gray-900 arabic-font leading-loose mb-6">
        <p>
          فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ﴿٥﴾ إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
        </p>
        <p className="text-lg text-gray-600">
          "Bas, albatta qiyinchilik bilan birga yengillik bordir. Albatta,
          qiyinchilik bilan birga yengillik bordir."
        </p>
      </div>

      {/* Second Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Boshqa dunyo, Alloh azza va jallaning kofirlarga va Ummati Muhammadga
        atagan ne’matlarining guvohiga aylanar ekanmiz, ulardan ibratlanamiz,
        imonimizni toza saqlashga harakat qilamiz. Ulamolar to‘g‘ri
        yo‘ldan yurishimizga yo‘l ko‘rsatib kelganlar. Darhaqiqat,
        Rasulullohning sunnat yo‘lidan yurish mukofatlidir.
      </p>

      {/* Second Image */}
      <img
        src="/shayx5.png"
        alt="Shayx Muhammad Sodiq Muhammad Yusuf"
        className="w-full rounded-lg"
      />
    </section>
  );
};

export default Biography;
