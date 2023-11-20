<template>
   <div class="home-section">
      <section>
         <div class="container up-section">
            <div class="heading">
               <h1>Наши клиенты</h1>
            </div>
            <div>
               <SliderSection/>
            </div>
         </div>
      </section>
      <section class="top-of-all">
         <div class="decorative-white"/>
         <div class="container">
            <div class="project-section">
               <div class="info-section section-half">
                  <h2>Обсудить проект</h2>
                  <h5>Расскажите о проекте в форме справа или свяжитесь с нами напрямую </h5>

                  <div class="mail-section">
                     <div>
                        <h4>hello@riverstart.ru</h4>
                        <p>hello@riverstart.ru</p>
                     </div>
                     <div>
                        <div class="tg-section">
                           <img src="../../assets/img/DSC06437%201.jpg" alt="">
                           <h4>@ekhohrin</h4>
                        </div>
                        <p>Написать нашему аккаунт- директору в Telegram</p>
                     </div>
                  </div>
               </div>

               <div class="contact-section section-half">
                  <div class="address-section">
                     <div>
                        <h5>Московский офис</h5>
                        <p>Новая пл., 6</p>
                        <p>8 (499) 112-46-21</p>
                     </div>
                     <div>
                        <h5>Нижегородский офис</h5>
                        <p>ул. Рождественская, 26</p>
                        <p>8 (831) 2-889-354</p>
                     </div>
                  </div>
                  <div class="phone-office-section">
                     <div>
                        <h5>Таллинский офис</h5>
                        <p>3 korrus, Metro Plaza, Viru väljak 2</p>
                        <p>+372 610-42-53</p>
                     </div>

                     <div class="">
                        <div class="phone-office-section-llc">
                           <div>
                              <p>Oceanstart LLC <br> Worldwide outsourcing and outstaffing</p>
                           </div>
                           <div class="phone-office-section-llc-img">
                              <img src="../../assets/img/Group12.svg" alt="">
                           </div>
                        </div>
                        <div class="phone-office-section-link">
                           <a target="_blank" href="https://riverstart.ru/">oceanstart.dev
                              <img src="/icon/Group122.svg" alt="">
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="interested-section section-half">
                  <h4>Что вас интересует?</h4>
                  <div class="btn-section">
                     <CustomButton
                         buttonText="Сайт"
                         :type="selectedType === 'site' ? 'primary' : 'secondary'"
                         @click="selectedType = 'site'"
                     />
                     <CustomButton
                         buttonText="Веб-сервис"
                         :type="selectedType === 'webService' ? 'primary' : 'secondary'"
                         @click="selectedType = 'webService'"
                     />
                     <CustomButton
                         buttonText="Маркетинг"
                         :type="selectedType === 'marketing' ? 'primary' : 'secondary'"
                         @click="selectedType = 'marketing'"
                     />
                     <CustomButton
                         buttonText="Приложение"
                         :type="selectedType === 'application' ? 'primary' : 'secondary'"
                         @click="selectedType = 'application'"
                     />
                     <CustomButton
                         buttonText="Брендинг"
                         :type="selectedType === 'branding' ? 'primary' : 'secondary'"
                         @click="selectedType = 'branding'"
                     />
                     <CustomButton
                         buttonText="Что-то ещё"
                         :type="selectedType === 'something' ? 'primary' : 'secondary'"
                         @click="selectedType = 'something'"
                     />
                  </div>

                  <div class="input-section">
                     <form @submit.prevent="onSubmit">
                        <CustomInput
                            v-model="name"
                            inputLabel="Имя"
                            inputType="text"
                            ref="nameInput"
                        />
                        <div class="flex ">
                           <div class="flex-item">
                              <CustomInput
                                  v-model="phone"
                                  inputLabel="Телефон"
                                  inputType="phone"
                                  ref="phoneInput"
                              />
                           </div>
                           <div class="flex-item">
                              <CustomInput
                                  v-model="email"
                                  inputLabel="Почта"
                                  inputType="email"
                                  ref="emailInput"
                              />
                           </div>
                        </div>
                        <CustomInput
                            v-model="description"
                            inputLabel="Опишите задачу своими словами"
                            inputType="textarea"
                            ref="taskInput"
                        />
                     </form>
                  </div>

                  <div class="budget-section">
                     <h3>Бюджет (₽):</h3>
                     <div class="budget-btn-section">
                        <CustomButton
                            buttonText="до 500к"
                            :type="selectedAmount === '500' ? 'primary' : 'secondary'"
                            class="budget-btn left-radius"
                            @click="selectedAmount = '500'"
                            :aria-current="selectedAmount === '500'"
                        />
                        <CustomButton
                            buttonText="до 1 млн"
                            :type="selectedAmount === 'mln' ? 'primary' : 'secondary'"
                            class="budget-btn none-radius"
                            @click="selectedAmount = 'mln'"
                            :aria-current="selectedAmount === 'mln'"
                        />
                        <CustomButton
                            buttonText=">1 млнйт"
                            :type="selectedAmount === 'moreMln' ? 'primary' : 'secondary'"
                            class="budget-btn right-radius"
                            @click="selectedAmount = 'moreMln'"
                            :aria-current="selectedAmount === 'moreMln'"
                        />
                     </div>
                  </div>

                  <div class="upload-section">
                     <FileUpload ref="fileUpload" @file-uploaded="onFileUploaded"/>
                  </div>

                  <div class="send-btn-section">
                     <CustomButton
                         :isAnimation="true"
                         type="primary"
                         buttonText="Оставить заявку"
                         size="lg"
                         @click="onSubmit"/>
                  </div>

                  <div class="personal-data">
                     <h6>Нажав на кнопку, вы соглашаетесь с политикой </h6>
                     <a target="_blank" href="https://riverstart.ru/">обработки персональных данных</a>
                  </div>

                  <div>
                     <ModalForm ref="modalForm"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div>
         <FooterSection/>
      </div>
   </div>
