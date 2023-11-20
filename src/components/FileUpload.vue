<template>
   <div>
      <div class="flex upload-section">
         <div class="file-up-place">
            <button @click="attachFile" class="attachment-button" :disabled="isButtonDisabled">
               <img src="/icon/attach.svg" alt="">
               Прикрепить бриф
            </button>
         </div>
         <div class="brief-place">
            <img src="/icon/imageFile.svg" alt="">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSejs7kzr69Ot45UcPbgq-M3KLjjMfer2iKT2peMVGivLJvPow/viewform">Наш бриф в Google Docs</a>
            <img src="/icon/Vect1.svg" alt="">
         </div>
      </div>
      <div class="flex file-check">
         <div v-if="fileSizeError" class="error-message">
            {{ fileSizeError }}
         </div>
         <div v-if="selectedFile" class="file-info">
            <img src="/icon/doc-icon.svg" alt="">
            {{ fileInfo }}
         </div>
         <div class="remove-btn-place">
            <button
                @click="removeFile"
                class="remove-button"
                v-if="selectedFile">
               <img src="/icon/close-button.svg" alt="">
               Удалить
            </button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'FileUpload',
   emits: ['fileUploaded'],
   data() {
      return {
         fileSizeError: '',
         selectedFile: null,
         isButtonDisabled: false,
      };
   },
   computed: {
      fileInfo() {
         if (this.selectedFile) {
            if (this.selectedFile.size <= 10 * 1024 * 1024) {
               this.$emit('fileUploaded', this.selectedFile)
               return `Бриф на разработку сервиса (PDF, ${this.formatFileSize(this.selectedFile.size)} MB)`;
            } else {
               return this.fileSizeError;
            }
         }
         return '';
      },
   },
   methods: {
      attachFile() {
         if (!this.selectedFile) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf';
            input.style.display = 'none';

            this.$el.appendChild(input);

            input.addEventListener('change', (event) => {
               const file = event.target.files[0];
               if (file) {
                  if (file.size <= 10 * 1024 * 1024) {

                     this.fileSizeError = '';
                     this.selectedFile = file;
                     this.isButtonDisabled = true;
                  } else {
                     this.fileSizeError = 'Файл слишком большой. Максимальный размер: 10MB.';
                  }

                  this.$el.removeChild(input);
               }
            });
            input.click();
         }
      },
      removeFile() {
         this.selectedFile = null;
         this.isButtonDisabled = false;
      },
      formatFileSize(size) {
         return (size / (1024 * 1024)).toFixed(1);
      },
   },
}
</script>

<style scoped>
.upload-section{
   column-gap: 60px;
}

.attachment-button {
   color: #1F2032;
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
   background: transparent;
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
}

.brief-place {
   display: flex;
   align-items: center;
}
.brief-place a{
   color: #1F2032;
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
   margin: 0 10px;
}
.brief-place a{
   color: #1F2032;
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
}

.attachment-button img {
   margin-right: 15px;
}
.remove-button {
   background: transparent;
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
}

.file-check{
   align-items: center;
   column-gap: 16px;
   margin-top: 20px;
}

.remove-btn-place button{
   color: #1F2032;
   font-size: 16px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.16px;
   transition: 0.3s;
}
.remove-btn-place button:hover{
   color: #3734e3;
}
.remove-btn-place button img{
   margin-right: 8px;
}

.file-info{
   display: flex;
   align-items: center;
   color: #312DFF;
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
   background: rgba(49, 45, 255, 0.1);
   padding: 12px 16px;
   border-radius: 12px;
}
.file-info img{
   margin-right: 15px;
}

.error-message {
   color: #E8412A;
   font-size: 20px;
   font-weight: 400;
   line-height: 150%;
   letter-spacing: -0.2px;
   background: rgba(232, 65, 42, 0.1);
   padding: 12px 16px;
   border-radius: 12px;
}

button.attachment-button:disabled {
   opacity: 0.5;
   cursor: not-allowed;
}

@media screen and (max-width: 1280px) {
   .brief-place{
      display: none;
   }

   .attachment-button {
      font-size: 14px;
   }
   .file-info{
      font-size: 12px;
      padding: 10px 12px;
   }
   .remove-btn-place button{
      font-size: 12px;
   }

   .error-message {
      font-size: 14px;
   }
}
</style>