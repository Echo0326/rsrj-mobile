<template>
  <div>
    <Header/>
    <div ref="service" class="service">
      <div class="module m1">
        <img class="img" src="./images/service-img1.png" alt="">
        <div class="title">需求沟通</div>
        <p class="p">倾听客户需求，深入了解客户所需要的产品定位以及详细的功能需求。结合用户需求、自身行业经验和参考网站制定出网站建设方案，双方进行项目可行性研究，在这个过程中荣硕软件将协助用户进行整个项目定位和策划；积极投入到整个项目的开发过程中去。</p>
      </div>
      <div class="module m1">
        <img class="img" src="./images/service-img2.png" alt="">
        <div class="title">定制方案</div>
        <p class="p">荣硕软件经过需求调研，进行需求分析，根据每个企业的实际需求，深入了解和分析需求，根据需求梳理文档系统的功能需求文档。</p>
      </div>
      <div class="module m1">
        <img class="img" src="./images/service-img3.png" alt="">
        <div class="title">产品设计</div>
        <p class="p">产品团队和设计团队针对项目进行产品原型设计、UI设计和视觉设计，设计团队对界面进行总体设计，客户确定满意设计方案后，交付研发团队，进入下一阶段。</p>
      </div>
      <div class="module m1">
        <img class="img" src="./images/service-img4.png" alt="">
        <div class="title">技术研发</div>
        <p class="p">根据系统的需求和设计，组织开发人员进行系统的代码编写，开发过程中根据需求对设计进行细节的调整。</p>
      </div>
      <div class="module m1">
        <img class="img" src="./images/service-img5.png" alt="">
        <div class="title">测试反馈</div>
        <p class="p">软件测试工程师在对产品测试达到要求后，编写好系统测试文档。交给用户使用测试，用户使用后一个一个的确认每个功能，根据用户测试反馈，修改调整规范完善。</p>
      </div>
      <div class="module m1">
        <img class="img" src="./images/service-img6.png" alt="">
        <div class="title">交付上线</div>
        <p class="p">在软件测试证明软件达到要求后，对客户进行一对一的培训交付使用，长期售后维护。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../components/header/Header"

  export default {
    name: "Service",
    data(){
      return{
        index:1,
        module1Top:'',
        module2Top:'',
        module3Top:'',
        module4Top:'',
        module5Top:'',
        module6Top:''
      }
    },
    components:{
      Header
    },
    mounted() {
      this.$nextTick(()=>{
          this.getOffsetTop()
          this.onSroll()
      })
    },
    methods:{
      nextStep(num){
        if (num===2){
          $("html,body").animate({scrollTop:$('.module2').offset().top},300);
        }
        if (num===3){
          $("html,body").animate({scrollTop:$('.module3').offset().top},300);
        }
        if (num===4){
          $("html,body").animate({scrollTop:$('.module4').offset().top},300);
        }
        if (num===5){
          $("html,body").animate({scrollTop:$('.module5').offset().top},300);
        }
        if (num===6){
          $("html,body").animate({scrollTop:$('.module6').offset().top},300);
        }
      },
      getOffsetTop(){
        this.module1Top=$('.module1').offset().top
        this.module2Top=$('.module2').offset().top
        this.module3Top=$('.module3').offset().top
        this.module4Top=$('.module4').offset().top
        this.module5Top=$('.module5').offset().top
        this.module6Top=$('.module6').offset().top
      },
      onSroll(){
        $(window).scroll(()=> {
          let wtop=$(window).scrollTop()
          if (wtop>=this.module6Top){
            $('.module6').css({opacity:1})
            $('.module6 .animated').addClass('bounceInUp')
            this.index=6
          }else if (wtop>=this.module5Top){
            $('.module5').css({opacity:1})
            $('.module5 .animated').addClass('bounceInUp')
            this.index=5
          }else if (wtop>=this.module4Top){
            $('.module4').css({opacity:1})
            $('.module4 .animated').addClass('bounceInUp')
            this.index=4
          }else if (wtop>=this.module3Top){
            $('.module3').css({opacity:1})
            $('.module3 .animated').addClass('bounceInUp')
            this.index=3
          }else if (wtop>=this.module2Top){
            $('.module2').css({opacity:1})
            $('.module2 .animated').addClass('bounceInUp')
            this.index=2
          }else if (wtop>=this.module1Top){
            this.index=1
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('./less/service');
</style>
