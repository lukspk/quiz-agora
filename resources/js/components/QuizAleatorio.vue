<template>
<div>
    <aside>
        <div class="content-title">
            <div class="text-center">
                <h3><a href="#">Em que ano você vai se casar?</a></h3>
            </div>
        </div>
        <div>
            <pulse-loader :loading="loading" color="green" size="27px" class="loader-spinner"></pulse-loader>
            <button class="btn btn-default btn-lg loader-spinner" @click="loading = true"><i class="fa fa-gamepad" style="margin-right: 5px"></i>Jogar</button>
            <img src="img/casamento.png" style="width: 100%"  class="img-responsive" v-bind:class="{'loading' : loading}">
        </div>

        <div class="content-footer">
            <img class="user-small-img" src="https://lh3.googleusercontent.com/-uwagl9sPHag/WM7WQa00ynI/AAAAAAAADtA/hio87ZnTpakcchDXNrKc_wlkHEcpH6vMwCJoC/w140-h148-p-rw/profile-pic.jpg">
            <span style="font-size: 16px;color: #fff;">Sumit Kumar</span>
            <span class="pull-right">
				<a href="#" data-toggle="tooltip" data-placement="left" title="Comments"><i class="fa fa-comments" ></i> 30</a>
				<a href="#" data-toggle="tooltip" data-placement="right" title="Loved"><i class="fa fa-heart"></i> 20</a>
				</span>
            <div class="user-ditels">
                <div class="user-img">
                    <img src="https://lh3.googleusercontent.com/-uwagl9sPHag/WM7WQa00ynI/AAAAAAAADtA/hio87ZnTpakcchDXNrKc_wlkHEcpH6vMwCJoC/w140-h148-p-rw/profile-pic.jpg" class="img-responsive">
                </div>
                <span class="user-full-ditels">
                        <h3>Sumit Kumar</h3>
                        <p>Web & Graphics Disigner</p>
                        </span>
                <div class="social-icon">
                    <a href="#"><i class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google Plus"></i></a>
                    <a href="#"><i class="fa fa-youtube" data-toggle="tooltip" data-placement="bottom" title="Youtube"></i></a>
                    <a href="#"><i class="fa fa-github" data-toggle="tooltip" data-placement="bottom" title="Github"></i></a>
                </div>
            </div>
        </div>
    </aside>
</div>
</template>

<script>
    import PulseLoader from "vue-spinner/src/PulseLoader";

    export default {
        components: {
            PulseLoader
        },
        data : function () {
          return {
              loading : false,
          }
        },
        name: "QuizAleatorio",
        watch: {
          loading() {

          }
        },
        methods: {

        }
    }
</script>

<style scoped>
.loading {
    opacity : 0.1;
}
.loader-spinner {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
