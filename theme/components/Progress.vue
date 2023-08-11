<template>
    <div class="progress">
        <svg width="325" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle  stroke="#eee8" />
            <circle  class="circle" stroke="#a883" stroke-linecap="round" :stroke-dasharray="`${251.3274 * progress}vmin, 200vw`" />
        </svg>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import windowEvent from '../utils/windowEvent';

    const progress = ref(0.5);
    const width = 40;

    function setProgress() {
        const { scrollTop, scrollHeight, offsetHeight } = window.document.documentElement;
        progress.value = scrollTop / (scrollHeight - offsetHeight);
    }

    onMounted(() => {
        setProgress();
        windowEvent.add('scroll', setProgress);
    });

	onBeforeUnmount(() => {
		windowEvent.remove('scroll', setProgress);
	})
</script>

<style scoped>
    .progress {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100vh;
        pointer-events: none;
		z-index: -1;
    }
    .progress svg {
        width: 100%;
        height: 100%;
    }
    .progress svg circle {
        cx: 50%;
        cy: 50%;
		r:40vmin;
        fill: transparent;
        stroke-width: 4;
    }
</style>
