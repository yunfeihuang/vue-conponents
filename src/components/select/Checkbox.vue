<template functional>
  <label :class="[
    'vx-checkbox',
    {
      'is-checked': $options.methods.isActive(props),
      'is-disabled': $options.methods.isDisabled(props),
      'is-inline': props.inline
    }]">
    <input
     :type="props.type"
     :name="props.name"
     :value="props.value"
     :checked="$options.methods.isActive(props)"
     @change="$options.methods.handleChange($event, props.value, props.exclusive)"/>
    <i :class="['vx-checkbox--icon', props.iconStyle ? `is-${props.iconStyle}` : '']" ></i>
    <span class="vx-checkbox--text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  componentName: 'Checkbox',
  props: {
    ...input.props,
    direction: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    iconStyle: {
      type: String
    },
    onValue: {
      type: String
    },
    offValue: {
      type: String
    },
    inline: {
      type: Boolean
    },
    parentValue: {
      type: [Array, String, Number]
    },
    max: {
      type: Number
    },
    exclusive: {
      type: Boolean
    }
  },
  methods: {
    handleChange (e, value, exclusive) {
      window.$$$$picker.$refs.checkboxGroup.handleChange(e, value, exclusive)
    },
    isDisabled (props) {
      if (props.parentValue instanceof Array && props.max > 1 && props.parentValue.length >= props.max) {
        return props.parentValue.indexOf(props.value) === -1
      }
      return props.disabled
    },
    isActive (props) {
      // console.log(props)
      if (props.parentValue instanceof Array) {
        return props.parentValue.indexOf(props.value) > -1
      }
      return props.parentValue === props.value
    }
  }
}
</script>
