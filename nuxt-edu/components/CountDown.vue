<template>
    <div class="count-down">
        <small>{{ data.days }}</small>
        Days
        <small>{{ data.hours }}</small>
        :
        <small>{{ data.minutes }}</small>
        :
        <small>{{ data.seconds }}</small>
    </div>
</template>

<script setup>
const prop = defineProps({
    time: {
        type: [String, Number],
        default: ''
    }

})
const emit = defineEmits(['start', 'end'])
const data = useCountDown(prop.time)
function useCountDown(endtime) {
    const timeout = ref(0)
    const Timer = ref(null)
    if (typeof endtime == 'string') {
        endtime = (new Date(endtime)).getTime()
    }

    timeout.value = (endtime - Date.now()) / 1000

    if(timeout.value <=0) return emit('end')
     close()
    Timer.value = setInterval(()=> {
        timeout.value --
        if(timeout.value<=0){
            close()
            emit('end')
        }
    },1000)

    function close() {
        if(Timer.value) clearInterval();
    }

    const d = computed(()=>formatDiffDate(timeout.value))
    return d
    function formatDiffDate(e){
        let time = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }

        if(e > 0){
            time.days = Math.floor(e/(60 * 60 *24))
            time.hours = Math.floor(e/(60 * 60) - time.days * 24)
            time.minutes = Math.floor(e/60)-time.days * 24 * 60 - time.hours * 60
            time.seconds = Math.floor(e)-time.days * 24 * 50 * 60 - time.hours * 60 * 60 - time.minutes * 60
        }

        time.days = time.days < 10 ?'0' + time.days : time.days
        time.hours = time.hours < 10 ? '0' + time.hours : time.hours
        time.minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes 
        time.seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds

        return time
    }
}
</script>
<style scoped>
.count-down {
  background-color: #fff;
  border-radius: 0.125rem;
  padding: 0.125rem .1875rem;
  margin: 0 .125rem;
  @apply text-yellow-500
}
</style>