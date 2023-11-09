<template>
   <div class="modal-section">
      <button class="close-button" @click="closeModal">X</button>

      <div v-if="isSuccessful">
         <img src="/icon/Group7.svg" alt="true">
         <h2>Спасибо за заявку</h2>
         <p>Ваша заявка была успешно отправлена.</p>
      </div>

      <div v-else>
         <img src="/icon/imageFile.svg" alt="true">
         <h2>Неудачно</h2>
         <p>Что-то пошло не так при отправке заявки. Попробуйте ещё раз.</p>

         <div class="send-btn-section">
            <CustomButton
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
      };
   },
   methods: {
      retrySubmission() {
         this.isSuccessful = true;
      },
      closeModal() {

      },
   },
};
</script>

<style scoped>

</style>