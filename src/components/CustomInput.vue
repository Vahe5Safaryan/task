<template>
   <div class="custom-input" :class="{ 'invalid-input': hasTriedToSubmit && !isFormValid() }">
      <input
          v-if="inputType !== 'textarea'"
          v-bind="$attrs"
          :type="inputType === 'phone' ? 'text' : inputType"
          :placeholder="inputLabel"
          :class="inputType === 'phone' ? 'border-gray' : 'border-gray'"
          v-model="inputValue"
          @input="handleInput"
          :maxlength="inputType === 'phone' ? 18 : null"
      />
      <textarea
          v-else
          v-bind="$attrs"
          :placeholder="inputLabel"
          :class="'border-gray'"
          v-model="inputValue"
          @input="handleInput"
      ></textarea>
   </div>
</template>

<script>
export default {
   name: 'CustomInput',
   props: {
      inputLabel: String,
      inputType: String,
   },
   data() {
      return {
         inputValue: '',
         isLabelHidden: false,
         length: 0,
         isInvalid: false,
         hasTriedToSubmit: false,
      };
   },
   methods: {
      handleInput() {
         if (this.inputValue) {
            this.isLabelHidden = true;
         } else {
            this.isLabelHidden = false;
         }

         if (this.inputType === 'phone') {
            this.formatPhone();
         }

         this.length = this.inputValue.length;
         this.isInvalid = !this.isValid();
      },

      formatPhone() {
         if (this.length <= this.inputValue.length) {
            const x = this.inputValue.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            this.inputValue = '+' + (x[1] ? '7' : '') + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
         }
      },

      isValid() {
         if (this.inputType === 'phone') {
            return this.isValidPhone();
         } else if (this.inputType === 'email') {
            return this.isValidEmail();
         } else {
            return this.inputValue.trim() !== '';
         }
      },

      isFormValid() {
         return !this.isInvalid && this.isValid();
      },

      isValidPhone() {
         return /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(this.inputValue);
      },

      isValidEmail() {
         return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.inputValue);
      },
   },
}
</script>

<style scoped>
.custom-input {
   position: relative;
   margin: 10px 0;
   width: 100%;
   max-width: 100%;
}

.invalid-input input.border-gray, .invalid-input textarea.border-gray {
   border-bottom: 2px solid #E8412A;
}

.invalid-input textarea {
   border-bottom: 2px solid #E8412A;
}

input.border-gray, textarea.border-gray {
   background: transparent;
   border: none;
   border-bottom: 2px solid #E0E0E4;
   border-radius: 4px;
   padding: 10px;
   width: 100%;
   box-sizing: border-box;
   outline: none;
}

textarea {
   height: 60px;
   resize: none;
}

::placeholder {
   pointer-events: none;
   color: #9A9AAD;
   font-size: 20px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: 0.2px;
}

input:focus, textarea:focus  {
   border-bottom: 2px solid #312DFF;
}
input:hover, textarea:hover  {
   border-bottom: 2px solid #9A9AAD;
}

@media screen and (max-width: 1280px) {
   ::placeholder{
      font-size: 15px;
   }
   textarea {
      height: 50px;
   }
}
</style>