<script setup lang="ts">
    import UserCard from '~/components/UserCard.vue'
    import { users } from '~/data/users'

    const cities = [
        'Тюмень',
        'Москва',
        'Санкт-Петербург',
        'Екатеринбург',
        'Казань',
        'Новосибирск',
        'Красноярск',
        'Омск',
        'Челябинск',
        'Нижний Новгород',
        'Самара',
        'Уфа',
        'Пермь',
        'Ростов-на-Дону',
        'Воронеж',
    ]

    const genders = [
        'Мужчина',
        'Женщина',
    ]

    const objectMatches = [
        'Отношения',
        'Дружба',
        'Общение',
    ]

    const city = ref('')
    const gender = ref('')
    const objectMatch = ref('')

    // Применённые фильтры
    
    const appliedCity = ref('')
    const appliedGender = ref('')
    const appliedObjectMatch = ref('')

    const filteredUsers = computed(() =>
        users.filter((user) =>
            (!appliedCity.value || user.city === appliedCity.value) &&
            (!appliedGender.value || user.gender === appliedGender.value) &&
            (!appliedObjectMatch.value || user.purpose === appliedObjectMatch.value)
        )
    )

    const applyFilters = () => {
        appliedCity.value = city.value
        appliedGender.value = gender.value
        appliedObjectMatch.value = objectMatch.value
    }

    const resetFilters = () => {
        city.value = ''
        gender.value = ''
        objectMatch.value = ''

        appliedCity.value = ''
        appliedGender.value = ''
        appliedObjectMatch.value = ''
    }

    

</script>

<template>
  <div class="mx-auto flex w-full max-w-220 flex-col gap-6 sm:gap-8">

    <!-- Заголовок -->
    <h2 class="font-display text-2xl font-extrabold sm:text-3xl">
      Поиск
    </h2>

    <!-- Фильтры -->
    <div class="flex flex-col gap-4">

      <UiDropdown
        v-model="city"
        label="Город"
        :options="cities"
        class="w-full"
      />

      <UiDropdown
        v-model="gender"
        label="Пол"
        :options="genders"
        class="w-full"
      />

      <UiDropdown
        v-model="objectMatch"
        label="Цель знакомства"
        :options="objectMatches"
        class="w-full"
      />

      <!-- Кнопки -->
      <div class="flex flex-col gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          class="
            min-h-12 w-full rounded-xl
            border border-border px-5 py-3
            font-display font-semibold
            transition-colors hover:bg-surface
            sm:w-auto
          "
          @click="resetFilters"
        >
          Очистить
        </button>

        <button
          type="button"
          class="
            min-h-12 w-full rounded-xl
            bg-primary-gradient px-7 py-3
            font-display font-semibold text-white
            transition-transform hover:scale-[1.02]
            active:scale-95
            sm:w-auto
          "
          @click="applyFilters"
        >
          Поиск
        </button>

      </div>
    </div>

    <!-- Карточки мэтчей -->
    <div
    v-if="filteredUsers.length > 0"
    class="
        mx-auto
        grid
        w-full
        grid-cols-1
        justify-items-center
        gap-4
        min-[480px]:grid-cols-[repeat(2,minmax(0,320px))]
        min-[1200px]:grid-cols-[repeat(3,minmax(0,320px))]
        justify-center
    "
    >
    <UserCard
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
        class="w-full"
    />
    </div>

    <!-- Пустой результат -->
    <div
      v-else
      class="
        flex flex-col items-center justify-center
        gap-3 rounded-2xl bg-surface
        px-5 py-12 text-center
      "
    >
      <p class="font-display text-lg font-bold">
        Анкеты не найдены
      </p>

      <p class="max-w-sm text-sm leading-6 text-muted">
        Попробуй изменить параметры поиска или сбросить фильтры.
      </p>

      <button
        type="button"
        class="
          mt-2 rounded-xl bg-primary-gradient
          px-6 py-3 font-semibold text-white
          transition-transform hover:scale-[1.02]
          active:scale-95
        "
        @click="resetFilters"
      >
        Сбросить фильтры
      </button>
    </div>

  </div>
</template>