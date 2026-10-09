<template>
  <div class="flex flex-col gap-8 px-4 lg:gap-12 lg:px-0">

    <!-- HERO -->
    <div
      class="
        relative
        mx-auto
        w-full
        max-w-296
        overflow-hidden
        rounded-2xl
      "
    >

      <!-- Фон -->
      <div class="absolute inset-0 bg-primary-gradient opacity-15"></div>

      <!-- Контент -->
      <div
        class="
          relative
          flex
          flex-col
          items-center
          justify-center
          gap-8
          p-6
          text-center

          sm:p-8

          lg:flex-row
          lg:gap-32
          lg:p-12
          lg:text-left
          lg:min-h-125
        "
        >

        <!-- Текст -->
        <div class="flex flex-col gap-4">

          <h1
            class="
              font-display
              text-4xl
              font-extrabold

              sm:text-5xl

              lg:text-[64px]
            "
          >
            Знакомься быстро.<br>
            Встречайся сразу.
          </h1>

          <p class="text-sm sm:text-base">
            DaitingGet — это дейтинг без долгих переписок.<br class="hidden sm:block">
            Свайпай, мэтчись и договаривайся о встрече в тот же день.
          </p>

        </div>

        <!-- Картинка -->
        <div class="shrink-0">
          <img
            src="/img/phone.svg"
            alt="DatingGet"
            class="w-56 hidden sm:w-64 lg:w-auto lg:block"
          >
        </div>

      </div>

    </div>


    <!-- Карточки -->
    <div
      class="
        grid
        w-full
        grid-cols-1
        justify-items-center
        gap-6

        sm:grid-cols-2
        sm:gap-6

        lg:flex
        lg:items-center
        lg:justify-center
        lg:gap-16
      "
    >

      <!-- DISCOVER -->
      <div
        class="
          w-full max-w-72
          rounded-lg bg-primary-gradient p-0.5
        "
      >
        <div class="flex flex-col gap-4 rounded-lg bg-background p-4">
          <img
            src="/icons/discover-ico.svg"
            class="max-w-8"
            alt=""
          >

          <h4 class="font-display text-2xl font-semibold">
            Discover
          </h4>

          <p>
            Листай анкеты людей <br>
            рядом с тобой.
          </p>
        </div>
      </div>

      <!-- ARROW -->
      <img
        src="/icons/arrow-r.svg"
        class="hidden w-11.25 lg:block"
        alt=""
      >

      <!-- LIKE -->
      <div
        class="
          w-full max-w-72
          rounded-lg bg-primary-gradient p-0.5
        "
      >
        <div class="flex flex-col gap-4 rounded-lg bg-background p-4">
          <img
            src="/icons/like-ico.svg"
            class="max-w-8"
            alt=""
          >

          <h4 class="font-display text-2xl font-semibold">
            Like
          </h4>

          <p>
            Свайпай вправо, если <br>
            хочешь познакомиться.
          </p>
        </div>
      </div>

      <!-- ARROW -->
      <img
        src="/icons/arrow-r.svg"
        class="hidden w-11.25 lg:block"
        alt=""
      >

      <!-- MATCH -->
      <div
        class="
          w-full max-w-72
          rounded-lg bg-primary-gradient p-0.5

          sm:col-span-2
          lg:col-span-1
        "
      >
        <div class="flex flex-col gap-4 rounded-lg bg-background p-4">
          <img
            src="/icons/match-ico.svg"
            class="max-w-8"
            alt=""
          >

          <h4 class="font-display text-2xl font-semibold">
            Match
          </h4>

          <p>
            Получил взаимный лайк? <br>
            Договорись о встрече.
          </p>
        </div>
      </div>

    </div>


    <!-- READY TO MATCH -->
    <section
      class="
        mx-auto
        w-full
        max-w-296
        rounded-2xl
        bg-primary-gradient
        p-0.5
      "
    >

      <div
        class="
          flex
          flex-col
          items-center
          justify-center
          gap-4
          rounded-2xl
          bg-background
          p-6
          text-center

          sm:p-8
        "
      >

        <h2
          class="
            font-display
            text-2xl
            font-semibold

            sm:text-3xl

            lg:text-4xl
          "
        >
          Готов к знакомствам?
        </h2>

        <p class="text-sm text-muted sm:text-base">
          Регистрируйся за 30 секунд и начни знакомиться прямо сейчас.
        </p>

        <div
          class="
            mt-2
            inline-block
            rounded-[10px]
            bg-primary-gradient
            p-0.5
            hover:animate-jump
            animate-infinite
            animate-duration-[2s]
            animate-delay-200
          "
        >

          <button
            class="
              relative
              overflow-hidden
              rounded-lg
              bg-background
              p-2.5
            "
          >

            <span class="absolute inset-0"></span>

            <NuxtLink
              to="/random"
              class="relative z-10"
            >
              Начать знакомиться
            </NuxtLink>

          </button>

        </div>

      </div>

    </section>

  </div>
</template>