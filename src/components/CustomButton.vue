<template>
   <button
       @mousemove="moveHandler"
       @mouseleave="leaveHandler"
       :style="`transform: translate(${buttonX}px, ${buttonY}px)`"
       v-bind="$attrs"
       :class="[
           `button-${type}`,
           `button-${size}`
       ]"
       :aria-current="ariaCurrent"
   >
      {{ buttonText }}
   </button>
</template>

<script>
export default {
   name: 'CustomButton',
   data() {
      return {
         buttonX: 0,
         buttonY: 0,
      }
   },
   props: {
      buttonText: String,
      type: {
         type: String,
         required: true
      },
      size: {
         type: String,
         default: 'md'
      },
      isAnimation: Boolean,
      ariaCurrent: Boolean,
   },

   methods: {
      moveHandler(event) {
         if (this.isAnimation) {
            const {offsetX, offsetY, srcElement: {clientWidth}} = event
            this.buttonY = offsetY / 6
            if (offsetX < (clientWidth / 2)) this.buttonX = (offsetX - clientWidth) / 6
            else this.buttonX = offsetX / 6
         }
      },
      leaveHandler() {
         if (this.isAnimation) {
            this.buttonX = 0
            this.buttonY = 0
         }
      }
   }
}
</script>

<style scoped>

button {
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
   cursor: pointer;
   border-radius: 16px;
   transition: 0.4s;
   white-space: nowrap;
}

.button-md {
   padding: 18px 47px 14px 47px;
}

.button-lg {
   padding: 32px 60px 32px 60px;
   min-width: 374px;
}

.button-primary {
   color: #FFFFFF;
   background: rgb(49, 45, 255);
   border: 2px solid rgb(49, 45, 255);
}
.button-primary:hover {
   background: rgb(41, 38, 216);
   border: 2px solid rgb(41, 38, 216);
}
.button-primary:active {
   background: rgb(9, 18, 174);
   border: 2px solid rgb(9, 18, 174);
}

.button-secondary {
   color: #1F2032;
   border: 2px solid rgba(31, 32, 50, 0.1);
   background: rgba(238, 239, 244, 0.1);
}

.button-secondary:focus {
   background: rgba(129, 129, 193, 0.1);
}

.button-secondary:hover {
   background: rgba(129, 129, 193, 0.1);
}



@media screen and (max-width: 1280px) {
   button {
      font-size: 14px;
   }

   .button-md {
      padding: 11px 32px 11px 32px;
   }

   .button-lg {
      padding: 24px 81px 24px 81px;
      min-width: 288px;
   }
}

</style>