</template>

<script>
import SliderSection from "@/components/SliderSection.vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomInput from "@/components/CustomInput.vue";
import FileUpload from "@/components/FileUpload.vue";
import FooterSection from '@/components/Footer.vue';
import ModalForm from '@/components/Modal.vue'

export default {
   name: 'HomePage',
   components: {
      SliderSection,
      CustomButton,
      CustomInput,
      FileUpload,
      FooterSection,
      ModalForm,
   },
   data() {
      return {
         selectedType: null,
         selectedAmount: null,
         name: null,
         phone: null,
         email: null,
         description: null,
         file: null,
         isFileUploaded: false,
      }
   },
   methods: {
      onFileUploaded() {
         this.isFileUploaded = true;
      },
      onSubmit() {
         Object.values(this.$refs).forEach((ref) => {
            ref.hasTriedToSubmit = true
         })

         if (
             this.$refs.nameInput.isFormValid() &&
             this.$refs.phoneInput.isFormValid() &&
             this.$refs.emailInput.isFormValid() &&
             this.$refs.taskInput.isFormValid() &&
             this.isFileUploaded
         ) {
            console.log('Все поля заполнены правильно, файл добавлен');
            Object.values(this.$refs).forEach((ref) => {
               ref.inputValue = ''
               ref.hasTriedToSubmit = false
            })
            this.$refs.fileUpload.removeFile()
            this.$refs.modalForm.isSuccessful = true;
         } else {
            console.log('Неверные поля ввода или файл не добавлен');
            this.$refs.modalForm.isSuccessful = false;
         }

         this.$refs.modalForm.isVisible = true;
      },
   }
}
</script>

<style scoped>
.d-block {
   display: block;
}
.d-none {
   display: none;
}

.home-section {
   background: #1F2032;
   padding: 80px 0 0 0;
}

.heading {
   padding: 0 60px;
}

.heading h1 {
   color: #F7F7FA;
   font-size: 85px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: -2.55px;
   margin-bottom: 60px;
}

.section-half:nth-child(3) {
   grid-column: 2;
   grid-row: 1 / 3;
}

.project-section {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: repeat(2, 1fr);
   gap: 10px;
}

.project-section h2 {
   color: #F7F7FA;
   font-size: 85px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: -2.55px;
   margin-bottom: 50px;
   padding-top: 80px;
}

