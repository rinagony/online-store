import firebase from 'firebase/app'

export default {
  state: {
    info: {} // обхект с данными о пользователе
  },
  mutations: {
    setInfo (state, info) {
      state.info = info // замена значение инфо напрямую
    },
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid') // вызываем метод для получения айди
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() // получение поля инфо
        commit('setInfo', info) // передача данных в мутации
      } catch (e) {
        console.log('error')
      }
    }
  },
  getters: { // для того чтобы полуить стейт
    info: s => s.info // функция принимающая из стейт и возвращающая из поля стейта инфо
  }
}
