<template>
   <div class="container">

   </div>
  <div class="flex footer-section">
      <div class="flex rights-reserved">
         <div class="flex d-none">
            <img src="/icon/Vector.svg" alt="">
            <h5>2021 © Riverstart Digital. Все права защищены</h5>
         </div>
         <div>
            <a href="">Политика конфиденциальности</a>
         </div>
      </div>
     <div class="social-link">
        <ul class="flex">
           <li>
              <a href=""><img src="/icon/fb.svg" alt=""></a>
           </li>
           <li>
              <a href=""><img src="/icon/vk.svg" alt=""></a>
           </li>
           <li>
              <a href=""><img src="/icon/ig.svg" alt=""></a>
           </li>
           <li>
              <a href=""><img src="/icon/tw.svg" alt=""></a>
           </li>
           <li>
              <a href=""><img src="/icon/be.svg" alt=""></a>
           </li>
        </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',

}
</script>

<style  scoped>
.footer-section{
   background: #1F2032;
   padding: 120px 60px 170px 60px;
   justify-content: space-between;
}
.rights-reserved{
   column-gap: 80px;
}

.rights-reserved img{
   margin-right: 10px;
}
.rights-reserved h5{
   color:  #9A9AAD;
   font-size: 16px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: 0.16px;
}
.rights-reserved a{
   color: #F7F7FA;
   font-size: 16px;
   font-weight: 400;
   line-height: 160%;
   letter-spacing: 0.16px;
}

.social-link ul{
   column-gap: 70px;
}

@media screen and (max-width: 1280px) {
   .footer-section{
      padding: 80px 80px 115px 80px;
   }

   .rights-reserved h5{
      font-size: 12px;
   }
   .rights-reserved a{
      font-size: 12px;
   }

   .social-link ul{
      column-gap: 40px;
   }
}

@media screen and (max-width: 991px) {
   .rights-reserved{
      column-gap: 40px;
      margin-right: 10px;
   }
}

@media screen and (max-width: 768px) {
   .d-none{
      display: none;
   }
   .footer-section{
      align-items: start;
      flex-direction: column-reverse;
      padding: 45px 20px 10px 40px;
   }

   .social-link{
      padding-bottom: 50px;
   }
   .rights-reserved{
      color: #9A9AAD;
      font-size: 12px;
      opacity: 0.5;
   }
}
@media screen and (max-width: 360px) {
   .d-none{
      display: flex;
      justify-content: start;
      align-items: start;
   }
   .rights-reserved{
      flex-direction: column-reverse;
      justify-content: center;
      align-items: start;
      row-gap: 20px;
   }
   .rights-reserved img{
      width: 15px;
   }
}
</style>