.project-section h5 {
   color: #F7F7FA;
   font-size: 26px;
   font-weight: 400;
   line-height: 160%;
}

section {
   position: relative;
}

.top-of-all {
   z-index: 1;
}

.decorative-white {
   position: absolute;
   right: 0;
   top: 0;
   height: 100%;
   width: 50%;
   z-index: -1;
   background: #EEEFF4;
}

.mail-section {
   display: flex;
   flex-direction: column;
   row-gap: 70px;
   margin-top: 170px;
}

.info-section {
   padding: 10px 30px 0 10px;
}

.info-section h4 {
   color: #F7F7FA;
   font-size: 42px;
   font-weight: 400;
   line-height: 110%;
   letter-spacing: -1.26px;
}

.info-section p {
   color: #F7F7FA;
   font-size: 18px;
   font-weight: 400;
   line-height: 160%;
   opacity: 0.6;
   margin-top: 14px;
}

.tg-section {
   display: flex;
   column-gap: 10px;
}

.tg-section img {
   border-radius: 50px;
}

.contact-section {
   margin-top: 195px;
}

.contact-section h5 {
   color: #F7F7FA;
   font-size: 18px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: 0.18px;
}

.contact-section p {
   color: #F7F7FA;
   font-size: 18px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: 0.18px;
   opacity: 0.5;
   margin-top: 15px;
}

.address-section {
   display: flex;
   column-gap: 10px;
}

.phone-office-section {
   display: flex;
   flex-direction: column;
   row-gap: 75px;
   margin-top: 65px;
   padding: 35px;
   width: 100%;
   max-width: 610px;
   border-radius: 24px;
   background-color: rgba(247, 247, 250, 0.1);
}

.phone-office-section h5 {
   color: #F7F7FA;
   font-size: 18px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: 0.18px;
}

.phone-office-section p {
   color: #F7F7FA;
   font-size: 18px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: 0.18px;
   opacity: 0.5;
}

.phone-office-section-llc {
   display: flex;
   justify-content: space-between;
}

.phone-office-section a {
   color: #F7F7FA;
   font-size: 23px;
   font-weight: 400;
   line-height: 120%;
   letter-spacing: 0.23px;
}

.interested-section {
   position: relative;
   padding: 90px 0 80px 90px;
   background: #EEEFF4;
}

.interested-section h4 {
   color: #9A9AAD;
   font-size: 22px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: 0.22px;
}

.btn-section {
   margin-top: 24px;
   width: 100%;
   max-width: 830px;
}

.btn-section button {
   margin: 0 10px 10px 10px;
}

.input-section {
   margin-top: 95px;
   width: 100%;
   max-width: 645px;
}

.flex {
   margin-top: 80px;
   margin-bottom: 180px;
   column-gap: 25px;
}

.budget-section {
   margin-top: 60px;
}

.budget-section h3 {
   color: #9A9AAD;
   font-size: 20px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: 0.2px;
}

.budget-btn-section {
   margin-top: 25px;
}

.budget-btn {
   padding: 17px 70px;
}

.left-radius {
   border-radius: 16px 0 0 16px;
}

.none-radius {
   border-radius: 0;
}

.right-radius {
   border-radius: 0 16px 16px 0;
}

.upload-section {
   margin: 60px 0;
}

.personal-data {
   margin-top: 60px;
}

.personal-data h6 {
   color: rgba(21, 20, 26, 0.40);
   font-size: 16px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: 0.16px;
}

.personal-data a {
   color: #312DFF;
   font-size: 16px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: 0.16px;
}

@media screen and (max-width: 1600px) {
   .interested-section {
      padding: 130px 10px 80px 20px;
   }
}

