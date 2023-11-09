<template>
   <button
       v-bind="$attrs"
       :class="[
           `button-${type}`,
           `button-${size}`
       ]"
   >
      {{ buttonText }}
   </button>
</template>

<script>
export default {
   name: 'CustomButton',
   props: {
      buttonText: String,
      type: {
         type: String,
         required: true
      },
      size: {
         type: String,
         default: 'md'
      }
   },
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
   transition: 0.3s;
   white-space: nowrap;
}

.button-md {
   padding: 18px 47px 14px 47px;
}
.button-lg {
   padding: 32px 110px 32px 110px;
   min-width: 374px;
}

.button-secondary {
   color: #1F2032;
   border: 2px solid rgba(31, 32, 50, 0.1);
   background: rgba(238, 239, 244, 0.1);
}
.button-primary {
   color: #FFFFFF;
   background: rgb(55, 52, 227);
   border: 2px solid rgb(55, 52, 227);
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