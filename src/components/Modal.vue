<template>
   <div class="modal-section" v-show="isVisible">
      <div class="valid-application" v-if="isSuccessful">
         <button class="close-button" @click="closeModal">
            <img src="/icon/close-button.png" alt="">
         </button>
         <img src="/icon/Group7.svg" alt="true">
         <h2>Спасибо за заявку! <br> Мы скоро с вами свяжемся.</h2>
         <p>Благодарим вас за вашу заявку! Наши специалисты уже работают над ней, и мы обязательно свяжемся с вами в ближайшее время.</p>
      </div>
      <div class="invalid-application" v-else>
         <button class="close-button" @click="closeModal">
            <img src="/icon/close-button.png" alt="">
         </button>
         <img src="/icon/modalFalse.svg" alt="true">
         <h2>Произошла ошибка <br> при отправке</h2>
         <p>К сожалению, произошла ошибка при отправке вашего сообщения. Пожалуйста, проверьте ваше подключение к
            интернету и попробуйте отправить сообщение еще раз</p>

         <div class="send-btn-section">
            <CustomButton
                :isAnimation="true"
                type="primary"
                buttonText="Отправить заново"
                size="lg"
                @click="retrySubmission"
            />
         </div>
      </div>
   </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
   name: 'ModalForm',
   components: {CustomButton},
   data() {
      return {
         isSuccessful: true,
         isVisible: false,
      };
   },
   methods: {
      retrySubmission() {
         this.isVisible = false;
         this.resetModal();
      },
      closeModal() {
         this.isVisible = false;
         this.resetModal();
      },
      resetModal() {
         this.isSuccessful = true;
         this.isVisible = false;
      },
   },
};
</script>

<style scoped>
.modal-section {
   position: absolute;
   top: 0;
   left: 0;
   background: #EEEFF4;
   margin: 20px 0;
   width: 100%;
   height: 90%;
}

.invalid-application, .valid-application {
   position: relative;
   padding: 90px;
   display: flex;
   flex-direction: column;
   row-gap: 56px;
}

.close-button{
   position: absolute;
   top: 60px;
   right: 60px;
   background: transparent;
   outline: none;
   border: none;
}
.close-button img{
   width: 30px !important;
   height: 30px !important;
}

.modal-section img{
   width: 80px;
   height: 80px;
}

.modal-section h2{
   color: #15141A;
   font-size: 61px;
   font-weight: 400;
   line-height: 125%;
   letter-spacing: -0.61px;
   white-space: pre-line;
}
.modal-section p{
   color: #15141A;
   font-size: 26px;
   font-weight: 400;
   line-height: 160%;
}

@media screen and (max-width: 1600px) {
   .modal-section {
      height: 95%;
   }
   .invalid-application, .valid-application {
      padding: 30px;
      row-gap: 56px;
   }
}
@media screen and (max-width: 1280px) {
   .modal-section h2{
      font-size: 40px;
   }
   .modal-section p{
      font-size: 18px;
   }
}
@media screen and (max-width: 577px) {
   .modal-section h2{
      font-size: 30px;
   }
}
</style>