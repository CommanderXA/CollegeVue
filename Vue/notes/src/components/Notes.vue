<template>
    <div class="notes">
        <div class="note" :class="[{ full: !grid }, note.priority.toLowerCase().replace(/\s/g,'') ]" v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="[{ full: !grid }, note.priority.toLowerCase().replace(/\s/g,'') ]">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>

            <div class="note-description">
                <p>{{ note.description }}</p>
                <span>{{ note.date }}</span>
                <p>{{ note.isPriorityHigh }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true,
        },
        grid: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        removeNote(index) {
            console.log(`Note ${index} has been removed`);
            this.$emit('remove', index)
        }
    }
}
</script>
<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: white;
    transition: all .25s cubic-bezier(.02, .01,.47,1);
    box-shadow: 0 0px 30px rgba(0,0,0,0.02);
    &:hover {
        box-shadow: 0 0px 30px rgba(0,0,0,0.04);
        transform: translate(0, -3px);
        transition-delay: 0.2s !important;
        transition: ease 0.2s;
    }
    &.full {
        width: 100%;
    }
    &.high {
        box-shadow: 0 0px 30px rgba(240, 189, 23, 0.07);
    }
    &.veryhigh {
        box-shadow: 0 0px 30px rgba(224,64,64, 0.07);
    }
}
.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 22px;
        color: #3f5bb8;
    }
    &.high p{
        color: rgba(240, 189, 23, 1);
    }
    &.veryhigh p {
        color: #e04040;
    }
    svg {
        margin-right: 12px;
        color: #999;
        &.active {
            color: #3f5bb8;
        }
        &:last-child {
            margin-right: 0px;
        }
    }
}
.note-description {
    p {
        margin: 20px 0;
    }
    span {
        font-size: 14px;
        color: #999;
    }
}
</style>