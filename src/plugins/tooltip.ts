export default {
  install: (app) => {
    app.directive('tooltip', {
      beforeMount(el, binding) {
        const tooltipText = document.createElement('span')
        tooltipText.className = 'tooltiptext'
        tooltipText.innerHTML = binding.value.content
        el.classList.add('tooltip')
        el.appendChild(tooltipText)

        const showTooltip = () => {
          tooltipText.style.visibility = 'visible'
        }
        const hideTooltip = () => {
          tooltipText.style.visibility = 'hidden'
        }

        if (binding.value.trigger.includes('hover')) {
          el.addEventListener('mouseenter', showTooltip)
          el.addEventListener('mouseleave', hideTooltip)
        }
        if (binding.value.trigger.includes('click')) {
          el.addEventListener('click', () => {
            if (tooltipText.style.visibility === 'hidden') {
              showTooltip()
            } else {
              hideTooltip()
            }
          })
        }
        if (binding.value.trigger.includes('focus')) {
          el.addEventListener('focus', showTooltip)
          el.addEventListener('blur', hideTooltip)
        }
      }
    })
  }
}
