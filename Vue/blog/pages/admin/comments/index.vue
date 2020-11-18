<template>
    <CommentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
        <tbody slot="tbody">
            <tr v-for="comment in comments" :key="comment.id">
                <td><span>{{ comment.name }}</span></td>
                <td><span>{{ comment.text }}</span></td>
                <td>
                    <span v-if="comment.status" class="status true"> Published </span>
                    <span v-else class="status false"> Hiden </span>
                </td>
                <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
                <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
            </tr>
        </tbody>
    </CommentTable>
</template>

<script>

import CommentTable from "@/components/Admin/CommentTable.vue"

export default {
    components: {
        CommentTable
    },
    data () {
        return {
            comments: [
                { id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: true },
                { id: 2, name: 'Eliot', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: false }
            ]
        }
    },
    layout: 'admin',
    methods: {
        changeComment (id) {
            console.log(`Change comment id - ${id}`);
        },
        deleteComment (id) {
            console.log(`Delete comment id - ${id}`);
        }
    }
    
}
</script>