@media screen and (max-width: 1280px) {
   .home-section {
      padding: 50px 0;
   }

   .heading {
      padding: 0 30px;
   }

   .heading h1 {
      font-size: 56px;
   }

   .project-section h2 {
      font-size: 56px;
      margin-bottom: 35px;
   }

   .project-section h5 {
      font-size: 18px;
   }

   .contact-section p {
      font-size: 12px;
      margin-top: 10px;
   }

   .address-section {
      column-gap: 80px;
   }

   .phone-office-section a {
      font-size: 15px;
   }

   .phone-office-section a img {
      width: 10px;
   }

   .phone-office-section-llc img {
      width: 60px;
   }

   .info-section h4 {
      font-size: 28px;
   }

   .info-section p {
      font-size: 14px;
   }

   .tg-section img {
      width: 40px;
   }

   .flex {
      margin-top: 40px;
      margin-bottom: 180px;
      column-gap: 17px;
   }

   .input-section {
      margin-top: 65px;
   }

   .mail-section {
      row-gap: 45px;
      margin-top: 115px;
   }

   .contact-section {
      margin-top: 130px;
   }

   .phone-office-section {
      display: flex;
      row-gap: 50px;
      margin-top: 45px;
      padding: 25px;
   }

   .budget-section h3 {
      font-size: 15px;
   }

   .interested-section {
      padding: 80px 10px 65px 60px;
   }

   .interested-section h4 {
      font-size: 15px;
   }

   .budget-btn-section {
      margin-top: 15px;
   }

   .budget-btn {
      padding: 11px 45px;
   }

   .upload-section {
      margin: 35px 0;
   }

   .personal-data h6 {
      font-size: 12px;
   }

   .personal-data a {
      font-size: 12px;
   }

   .personal-data {
      margin-top: 40px;
   }
}

@media screen and (max-width: 991px) {
   .interested-section {
      padding: 80px 10px 65px 20px
   }
}

@media screen and (max-width: 768px) {
   .decorative-white {
      display: none;
   }

   .heading h1 {
      font-size: 42px;
   }

   .section-half:nth-child(2) {
      grid-row: 3;
   }

   .section-half:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
   }

   .project-section {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      grid-template-rows: none;
      width: 100%;
      padding: 50px 40px 30px 40px;
   }

   .interested-section {
      width: 100%;
      padding: 50px 40px 60px 40px;
      overflow: hidden;
   }

   .btn-section button {
      margin: 0 4px 10px 4px;
   }

   .btn-section {
      display: flex;
      overflow: auto;
   }

   .mail-section {
      display: flex;
      flex-direction: row;
      column-gap: 70px;
      margin: 60px 0 30px;
   }

   .info-section h4 {
      font-size: 24px;
   }

   .info-section h5 {
      font-size: 12px;
   }

   .project-section h2 {
      font-size: 42px;
      margin-bottom: 20px;
   }

   .project-section h5 {
      font-size: 15px;
   }

   .info-section p {
      margin-top: 5px;
   }

   .input-section {
      margin-top: 60px;
   }

   .flex {
      margin-top: 35px;
      margin-bottom: 95px;
      column-gap: 30px;
   }

   .budget-btn-section {
      display: flex;
   }

   .budget-btn {
      padding: 17px 10px;
      width: 100%;
   }

   .contact-section {
      margin-top: 50px;
   }

   .phone-office-section {
      margin-top: 30px;
      max-width: 690px;
   }

   .phone-office-section h5 {
      font-size: 12px;
   }

   .contact-section h5 {
      font-size: 12px;
   }
}

@media screen and (max-width: 577px) {
   .project-section {
      padding: 50px 10px 30px 10px;
   }

   .mail-section {
      column-gap: 20px;
   }

   .tg-section img {
      width: 30px;
   }

   .address-section {
      column-gap: 40px;
   }

   .phone-office-section {
      padding: 22px;
   }

   .interested-section {
      padding: 30px 30px 45px 30px;
   }

   .info-section {
      padding: 10px 10px 0 10px;
   }

}

@media screen and (max-width: 360px) {
   .project-section {
      padding: 40px 10px 40px 30px;
      margin-bottom: 15px;
   }

   .mail-section {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
   }

   .btn-section {
      margin-top: 15px;
   }

   .input-section {
      margin-top: 35px;
   }

   .flex {
      flex-direction: column;
      margin-top: 38px;
      margin-bottom: 80px;
      row-gap: 38px;
   }
   .flex-item {
      width: 100%;
   }
}
</style>