export const useLikes = () => {
  const likedUsers = ref<number[]>([])

  const likeUser = (id: number) => {
    likedUsers.value.push(id)
    
    localStorage.setItem(
    'likedUsers',
    JSON.stringify(likedUsers.value)
    )
  }

  const loadLikes = () => {
    const savedLikes = localStorage.getItem('likedUsers')
    if (savedLikes) {
        likedUsers.value = JSON.parse(savedLikes)
    }
  }

  return {
    likedUsers,
    likeUser,
    loadLikes
  }
}