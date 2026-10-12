<<template>
    <div v-bind:class="msg"> 测试</div>
</template>

<script>

    export default {
        data() {
            return {
                msg: "active"
            }
        }
    }
</script>