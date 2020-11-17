<template>
    <section class="new-comment">
        <div class="container">

            <h2 class="title">Write a Comment</h2>


            <Message v-if="message" :message="message"/>
            <form @submit.prevent="onSubmit" class="contact-form">

                <AppInput v-model="comment.name"> Name </AppInput>
                <AppTextArea v-model="comment.text"> Text </AppTextArea>

                <div class="controls">
                    <AppButton>Submit</AppButton>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

export default {
    data () {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.comment);
            this.comment.name = ''
            this.comment.text = ''
            this.message = 'Submitted'
        }
    }
}
</script>

<style lang="scss">
.btn {
    color: #43b379;
}
.new-comment {
    text-align: center;
    .contact-form {
        min-width: 600px;
        margin: 30px auto;
        label {
            text-align: left;
        }
    }
    .controls {
        margin: 30px 0;
    }
}
</style>