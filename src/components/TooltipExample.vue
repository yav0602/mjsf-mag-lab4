<script>
export default {
  name: 'TooltipExample'
}
</script>

<template>
  <div>
    <h2>Tooltip Directive Example</h2>
    <button v-tooltip="{ content: 'Це підказка для кнопки', trigger: 'hover' }">
      Наведіть на мене
    </button>
    <button v-tooltip="{ content: 'Натисніть для підказки', trigger: 'click' }">
      Натисніть на мене
    </button>
  </div>
</template>
