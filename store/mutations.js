export const mutations = {
  setLang(state, data) {
    state.lang = data
  },
  toggle(state) {
    state.isToggle = !state.isToggle
    console.log(`toggle: ${state.isToggle}`)
  },
  closeDropdown(state) {
    state.isToggle = false
    console.log(`toggle: ${state.isToggle}`)
  }
}
