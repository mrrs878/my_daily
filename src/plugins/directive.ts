import { DirectiveOptions } from 'vue'

const preload: DirectiveOptions = {
  inserted: function (el, options) {
    const realSrc = el.getAttribute('src') ?? ''
    const preSrc = options.value || require('../assets/img/loading.gif')
    el.setAttribute('src', preSrc)
    const imgNode = new Image()
    imgNode.onload = () => el.setAttribute('src', realSrc)
    imgNode.src = realSrc
  }
}

const lazy: DirectiveOptions = {
  inserted: function (el, options) {
    const realSrc = el.getAttribute('src') ?? ''
    const preSrc = options.value || require('../assets/img/loading.gif')
    el.setAttribute('src', preSrc)
    const imgNode = new Image()
    imgNode.onload = () => el.setAttribute('src', realSrc)
    const observer = new IntersectionObserver(changes => {
      changes.forEach(change => {
        if (change.isIntersecting) {
          imgNode.src = realSrc
          observer.unobserve(change.target)
        }
      })
    })
    observer.observe(el)
  }
}

const touchEffect: DirectiveOptions = {
  bind: function (el, options) {
    el.ontouchstart = () => {
      el.classList.add('m-touch')
      if (options.value && options.value.scale) { el.classList.add('scale') }
    }
    el.ontouchend = () => {
      el.classList.remove('m-touch')
    }
  }
}

const clickProxy: DirectiveOptions = {
  bind (el, options) {
    const payload = typeof options.value.payload === 'object' ? JSON.stringify(options.value.payload) : options.value.payload
    el.setAttribute(`data-${options.value.key}`, payload)
  }
}

const longPress: DirectiveOptions = {
  bind (el, options) {
    el.ontouchstart = () => {
      console.log(1)
    }
    el.ontouchend = () => {
      console.log(2)
    }
  }
}

export { preload, lazy, touchEffect, longPress }
